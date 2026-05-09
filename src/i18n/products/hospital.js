import { BuildingOffice2Icon, ClipboardDocumentListIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Hospital Management System',
        productTagline: 'The Complete Digital Operating System for Modern Hospitals',
        productDescription: 'End-to-end hospital automation covering every department — from reception to discharge, lab to pharmacy, billing to boardroom.',
        heroFeatures: ['16+ Integrated Modules', 'Offline-Ready PWA', 'AI-Powered Diagnostics', 'HL7/FHIR Compatible'],
        highlights: [{ label: 'Modules', value: '16+' }, { label: 'Departments', value: 'All' }, { label: 'Languages', value: '3' }],
        capabilities: [
            { title: 'Unified Dashboard', description: 'Bird\'s-eye view of your entire hospital — bed occupancy, revenue, patient flow, and departmental KPIs in real-time.', icon: BuildingOffice2Icon },
            { title: 'Clinical Workflow Engine', description: 'Streamlined patient journeys from triage to discharge with intelligent queue management and automated routing.', icon: ClipboardDocumentListIcon },
            { title: 'AI Clinical Assistant', description: 'DeepSeek AI-powered support for differential diagnosis, drug interaction checks, and automated clinical reporting.', icon: CpuChipIcon },
            { title: 'Enterprise Security', description: 'Isolated facility instances, role-based access with 50+ permission levels, and complete audit trail compliance.', icon: ShieldCheckIcon }
        ],
        features: [
            { category: 'Patient Management', items: ['Electronic Medical Records (EMR)', 'Visit History & Timeline', 'Insurance & Coverage Verification', 'Patient Portal Access', 'Admission & Discharge Workflows'] },
            { category: 'Clinical Operations', items: ['OPD Queue Management', 'Vital Signs & Observations', 'Prescription & E-Prescribing', 'Lab & Radiology Ordering', 'Nursing Notes & MAR'] },
            { category: 'Departmental Modules', items: ['Laboratory Integration (HL7/FHIR)', 'Radiology & PACS', 'Pharmacy & Drug Dispensing', 'Surgery & OT Scheduling', 'Emergency & Triage'] },
            { category: 'Administration & Finance', items: ['Automated Billing & Invoicing', 'Revenue Cycle Management', 'HR & Staff Scheduling', 'Inventory & Supply Chain', 'MOH Compliance Reporting'] }
        ],
        workflow: [
            { step: '01', title: 'Facility Assessment', description: 'Our clinical IT team evaluates your current infrastructure, workflow, and department needs.' },
            { step: '02', title: 'System Configuration', description: 'Custom setup of all 16 modules, user roles, departmental workflows, and integration points.' },
            { step: '03', title: 'Staff Training', description: 'Department-by-department training ensuring every doctor, nurse, and admin is confident.' },
            { step: '04', title: 'Go Live & Scale', description: 'Phased rollout with 24/7 support, performance monitoring, and continuous optimization.' }
        ],
        faq: [
            { question: 'Does this system work offline?', answer: 'Yes. Our PWA architecture ensures full functionality even without internet connectivity. Data syncs automatically when connection is restored.' },
            { question: 'How long does implementation take?', answer: 'Typical deployment takes 2-4 weeks depending on hospital size. This includes configuration, data migration, and comprehensive staff training.' },
            { question: 'Is my data secure?', answer: 'Absolutely. Each facility gets an isolated instance with end-to-end encryption, role-based access control, and full audit trails.' },
            { question: 'What about ongoing support?', answer: 'We provide 24/7 technical support, regular system updates, and dedicated account management for all our clients.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة المستشفيات',
        productTagline: 'نظام التشغيل الرقمي المتكامل للمستشفيات الحديثة',
        productDescription: 'أتمتة شاملة للمستشفيات تغطي كل قسم — من الاستقبال إلى الخروج، من المختبر إلى الصيدلية، من الفوترة إلى مجلس الإدارة.',
        heroFeatures: ['16+ وحدة متكاملة', 'يعمل بدون إنترنت', 'تشخيص بالذكاء الاصطناعي', 'متوافق مع HL7/FHIR'],
        highlights: [{ label: 'الوحدات', value: '+16' }, { label: 'الأقسام', value: 'الكل' }, { label: 'اللغات', value: '3' }],
        capabilities: [
            { title: 'لوحة تحكم موحدة', description: 'رؤية شاملة لمستشفاك بالكامل — إشغال الأسرّة، الإيرادات، تدفق المرضى، ومؤشرات الأداء لكل قسم في الوقت الفعلي.', icon: BuildingOffice2Icon },
            { title: 'محرك سير العمل السريري', description: 'تبسيط رحلة المريض من الفرز إلى الخروج مع إدارة ذكية للطوابير وتوجيه تلقائي.', icon: ClipboardDocumentListIcon },
            { title: 'مساعد سريري بالذكاء الاصطناعي', description: 'دعم مدعوم بذكاء DeepSeek للتشخيص التفريقي وفحص التفاعلات الدوائية والتقارير السريرية الآلية.', icon: CpuChipIcon },
            { title: 'أمان مؤسسي', description: 'نسخ معزولة لكل منشأة، تحكم بالوصول المبني على الأدوار مع 50+ مستوى صلاحية، وامتثال كامل لسجل التدقيق.', icon: ShieldCheckIcon }
        ],
        features: [
            { category: 'إدارة المرضى', items: ['السجلات الطبية الإلكترونية (EMR)', 'سجل الزيارات والجدول الزمني', 'التحقق من التأمين والتغطية', 'بوابة المرضى', 'سير عمل القبول والخروج'] },
            { category: 'العمليات السريرية', items: ['إدارة طابور العيادات الخارجية', 'العلامات الحيوية والملاحظات', 'الوصفات الطبية والإلكترونية', 'طلبات المختبر والأشعة', 'ملاحظات التمريض وسجل الأدوية'] },
            { category: 'وحدات الأقسام', items: ['تكامل المختبر (HL7/FHIR)', 'الأشعة ونظام PACS', 'الصيدلية وصرف الأدوية', 'الجراحة وجدولة غرف العمليات', 'الطوارئ والفرز'] },
            { category: 'الإدارة والمالية', items: ['الفوترة والفواتير الآلية', 'إدارة دورة الإيرادات', 'الموارد البشرية وجدولة الموظفين', 'المخزون وسلسلة التوريد', 'تقارير الامتثال لوزارة الصحة'] }
        ],
        workflow: [
            { step: '01', title: 'تقييم المنشأة', description: 'يقوم فريق تكنولوجيا المعلومات السريري لدينا بتقييم البنية التحتية الحالية وسير العمل واحتياجات الأقسام.' },
            { step: '02', title: 'تهيئة النظام', description: 'إعداد مخصص لجميع الوحدات الـ 16، أدوار المستخدمين، سير عمل الأقسام، ونقاط التكامل.' },
            { step: '03', title: 'تدريب الموظفين', description: 'تدريب قسم تلو الآخر لضمان ثقة كل طبيب وممرض وإداري في استخدام النظام.' },
            { step: '04', title: 'التشغيل والتوسع', description: 'إطلاق تدريجي مع دعم على مدار الساعة ومراقبة الأداء والتحسين المستمر.' }
        ],
        faq: [
            { question: 'هل يعمل هذا النظام بدون إنترنت؟', answer: 'نعم. تضمن بنية PWA الخاصة بنا الوظائف الكاملة حتى بدون اتصال بالإنترنت. تتم مزامنة البيانات تلقائيًا عند استعادة الاتصال.' },
            { question: 'كم تستغرق عملية التنفيذ؟', answer: 'يستغرق النشر النموذجي من 2 إلى 4 أسابيع حسب حجم المستشفى. يشمل ذلك التهيئة ونقل البيانات والتدريب الشامل للموظفين.' },
            { question: 'هل بياناتي آمنة؟', answer: 'بالتأكيد. تحصل كل منشأة على نسخة معزولة مع تشفير شامل وتحكم بالوصول المبني على الأدوار ومسارات تدقيق كاملة.' },
            { question: 'ماذا عن الدعم المستمر؟', answer: 'نوفر دعمًا فنيًا على مدار الساعة طوال أيام الأسبوع، وتحديثات منتظمة للنظام، وإدارة حساب مخصصة لجميع عملائنا.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Isbitaalka',
        productTagline: 'Nidaamka Dijitaalka ah ee Dhameystiran ee Isbitaalada Casriga ah',
        productDescription: 'Otomaatik buuxa oo isbitaalka oo dhan ka shaqeeya — laga bilaabo qaabilaadda ilaa bixitaanka, shaybaadhka ilaa farmashiyaha, biilashada ilaa maamulka.',
        heroFeatures: ['16+ Qaybood oo Isku-xiran', 'Shaqeeysa Offline', 'Baadhis AI', 'Waafaqsan HL7/FHIR'],
        highlights: [{ label: 'Qaybaha', value: '16+' }, { label: 'Waaxdaha', value: 'Dhamaan' }, { label: 'Luqadaha', value: '3' }],
        capabilities: [
            { title: 'Dashboard-ka Mideysan', description: 'Muuqaal guud oo isbitaalkaaga oo dhan — sariiraha buuxa, dakhliga, socodka bukaanka, iyo KPI-yada waax kasta oo toos ah.', icon: BuildingOffice2Icon },
            { title: 'Mishiinka Socodka Caafimaadka', description: 'Safarro bukaankii loo fududeeyey laga bilaabo kala-soocista ilaa bixitaanka oo leh maarayn safaf caqli ah iyo waddid toos ah.', icon: ClipboardDocumentListIcon },
            { title: 'Kaaliyaha Caafimaadka ee AI', description: 'Taageero DeepSeek AI oo lagu sameeyo baadhista kala-duwanaanshaha, hubinta isdhexgalka daawada, iyo warbixinaha caafimaadka ee tooska ah.', icon: CpuChipIcon },
            { title: 'Amniga Heerka Sare', description: 'Tusaaloyin kala go\'an oo xarun kasta, xakamayn gelitaan oo ku salaysan doorka oo leh 50+ heer ogolaansho, iyo raadraac dhamaystiran.', icon: ShieldCheckIcon }
        ],
        features: [
            { category: 'Maamulka Bukaanka', items: ['Diiwaangelinta Caafimaadka Elektaroonigga (EMR)', 'Taariikhda Booqashooyinka', 'Xaqiijinta Caymiska', 'Gelitaanka Bawaabaadda Bukaanka', 'Qaababka Qaabilaadda iyo Bixitaanka'] },
            { category: 'Hawlaha Caafimaadka', items: ['Maamulka Safka OPD', 'Calaamadaha Muhiimka ah', 'Qorista Daawada', 'Dalabka Shaybaadhka iyo Raajada', 'Qoraallada Kalkaaliyaha'] },
            { category: 'Qaybaha Waaxdaha', items: ['Isku-xirnaanta Shaybaadhka (HL7/FHIR)', 'Raajada iyo PACS', 'Farmashiyaha iyo Siinta Daawada', 'Qalliinka iyo Jadwalka OT', 'Degdegga iyo Kala-soocista'] },
            { category: 'Maamulka iyo Maaliyadda', items: ['Biilashada Tooska ah', 'Maamulka Wareegga Dakhliga', 'HR iyo Jadwalka Shaqaalaha', 'Kaydka iyo Silsiladda Sahayda', 'Warbixinaha Waafajinta Wasaaradda'] }
        ],
        workflow: [
            { step: '01', title: 'Qiimaynta Xarunta', description: 'Kooxda IT-ga caafimaadka ee SEHTECH ayaa qiimeynaya kaabayaasha hadda jira, socodka shaqada, iyo baahiyaha waaxda.' },
            { step: '02', title: 'Habaynta Nidaamka', description: 'Dejin gaar ah oo dhammaan 16-ka qaybood, doorarka isticmaalaha, socodka waaxda, iyo meelaha isku-xirnaanta.' },
            { step: '03', title: 'Tababarka Shaqaalaha', description: 'Tababar waax-waax ah si loo hubiyo in dhakhtarba, kalkaaliye, iyo maamulba ay ku kalsoon yihiin.' },
            { step: '04', title: 'Bilaabista iyo Balaadhinta', description: 'Bilaab marxaladaysan oo leh taageero 24/7, la socoshada waxqabadka, iyo hagaajin joogto ah.' }
        ],
        faq: [
            { question: 'Nidaamkan ma ka shaqeeyaa offline?', answer: 'Haa. Qaab-dhismeedkayaga PWA wuxuu hubiyaa shaqayn buuxda xitaa internetka la\'aantii. Xogtu si toos ah ayay isku-dubaricdaa markii xiriirka la soo celiyo.' },
            { question: 'Intee ayuu qaataa hirgelinta?', answer: 'Geyntu waxay qaadataa 2-4 toddobaad oo ku xiran cabbirka isbitaalka. Tani waxaa ku jira habaynta, wareejinta xogta, iyo tababarka dhammaystiran ee shaqaalaha.' },
            { question: 'Xogtayda ma amaan baa?', answer: 'Si buuxda. Xarun kasta waxay heshaa tusaalo go\'an oo leh sir-qoris dhammaystiran, xakamaynta gelitaanka, iyo raadraaca buuxa.' },
            { question: 'Taageerada joogtada ah maxay tahay?', answer: 'Waxaan bixinaa taageero farsamada 24/7, cusbooneysiinta joogtada ah, iyo maamulka koontada oo gaar ah dhammaan macaamiishayada.' }
        ]
    }
};
