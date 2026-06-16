const fs = require('fs');

let modulesContent = fs.readFileSync('src/i18n/modulesData.js', 'utf8');
let routerContent = fs.readFileSync('src/router/index.js', 'utf8');

const slugRegex = /'([a-zA-Z0-9-]+)':\s*\{[\s\S]*?views:\s*\[\s*\{\s*image:\s*'([^']+)'/g;
let match;
while ((match = slugRegex.exec(modulesContent)) !== null) {
    const slug = match[1];
    const firstImage = match[2];
    
    // Replace in router.js
    const searchString = "path: '/modules/" + slug + "'";
    const routerSplit = routerContent.split(searchString);
    if (routerSplit.length > 1) {
        // We only want to replace the FIRST occurrence of previewImage after the path.
        // We can do this by replacing in the second part of the split.
        let metaIndex = routerSplit[1].indexOf('meta: {');
        if (metaIndex !== -1) {
            let endIndex = routerSplit[1].indexOf('}', metaIndex);
            let chunk = routerSplit[1].substring(0, endIndex);
            let replacedChunk = chunk.replace(/previewImage:\s*'[^']+'/, `previewImage: '${firstImage}'`);
            routerContent = routerSplit[0] + searchString + replacedChunk + routerSplit[1].substring(endIndex);
        }
    }
}

fs.writeFileSync('src/router/index.js', routerContent);
console.log('Updated preview images for modules!');
