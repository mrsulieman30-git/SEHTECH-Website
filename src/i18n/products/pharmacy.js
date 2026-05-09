import { ShieldExclamationIcon, ArchiveBoxIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Pharmacy Management System',
        productTagline: 'Intelligent Dispensing, Zero Stockouts, Complete Control',
        productDescription: 'A comprehensive pharmacy management solution with drug interaction alerts, inventory automation, and prescription fulfillment tracking.',
        heroFeatures: ['Drug Interaction Alerts', 'Auto-Reordering', 'Barcode Dispensing', 'Expiry Tracking'],
        highlights: [{ label: 'Drug Database', value: '10K+' }, { label: 'Stockouts', value: 'Zero' }, { label: 'Dispense Time', value: '-40%' }],
        capabilities: [
            { title: 'Drug Safety Engine', description: 'Real-time drug interaction checking, allergy cross-referencing, and dosage validation to prevent medication errors.', icon: ShieldExclamationIcon },
            { title: 'Smart Inventory', description: 'Automated reordering with minimum stock alerts, expiry date tracking, and lot number management.', icon: ArchiveBoxIcon },
            { title: 'Prescription Management', description: 'E-prescription integration, substitution suggestions, and complete dispensing audit trail.', icon: ClipboardDocumentListIcon },
            { title: 'Financial Control', description: 'Purchase order management, supplier comparison, markup tracking, and profitability analysis per drug.', icon: CurrencyDollarIcon }
        ],
        features: [
            { category: 'Dispensing & Safety', items: ['Barcode-Based Dispensing', 'Drug Interaction Checking', 'Allergy Cross-Reference', 'Dosage Validation', 'Controlled Substance Tracking'] },
            { category: 'Inventory Management', items: ['Real-Time Stock Levels', 'Automated Reordering', 'Expiry Date Alerts', 'Lot & Batch Tracking', 'Multi-Location Support'] },
            { category: 'Financial & Reporting', items: ['Purchase Order Management', 'Supplier Performance Tracking', 'Profit Margin Analysis', 'Controlled Drug Register', 'MOH Narcotics Reporting'] }
        ],
        workflow: [
            { step: '01', title: 'Pharmacy Audit', description: 'Complete assessment of your drug formulary, suppliers, and current dispensing workflow.' },
            { step: '02', title: 'Drug Database Setup', description: 'Configure your formulary, interaction rules, pricing, reorder levels, and supplier links.' },
            { step: '03', title: 'Pharmacist Training', description: 'Hands-on dispensing workflow training with barcode scanning and safety protocol setup.' },
            { step: '04', title: 'Automated Operations', description: 'Launch with automated reordering, expiry monitoring, and ongoing inventory optimization.' }
        ],
        faq: [
            { question: 'Does it check drug interactions?', answer: 'Yes. Real-time drug-drug and drug-allergy interaction checking at the point of dispensing, with severity-graded alerts and override documentation.' },
            { question: 'Can it manage controlled substances?', answer: 'Yes. Complete controlled substance tracking with double-verification, secure registers, and automated MOH narcotics reporting.' },
            { question: 'Does it handle expiry management?', answer: 'Yes. Automated FEFO (First Expiry, First Out) enforcement with configurable alerts at 30, 60, and 90 days before expiration.' },
            { question: 'Can I connect multiple pharmacy locations?', answer: 'Yes. Multi-location support with inter-branch transfer management, consolidated reporting, and centralized purchasing.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة الصيدليات',
        productTagline: 'صرف ذكي، نفاد صفري، تحكم كامل',
        productDescription: 'حل شامل لإدارة الصيدليات مع تنبيهات تفاعل الأدوية وأتمتة المخزون وتتبع تنفيذ الوصفات.',
        heroFeatures: ['تنبيهات تفاعل الأدوية', 'إعادة طلب تلقائي', 'صرف بالباركود', 'تتبع انتهاء الصلاحية'],
        highlights: [{ label: 'قاعدة الأدوية', value: '+10K' }, { label: 'النفاد', value: 'صفر' }, { label: 'وقت الصرف', value: '-40%' }],
        capabilities: [
            { title: 'محرك سلامة الأدوية', description: 'فحص تفاعل الأدوية في الوقت الفعلي وإسناد الحساسية والتحقق من الجرعة لمنع الأخطاء الدوائية.', icon: ShieldExclamationIcon },
            { title: 'مخزون ذكي', description: 'إعادة طلب تلقائية مع تنبيهات الحد الأدنى وتتبع تاريخ انتهاء الصلاحية وإدارة أرقام الدُفعات.', icon: ArchiveBoxIcon },
            { title: 'إدارة الوصفات', description: 'تكامل الوصفات الإلكترونية واقتراحات البدائل ومسار تدقيق الصرف الكامل.', icon: ClipboardDocumentListIcon },
            { title: 'التحكم المالي', description: 'إدارة أوامر الشراء ومقارنة الموردين وتتبع هامش الربح وتحليل الربحية لكل دواء.', icon: CurrencyDollarIcon }
        ],
        features: [
            { category: 'الصرف والسلامة', items: ['الصرف بالباركود', 'فحص تفاعل الأدوية', 'إسناد الحساسية', 'التحقق من الجرعة', 'تتبع المواد الخاضعة للرقابة'] },
            { category: 'إدارة المخزون', items: ['مستويات المخزون الفعلية', 'إعادة الطلب التلقائية', 'تنبيهات انتهاء الصلاحية', 'تتبع الدُفعات', 'دعم مواقع متعددة'] },
            { category: 'المالية والتقارير', items: ['إدارة أوامر الشراء', 'تتبع أداء الموردين', 'تحليل هامش الربح', 'سجل الأدوية الخاضعة للرقابة', 'تقارير المخدرات لوزارة الصحة'] }
        ],
        workflow: [
            { step: '01', title: 'تدقيق الصيدلية', description: 'تقييم شامل لقائمة الأدوية والموردين وسير عمل الصرف الحالي.' },
            { step: '02', title: 'إعداد قاعدة الأدوية', description: 'تهيئة قائمة الأدوية وقواعد التفاعل والأسعار ومستويات إعادة الطلب وروابط الموردين.' },
            { step: '03', title: 'تدريب الصيادلة', description: 'تدريب عملي على سير عمل الصرف مع مسح الباركود وإعداد بروتوكولات السلامة.' },
            { step: '04', title: 'عمليات مؤتمتة', description: 'إطلاق مع إعادة الطلب التلقائية ومراقبة الصلاحية وتحسين المخزون المستمر.' }
        ],
        faq: [
            { question: 'هل يفحص تفاعلات الأدوية؟', answer: 'نعم. فحص تفاعل الدواء-الدواء والدواء-الحساسية في الوقت الفعلي عند نقطة الصرف مع تنبيهات مصنفة حسب الشدة وتوثيق التجاوز.' },
            { question: 'هل يمكنه إدارة المواد الخاضعة للرقابة؟', answer: 'نعم. تتبع كامل للمواد الخاضعة للرقابة مع تحقق مزدوج وسجلات آمنة وتقارير المخدرات التلقائية لوزارة الصحة.' },
            { question: 'هل يتعامل مع إدارة انتهاء الصلاحية؟', answer: 'نعم. تطبيق FEFO التلقائي (الأول انتهاءً أولاً صرفاً) مع تنبيهات قابلة للتهيئة قبل 30 و60 و90 يومًا من الانتهاء.' },
            { question: 'هل يمكنني ربط مواقع صيدلية متعددة؟', answer: 'نعم. دعم مواقع متعددة مع إدارة النقل بين الفروع وتقارير موحدة ومشتريات مركزية.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Farmashiyaha',
        productTagline: 'Siinta Caqliga ah, Dhammaad La\'aan, Xakamayn Buuxda',
        productDescription: 'Xal dhammaystiran oo maaraynta farmashiyaha oo leh digniinaha isdhexgalka daawada, otomaatikga kaydka, iyo la-socoshada buuxinta qoraalka.',
        heroFeatures: ['Digniinaha Isdhexgalka', 'Dib-u-dalbasho Toos ah', 'Siinta Barcode', 'La-socoshada Dhicitaanka'],
        highlights: [{ label: 'Xogta Daawada', value: '10K+' }, { label: 'Dhammaadka', value: 'Eber' }, { label: 'Waqtiga Siinta', value: '-40%' }],
        capabilities: [
            { title: 'Mishiinka Ammaanka Daawada', description: 'Hubinta isdhexgalka daawada ee tooska ah, isku-eegista xasaasiyadda, iyo xaqiijinta qiyaasta si looga hortago qaladaadka dawada.', icon: ShieldExclamationIcon },
            { title: 'Kayga Caqliga ah', description: 'Dib-u-dalbasho toos ah oo leh digniinaha ugu yar, la-socoshada taariikhda dhicitaanka, iyo maaraynta lambarrada xirmooyinka.', icon: ArchiveBoxIcon },
            { title: 'Maamulka Qoraalka', description: 'Isku-xirnaanta qoraalka elektaroonigga, soo-jeedinta beddelka, iyo raadraacidda dhammaystiran ee siinta.', icon: ClipboardDocumentListIcon },
            { title: 'Xakamaynta Maaliyadda', description: 'Maaraynta dalabka iibsiga, isbarbardhigga bixiyayaasha, la-socoshada ribixda, iyo falanqaynta macaashka dawo kasta.', icon: CurrencyDollarIcon }
        ],
        features: [
            { category: 'Siinta iyo Ammaanka', items: ['Siinta Barcode', 'Hubinta Isdhexgalka Daawada', 'Isku-eegista Xasaasiyadda', 'Xaqiijinta Qiyaasta', 'La-socoshada Walxaha la Xakameynayo'] },
            { category: 'Maamulka Kaydka', items: ['Heerarka Kaydka Dhabta ah', 'Dib-u-dalbasho Toos ah', 'Digniinaha Dhicitaanka', 'La-socoshada Xirmooyinka', 'Taageerida Goobaha Badan'] },
            { category: 'Maaliyadda iyo Warbixinta', items: ['Maaraynta Dalabka Iibsiga', 'La-socoshada Waxqabadka Bixiyayaasha', 'Falanqaynta Ribixda', 'Diiwaanka Daawada la Xakameynayo', 'Warbixinta Maandooriyaha Wasaaradda'] }
        ],
        workflow: [
            { step: '01', title: 'Baadhitaanka Farmashiyaha', description: 'Qiimayn dhammaystiran oo liiska dawadaada, bixiyayaasha, iyo socodka siinta ee hadda.' },
            { step: '02', title: 'Dejinta Xogta Daawada', description: 'Habee liiska dawadaada, qawaaniinta isdhexgalka, qiimaha, heerarka dib-u-dalbasho, iyo xiriirka bixiyayaasha.' },
            { step: '03', title: 'Tababarka Farmashiistayaasha', description: 'Tababar gacanta ku haya socodka siinta oo leh baadhista barcode iyo dejinta hababka ammaanka.' },
            { step: '04', title: 'Hawlaha Tooska ah', description: 'Bilow oo leh dib-u-dalbasho toos ah, la-socoshada dhicitaanka, iyo hagaajinta kaydka ee joogtada ah.' }
        ],
        faq: [
            { question: 'Ma hubiyaa isdhexgalka daawada?', answer: 'Haa. Hubinta isdhexgalka dawo-dawo iyo dawo-xasaasiyad ee hadda oo meesha tooska ah oo leh digniinaaha heerka daran iyo diiwaangelinta ka-gudubka.' },
            { question: 'Ma maarayn karaa walxaha la xakameynayo?', answer: 'Haa. La-socodka dhammaystiran ee walxaha la xakameynayo oo leh xaqiijin labanlaab ah, diiwaano aamin ah, iyo warbixinta tooska ah.' },
            { question: 'Ma maamulaa dhicitaanka?', answer: 'Haa. Dhismooyinka FEFO tooska ah oo leh digniinaaha la habeeyn karo 30, 60, iyo 90 maalmood ka hor dhicitaanka.' },
            { question: 'Ma xiri karaa goobaha farmashiyaha badan?', answer: 'Haa. Taageerida goobaha badan oo leh maaraynta wareejinta laamaha, warbixinta mideysan, iyo iibsiga dhexe.' }
        ]
    }
};
