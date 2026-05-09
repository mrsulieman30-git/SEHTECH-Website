import { BookOpenIcon, UsersIcon, AcademicCapIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline';

export default {
    EN: {
        productName: 'Quran School Management System',
        productTagline: 'Nurturing Knowledge, Managing Excellence',
        productDescription: 'A purpose-built management system for Quran schools, Madrasas, and Islamic educational institutions — handling student enrollment, Quran memorization tracking, and school operations.',
        heroFeatures: ['Hifz Tracking', 'Student Enrollment', 'Teacher Management', 'Parent Portal'],
        highlights: [{ label: 'Juz Tracking', value: '30' }, { label: 'Surah Tests', value: '114' }, { label: 'Languages', value: '3' }],
        capabilities: [
            { title: 'Hifz Progress Tracking', description: 'Detailed Quran memorization tracking with Juz-by-Juz progress, revision schedules, and Mutqin certification levels.', icon: BookOpenIcon },
            { title: 'Student Management', description: 'Complete enrollment system with student profiles, attendance tracking, behavior records, and parent communication.', icon: UsersIcon },
            { title: 'Academic Assessment', description: 'Tajweed evaluation, Hifz testing, and progress reports with customizable grading scales and certification.', icon: AcademicCapIcon },
            { title: 'Schedule Management', description: 'Class timetabling, teacher assignments, room allocation, and special event scheduling for the academic calendar.', icon: CalendarDaysIcon }
        ],
        features: [
            { category: 'Quran Education', items: ['Juz-by-Juz Progress Tracking', 'Tajweed Evaluation Records', 'Revision Schedule Management', 'Certification & Ijazah Tracking', 'Daily Sabaq Logging'] },
            { category: 'School Operations', items: ['Student Enrollment & Profiles', 'Attendance Management', 'Teacher Assignment & Scheduling', 'Parent Communication Portal', 'Fee Collection & Tracking'] },
            { category: 'Administration', items: ['Academic Calendar Management', 'Progress Report Generation', 'Scholarship & Aid Tracking', 'Multi-Branch Support', 'Annual Performance Analytics'] }
        ],
        workflow: [
            { step: '01', title: 'School Assessment', description: 'Understand your institution size, curriculum structure, and administrative needs.' },
            { step: '02', title: 'Curriculum Setup', description: 'Configure Hifz tracking levels, Tajweed criteria, grading scales, and academic calendar.' },
            { step: '03', title: 'Staff Onboarding', description: 'Train teachers and administrators on student tracking, attendance, and reporting tools.' },
            { step: '04', title: 'Community Launch', description: 'Roll out parent portal access with ongoing support and feature refinement.' }
        ],
        faq: [
            { question: 'Can I track individual student Hifz progress?', answer: 'Yes. The system tracks each student\'s memorization Juz-by-Juz, including new lessons (Sabaq), recent revision (Sabqi), and old revision (Manzil).' },
            { question: 'Does it support multiple branches?', answer: 'Absolutely. Each branch can be managed independently while central administration maintains oversight through consolidated reporting.' },
            { question: 'Can parents view their child\'s progress?', answer: 'Yes. The parent portal provides real-time access to Hifz progress, attendance records, and upcoming assessments — accessible via mobile.' },
            { question: 'Is the system available in Arabic?', answer: 'Yes. Full trilingual support in English, Arabic, and Somali — including RTL layout for Arabic.' }
        ]
    },
    AR: {
        productName: 'نظام إدارة مدارس القرآن',
        productTagline: 'رعاية العلم، إدارة التميز',
        productDescription: 'نظام إدارة مصمم خصيصًا لمدارس تحفيظ القرآن والمدارس الإسلامية — يتعامل مع تسجيل الطلاب وتتبع حفظ القرآن وعمليات المدرسة.',
        heroFeatures: ['تتبع الحفظ', 'تسجيل الطلاب', 'إدارة المعلمين', 'بوابة أولياء الأمور'],
        highlights: [{ label: 'تتبع الأجزاء', value: '30' }, { label: 'اختبارات السور', value: '114' }, { label: 'اللغات', value: '3' }],
        capabilities: [
            { title: 'تتبع تقدم الحفظ', description: 'تتبع مفصل لحفظ القرآن جزءًا بجزء مع جداول المراجعة ومستويات شهادة المتقن.', icon: BookOpenIcon },
            { title: 'إدارة الطلاب', description: 'نظام تسجيل كامل مع ملفات الطلاب وتتبع الحضور وسجلات السلوك والتواصل مع أولياء الأمور.', icon: UsersIcon },
            { title: 'التقييم الأكاديمي', description: 'تقييم التجويد واختبارات الحفظ وتقارير التقدم مع مقاييس تقييم قابلة للتخصيص والشهادات.', icon: AcademicCapIcon },
            { title: 'إدارة الجدول', description: 'جدولة الحصص وتعيين المعلمين وتخصيص الغرف وجدولة الأحداث الخاصة في التقويم الأكاديمي.', icon: CalendarDaysIcon }
        ],
        features: [
            { category: 'التعليم القرآني', items: ['تتبع التقدم جزءًا بجزء', 'سجلات تقييم التجويد', 'إدارة جدول المراجعة', 'تتبع الشهادات والإجازات', 'تسجيل السبق اليومي'] },
            { category: 'عمليات المدرسة', items: ['تسجيل الطلاب والملفات الشخصية', 'إدارة الحضور', 'تعيين المعلمين والجدولة', 'بوابة التواصل مع أولياء الأمور', 'تحصيل الرسوم وتتبعها'] },
            { category: 'الإدارة', items: ['إدارة التقويم الأكاديمي', 'إنشاء تقارير التقدم', 'تتبع المنح والمساعدات', 'دعم فروع متعددة', 'تحليلات الأداء السنوية'] }
        ],
        workflow: [
            { step: '01', title: 'تقييم المدرسة', description: 'فهم حجم مؤسستك وهيكل المنهج والاحتياجات الإدارية.' },
            { step: '02', title: 'إعداد المنهج', description: 'تهيئة مستويات تتبع الحفظ ومعايير التجويد ومقاييس التقييم والتقويم الأكاديمي.' },
            { step: '03', title: 'تأهيل الموظفين', description: 'تدريب المعلمين والإداريين على أدوات تتبع الطلاب والحضور والتقارير.' },
            { step: '04', title: 'إطلاق مجتمعي', description: 'تفعيل بوابة أولياء الأمور مع دعم مستمر وتحسين المزايا.' }
        ],
        faq: [
            { question: 'هل يمكنني تتبع تقدم حفظ كل طالب؟', answer: 'نعم. يتتبع النظام حفظ كل طالب جزءًا بجزء، بما في ذلك الدروس الجديدة (السبق) والمراجعة الحديثة (السبقي) والمراجعة القديمة (المنزل).' },
            { question: 'هل يدعم فروع متعددة؟', answer: 'بالتأكيد. يمكن إدارة كل فرع بشكل مستقل بينما تحتفظ الإدارة المركزية بالإشراف من خلال التقارير الموحدة.' },
            { question: 'هل يمكن لأولياء الأمور متابعة تقدم أبنائهم؟', answer: 'نعم. توفر بوابة أولياء الأمور وصولاً فوريًا لتقدم الحفظ وسجلات الحضور والتقييمات القادمة عبر الهاتف المحمول.' },
            { question: 'هل النظام متاح باللغة العربية؟', answer: 'نعم. دعم ثلاثي اللغات بالكامل بالإنجليزية والعربية والصومالية — بما في ذلك تخطيط RTL للعربية.' }
        ]
    },
    SO: {
        productName: "Nidaamka Maamulka Dugsiyadda Qur'aanka",
        productTagline: 'Barbarinta Aqoonta, Maaraynta Heerka Sare',
        productDescription: "Nidaam maarayn oo si gaar ah loo sameeyey dugsiyadda Qur'aanka, Madrasadaha, iyo hay'adaha waxbarashada Islaamiga — oo maamulaya diiwaangelinta ardayda, la-socoshada xifdiyadda Qur'aanka, iyo hawlaha dugsiga.",
        heroFeatures: ['La-socoshada Xifdiyadda', 'Diiwaangelinta Ardayda', 'Maamulka Macallimiinta', 'Bawaabaadda Waalidka'],
        highlights: [{ label: 'La-socoshada Juskii', value: '30' }, { label: 'Baadhitaanka Suuradaha', value: '114' }, { label: 'Luqadaha', value: '3' }],
        capabilities: [
            { title: "La-socoshada Horumarinta Xifdiyadda", description: "La-socodka faahfaahsan ee xifdiyadda Qur'aanka oo Jus-Jus ah oo leh jadwalka dib-u-eegista iyo heerarka shahaadada Mutqinka.", icon: BookOpenIcon },
            { title: 'Maamulka Ardayda', description: 'Nidaamka diiwaangelinta oo dhammaystiran oo leh profile-yada ardayda, la-socoshada imaanshaha, diiwaangelinta akhlaaqda, iyo xiriirka waalidka.', icon: UsersIcon },
            { title: 'Qiimaynta Tacliinta', description: 'Qiimaynta Tajwiidka, baadhitaanka xifdiyadda, iyo warbixinaha horumarinta oo leh miisaannada darajada la habeeyn karo iyo shahaadooyinka.', icon: AcademicCapIcon },
            { title: 'Maamulka Jadwalka', description: 'Jadwalka fasallada, hawlgelinta macallimiinta, qaybinta qolalka, iyo jadwalka xafladaha gaarka ah.', icon: CalendarDaysIcon }
        ],
        features: [
            { category: "Waxbarashada Qur'aanka", items: ['La-socoshada Horumarinta Jus-Jus', 'Diiwaangelinta Qiimaynta Tajwiidka', 'Maaraynta Jadwalka Dib-u-eegista', "La-socoshada Shahaadada iyo Ijaasada", 'Diiwaangelinta Sabaqii Maalinlaha ah'] },
            { category: 'Hawlaha Dugsiga', items: ['Diiwaangelinta Ardayda', 'Maamulka Imaanshaha', 'Jadwalka Macallimiinta', 'Bawaabaadda Xiriirka Waalidka', 'Ururinta iyo La-socoshada Kharashka'] },
            { category: 'Maamulka', items: ['Maamulka Taqwiimka Tacliinta', 'Sameynta Warbixinta Horumarinta', 'La-socoshada Deeqaha', 'Taageerida Laamaha Badan', 'Falanqaynta Waxqabadka Sannadlaha'] }
        ],
        workflow: [
            { step: '01', title: 'Qiimaynta Dugsiga', description: "Fahamka cabbirka hay'addaada, qaab-dhismeedka manhajka, iyo baahiyaha maamulka." },
            { step: '02', title: 'Dejinta Manhajka', description: 'Habaynta heerarka la-socoshada xifdiyadda, shuruudaha Tajwiidka, miisaannada darajada, iyo taqwiimka tacliinta.' },
            { step: '03', title: 'Soo Dhaweynta Shaqaalaha', description: 'Tababarka macallimiinta iyo maamulayaasha qalabka la-socoshada ardayda, imaanshaha, iyo warbixinta.' },
            { step: '04', title: 'Bilaabista Bulshada', description: 'Furista bawaabaadda waalidka oo leh taageero joogto ah iyo hagaajinta sifooyinka.' }
        ],
        faq: [
            { question: "Ma la-socon karaa horumarinta xifdiyadda arday kasta?", answer: "Haa. Nidaamku wuxuu la-socdaa xifdiyadda arday kasta oo Jus-Jus ah, oo ay ku jiraan cashiirrada cusub (Sabaqii), dib-u-eegista dhowaa (Sabqi), iyo dib-u-eegista hore (Manzil)." },
            { question: 'Ma taageeryaa laamo badan?', answer: 'Haa. Laamo kasta waxaa loo maarayn karaa si madax-bannaan halka maamulka dhexe uu haysto muuqaalka warbixinta mideysan.' },
            { question: "Waalidiintu ma arki karaan horumarinta ilmahooda?", answer: "Haa. Bawaabaadda waalidku waxay bixisaa gelitaan toos ah oo horumarinta xifdiyadda, diiwaannada imaanshaha, iyo qiimaynta soo socota — oo laga heli karo moobaylka." },
            { question: "Nidaamku ma ku jiraa Carabi?", answer: 'Haa. Taageerida saddex luqadood oo buuxa Ingiriisi, Carabi, iyo Soomaali — oo ay ku jirto qaab-dhismeedka RTL ee Carabiga.' }
        ]
    }
};
