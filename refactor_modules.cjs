const fs = require('fs');
const path = require('path');
const routerPath = 'src/router/index.js';
let content = fs.readFileSync(routerPath, 'utf8');
content = content.replace(/component: \(\) => import\('\.\.\/views\/modules\/[^']+\.vue'\)/g, "component: () => import('../views/ModulePage.vue')");
fs.writeFileSync(routerPath, content);
const modulesDir = 'src/views/modules';
const files = fs.readdirSync(modulesDir);
files.forEach(f => {
  if(f.endsWith('.vue')) fs.unlinkSync(path.join(modulesDir, f));
});
console.log('Router updated and redundant files deleted.');
