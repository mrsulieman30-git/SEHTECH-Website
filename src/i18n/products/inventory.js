import { CubeIcon, TruckIcon, ExclamationTriangleIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Inventory Management System',
        productTagline: 'Complete Supply Chain Visibility — From Purchase to Consumption',
        productDescription: 'Track every item across departments, warehouses, and facilities with automated reordering, stockout prevention, and real-time analytics.',
        heroFeatures: ['Multi-Warehouse', 'Auto-Reordering', 'Barcode Tracking', 'Wastage Analytics'],
        highlights: [{ label: 'Items Tracked', value: '∞' }, { label: 'Waste Reduction', value: '35%' }, { label: 'Accuracy', value: '99.8%' }],
        capabilities: [
            { title: 'Real-Time Tracking', description: 'Live visibility into stock levels, locations, and movements across all departments and storage facilities.', icon: CubeIcon },
            { title: 'Procurement Engine', description: 'Automated purchase orders, supplier management, bid comparison, and delivery tracking in one system.', icon: TruckIcon },
            { title: 'Stockout Prevention', description: 'Smart reorder points, safety stock calculations, and predictive analytics to prevent critical shortages.', icon: ExclamationTriangleIcon },
            { title: 'Consumption Analytics', description: 'Department-level consumption tracking, wastage analysis, and cost optimization recommendations.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'Stock Management', items: ['Real-Time Stock Levels', 'Multi-Location Tracking', 'Barcode / QR Scanning', 'Batch & Lot Tracking', 'Expiry Date Management'] },
            { category: 'Procurement', items: ['Purchase Order Automation', 'Supplier Management', 'Price Comparison', 'Goods Receiving & Inspection', 'Return & Defect Handling'] },
            { category: 'Analytics & Reporting', items: ['Consumption Trends', 'Department Usage Reports', 'Wastage & Damage Tracking', 'ABC Analysis', 'Cost Center Allocation'] }
        ],
        workflow: [
            { step: '01', title: 'Inventory Audit', description: 'Complete stock count and categorization of all items, suppliers, and storage locations.' },
            { step: '02', title: 'System Migration', description: 'Data migration, barcode labeling, reorder level configuration, and supplier onboarding.' },
            { step: '03', title: 'Staff Training', description: 'Store managers and department heads trained on receiving, issuing, and reporting workflows.' },
            { step: '04', title: 'Automated Control', description: 'Launch with automated alerts, reordering workflows, and real-time dashboards.' }
        ],
        faq: [
            { question: 'Can it track items across multiple warehouses?', answer: 'Yes. Full multi-warehouse support with inter-location transfers, consolidated stock views, and location-specific reorder levels.' },
            { question: 'Does it support barcode scanning?', answer: 'Yes. Both barcode and QR code scanning for receiving, issuing, stock counts, and asset tracking using any standard scanner or mobile device.' },
            { question: 'Can departments request items?', answer: 'Yes. Internal requisition system allows departments to request items with approval workflows, auto-fulfillment, and consumption tracking.' },
            { question: 'Does it provide wastage reports?', answer: 'Yes. Detailed wastage and damage tracking with root cause analysis, trend reporting, and cost impact assessment.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة المخزون',
        productTagline: 'رؤية كاملة لسلسلة التوريد — من الشراء إلى الاستهلاك',
        productDescription: 'تتبع كل عنصر عبر الأقسام والمستودعات والمنشآت مع إعادة الطلب التلقائية ومنع النفاد والتحليلات الفورية.',
        heroFeatures: ['مستودعات متعددة', 'إعادة طلب تلقائي', 'تتبع بالباركود', 'تحليلات الهدر'],
        highlights: [{ label: 'العناصر المتتبعة', value: '∞' }, { label: 'تقليل الهدر', value: '35%' }, { label: 'الدقة', value: '99.8%' }],
        capabilities: [
            { title: 'تتبع فوري', description: 'رؤية مباشرة لمستويات المخزون والمواقع والتحركات عبر جميع الأقسام ومرافق التخزين.', icon: CubeIcon },
            { title: 'محرك المشتريات', description: 'أوامر شراء تلقائية وإدارة الموردين ومقارنة العروض وتتبع التسليم في نظام واحد.', icon: TruckIcon },
            { title: 'منع النفاد', description: 'نقاط إعادة طلب ذكية وحسابات مخزون الأمان وتحليلات تنبؤية لمنع النقص الحرج.', icon: ExclamationTriangleIcon },
            { title: 'تحليلات الاستهلاك', description: 'تتبع الاستهلاك على مستوى القسم وتحليل الهدر وتوصيات تحسين التكلفة.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'إدارة المخزون', items: ['مستويات المخزون الفعلية', 'تتبع مواقع متعددة', 'مسح الباركود / QR', 'تتبع الدُفعات', 'إدارة تواريخ الانتهاء'] },
            { category: 'المشتريات', items: ['أتمتة أوامر الشراء', 'إدارة الموردين', 'مقارنة الأسعار', 'استلام وفحص البضائع', 'التعامل مع المرتجعات والعيوب'] },
            { category: 'التحليلات والتقارير', items: ['اتجاهات الاستهلاك', 'تقارير استخدام الأقسام', 'تتبع الهدر والتلف', 'تحليل ABC', 'توزيع مراكز التكلفة'] }
        ],
        workflow: [
            { step: '01', title: 'تدقيق المخزون', description: 'جرد كامل وتصنيف جميع العناصر والموردين ومواقع التخزين.' },
            { step: '02', title: 'ترحيل النظام', description: 'نقل البيانات ووضع ملصقات الباركود وتهيئة مستويات إعادة الطلب وتسجيل الموردين.' },
            { step: '03', title: 'تدريب الموظفين', description: 'تدريب مدراء المخازن ورؤساء الأقسام على سير عمل الاستلام والصرف والتقارير.' },
            { step: '04', title: 'تحكم مؤتمت', description: 'إطلاق مع تنبيهات تلقائية وسير عمل إعادة الطلب ولوحات معلومات فورية.' }
        ],
        faq: [
            { question: 'هل يمكنه تتبع العناصر عبر مستودعات متعددة؟', answer: 'نعم. دعم كامل لمستودعات متعددة مع نقل بين المواقع وعرض مخزون موحد ومستويات إعادة طلب خاصة بكل موقع.' },
            { question: 'هل يدعم مسح الباركود؟', answer: 'نعم. مسح الباركود و QR للاستلام والصرف والجرد وتتبع الأصول باستخدام أي ماسح قياسي أو جهاز محمول.' },
            { question: 'هل يمكن للأقسام طلب العناصر؟', answer: 'نعم. نظام طلبات داخلي يتيح للأقسام طلب العناصر مع سير عمل الموافقة والتنفيذ التلقائي وتتبع الاستهلاك.' },
            { question: 'هل يوفر تقارير الهدر؟', answer: 'نعم. تتبع مفصل للهدر والتلف مع تحليل السبب الجذري وتقارير الاتجاهات وتقييم تأثير التكلفة.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Kaydka',
        productTagline: 'Muuqaal Dhammaystiran oo Silsiladda Sahayda — Iibsiga ilaa Isticmaalka',
        productDescription: 'La-socon shay kasta oo ku dhex yaal waaxdaha, bakhaaro, iyo xarumaha oo leh dib-u-dalbasho toos ah, ka-hortagga dhammaadka, iyo falanqaynta tooska ah.',
        heroFeatures: ['Bakhaaro Badan', 'Dib-u-dalbasho Toos ah', 'La-socoshada Barcode', 'Falanqaynta Khasaaraha'],
        highlights: [{ label: 'Alaab la Socdo', value: '∞' }, { label: 'Dhimista Khasaaraha', value: '35%' }, { label: 'Saxnaanta', value: '99.8%' }],
        capabilities: [
            { title: 'La-socodka Tooska ah', description: 'Muuqaal toos ah oo heerarka kaydka, goobaha, iyo dhaqdhaqaaqa dhammaan waaxdaha iyo xarumaha kaydinta.', icon: CubeIcon },
            { title: 'Mishiinka Iibsiga', description: 'Dalabka iibsiga ee tooska ah, maaraynta bixiyayaasha, isbarbardhigga qiimaha, iyo la-socoshada gaadhsiinta.', icon: TruckIcon },
            { title: 'Ka-hortagga Dhammaadka', description: 'Meelaha dib-u-dalbasho ee caqliga ah, xisaabinta kaydka ammaanka, iyo falanqaynta saadaalinta si looga hortago yarida muhiimka.', icon: ExclamationTriangleIcon },
            { title: 'Falanqaynta Isticmaalka', description: 'La-socoshada isticmaalka heerka waaxda, falanqaynta khasaaraha, iyo talooyinka hagaajinta kharashka.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'Maamulka Kaydka', items: ['Heerarka Kaydka Dhabta ah', 'La-socoshada Goobaha Badan', 'Baadhista Barcode / QR', 'La-socoshada Xirmooyinka', 'Maaraynta Taariikhda Dhicitaanka'] },
            { category: 'Iibsiga', items: ['Otomaatikga Dalabka Iibsiga', 'Maaraynta Bixiyayaasha', 'Isbarbardhigga Qiimaha', 'Qaabilaadda iyo Baadhista Alaabta', 'Ka-shaqaynta Soo-celinta'] },
            { category: 'Falanqaynta iyo Warbixinta', items: ['Jihada Isticmaalka', 'Warbixinta Isticmaalka Waaxda', 'La-socoshada Khasaaraha', 'Falanqaynta ABC', 'Qaybinta Xarunta Kharashka'] }
        ],
        workflow: [
            { step: '01', title: 'Baadhitaanka Kaydka', description: 'Tirinta kaydka oo dhammaystiran iyo kala-soocista dhammaan alaabta, bixiyayaasha, iyo goobaha kaydinta.' },
            { step: '02', title: 'Wareejinta Nidaamka', description: 'Wareejinta xogta, calaamaynta barcode, habaynta heerka dib-u-dalbasho, iyo soo dhaweynta bixiyayaasha.' },
            { step: '03', title: 'Tababarka Shaqaalaha', description: 'Tababar maamulayaasha bakhaaraha iyo madaxda waaxda socodka qaabilaadda, siinta, iyo warbixinta.' },
            { step: '04', title: 'Xakamayn Toos ah', description: 'Bilow oo leh digniinaaha tooska ah, socodka dib-u-dalbasho, iyo dashboard-yada tooska ah.' }
        ],
        faq: [
            { question: 'Ma la-socon karaa alaab bakhaaro badan?', answer: 'Haa. Taageerid buuxda oo bakhaaro badan oo leh wareejinta goobaha, muuqaalka kaydka mideysan, iyo heerarka dib-u-dalbasho goob kasta.' },
            { question: 'Ma taageeryaa baadhista barcode?', answer: 'Haa. Baadhista barcode iyo QR ee qaabilaadda, siinta, tirinta kaydka isagoo la isticmaalayo baadhiye caadi ah ama aalad gacmeed.' },
            { question: 'Waaxdaha ma dalban karaan alaab?', answer: 'Haa. Nidaamka codsiga gudaha ayaa u oggolaanaya waaxdaha inay dalbadaan alaab oo leh socodka oggolaanshaha iyo la-socoshada isticmaalka.' },
            { question: 'Ma bixiyaa warbixinta khasaaraha?', answer: 'Haa. La-socodka faahfaahsan ee khasaaraha iyo waxyeellada oo leh falanqaynta sababta aasaasiga, warbixinta jihada, iyo qiimaynta saameynta kharashka.' }
        ]
    }
};
