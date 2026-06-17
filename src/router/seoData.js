// SEO Metadata for all website routes (language-sensitive)
export const seoData = {
    '/': {
        title: {
            EN: 'SEHTECH Solutions',
            AR: 'صحة تك للحلول التقنية',
            SO: 'SEHTECH Solutions'
        },
        description: {
            EN: 'SEHTECH Solutions provides enterprise offline-first Hospital Management Systems for healthcare facilities in Africa.',
            AR: 'توفر صحة تك للحلول التقنية أنظمة إدارة مستشفيات تعمل بدون إنترنت للمرافق الصحية في أفريقيا.',
            SO: 'SEHTECH Solutions waxay bixisaa Nidaamyada Maamulka Isbitaalada ee khadka ka baxsan oo loogu talagalay xarumaha caafimaadka ee Afrika.'
        },
        keywords: {
            EN: 'SEHTECH Solutions, Healthcare IT Africa, Hospital Management System, Clinic Software, EMR Bosaso, EHR System, Medical Software Africa, Offline HIS',
            AR: 'صحة تك للحلول التقنية, تقنية الرعاية الصحية في أفريقيا, نظام إدارة المستشفيات, برنامج العيادات, السجلات الطبية الإلكترونية, برامج طبية, نظام طبي بدون إنترنت',
            SO: 'SEHTECH Solutions, Tignoolajiyada Caafimaadka Afrika, Nidaamka Maamulka Isbitaalada, Software-ka Kiliinikada, Diiwaanka Caafimaadka, Software Caafimaad'
        },
        previewImage: '/preview-images/preview-home.png'
    },

    '/products/hospital-management': {
        title: { EN: 'Hospital Management System', AR: 'نظام إدارة المستشفيات', SO: 'Nidaamka Maamulka Isbitaalka' },
        description: {
            EN: 'A comprehensive Hospital Management System tailored for large facilities. Includes IPD, ER, Radiology, and billing.',
            AR: 'نظام إدارة مستشفيات شامل مصمم للمرافق الكبيرة. يشمل الأقسام الداخلية والطوارئ والأشعة والفواتير.',
            SO: 'Nidaam maamul isbitaal oo dhamaystiran oo loogu talagalay xarumaha waaweyn. Waxaa ku jira IPD, ER, Raajada, iyo biilasha.'
        },
        keywords: {
            EN: 'Hospital Management System, Enterprise HIS, IPD Management, ER Software, Hospital Billing System, Best Hospital Software Africa',
            AR: 'نظام إدارة المستشفيات, نظام معلومات المستشفى المؤسسي, إدارة الأقسام الداخلية, برنامج الطوارئ, نظام فواتير المستشفى, أفضل برنامج مستشفيات',
            SO: 'Nidaamka Maamulka Isbitaalka, Maamulka Bukaan-jiifka, Software-ka Gurmadka Degdegga, Nidaamka Biilasha Isbitaalka, Software-ka Ugu Fiican Isbitaalada'
        },
        previewImage: '/preview-images/hospital_hero.png'
    },

    '/products/clinic-management': {
        title: { EN: 'Clinic Management System', AR: 'نظام إدارة العيادات', SO: 'Nidaamka Maamulka Kilinikga' },
        description: {
            EN: 'Streamline your clinic operations with our lightweight Clinic Management System. Manage OPD, patient queues, and prescriptions.',
            AR: 'قم بتبسيط عمليات عيادتك باستخدام نظام إدارة العيادات الخفيف لدينا. إدارة العيادات الخارجية، طوابير المرضى، والوصفات الطبية.',
            SO: 'Hagaaji hawlaha kilinikadaada adigoo isticmaalaya nidaamkayaga fudud. Maamul OPD, safafka bukaanada, iyo daawooyinka.'
        },
        keywords: {
            EN: 'Clinic Management System, Outpatient Software, Patient Queue Management, Electronic Prescriptions, Clinic EMR, Healthcare Software for Clinics',
            AR: 'نظام إدارة العيادات, برنامج العيادات الخارجية, إدارة طوابير المرضى, الوصفات الطبية الإلكترونية, السجلات الطبية للعيادات',
            SO: 'Nidaamka Maamulka Kilinikada, Software-ka Bukaan-socodka, Maamulka Safafka Bukaanada, Daawooyinka Elektarooniga ah'
        },
        previewImage: '/preview-images/hero_bg.png'
    },

    '/products/radiology-management': {
        title: { EN: 'Radiology Management System', AR: 'نظام إدارة الأشعة', SO: 'Nidaamka Maamulka Raajada' },
        description: {
            EN: 'Advanced Radiology Information System (RIS) with PACS integration, DICOM viewing, and structured reporting.',
            AR: 'نظام معلومات الأشعة المتقدم (RIS) مع تكامل PACS وعرض DICOM والتقارير المنظمة.',
            SO: 'Nidaamka macluumaadka raajada ee horumarsan (RIS) oo leh isku-xirka PACS, daawashada DICOM, iyo warbixin habaysan.'
        },
        keywords: {
            EN: 'Radiology Management System, RIS PACS Integration, DICOM Viewer Web, Radiology Reporting Software, Imaging Center Management',
            AR: 'نظام إدارة الأشعة, تكامل RIS PACS, عارض DICOM, برنامج تقارير الأشعة, إدارة مراكز التصوير الطبي',
            SO: 'Nidaamka Maamulka Raajada, Isku-xirka RIS PACS, Daawashada DICOM, Software-ka Warbixinta Raajada, Maamulka Xarunta Sawirida'
        },
        previewImage: '/preview-images/radiology_hero.png'
    },

    '/products/dental-management': {
        title: { EN: 'Dental Clinic Management System', AR: 'نظام إدارة عيادات الأسنان', SO: 'Nidaamka Maamulka Kilinikga Ilkaha' },
        description: {
            EN: 'Dedicated Dental Clinic software with interactive odontogram charting, treatment planning, and imaging.',
            AR: 'برنامج مخصص لعيادات الأسنان مع رسم تفاعلي للأسنان، تخطيط العلاج، والتصوير.',
            SO: 'Software u gaar ah Kilinikada Ilkaha oo leh shaxda ilkaha oo is-dhexgal ah, qorshaynta daaweynta, iyo sawirida.'
        },
        keywords: {
            EN: 'Dental Clinic Management System, Dental Charting Software, Odontogram EMR, Dentist Software, Orthodontic Practice Management',
            AR: 'نظام إدارة عيادات الأسنان, برنامج تخطيط الأسنان, سجلات طب الأسنان الإلكترونية, برنامج أطباء الأسنان',
            SO: 'Nidaamka Maamulka Kilinikada Ilkaha, Software-ka Qorshaynta Ilkaha, EMR Ilkaha, Software-ka Dhaqtarka Ilkaha'
        },
        previewImage: '/preview-images/dental_hero.png'
    },

    '/products/laboratory-management': {
        title: { EN: 'Laboratory Management System', AR: 'نظام إدارة المختبرات', SO: 'Nidaamka Maamulka Shaybaadhka' },
        description: {
            EN: 'Automated LIS for modern laboratories. Instrument integration, sample tracking, and digital result delivery.',
            AR: 'نظام إدارة مختبرات آلي للمختبرات الحديثة. تكامل الأجهزة، تتبع العينات، وتسليم النتائج الرقمية.',
            SO: 'Nidaamka LIS oo toos ah ee shaybaarrada casriga ah. Isku-xirka qalabka, dabagalka tijaabada, iyo bixinta natiijooyinka dhijitaalka ah.'
        },
        keywords: {
            EN: 'Laboratory Management System, LIS Software, Automated Lab Results, Pathology Reporting, Sample Tracking System, Lab Software Africa',
            AR: 'نظام إدارة المختبرات, برنامج LIS, نتائج المختبر الآلية, تقارير علم الأمراض, نظام تتبع العينات, برنامج مختبرات طبية',
            SO: 'Nidaamka Maamulka Shaybaarka, Software-ka LIS, Natiijooyinka Shaybaarka Tooska ah, Warbixinta Cudurada, Nidaamka Dabagalka Tijaabada'
        },
        previewImage: '/preview-images/laboratory_hero.png'
    },

    '/products/pharmacy-management': {
        title: { EN: 'Pharmacy Management System', AR: 'نظام إدارة الصيدليات', SO: 'Nidaamka Maamulka Farmashiyaha' },
        description: {
            EN: 'Complete pharmacy solution with batch tracking, expiry alerts, POS, and automated procurement.',
            AR: 'حل صيدلية متكامل مع تتبع الدفعات، تنبيهات انتهاء الصلاحية، نقاط البيع، والمشتريات الآلية.',
            SO: 'Xal farmashiye oo dhamaystiran oo leh dabagalka dufcada, digniinaha dhicitaanka, POS, iyo iibka tooska ah.'
        },
        keywords: {
            EN: 'Pharmacy Management System, Medical POS, Drug Expiry Tracking, Pharmacy Inventory Software, Batch Tracking Medication',
            AR: 'نظام إدارة الصيدليات, نقاط البيع الطبية, تتبع انتهاء صلاحية الأدوية, برنامج مخزون الصيدلية, تتبع دفعات الأدوية',
            SO: 'Nidaamka Maamulka Farmashiyaha, POS Caafimaad, Dabagalka Dhicitaanka Daawada, Software-ka Kaydka Farmashiyaha'
        },
        previewImage: '/preview-images/pharmacy_hero.png'
    },

    '/products/inventory-management': {
        title: { EN: 'Inventory Management System', AR: 'نظام إدارة المخزون', SO: 'Nidaamka Maamulka Kaydka' },
        description: {
            EN: 'Enterprise stock management. Multi-store tracking, automated reordering, and supply chain analytics.',
            AR: 'إدارة مخزون المؤسسات. تتبع المتاجر المتعددة، إعادة الطلب التلقائي، وتحليلات سلسلة التوريد.',
            SO: 'Maamulka kaydka shirkadaha. Dabagalka bakhaarada badan, dib-u-dalbasho toos ah, iyo falanqaynta silsilada saadka.'
        },
        keywords: {
            EN: 'Hospital Inventory Management, Medical Supply Chain, Healthcare Stock Tracking, Procurement System, Multi-store Inventory',
            AR: 'إدارة مخزون المستشفيات, سلسلة الإمداد الطبي, تتبع المخزون الطبي, نظام المشتريات, جرد متعدد المتاجر',
            SO: 'Maamulka Kaydka Isbitaalka, Silsilada Saadka Caafimaadka, Dabagalka Kaydka Caafimaadka, Nidaamka Iibka, Kaydka Bakhaarada Badan'
        },
        previewImage: '/preview-images/hero_bg.png'
    },

    '/products/quran-school-management': {
        title: { EN: 'Quran School Management System', AR: 'نظام إدارة المدارس القرآنية', SO: "Nidaamka Maamulka Dugsiyadda Qur'aanka" },
        description: {
            EN: 'Digital administration for Quran Schools. Track student progress, attendance, and manage fee collections.',
            AR: 'الإدارة الرقمية لمدارس القرآن الكريم. تتبع تقدم الطلاب والحضور وإدارة تحصيل الرسوم.',
            SO: "Maamulka dhijitaalka ah ee Dugsiyada Qur'aanka. Dabagal horumarka ardayga, imaatinka, iyo maamulida ururinta khidmadaha."
        },
        keywords: {
            EN: 'Quran School Management System, Islamic Institute Software, Madarasa Management, Student Attendance Tracking, Fee Collection Software',
            AR: 'نظام إدارة المدارس القرآنية, برنامج المعاهد الإسلامية, إدارة المدارس, تتبع حضور الطلاب, برنامج تحصيل الرسوم',
            SO: "Nidaamka Maamulka Dugsiyada Qur'aanka, Software-ka Macaahidda Islaamiga, Maamulka Dugsiga, Dabagalka Imaatinka Ardayga, Ururinta Khidmadaha"
        },
        previewImage: '/preview-images/quran_school_hero.png'
    },

    '/modules/patient-administration': {
        title: { EN: 'Patient Administration Module', AR: 'وحدة إدارة المرضى', SO: 'Qaybta Maamulka Bukaanka' },
        description: {
            EN: 'Streamline patient registration, insurance verification, and electronic medical records (EMR) management.',
            AR: 'تبسيط تسجيل المرضى، والتحقق من التأمين، وإدارة السجلات الطبية الإلكترونية (EMR).',
            SO: 'Hagaaji diiwaangelinta bukaanada, xaqiijinta caymiska, iyo maamulka diiwaanka caafimaadka elektarooniga ah (EMR).'
        },
        keywords: {
            EN: 'Patient Administration Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Patient Administration, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Patient Administration, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-patient-admin.png'
    },

    '/modules/opd-consultations': {
        title: { EN: 'OPD & Consultations Module', AR: 'وحدة العيادات الخارجية والاستشارات', SO: 'Qaybta OPD & La-tashiga' },
        description: {
            EN: 'Manage outpatient queues, record vitals, and capture clinical consultation notes digitally.',
            AR: 'إدارة طوابير العيادات الخارجية وتسجيل العلامات الحيوية والتقاط ملاحظات الاستشارة السريرية رقمياً.',
            SO: 'Maamul safafka bukaan-socodka, diiwaan geli xogta muhiimka ah, oo qabso qoraalada la-tashiga kiliinikada si dhijitaal ah.'
        },
        keywords: {
            EN: 'Opd Consultations Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Opd Consultations, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Opd Consultations, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-opd.png'
    },

    '/modules/laboratory-integration': {
        title: { EN: 'Laboratory Integration Module', AR: 'وحدة تكامل المختبر', SO: 'Qaybta Isku-xirka Shaybaarka' },
        description: {
            EN: 'Integrated lab workflow from sample collection to automated analyzer results and verification.',
            AR: 'سير عمل مختبر متكامل من جمع العينات إلى نتائج المحلل الآلي والتحقق منها.',
            SO: 'Hanaanka shaqada shaybaarka ee isku dhafan min ururinta tijaabada ilaa natiijooyinka analyzer tooska ah iyo xaqiijinta.'
        },
        keywords: {
            EN: 'Laboratory Integration Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Laboratory Integration, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Laboratory Integration, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-lab.png'
    },

    '/modules/radiology-imaging': {
        title: { EN: 'Radiology & Imaging Module', AR: 'وحدة الأشعة والتصوير', SO: 'Qaybta Raajada & Sawirida' },
        description: {
            EN: 'Direct integration for X-rays, MRI, and CT scans with embedded DICOM viewing and radiologist reports.',
            AR: 'تكامل مباشر للأشعة السينية، والرنين المغناطيسي، والأشعة المقطعية مع عرض DICOM وتقارير أخصائيي الأشعة.',
            SO: 'Isku-xirka tooska ah ee Raajada, MRI, iyo CT scans oo wata daawashada DICOM iyo warbixinaha dhaqtarka raajada.'
        },
        keywords: {
            EN: 'Radiology Imaging Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Radiology Imaging, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Radiology Imaging, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-radiology.png'
    },

    '/modules/ipd-nursing': {
        title: { EN: 'IPD & Nursing Module', AR: 'وحدة الأقسام الداخلية والتمريض', SO: 'Qaybta IPD & Kalkaalisada' },
        description: {
            EN: 'Inpatient department management, bed allocation, nursing notes, and medication administration records.',
            AR: 'إدارة الأقسام الداخلية وتخصيص الأسرة وملاحظات التمريض وسجلات إعطاء الأدوية.',
            SO: 'Maamulka qaybta jiifka isbitaalka, qoondaynta sariirta, qoraalada kalkaalisada, iyo diiwaanada siinta daawada.'
        },
        keywords: {
            EN: 'Ipd Nursing Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Ipd Nursing, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Ipd Nursing, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-ipd.png'
    },

    '/modules/pharmacy-management': {
        title: { EN: 'Pharmacy Management Module', AR: 'وحدة إدارة الصيدلية', SO: 'Qaybta Maamulka Farmashiyaha' },
        description: {
            EN: 'Hospital pharmacy management: track unit-dose dispensing, drug interactions, and ward stock.',
            AR: 'إدارة صيدلية المستشفى: تتبع صرف جرعة الوحدة والتفاعلات الدوائية ومخزون الجناح.',
            SO: 'Maamulka farmashiyaha isbitaalka: la soco bixinta qiyaasta daawada, falcelinta daawooyinka, iyo kaydka waadhka.'
        },
        keywords: {
            EN: 'Pharmacy Management Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Pharmacy Management, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Pharmacy Management, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-pharmacy.png'
    },

    '/modules/surgery-ot': {
        title: { EN: 'Surgery & OT Module', AR: 'وحدة الجراحة وغرف العمليات', SO: 'Qaybta Qaliinka & OT' },
        description: {
            EN: 'Operating theater scheduling, anesthesia records, surgery notes, and post-op recovery tracking.',
            AR: 'جدولة غرف العمليات، سجلات التخدير، ملاحظات الجراحة، وتتبع التعافي بعد العملية.',
            SO: 'Jadwalka qolka qaliinka, diiwaanka suuxinta, qoraalada qaliinka, iyo dabagalka soo kabashada qaliinka ka dib.'
        },
        keywords: {
            EN: 'Surgery Ot Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Surgery Ot, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Surgery Ot, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-surgery.png'
    },

    '/modules/inventory-stock': {
        title: { EN: 'Inventory & Stock Module', AR: 'وحدة المخزون والمستودعات', SO: 'Qaybta Inventory-ga & Qalabka' },
        description: {
            EN: 'Hospital-wide consumables tracking, automated stockout alerts, and procurement workflows.',
            AR: 'تتبع المستهلكات على مستوى المستشفى، وتنبيهات نفاد المخزون التلقائية، وسير عمل المشتريات.',
            SO: "Dabagalka agabka isbitaalka oo dhan, digniinaha alaab-go'itaanka tooska ah, iyo hanaanka shaqada iibka."
        },
        keywords: {
            EN: 'Inventory Stock Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Inventory Stock, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Inventory Stock, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-inventory.png'
    },

    '/modules/billing-finance': {
        title: { EN: 'Billing & Finance Module', AR: 'وحدة الفواتير والتمويل', SO: 'Qaybta Biillka & Maaliyadda' },
        description: {
            EN: 'Automated invoice generation, POS, insurance claims processing, and revenue cycle management.',
            AR: 'إنشاء فواتير آلي، ونقاط البيع، ومعالجة مطالبات التأمين، وإدارة دورة الإيرادات.',
            SO: 'Abuurista qaansheegta tooska ah, POS, ka baaraandegida sheegashooyinka caymiska, iyo maamulka wareegga dakhliga.'
        },
        keywords: {
            EN: 'Billing Finance Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Billing Finance, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Billing Finance, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-billing.png'
    },

    '/modules/reports-analytics': {
        title: { EN: 'Reports & Analytics Module', AR: 'وحدة التقارير والتحليلات', SO: 'Qaybta Warbixinnada & Analytics' },
        description: {
            EN: 'Actionable healthcare insights. Track clinical KPIs, financial reports, and Ministry of Health data exports.',
            AR: 'رؤى رعاية صحية قابلة للتنفيذ. تتبع مؤشرات الأداء السريرية والتقارير المالية وتصدير بيانات وزارة الصحة.',
            SO: 'Fahan xog caafimaad oo la fulin karo. La soco KPIs bukaan-socod eegtada, warbixinaha maaliyadeed, iyo xogta Wasaaradda Caafimaadka.'
        },
        keywords: {
            EN: 'Reports Analytics Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Reports Analytics, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Reports Analytics, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-reports.png'
    },

    '/modules/emergency-triage': {
        title: { EN: 'Emergency & Triage Module', AR: 'وحدة الطوارئ والفرز', SO: 'Qaybta Degdegga & Kala-saarka' },
        description: {
            EN: 'Rapid triage classification (ESI), critical care flowsheets, and ER bed management.',
            AR: 'التصنيف السريع للفرز (ESI)، ورقات تدفق الرعاية الحرجة، وإدارة أسرة الطوارئ.',
            SO: 'Kala-saarida degdega ah ee bukaanada (ESI), warqadaha socodka daryeelka xasaasiga ah, iyo maamulka sariiraha ER.'
        },
        keywords: {
            EN: 'Emergency Triage Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Emergency Triage, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Emergency Triage, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-er.png'
    },

    '/modules/blood-bank': {
        title: { EN: 'Blood Bank Module', AR: 'وحدة بنك الدم', SO: 'Qaybta Bangiga Dhiigga' },
        description: {
            EN: 'Complete vein-to-vein workflow: donor registration, blood typing, cross-matching, and bag inventory.',
            AR: 'سير عمل كامل من الوريد للوريد: تسجيل المتبرعين وفصيلة الدم واختبارات التوافق ومخزون الأكياس.',
            SO: 'Hanaan shaqo oo dhamaystiran oo xidid-ilaa-xidid ah: diiwaangelinta dhiig-bixiyaha, nooca dhiigga, is-waafajinta dhiigga, iyo kaydka bacaha.'
        },
        keywords: {
            EN: 'Blood Bank Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Blood Bank, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Blood Bank, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-bloodbank.png'
    },

    '/modules/human-resources': {
        title: { EN: 'Human Resources Module', AR: 'وحدة الموارد البشرية', SO: 'Qaybta Maamulka Shaqaalaha' },
        description: {
            EN: 'Manage hospital staff, attendance, duty rosters, payroll processing, and medical credentials.',
            AR: 'إدارة موظفي المستشفى والحضور وجداول المهام ومعالجة الرواتب والشهادات الطبية.',
            SO: 'Maamul shaqaalaha isbitaalka, imaanshaha, liiska shaqada, habaynta mushaharka, iyo shahaadooyinka caafimaadka.'
        },
        keywords: {
            EN: 'Human Resources Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Human Resources, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Human Resources, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-hr.png'
    },

    '/modules/dental-department': {
        title: { EN: 'Dental Department Module', AR: 'وحدة قسم الأسنان', SO: 'Qaybta Qeybta Ilkaha' },
        description: {
            EN: 'Dedicated dental charting module with odontograms, specialized billing, and intraoral imaging.',
            AR: 'وحدة مخصصة لعيادات الأسنان مع رسم الأسنان، والفواتير المتخصصة، والتصوير داخل الفم.',
            SO: 'Qaybta shaxda ilkaha oo u gaar ah oo leh odontograms, biilal khaas ah, iyo sawirida afka gudihiisa.'
        },
        keywords: {
            EN: 'Dental Department Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Dental Department, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Dental Department, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-dental.png'
    },

    '/modules/maternity-obstetrics': {
        title: { EN: 'Maternity & Obstetrics Module', AR: 'وحدة الولادة والتوليد', SO: 'Qaybta Umulista & Dhalmada' },
        description: {
            EN: 'Comprehensive maternal care: ANC tracking, digital partograph, delivery notes, and neonatal records.',
            AR: 'رعاية شاملة للأمومة: تتبع ما قبل الولادة، التخطيط الرقمي للولادة، ملاحظات الولادة، وسجلات حديثي الولادة.',
            SO: 'Daryeelka hooyada oo dhamaystiran: dabagalka ANC, partograph dhijitaal ah, qoraalada dhalmada, iyo diiwaanka ilmaha dhashay.'
        },
        keywords: {
            EN: 'Maternity Obstetrics Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Maternity Obstetrics, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Maternity Obstetrics, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-maternity.png'
    },

    '/modules/mortuary-forensics': {
        title: { EN: 'Mortuary & Forensics Module', AR: 'وحدة المشرحة والطب الشرعي', SO: 'Qaybta Meydka & Baaritaanka' },
        description: {
            EN: 'Dignified body tracking, autopsy documentation, chain of custody, and medico-legal reporting.',
            AR: 'تتبع محترم للجثث، توثيق التشريح، سلسلة الحفظ، والتقارير الطبية الشرعية.',
            SO: 'Dabagal sharaf leh ee meydka, dukumeentiga baaritaanka meydka, silsiladda xafidaanka, iyo warbixinta caafimaadka sharciga ah.'
        },
        keywords: {
            EN: 'Mortuary Forensics Module, SEHTECH Module, Healthcare Software, Medical EMR, Hospital IT System, Digital Health',
            AR: 'وحدة Mortuary Forensics, وحدة صحتك, برامج الرعاية الصحية, السجلات الطبية الإلكترونية, نظام تكنولوجيا المستشفيات, الصحة الرقمية',
            SO: 'Qaybta Mortuary Forensics, Qaybta SEHTECH, Software-ka Caafimaadka, EMR Caafimaad, Nidaamka IT Isbitaalka, Caafimaadka Dhijitaalka ah'
        },
        previewImage: '/preview-images/preview-mod-mortuary.png'
    },

};
