import { BeakerIcon, ClipboardDocumentCheckIcon, CpuChipIcon, ChartBarSquareIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Laboratory Management System',
        productTagline: 'Accuracy, Speed, and Traceability — From Sample to Report',
        productDescription: 'A comprehensive LIS designed for clinical, reference, and research laboratories with analyzer integration, quality control, and automated reporting.',
        heroFeatures: ['Analyzer Integration', 'Auto-Validation', 'Quality Control', 'HL7/FHIR Ready'],
        highlights: [{ label: 'Test Panels', value: '500+' }, { label: 'TAT Reduction', value: '45%' }, { label: 'Error Rate', value: '<0.1%' }],
        capabilities: [
            { title: 'Analyzer Mapping', description: 'Bi-directional integration with laboratory analyzers for automatic result capture, reducing manual entry errors to near zero.', icon: CpuChipIcon },
            { title: 'Smart Validation', description: 'Rule-based auto-validation with delta checks, panic value alerts, and critical result notification workflows.', icon: ClipboardDocumentCheckIcon },
            { title: 'Quality Assurance', description: 'Built-in QC module with Levey-Jennings charts, Westgard rules, and proficiency testing management.', icon: BeakerIcon },
            { title: 'Advanced Analytics', description: 'Turnaround time tracking, workload analysis, test volume trends, and revenue per test reporting.', icon: ChartBarSquareIcon }
        ],
        features: [
            { category: 'Sample Management', items: ['Barcode-Based Accessioning', 'Sample Tracking & Chain of Custody', 'Aliquoting & Distribution', 'Rejection Criteria Management', 'Batch Processing'] },
            { category: 'Testing & Results', items: ['Multi-Analyzer Integration', 'Auto-Validation Rules Engine', 'Reflex & Cascade Testing', 'Critical Value Notifications', 'Result History & Trending'] },
            { category: 'Reporting & Compliance', items: ['Customizable Report Templates', 'Electronic Result Delivery', 'External Lab Partner Portal', 'Audit Trail & SOPs', 'MOH Data Export'] }
        ],
        workflow: [
            { step: '01', title: 'Lab Assessment', description: 'Evaluate your test menu, analyzers, workflow volumes, and integration requirements.' },
            { step: '02', title: 'Analyzer Integration', description: 'Configure bi-directional analyzer communication, test panels, and validation rules.' },
            { step: '03', title: 'Staff Validation', description: 'Parallel testing period with lab technologists to validate accuracy and workflows.' },
            { step: '04', title: 'Full Production', description: 'Transition to full production with real-time monitoring and ongoing QC support.' }
        ],
        faq: [
            { question: 'Does it connect to our analyzers?', answer: 'Yes. We support bi-directional communication with major analyzers from Roche, Beckman Coulter, Sysmex, Abbott, and more via serial, TCP/IP, or ASTM protocols.' },
            { question: 'How does auto-validation work?', answer: 'Define rules based on reference ranges, delta checks, and panic values. Results passing all rules are automatically validated, freeing technologists for critical review.' },
            { question: 'Is QC management included?', answer: 'Yes. Full Levey-Jennings charting with Westgard multi-rule analysis, lot management, and proficiency testing documentation.' },
            { question: 'Can external labs send results?', answer: 'Yes. Our partner portal allows external reference labs to upload results directly into the patient record with full traceability.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة المختبرات',
        productTagline: 'الدقة والسرعة والتتبع — من العينة إلى التقرير',
        productDescription: 'نظام معلومات مختبري شامل مصمم للمختبرات السريرية والمرجعية والبحثية مع تكامل أجهزة التحليل ومراقبة الجودة والتقارير الآلية.',
        heroFeatures: ['تكامل أجهزة التحليل', 'تصديق تلقائي', 'مراقبة الجودة', 'متوافق مع HL7/FHIR'],
        highlights: [{ label: 'لوحات الفحوصات', value: '+500' }, { label: 'تقليل TAT', value: '45%' }, { label: 'معدل الخطأ', value: '<0.1%' }],
        capabilities: [
            { title: 'ربط أجهزة التحليل', description: 'تكامل ثنائي الاتجاه مع أجهزة التحليل المختبرية لالتقاط النتائج تلقائيًا مما يقلل أخطاء الإدخال اليدوي إلى ما يقارب الصفر.', icon: CpuChipIcon },
            { title: 'تصديق ذكي', description: 'تصديق تلقائي قائم على القواعد مع فحوصات الفارق وتنبيهات القيم الحرجة وسير عمل الإشعارات.', icon: ClipboardDocumentCheckIcon },
            { title: 'ضمان الجودة', description: 'وحدة مراقبة جودة مدمجة مع مخططات ليفي-جينينغز وقواعد ويستجارد وإدارة اختبارات الكفاءة.', icon: BeakerIcon },
            { title: 'تحليلات متقدمة', description: 'تتبع وقت الاستجابة وتحليل عبء العمل واتجاهات حجم الاختبارات وتقارير الإيرادات لكل اختبار.', icon: ChartBarSquareIcon }
        ],
        features: [
            { category: 'إدارة العينات', items: ['استقبال العينات بالباركود', 'تتبع العينات وسلسلة الحيازة', 'التقسيم والتوزيع', 'إدارة معايير الرفض', 'المعالجة الدفعية'] },
            { category: 'الاختبارات والنتائج', items: ['تكامل أجهزة تحليل متعددة', 'محرك قواعد التصديق التلقائي', 'الاختبارات الانعكاسية والمتسلسلة', 'إشعارات القيم الحرجة', 'سجل النتائج والاتجاهات'] },
            { category: 'التقارير والامتثال', items: ['قوالب تقارير قابلة للتخصيص', 'تسليم النتائج إلكترونيًا', 'بوابة شركاء المختبر الخارجي', 'سجل التدقيق وإجراءات التشغيل', 'تصدير بيانات وزارة الصحة'] }
        ],
        workflow: [
            { step: '01', title: 'تقييم المختبر', description: 'تقييم قائمة الفحوصات وأجهزة التحليل وأحجام العمل ومتطلبات التكامل.' },
            { step: '02', title: 'تكامل الأجهزة', description: 'تهيئة الاتصال ثنائي الاتجاه مع الأجهزة ولوحات الفحوصات وقواعد التصديق.' },
            { step: '03', title: 'تحقق الموظفين', description: 'فترة اختبار متوازية مع فنيي المختبر للتحقق من الدقة وسير العمل.' },
            { step: '04', title: 'الإنتاج الكامل', description: 'الانتقال إلى الإنتاج الكامل مع مراقبة في الوقت الفعلي ودعم مراقبة الجودة المستمر.' }
        ],
        faq: [
            { question: 'هل يتصل بأجهزة التحليل لدينا؟', answer: 'نعم. ندعم الاتصال ثنائي الاتجاه مع الأجهزة الرئيسية من Roche و Beckman Coulter و Sysmex و Abbott عبر بروتوكولات Serial و TCP/IP و ASTM.' },
            { question: 'كيف يعمل التصديق التلقائي؟', answer: 'حدد القواعد بناءً على النطاقات المرجعية وفحوصات الفارق والقيم الحرجة. النتائج التي تجتاز جميع القواعد يتم تصديقها تلقائيًا.' },
            { question: 'هل إدارة الجودة مُضمّنة؟', answer: 'نعم. مخططات ليفي-جينينغز الكاملة مع تحليل قواعد ويستجارد المتعددة وإدارة الدُفعات وتوثيق اختبارات الكفاءة.' },
            { question: 'هل يمكن للمختبرات الخارجية إرسال النتائج؟', answer: 'نعم. تتيح بوابة الشركاء للمختبرات المرجعية الخارجية تحميل النتائج مباشرة في سجل المريض مع التتبع الكامل.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Shaybaadhka',
        productTagline: 'Saxnaanta, Xawaaraha, iyo La-socoshada — Muunada ilaa Warbixinta',
        productDescription: 'Nidaam LIS oo dhammaystiran oo loogu talagalay shaybaadhyada caafimaadka, tixraacaha, iyo cilmi-baarista oo leh isku-xirnaanta aaladaha, xakamaynta tayada, iyo warbixin toos ah.',
        heroFeatures: ['Isku-xirnaanta Aaladaha', 'Xaqiijinta Tooska ah', 'Xakamaynta Tayada', 'Diyaarka HL7/FHIR'],
        highlights: [{ label: 'Guutooyinka Baadhitaanka', value: '500+' }, { label: 'Dhimista TAT', value: '45%' }, { label: 'Heerka Qaladka', value: '<0.1%' }],
        capabilities: [
            { title: 'Khariidaynta Aaladaha', description: 'Isku-xirnaanta laba-dhinac ah oo leh aaladaha shaybaadhka si natiijada si toos ah loogu qabto, oo yaraynaya qaladaadka gelinta gacanta.', icon: CpuChipIcon },
            { title: 'Xaqiijinta Caqliga ah', description: 'Xaqiijin toos ah oo ku salaysan qawaaniinta oo leh hubinta farqiga, digniinaha qiimaha argagaxa, iyo socodka ogeysiisyada.', icon: ClipboardDocumentCheckIcon },
            { title: 'Dammaanad Qaynta Tayada', description: 'Qaybta QC ee dhismaha ku jirta oo leh jaantuska Levey-Jennings, qawaaniinta Westgard, iyo maaraynta tijaabada xirfadda.', icon: BeakerIcon },
            { title: 'Falanqayn Sare', description: 'La-socoshada waqtiga jawaabta, falanqaynta culayska shaqada, jihada mugga baadhitaanka, iyo dakhliga baadhitaan kasta.', icon: ChartBarSquareIcon }
        ],
        features: [
            { category: 'Maamulka Muunada', items: ['Qaabilaadda Barcode', 'Raadraacidda Muunadaha', 'Kala-qaybinta iyo Qaybinta', 'Maaraynta Shuruudaha Diidmada', 'Ka-shaqaynta Kooxeedka'] },
            { category: 'Baadhitaanka iyo Natiijooyinka', items: ['Isku-xirnaanta Aalado Badan', 'Mishiinka Xeerarka Xaqiijinta', 'Baadhitaanka Falcelinta', 'Ogeysiisyaha Qiimaha Muhiimka', 'Taariikhda Natiijooyinka'] },
            { category: 'Warbixinta iyo Waafajinta', items: ['Qaababka Warbixinta la Habeeyn karo', 'Geynta Natiijooyinka Elektaroonigga', 'Bawaabaadda Lammaanaha Dibadda', 'Raadraacidda Diiwaangelinta', 'Dhoofinta Xogta Wasaaradda'] }
        ],
        workflow: [
            { step: '01', title: 'Qiimaynta Shaybaadhka', description: 'Qiimeyn liiska baadhitaankaaga, aaladahaaga, mugga socodka shaqada, iyo baahiyaha isku-xirnaanta.' },
            { step: '02', title: 'Isku-xirnaanta Aaladaha', description: 'Habee isgaarsiinta laba-dhinac ee aaladaha, guutooyinka baadhitaanka, iyo qawaaniinta xaqiijinta.' },
            { step: '03', title: 'Xaqiijinta Shaqaalaha', description: 'Waqti baadhitaan la-socod ah oo leh farsameeyaha shaybaadhka si loo xaqiijiyo saxnaanta iyo socodka.' },
            { step: '04', title: 'Wax-soo-saarka Buuxa', description: 'U wareegista wax-soo-saarka buuxa oo leh la-socodka tooska ah iyo taageerida QC ee joogtada ah.' }
        ],
        faq: [
            { question: 'Ma ku xiraa aaladahayaga?', answer: 'Haa. Waxaan taageernaa isgaarsiinta laba-dhinac ee aaladaha waaweyn ee Roche, Beckman Coulter, Sysmex, iyo Abbott.' },
            { question: 'Sidee bay u shaqeysaa xaqiijinta tooska ah?', answer: 'Qeex qawaaniinta ku salaysan kala duwanaanshaha tixraaca, hubinta farqiga, iyo qiimaha argagaxa. Natiijooyinka dhaafta si toos ah ayaa loo xaqiijiyaa.' },
            { question: 'Maaraynta tayadu ma ku jirtaa?', answer: 'Haa. Jaantusyada Levey-Jennings ee dhammaystiran oo leh falanqaynta qawaaniinta Westgard iyo diiwaangelinta tijaabada xirfadda.' },
            { question: 'Shaybaadhyada dibadda ma diri karaan natiijooyinka?', answer: 'Haa. Bawaabaadda lammaanahu waxay u oggolaataa shaybaadhyada tixraaca dibadda inay si toos ah u geliyaan natiijooyinka diiwaanka bukaanka.' }
        ]
    }
};
