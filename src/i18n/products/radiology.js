import { ServerIcon, CpuChipIcon, DocumentTextIcon, EyeIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Radiology Management System',
        productTagline: 'Precision Imaging Meets Intelligent Workflow',
        productDescription: 'A purpose-built radiology information system (RIS) that seamlessly manages imaging requests, PACS integration, and radiologist reporting.',
        heroFeatures: ['PACS Integration', 'DICOM Support', 'AI-Assisted Reads', 'Digital Reporting'],
        highlights: [{ label: 'Modalities', value: '12+' }, { label: 'Report Time', value: '-50%' }, { label: 'Accuracy', value: '99.5%' }],
        capabilities: [
            { title: 'PACS Integration', description: 'Seamless connection with Picture Archiving and Communication Systems for instant image access and storage.', icon: ServerIcon },
            { title: 'AI-Assisted Reading', description: 'DeepSeek AI integration for preliminary analysis, anomaly detection, and structured reporting suggestions.', icon: CpuChipIcon },
            { title: 'Digital Reporting', description: 'Template-based structured reporting with voice dictation support and automated findings categorization.', icon: DocumentTextIcon },
            { title: 'Multi-Modality Support', description: 'Unified workflow for X-Ray, CT, MRI, Ultrasound, Mammography, and all imaging modalities.', icon: EyeIcon }
        ],
        features: [
            { category: 'Imaging Workflow', items: ['Digital Imaging Requests', 'Modality Worklists (MWL)', 'Technologist Task Queue', 'Image Quality Verification', 'DICOM Storage & Retrieval'] },
            { category: 'Reporting & Analytics', items: ['Structured Report Templates', 'Critical Findings Alerts', 'Turnaround Time Tracking', 'Referring Physician Notifications'] },
            { category: 'Integration & Compliance', items: ['HL7/FHIR Messaging', 'EMR Integration', 'Radiation Dose Tracking', 'Regulatory Compliance Reports'] }
        ],
        workflow: [
            { step: '01', title: 'Site Assessment', description: 'Evaluate your imaging equipment, PACS setup, and radiologist workflow requirements.' },
            { step: '02', title: 'System Integration', description: 'Connect with your PACS, configure modality worklists, and set up report templates.' },
            { step: '03', title: 'Radiologist Training', description: 'Hands-on training for technologists and radiologists on the new digital workflow.' },
            { step: '04', title: 'Go Live & Optimize', description: 'Launch with parallel operation period, performance monitoring, and workflow refinement.' }
        ],
        faq: [
            { question: 'Does it integrate with existing PACS?', answer: 'Yes. Our RIS integrates with all major PACS systems using DICOM and HL7 standards for seamless image retrieval and storage.' },
            { question: 'Can radiologists dictate reports?', answer: 'Yes. The system supports structured templates with voice dictation integration for faster, more accurate reporting.' },
            { question: 'How does AI-assisted reading work?', answer: 'Our DeepSeek AI provides preliminary analysis flags for common findings, helping radiologists prioritize critical cases and reduce turnaround time.' },
            { question: 'Is radiation dose tracking included?', answer: 'Yes. The system automatically records radiation exposure per patient and per examination for regulatory compliance.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة الأشعة',
        productTagline: 'دقة التصوير تلتقي بسير العمل الذكي',
        productDescription: 'نظام معلومات أشعة (RIS) مصمم خصيصًا لإدارة طلبات التصوير وتكامل PACS وتقارير أطباء الأشعة بسلاسة.',
        heroFeatures: ['تكامل PACS', 'دعم DICOM', 'قراءة بمساعدة AI', 'تقارير رقمية'],
        highlights: [{ label: 'الأجهزة', value: '+12' }, { label: 'وقت التقرير', value: '-50%' }, { label: 'الدقة', value: '99.5%' }],
        capabilities: [
            { title: 'تكامل PACS', description: 'اتصال سلس مع أنظمة أرشفة الصور والاتصالات للوصول الفوري للصور وتخزينها.', icon: ServerIcon },
            { title: 'قراءة بمساعدة الذكاء الاصطناعي', description: 'تكامل DeepSeek AI للتحليل الأولي وكشف الحالات الشاذة واقتراحات التقارير المنظمة.', icon: CpuChipIcon },
            { title: 'تقارير رقمية', description: 'تقارير منظمة قائمة على القوالب مع دعم الإملاء الصوتي وتصنيف النتائج التلقائي.', icon: DocumentTextIcon },
            { title: 'دعم أجهزة متعددة', description: 'سير عمل موحد للأشعة السينية والتصوير المقطعي والرنين المغناطيسي والموجات فوق الصوتية وجميع أجهزة التصوير.', icon: EyeIcon }
        ],
        features: [
            { category: 'سير عمل التصوير', items: ['طلبات التصوير الرقمية', 'قوائم عمل الأجهزة (MWL)', 'طابور مهام الفنيين', 'التحقق من جودة الصور', 'تخزين واسترجاع DICOM'] },
            { category: 'التقارير والتحليلات', items: ['قوالب تقارير منظمة', 'تنبيهات النتائج الحرجة', 'تتبع وقت الاستجابة', 'إشعارات الطبيب المحيل'] },
            { category: 'التكامل والامتثال', items: ['رسائل HL7/FHIR', 'تكامل السجلات الطبية الإلكترونية', 'تتبع جرعة الإشعاع', 'تقارير الامتثال التنظيمي'] }
        ],
        workflow: [
            { step: '01', title: 'تقييم الموقع', description: 'تقييم أجهزة التصوير لديك وإعداد PACS ومتطلبات سير عمل أطباء الأشعة.' },
            { step: '02', title: 'تكامل النظام', description: 'الاتصال بـ PACS الخاص بك وتهيئة قوائم عمل الأجهزة وإعداد قوالب التقارير.' },
            { step: '03', title: 'تدريب أطباء الأشعة', description: 'تدريب عملي للفنيين وأطباء الأشعة على سير العمل الرقمي الجديد.' },
            { step: '04', title: 'التشغيل والتحسين', description: 'إطلاق مع فترة تشغيل متوازية ومراقبة الأداء وتحسين سير العمل.' }
        ],
        faq: [
            { question: 'هل يتكامل مع PACS الحالي؟', answer: 'نعم. يتكامل نظام RIS لدينا مع جميع أنظمة PACS الرئيسية باستخدام معايير DICOM و HL7 لاسترجاع وتخزين الصور بسلاسة.' },
            { question: 'هل يمكن لأطباء الأشعة إملاء التقارير؟', answer: 'نعم. يدعم النظام قوالب منظمة مع تكامل الإملاء الصوتي لتقارير أسرع وأكثر دقة.' },
            { question: 'كيف تعمل القراءة بمساعدة AI؟', answer: 'يوفر DeepSeek AI تحليلاً أوليًا للنتائج الشائعة، مما يساعد أطباء الأشعة على تحديد أولويات الحالات الحرجة وتقليل وقت الاستجابة.' },
            { question: 'هل تتبع جرعة الإشعاع مُضمّن؟', answer: 'نعم. يسجل النظام تلقائيًا التعرض للإشعاع لكل مريض ولكل فحص للامتثال التنظيمي.' }
        ]
    },
    SO: {
        productName: 'Nidaamka Maamulka Raajada',
        productTagline: 'Sawirka Saxda ah oo la kulma Socodka Caqliga ah',
        productDescription: 'Nidaam macluumaadka raajada (RIS) oo si gaar ah loo sameeyey si loo maareeyo dalabka sawirka, isku-xirnaanta PACS, iyo warbixinta dhakhtarka raajada.',
        heroFeatures: ['Isku-xirnaanta PACS', 'Taageerida DICOM', 'Akhrinta AI', 'Warbixinta Dijitaalka'],
        highlights: [{ label: 'Aaladaha', value: '12+' }, { label: 'Waqtiga Warbixinta', value: '-50%' }, { label: 'Saxnaanta', value: '99.5%' }],
        capabilities: [
            { title: 'Isku-xirnaanta PACS', description: 'Xiriir sahlan oo la leh Nidaamyada Kaydinta Sawirka iyo Isgaarsiinta si loo helo sawirrada isla markiiba.', icon: ServerIcon },
            { title: 'Akhrinta AI-ga Kaalmeysa', description: 'Isku-xirnaanta DeepSeek AI ee baadhista hordhaca ah, ogaanshaha waxqabadka aan caadiga ahayn, iyo soo jeedinta warbixinaha.', icon: CpuChipIcon },
            { title: 'Warbixinta Dijitaalka', description: 'Warbixin qaab-dhismeed oo ku salaysan template-yo oo leh taageerida cod-qorista iyo kala-soocista tooska ah.', icon: DocumentTextIcon },
            { title: 'Taageerida Qalab Badan', description: 'Socodka hawlaha oo mideysan oo X-Ray, CT, MRI, Ultrasound, iyo dhammaan aaladaha sawirka.', icon: EyeIcon }
        ],
        features: [
            { category: 'Socodka Sawirka', items: ['Dalabka Sawirka Dijitaalka', 'Liisaska Shaqada Aaladaha (MWL)', 'Safka Hawsha Farsameeyaha', 'Xaqiijinta Tayada Sawirka', 'Kaydinta iyo Soo-celinta DICOM'] },
            { category: 'Warbixinta iyo Falanqaynta', items: ['Qaababka Warbixinta', 'Digniinaaha Natiijooyinka Degdegga ah', 'La-socoshada Waqtiga Jawaabta', 'Ogeysiisyada Dhakhtarka Gudbiyo'] },
            { category: 'Isku-xirnaanta iyo Waafajinta', items: ['Fariimaha HL7/FHIR', 'Isku-xirnaanta EMR', 'La-socoshada Qadarka Raajada', 'Warbixinta Waafajinta Sharciga'] }
        ],
        workflow: [
            { step: '01', title: 'Qiimaynta Goobta', description: 'Qiimeyn qalabkaaga sawirka, dejinta PACS, iyo baahiyaha socodka dhakhtarka raajada.' },
            { step: '02', title: 'Isku-xirnaanta Nidaamka', description: 'Ku xir PACS-gaaga, habee liisaska shaqada aaladaha, oo dejiso qaababka warbixinta.' },
            { step: '03', title: 'Tababarka Dhakhaatiirta Raajada', description: 'Tababar gacanta ku haya farsameeyaha iyo dhakhaatiirta raajada socodka dijitaalka cusub.' },
            { step: '04', title: 'Bilaabista iyo Hagaajinta', description: 'Bilow oo leh waqti shaqo laba-geesood ah, la-socoshada waxqabadka, iyo hagaajinta socodka.' }
        ],
        faq: [
            { question: 'Ma isku-xiraa PACS-ka hadda jira?', answer: 'Haa. Nidaamka RIS-kayagu wuxuu isku-xiraa dhammaan nidaamyada PACS ee waaweyn isagoo isticmaalaya heerarka DICOM iyo HL7.' },
            { question: 'Dhakhaatiirta raajadu ma sheegi karaan warbixinta?', answer: 'Haa. Nidaamku wuxuu taageeryaa template-yo la habeeyey oo leh isku-xirnaanta cod-qorista si warbixin dhakhso ah oo sax ah loo helo.' },
            { question: 'Sidee bay u shaqeysaa akhrinta AI?', answer: 'DeepSeek AI wuxuu bixiyaa falanqayn hordhac ah oo natiijooyinka caadiga ah, taas oo ka caawisa dhakhaatiirta raajada inay mudnaanta siiyaan.' },
            { question: 'La-socoshada qadarka raajadu ma ku jiraa?', answer: 'Haa. Nidaamku si toos ah ayuu u diiwaangeliyaa saamaynta raajada bukaan kasta iyo baadhis kasta waafajinta sharciga awgeed.' }
        ]
    }
};
