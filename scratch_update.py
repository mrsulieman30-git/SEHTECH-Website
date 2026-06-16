import re

with open('src/i18n/modulesData.js', 'r', encoding='utf-8') as f:
    modules_content = f.read()

with open('src/router/index.js', 'r', encoding='utf-8') as f:
    router_content = f.read()

# Find all modules and their first image
slug_regex = r"'([a-zA-Z0-9-]+)':\s*\{[\s\S]*?views:\s*\[\s*\{\s*image:\s*'([^']+)'"
matches = re.findall(slug_regex, modules_content)

for slug, first_image in matches:
    # We want to replace the previewImage line only for this specific module
    # The module block in router starts with: path: '/modules/SLUG'
    
    # We can split the router content at the path
    parts = router_content.split(f"path: '/modules/{slug}'")
    if len(parts) > 1:
        # In the second part, we find the first occurrence of previewImage: '...' and replace it
        part_to_modify = parts[1]
        # find the next previewImage: '...'
        new_part = re.sub(r"previewImage:\s*'[^']+'", f"previewImage: '{first_image}'", part_to_modify, count=1)
        router_content = parts[0] + f"path: '/modules/{slug}'" + new_part

with open('src/router/index.js', 'w', encoding='utf-8') as f:
    f.write(router_content)

print("Updated router.js successfully")
