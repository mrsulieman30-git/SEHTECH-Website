import { HeartIcon, ClockIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Clinic Management System',
        productTagline: 'Smart, Lightweight, and Powerful — Built for Outpatient Excellence',
        productDescription: 'Purpose-built for clinics, polyclinics, and outpatient centers that need efficiency without the complexity of a full hospital system.',
        heroFeatures: ['Quick Setup', 'Patient Scheduling', 'E-Prescriptions', 'Billing Automation'],
        highlights: [{ label: 'Setup Time', value: '3 Days' }, { label: 'Patient Flow', value: '2x' }, { label: 'Support', value: '24/7' }],
        capabilities: [
            { title: 'Patient Flow Optimization', description: 'Smart scheduling and queue management that reduces patient wait times by up to 60%.', icon: ClockIcon },
            { title: 'Clinical Documentation', description: 'Intuitive consultation notes, vitals recording, and prescription management in seconds.', icon: HeartIcon },
            { title: 'Multi-Doctor Support', description: 'Manage multiple practitioners with individual schedules, patient lists, and performance tracking.', icon: UserGroupIcon },
            { title: 'Revenue Insights', description: 'Real-time financial dashboard showing daily revenue, pending payments, and insurance claims.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'Patient Experience', items: ['Online Appointment Booking', 'SMS/WhatsApp Reminders', 'Digital Patient Cards', 'Visit History at a Glance'] },
            { category: 'Clinical Workflow', items: ['Quick Consultation Notes', 'Vital Signs Dashboard', 'E-Prescription Generation', 'Lab & Referral Management'] },
            { category: 'Operations & Billing', items: ['Automated Invoice Generation', 'Insurance Claim Processing', 'Cash & Card Payment Tracking', 'Daily Revenue Reports'] }
        ],
        workflow: [
            { step: '01', title: 'Quick Assessment', description: 'A 30-minute call to understand your clinic size, specialties, and current challenges.' },
            { step: '02', title: 'Rapid Deployment', description: 'System configured and deployed within 3 business days with your branding and workflows.' },
            { step: '03', title: 'Team Onboarding', description: 'Hands-on training for your reception, clinical, and billing staff in just one day.' },
            { step: '04', title: 'Continuous Support', description: 'Ongoing support with regular updates and feature additions based on your feedback.' }
        ],
        faq: [
            { question: 'Is this different from the Hospital system?', answer: 'Yes. The Clinic system is specifically designed for outpatient facilities — lighter, faster to deploy, and focused on consultation flow rather than inpatient management.' },
            { question: 'Can I manage multiple doctors?', answer: 'Absolutely. Each doctor gets their own schedule, patient list, and dashboard while administration maintains a unified overview.' },
            { question: 'Does it support insurance billing?', answer: 'Yes. Full insurance claim management including pre-authorization, claim submission, and payment reconciliation.' },
            { question: 'How quickly can we go live?', answer: 'Most clinics are fully operational within 3 business days — including system setup, data entry, and staff training.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة العيادات',
        productTagline: 'ذكي وخفيف وقوي — مصمم للتميز في العيادات الخارجية',
        productDescription: 'مصمم خصيصًا للعيادات والمراكز الطبية التي تحتاج إلى الكفاءة دون تعقيدات نظام المستشفى الكامل.',
        heroFeatures: ['إعداد سريع', 'جدولة المرضى', 'وصفات إلكترونية', 'أتمتة الفوترة'],
        highlights: [{ label: 'وقت الإعداد', value: '3 أيام' }, { label: 'تدفق المرضى', value: '2x' }, { label: 'الدعم', value: '24/7' }],
        capabilities: [
            { title: 'تحسين تدفق المرضى', description: 'جدولة ذكية وإدارة طوابير تقلل أوقات انتظار المرضى بنسبة تصل إلى 60%.', icon: ClockIcon },
            { title: 'التوثيق السريري', description: 'ملاحظات استشارة بديهية وتسجيل العلامات الحيوية وإدارة الوصفات في ثوانٍ.', icon: HeartIcon },
            { title: 'دعم أطباء متعددين', description: 'إدارة عدة ممارسين بجداول فردية وقوائم مرضى وتتبع الأداء.', icon: UserGroupIcon },
            { title: 'رؤى الإيرادات', description: 'لوحة مالية في الوقت الفعلي تعرض الإيرادات اليومية والمدفوعات المعلقة ومطالبات التأمين.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'تجربة المريض', items: ['حجز المواعيد عبر الإنترنت', 'تذكيرات SMS/واتساب', 'بطاقات المريض الرقمية', 'سجل الزيارات بنظرة واحدة'] },
            { category: 'سير العمل السريري', items: ['ملاحظات الاستشارة السريعة', 'لوحة العلامات الحيوية', 'إنشاء الوصفات الإلكترونية', 'إدارة المختبر والإحالات'] },
            { category: 'العمليات والفوترة', items: ['إنشاء الفواتير الآلية', 'معالجة مطالبات التأمين', 'تتبع المدفوعات النقدية والبطاقات', 'تقارير الإيرادات اليومية'] }
        ],
        workflow: [
            { step: '01', title: 'تقييم سريع', description: 'مكالمة 30 دقيقة لفهم حجم عيادتك وتخصصاتك والتحديات الحالية.' },
            { step: '02', title: 'نشر سريع', description: 'تهيئة النظام ونشره خلال 3 أيام عمل مع هويتك البصرية وسير عملك.' },
            { step: '03', title: 'تأهيل الفريق', description: 'تدريب عملي لموظفي الاستقبال والسريري والفوترة في يوم واحد فقط.' },
            { step: '04', title: 'دعم مستمر', description: 'دعم مستمر مع تحديثات منتظمة وإضافة ميزات بناءً على ملاحظاتك.' }
        ],
        faq: [
            { question: 'هل هذا مختلف عن نظام المستشفى؟', answer: 'نعم. نظام العيادات مصمم خصيصًا للمرافق الخارجية — أخف وأسرع في النشر ويركز على سير الاستشارات بدلاً من إدارة المرضى المقيمين.' },
            { question: 'هل يمكنني إدارة أطباء متعددين؟', answer: 'بالتأكيد. يحصل كل طبيب على جدوله الخاص وقائمة مرضاه ولوحة التحكم الخاصة به بينما تحتفظ الإدارة بنظرة عامة موحدة.' },
            { question: 'هل يدعم فوترة التأمين؟', answer: 'نعم. إدارة مطالبات التأمين الكاملة بما في ذلك التفويض المسبق وتقديم المطالبات ومطابقة المدفوعات.' },
            { question: 'كم يستغرق التشغيل؟', answer: 'معظم العيادات تعمل بالكامل خلال 3 أيام عمل — بما في ذلك إعداد النظام وإدخال البيانات وتدريب الموظفين.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Kilinikga',
        productTagline: 'Caqli badan, Fudud, oo Xoog leh — Loo Dhisay Kilinikyadda Bukaanka Dibadda',
        productDescription: 'Si gaar ah loogu dhisay kilinikyadda, xarumaha caafimaadka, iyo xarumaha bukaanka dibadda ee u baahan waxqabad la\'aantii nidaam isbitaal oo dhameystiran ah.',
        heroFeatures: ['Dejin Degdeg ah', 'Jadwalka Bukaanka', 'Daawada Elektaroonigga', 'Biilashada Tooska ah'],
        highlights: [{ label: 'Waqtiga Dejinta', value: '3 Maalmood' }, { label: 'Socodka Bukaanka', value: '2x' }, { label: 'Taageero', value: '24/7' }],
        capabilities: [
            { title: 'Hagaajinta Socodka Bukaanka', description: 'Jadwal caqli ah iyo maaraynta safka oo yaraynaysa waqtiga sugista bukaanku ilaa 60%.', icon: ClockIcon },
            { title: 'Diiwaangelinta Caafimaadka', description: 'Qoraalo la-talin fudud, diiwaangelinta calaamadaha muhiimka, iyo maaraynta daawada daqiiqado gudahood.', icon: HeartIcon },
            { title: 'Taageero Dhakhaatiir Badan', description: 'Maarayn dhakhaatiir badan oo leh jadwallo gaarka ah, liisaska bukaanka, iyo la-socoshada waxqabadka.', icon: UserGroupIcon },
            { title: 'Aragga Dakhliga', description: 'Dashboard maaliyadeed oo toos ah oo muujinaya dakhliga maalinlaha, lacagaha la sugayo, iyo sheegashada caymiska.', icon: ChartBarIcon }
        ],
        features: [
            { category: 'Khibradda Bukaanka', items: ['Ballan-qaadka Online', 'Xasuusinta SMS/WhatsApp', 'Kaadhka Bukaanka Dijitaalka', 'Taariikhda Booqashada hal Eeg'] },
            { category: 'Socodka Caafimaadka', items: ['Qoraallada La-talinta Degdega ah', 'Dashboard-ka Calaamadaha Muhiimka', 'Sameynta Daawada Elektaroonigga', 'Maaraynta Shaybaadhka iyo Gudbiinta'] },
            { category: 'Hawlaha iyo Biilashada', items: ['Sameynta Qaansheegga Tooska ah', 'Ka shaqaynta Sheegashada Caymiska', 'La-socoshada Lacagta Caddaan iyo Kaadhka', 'Warbixinaha Dakhliga Maalinlaha'] }
        ],
        workflow: [
            { step: '01', title: 'Qiimayn Degdeg ah', description: 'Wicitaan 30 daqiiqo ah si loo fahmo cabbirka kilinikgaaga, takhasustaada, iyo caqabadaha hadda.' },
            { step: '02', title: 'Geeyn Degdeg ah', description: 'Nidaamka waa la habeeyey oo la geeyey 3 maalmood shaqo gudahood iyada oo leh sumaddaada iyo socodkaaga.' },
            { step: '03', title: 'Soo Dhaweynta Kooxda', description: 'Tababar gacanta ku haya shaqaalaha qaabilaadda, caafimaadka, iyo biilashada hal maalin gudaheed.' },
            { step: '04', title: 'Taageero Joogto ah', description: 'Taageero socota oo leh cusbooneysiinta joogtada ah iyo ku darista sifooyinka ku salaysan ra\'yigaaga.' }
        ],
        faq: [
            { question: 'Kani ma ka duwan yahay nidaamka isbitaalka?', answer: 'Haa. Nidaamka Kilinikgu wuxuu si gaar ah u sameeysan yahay xarumaha bukaanka dibadda — fudud, degdeg u geeyn, oo diiradda saaraya socodka la-talinta halkii laga maamuli lahaa bukaanka gudaha.' },
            { question: 'Ma maarayn karaa dhakhaatiir badan?', answer: 'Haa. Dhakhtar kasta wuxuu helayaa jadwalkiisa, liiskiisa bukaanka, iyo dashboard-kiisa halka maamulku ay hayaan muuqaal guud oo mideysan.' },
            { question: 'Ma taageeryaa biilashada caymiska?', answer: 'Haa. Maaraynta dhamaystiran ee sheegashada caymiska oo ay ku jiraan oggolaanshaha hore, dirista sheegashada, iyo isku-dubbaridka lacagaha.' },
            { question: 'Sidee ayaan u degdegi karnaa?', answer: 'Kilinikyadda badankoodu si buuxda ayay u shaqeeyaan 3 maalmood shaqo gudahood — oo ay ku jiraan dejinta nidaamka, gelinta xogta, iyo tababarka shaqaalaha.' }
        ]
    }
};
