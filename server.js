import express from 'express';
import { Readable } from 'stream';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import fs from 'fs';
import { seoData } from './src/router/seoData.js';

dotenv.config();

const app = express();

// ─── Security: Helmet HTTP headers ─────────────────────────────────
app.use(helmet({
    contentSecurityPolicy: false, // Allow inline styles/scripts for SPA
    crossOriginEmbedderPolicy: false
}));

// ─── Security: CORS ────────────────────────────────────────────────
const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173', // Vite preview
    'https://seeha.tech',
    'https://www.seeha.tech',
    'https://sehtech.com',
    'https://www.sehtech.com'
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, curl, etc. during dev)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

// ─── Security: Request size limit ──────────────────────────────────
app.use(express.json({ limit: '10kb' }));

// ─── Security: Rate limiting — 15 requests per minute per IP ──────
const chatLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 15,
    message: { error: 'Too many requests. Please wait a moment before trying again.' },
    standardHeaders: true,
    legacyHeaders: false
});

const PORT = process.env.PORT || 3001;
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

// ─── Chat API endpoint ─────────────────────────────────────────────
app.post('/api/chat', chatLimiter, async (req, res) => {
    const { messages } = req.body;

    // ─── Input validation ──────────────────────────────────────────
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Invalid request: messages array is required.' });
    }

    // Validate message structure
    for (const msg of messages) {
        if (!msg.role || !msg.content || typeof msg.content !== 'string') {
            return res.status(400).json({ error: 'Invalid message format.' });
        }
        if (!['system', 'user', 'assistant'].includes(msg.role)) {
            return res.status(400).json({ error: 'Invalid message role.' });
        }
        // Prevent excessively long messages (system prompts are longer by design)
        const maxLen = msg.role === 'system' ? 10000 : 5000;
        if (msg.content.length > maxLen) {
            return res.status(400).json({ error: 'Message too long.' });
        }
    }

    if (!DEEPSEEK_API_KEY) {
        return res.status(500).json({ error: 'DeepSeek API Key is not configured on the server.' });
    }

    try {
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: messages,
                temperature: 0.3,
                max_tokens: 2048,
                stream: true
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'DeepSeek API Error');
        }

        // Set headers for streaming (Server-Sent Events)
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Pipe the web stream from fetch to the express response
        Readable.fromWeb(response.body).pipe(res);

    } catch (error) {
        console.error('Error calling DeepSeek:', error.message);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Failed to communicate with AI assistant.' });
        } else {
            res.write(`data: {"error": "${error.message}"}\n\n`);
            res.end();
        }
    }
});

// Serve static assets from dist/ folder in production (excluding index.html)
app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));

// ─── Serve dynamic HTML for SPA routes with SEO ──────────────────────
app.get('*all', (req, res, next) => {
    // If the request looks like a file (contains an extension), skip to 404
    if (req.path.includes('.') && !req.path.endsWith('.html')) {
        return next();
    }

    // Normalize path (strip trailing slash except for '/')
    let targetPath = req.path;
    if (targetPath.endsWith('/') && targetPath.length > 1) {
        targetPath = targetPath.slice(0, -1);
    }

    // Look up SEO meta for the path, fallback to '/'
    const meta = seoData[targetPath] || seoData['/'];

    // Get language (default to EN)
    let lang = 'EN';
    if (req.query.lang) {
        const qLang = req.query.lang.toString().toUpperCase();
        if (['EN', 'AR', 'SO'].includes(qLang)) {
            lang = qLang;
        }
    }

    // Resolve localized tags
    const titleVal = (meta.title && typeof meta.title === 'object') ? (meta.title[lang] || meta.title.EN) : (meta.title || 'SEHTECH Solutions');
    const descVal = (meta.description && typeof meta.description === 'object') ? (meta.description[lang] || meta.description.EN) : (meta.description || '');
    const keyVal = (meta.keywords && typeof meta.keywords === 'object') ? (meta.keywords[lang] || meta.keywords.EN) : (meta.keywords || '');
    
    const title = `${titleVal} | SEHTECH Solutions`;
    const imagePath = meta.previewImage || '/preview-images/preview-home.png';
    const host = req.get('host') || 'seeha.tech';
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const origin = `${protocol}://${host}`;
    const image = `${origin}${imagePath}`;
    const url = `${origin}${req.originalUrl}`;

    // Read index.html template from dist/ (production) or project root (development)
    let templatePath = path.join(process.cwd(), 'dist/index.html');
    if (!fs.existsSync(templatePath)) {
        templatePath = path.join(process.cwd(), 'index.html');
    }

    if (!fs.existsSync(templatePath)) {
        return res.status(404).send('Template index.html not found');
    }

    try {
        let html = fs.readFileSync(templatePath, 'utf8');

        // Inject the SEO meta tags into the head of the document
        html = html
            .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(/<meta name="title" content=".*?">/, `<meta name="title" content="${title}">`)
            .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${descVal}">`)
            .replace(/<meta name="keywords" content=".*?">/, `<meta name="keywords" content="${keyVal}">`)
            .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${title}">`)
            .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${descVal}">`)
            .replace(/<meta property="og:image" content=".*?">/, `<meta property="og:image" content="${image}">`)
            .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="${url}">`)
            .replace(/<meta property="twitter:title" content=".*?">/, `<meta property="twitter:title" content="${title}">`)
            .replace(/<meta property="twitter:description" content=".*?">/, `<meta property="twitter:description" content="${descVal}">`)
            .replace(/<meta property="twitter:image" content=".*?">/, `<meta property="twitter:image" content="${image}">`);

        // Inject language attribute to html tag
        html = html.replace(/<html lang="en">/, `<html lang="${lang.toLowerCase()}">`);

        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } catch (err) {
        console.error('Error rendering HTML page:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Fallback 404 for other static assets/requests not caught
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Namareg Proxy and SEO Server running on http://localhost:${PORT}`);
});
