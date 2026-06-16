import re

# We will read router/index.js
with open('src/router/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define keywords for each path
keywords_map = {
    '/': {
        'EN': 'SEHTECH Solutions, Healthcare IT Somalia, Hospital Management System, Clinic Software, EMR Bosaso, EHR System, Medical Software Africa, Offline HIS',
        'AR': 'حلول سيحتك, تقنية الرعاية الصحية في الصومال, نظام إدارة المستشفيات, برنامج العيادات, السجلات الطبية الإلكترونية, برامج طبية, نظام طبي بدون إنترنت',
        'SO': 'SEHTECH Solutions, Tignoolajiyada Caafimaadka Soomaaliya, Nidaamka Maamulka Isbitaalada, Software-ka Kiliinikada, Diiwaanka Caafimaadka, Software Caafimaad'
    },
    '/products/hospital-management': {
        'EN': 'Hospital Management System, Enterprise HIS, IPD Management, ER Software, Hospital Billing System, Best Hospital Software Somalia',
        'AR': 'نظام إدارة المستشفيات, نظام معلومات المستشفى المؤسسي, إدارة الأقسام الداخلية, برنامج الطوارئ, نظام فواتير المستشفى, أفضل برنامج مستشفيات',
        'SO': 'Nidaamka Maamulka Isbitaalka, Maamulka Bukaan-jiifka, Software-ka Gurmadka Degdegga, Nidaamka Biilasha Isbitaalka, Software-ka Ugu Fiican Isbitaalada'
    },
    '/products/clinic-management': {
        'EN': 'Clinic Management System, Outpatient Software, Patient Queue Management, Electronic Prescriptions, Clinic EMR, Healthcare Software for Clinics',
        'AR': 'نظام إدارة العيادات, برنامج العيادات الخارجية, إدارة طوابير المرضى, الوصفات الطبية الإلكترونية, السجلات الطبية للعيادات',
        'SO': 'Nidaamka Maamulka Kilinikada, Software-ka Bukaan-socodka, Maamulka Safafka Bukaanada, Daawooyinka Elektarooniga ah'
    },
    '/products/radiology-management': {
        'EN': 'Radiology Management System, RIS PACS Integration, DICOM Viewer Web, Radiology Reporting Software, Imaging Center Management',
        'AR': 'نظام إدارة الأشعة, تكامل RIS PACS, عارض DICOM, برنامج تقارير الأشعة, إدارة مراكز التصوير الطبي',
        'SO': 'Nidaamka Maamulka Raajada, Isku-xirka RIS PACS, Daawashada DICOM, Software-ka Warbixinta Raajada, Maamulka Xarunta Sawirida'
    },
    '/products/dental-management': {
        'EN': 'Dental Clinic Management System, Dental Charting Software, Odontogram EMR, Dentist Software, Orthodontic Practice Management',
        'AR': 'نظام إدارة عيادات الأسنان, برنامج تخطيط الأسنان, سجلات طب الأسنان الإلكترونية, برنامج أطباء الأسنان',
        'SO': 'Nidaamka Maamulka Kilinikada Ilkaha, Software-ka Qorshaynta Ilkaha, EMR Ilkaha, Software-ka Dhaqtarka Ilkaha'
    },
    '/products/laboratory-management': {
        'EN': 'Laboratory Management System, LIS Software, Automated Lab Results, Pathology Reporting, Sample Tracking System, Lab Software Somalia',
        'AR': 'نظام إدارة المختبرات, برنامج LIS, نتائج المختبر الآلية, تقارير علم الأمراض, نظام تتبع العينات, برنامج مختبرات طبية',
        'SO': 'Nidaamka Maamulka Shaybaarka, Software-ka LIS, Natiijooyinka Shaybaarka Tooska ah, Warbixinta Cudurada, Nidaamka Dabagalka Tijaabada'
    },
    '/products/pharmacy-management': {
        'EN': 'Pharmacy Management System, Medical POS, Drug Expiry Tracking, Pharmacy Inventory Software, Batch Tracking Medication',
        'AR': 'نظام إدارة الصيدليات, نقاط البيع الطبية, تتبع انتهاء صلاحية الأدوية, برنامج مخزون الصيدلية, تتبع دفعات الأدوية',
        'SO': 'Nidaamka Maamulka Farmashiyaha, POS Caafimaad, Dabagalka Dhicitaanka Daawada, Software-ka Kaydka Farmashiyaha'
    },
    '/products/inventory-management': {
        'EN': 'Hospital Inventory Management, Medical Supply Chain, Healthcare Stock Tracking, Procurement System, Multi-store Inventory',
        'AR': 'إدارة مخزون المستشفيات, سلسلة الإمداد الطبي, تتبع المخزون الطبي, نظام المشتريات, جرد متعدد المتاجر',
        'SO': 'Maamulka Kaydka Isbitaalka, Silsilada Saadka Caafimaadka, Dabagalka Kaydka Caafimaadka, Nidaamka Iibka, Kaydka Bakhaarada Badan'
    },
    '/products/quran-school-management': {
        'EN': 'Quran School Management System, Islamic Institute Software, Madarasa Management, Student Attendance Tracking, Fee Collection Software',
        'AR': 'نظام إدارة المدارس القرآنية, برنامج المعاهد الإسلامية, إدارة المدارس, تتبع حضور الطلاب, برنامج تحصيل الرسوم',
        'SO': "Nidaamka Maamulka Dugsiyada Qur'aanka, Software-ka Macaahidda Islaamiga, Maamulka Dugsiga, Dabagalka Imaatinka Ardayga, Ururinta Khidmadaha"
    }
}

# Add general keywords for modules automatically
general_module_keywords = {
    'EN': 'SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
    'AR': 'وحدة سيحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
    'SO': 'Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
}

# Regex to find each route definition
# We match `path: 'something',` up to `description: { ... },`
pattern = re.compile(r"(path:\s*'([^']+)'[\s\S]*?description:\s*\{[\s\S]*?\},)(?!\s*keywords:)")

def replacement(match):
    prefix = match.group(1)
    path = match.group(2)
    
    if path in keywords_map:
        kw = keywords_map[path]
    else:
        # Generate generic keywords based on path slug
        slug = path.split('/')[-1].replace('-', ' ').title()
        kw = {
            'EN': f"{slug} Module, {general_module_keywords['EN']}",
            'AR': f"وحدة {slug}, {general_module_keywords['AR']}",
            'SO': f"Qaybta {slug}, {general_module_keywords['SO']}"
        }
        
    keywords_str = f"""
            keywords: {{ 
                EN: '{kw["EN"]}',
                AR: '{kw["AR"]}',
                SO: '{kw["SO"]}'
            }},"""
            
    return prefix + keywords_str

new_content = pattern.sub(replacement, content)

with open('src/router/index.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Added comprehensive keywords to all routes in router.js!")
