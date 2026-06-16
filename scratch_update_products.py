import re

mapping = {
    'hospital-management': '/src/assets/hospital_hero.png',
    'clinic-management': '/src/assets/hero_bg.png',
    'radiology-management': '/src/assets/radiology_hero.png',
    'dental-management': '/src/assets/dental_hero.png',
    'laboratory-management': '/src/assets/laboratory_hero.png',
    'pharmacy-management': '/src/assets/pharmacy_hero.png',
    'inventory-management': '/src/assets/hero_bg.png',
    'quran-school-management': '/src/assets/quran_school_hero.png'
}

with open('src/router/index.js', 'r', encoding='utf-8') as f:
    router_content = f.read()

for slug, image_path in mapping.items():
    parts = router_content.split(f"path: '/products/{slug}'")
    if len(parts) > 1:
        part_to_modify = parts[1]
        new_part = re.sub(r"previewImage:\s*'[^']+'", f"previewImage: '{image_path}'", part_to_modify, count=1)
        router_content = parts[0] + f"path: '/products/{slug}'" + new_part

with open('src/router/index.js', 'w', encoding='utf-8') as f:
    f.write(router_content)

print("Updated router.js products preview successfully")
