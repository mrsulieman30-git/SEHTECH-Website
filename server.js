import express from 'express';
import { Readable } from 'stream';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// ─── Security: Helmet HTTP headers ─────────────────────────────────
app.use(helmet({
    contentSecurityPolicy: false, // Allow inline styles/scripts for SPA
    crossOriginEmbedderPolicy: false
}));

// ─── Security: CORS — only allow Vite dev server ───────────────────
const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173', // Vite preview
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

// ─── Catch-all for undefined routes ─────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Namareg Proxy Server running on http://localhost:${PORT}`);
});
