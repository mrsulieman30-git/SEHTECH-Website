import { IdentificationIcon, DocumentTextIcon, CheckBadgeIcon, FingerPrintIcon, FolderOpenIcon, PresentationChartLineIcon, ChatBubbleBottomCenterTextIcon, HeartIcon, PlusCircleIcon, DocumentPlusIcon, MicrophoneIcon, ClockIcon, BeakerIcon, ArrowPathIcon, CheckCircleIcon, DocumentMagnifyingGlassIcon, SignalIcon, DeviceTabletIcon, ViewfinderCircleIcon, ComputerDesktopIcon, CloudArrowUpIcon, DocumentChartBarIcon, FilmIcon, UserGroupIcon, ClipboardDocumentListIcon, BellAlertIcon, ArrowTrendingUpIcon, ShieldCheckIcon, CalendarDaysIcon, BanknotesIcon, AcademicCapIcon, ExclamationTriangleIcon, QrCodeIcon, ChartPieIcon, ArchiveBoxIcon, CreditCardIcon, BoltIcon, TruckIcon, ClipboardDocumentCheckIcon, UserPlusIcon, CameraIcon, CurrencyDollarIcon, FolderIcon, UserIcon, LockClosedIcon, ScaleIcon, UserMinusIcon, ReceiptPercentIcon, CalculatorIcon, FunnelIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

export const modulesData = {
    'patient-administration': {
        icon: IdentificationIcon,
        hero: {
            title: { EN: 'Patient Administration', AR: 'إدارة المرضى', SO: 'Maamulka Bukaanka' },
            description: { 
                EN: 'The foundation of your hospital. Manage patient registrations, EMR, and insurance effortlessly.', 
                AR: 'أساس مستشفاك. إدارة تسجيلات المرضى والسجلات الطبية الإلكترونية وملفات التأمين بسهولة.', 
                SO: 'Saldhigga isbitaalkaaga. Maamul diiwaangelinta bukaanada, diiwaanka caafimaadka, iyo caymiska si sahlan.' 
            }
        },
        features: [
            { icon: IdentificationIcon, title: { EN: 'Digital Registration', AR: 'التسجيل الرقمي', SO: 'Diiwaangelin Dhijitaal ah' }, description: { EN: 'Capture demographics and history.', AR: 'تسجيل البيانات الديموغرافية والتاريخ المرضي.', SO: 'Diiwaangeli xogta shakhsiga iyo taariikhda caafimaadka.' } },
            { icon: CheckBadgeIcon, title: { EN: 'Insurance Verification', AR: 'التحقق من التأمين', SO: 'Xaqiijinta Caymiska' }, description: { EN: 'Verify patient coverage and co-pays.', AR: 'التحقق من تغطية المريض والمدفوعات المشتركة.', SO: 'Hubi caymiska bukaanka iyo lacagaha la wadaago.' } },
            { icon: FingerPrintIcon, title: { EN: 'Biometric ID', AR: 'الهوية البيومترية', SO: 'Aqoonsiga Biyometrigga' }, description: { EN: 'Ensure accurate patient identification.', AR: 'ضمان التحديد الدقيق لهوية المريض.', SO: 'Xaqiiji in bukaanka si sax ah loo aqoonsado.' } },
            { icon: FolderOpenIcon, title: { EN: 'EMR Management', AR: 'إدارة السجلات الطبية', SO: 'Maamulka EMR' }, description: { EN: 'Centralized electronic medical records.', AR: 'سجلات طبية إلكترونية مركزية.', SO: 'Diiwaanka caafimaadka ee elektaroonigga ah oo hal meel ah.' } },
            { icon: ClockIcon, title: { EN: 'Appointment Scheduling', AR: 'جدولة المواعيد', SO: 'Jadwalka Ballamaha' }, description: { EN: 'Manage doctor calendars and slots.', AR: 'إدارة جداول الأطباء والمواعيد المتاحة.', SO: 'Maamul jadwalka dhakhaatiirta iyo waqtiyada banaan.' } },
            { icon: PresentationChartLineIcon, title: { EN: 'Patient Portal', AR: 'بوابة المريض', SO: 'Barta Bukaanka' }, description: { EN: 'Allow patients to view their history.', AR: 'السماح للمرضى بمشاهدة تاريخهم المرضي.', SO: 'U oggolow bukaanada inay arkaan taariikhdooda.' } }
        ],
        views: [
            { filename: 'patient-admin-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Patient flow overview.', AR: 'نظرة عامة على تدفق المرضى.', SO: 'Aragtida guud ee socodka bukaanka.' } },
            { filename: 'patient-admin-emr.png', title: { EN: 'EMR File', AR: 'ملف السجل الطبي', SO: 'Faylka EMR' }, desc: { EN: 'Comprehensive medical history.', AR: 'تاريخ طبي شامل.', SO: 'Taariikh caafimaad oo dhamaystiran.' } }
        ]
    },
    'opd-consultations': {
        icon: ChatBubbleBottomCenterTextIcon,
        hero: {
            title: { EN: 'OPD & Consultations', AR: 'العيادات الخارجية والاستشارات', SO: 'OPD & La-tashiga' },
            description: { EN: 'Manage outpatient queues, record vitals, and capture clinical consultation notes digitally.', AR: 'إدارة طوابير العيادات الخارجية وتسجيل العلامات الحيوية رقمياً.', SO: 'Maamul safafka bukaan-socodka, diiwaan geli xogta muhiimka ah si dhijitaal ah.' }
        },
        features: [
            { icon: ClockIcon, title: { EN: 'Queue Management', AR: 'إدارة الطوابير', SO: 'Maamulka Safafka' }, description: { EN: 'Live patient tracking.', AR: 'تتبع المرضى المباشر.', SO: 'Dabagalka tooska ah ee bukaanka.' } },
            { icon: HeartIcon, title: { EN: 'Vitals Capture', AR: 'تسجيل العلامات الحيوية', SO: 'Qabashada Xogta Muhiimka ah' }, description: { EN: 'Record BP, Temp, HR.', AR: 'تسجيل ضغط الدم والحرارة ونبض القلب.', SO: 'Diiwaangeli BP, kulaylka, garaaca wadnaha.' } },
            { icon: DocumentPlusIcon, title: { EN: 'Clinical Notes', AR: 'الملاحظات السريرية', SO: 'Qoraalada Kiliinikada' }, description: { EN: 'Digital charting for doctors.', AR: 'تدوين رقمي للأطباء.', SO: 'Qorista dhijitaalka ah ee dhakhaatiirta.' } },
            { icon: MicrophoneIcon, title: { EN: 'Voice Dictation', AR: 'الإملاء الصوتي', SO: 'Cod ku Qoris' }, description: { EN: 'Speech-to-text notes.', AR: 'تحويل الكلام إلى نص.', SO: 'U bedel codka qoraal.' } },
            { icon: BeakerIcon, title: { EN: 'e-Prescribing', AR: 'الوصفات الإلكترونية', SO: 'Daawo Qorista Elektaroonigga' }, description: { EN: 'Send meds directly to pharmacy.', AR: 'إرسال الأدوية مباشرة للصيدلية.', SO: 'Toos ugu dir daawada farmashiyaha.' } },
            { icon: BeakerIcon, title: { EN: 'Lab Orders', AR: 'طلبات المختبر', SO: 'Dalabaadka Shaybaarka' }, description: { EN: 'Order tests seamlessly.', AR: 'طلب الفحوصات بسلاسة.', SO: 'Dalbo baaritaano si fudud.' } }
        ],
        views: [
            { filename: 'opd-consultation-dashboard.png', title: { EN: 'Queue Screen', AR: 'شاشة الطابور', SO: 'Shaashadda Safka' }, desc: { EN: 'Waiting list view.', AR: 'عرض قائمة الانتظار.', SO: 'Muuqaalka liiska sugitaanka.' } },
            { filename: 'opd-clinical-notes.png', title: { EN: 'Doctor Notes', AR: 'ملاحظات الطبيب', SO: 'Qoraalada Dhaqtarka' }, desc: { EN: 'Consultation interface.', AR: 'واجهة الاستشارة.', SO: 'Wajiga la-tashiga.' } }
        ]
    },
    'laboratory-integration': {
        icon: BeakerIcon,
        hero: {
            title: { EN: 'Laboratory Integration', AR: 'تكامل المختبر', SO: 'Isku-xirka Shaybaarka' },
            description: { EN: 'Integrated lab workflow from sample collection to automated analyzer results.', AR: 'سير عمل مختبر متكامل من جمع العينات إلى النتائج الآلية.', SO: 'Hanaanka shaqada shaybaarka ee isku dhafan min ururinta tijaabada ilaa natiijooyin toos ah.' }
        },
        features: [
            { icon: BeakerIcon, title: { EN: 'Sample Tracking', AR: 'تتبع العينات', SO: 'Dabagalka Tijaabada' }, description: { EN: 'Barcode-based tracking.', AR: 'تتبع بالباركود.', SO: 'Dabagalka ku salaysan Barcode.' } },
            { icon: SignalIcon, title: { EN: 'Analyzer Interface', AR: 'واجهة أجهزة التحليل', SO: 'Isku-xirka Qalabka' }, description: { EN: 'Direct HL7 integration.', AR: 'تكامل مباشر عبر HL7.', SO: 'Isku-xirka tooska ah ee HL7.' } },
            { icon: CheckCircleIcon, title: { EN: 'Result Verification', AR: 'التحقق من النتائج', SO: 'Xaqiijinta Natiijada' }, description: { EN: 'Two-step approval.', AR: 'موافقة من خطوتين.', SO: 'Oggolaanshaha laba-tilaabo ah.' } },
            { icon: ArrowPathIcon, title: { EN: 'Auto-Reporting', AR: 'التقارير التلقائية', SO: 'Warbixin Toos ah' }, description: { EN: 'Send results to EMR.', AR: 'إرسال النتائج للسجل الطبي.', SO: 'U dir natiijooyinka EMR.' } },
            { icon: ShieldCheckIcon, title: { EN: 'Quality Control', AR: 'مراقبة الجودة', SO: 'Xakamaynta Tayada' }, description: { EN: 'Levy-Jennings charts.', AR: 'مخططات ليفي جينينغز.', SO: 'Shaxanka Levy-Jennings.' } },
            { icon: ArchiveBoxIcon, title: { EN: 'Reagent Inventory', AR: 'مخزون الكواشف', SO: 'Kaydka Kiimikada' }, description: { EN: 'Track lab supplies.', AR: 'تتبع مستلزمات المختبر.', SO: 'Dabagal agabka shaybaarka.' } }
        ],
        views: [
            { filename: 'lab-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Laboratory overview.', AR: 'نظرة عامة على المختبر.', SO: 'Guudmarka shaybaarka.' } },
            { filename: 'lab-patient-monitor.png', title: { EN: 'Patient Monitor', AR: 'مراقبة المريض', SO: 'Kormeerka Bukaanka' }, desc: { EN: 'Track patient status.', AR: 'تتبع حالة المريض.', SO: 'Dabagal xaalada bukaanka.' } },
            { filename: 'lab-staff-monitor.png', title: { EN: 'Staff Monitor', AR: 'مراقبة الموظفين', SO: 'Kormeerka Shaqaalaha' }, desc: { EN: 'Staff assignments.', AR: 'مهام الموظفين.', SO: 'Hawlaha shaqaalaha.' } },
            { filename: 'lab-sample-collection.png', title: { EN: 'Collection', AR: 'جمع العينات', SO: 'Ururinta' }, desc: { EN: 'Sample intake.', AR: 'استقبال العينات.', SO: 'Helitaanka tijaabada.' } },
            { filename: 'lab-tube-barcode.png', title: { EN: 'Barcoding', AR: 'الباركود', SO: 'Barcode-ka' }, desc: { EN: 'Tube labeling.', AR: 'تسمية الأنابيب.', SO: 'Calaamadaynta tubada.' } },
            { filename: 'lab-result-entry.png', title: { EN: 'Results Entry', AR: 'إدخال النتائج', SO: 'Galinta Natiijada' }, desc: { EN: 'Manual & auto entry.', AR: 'إدخال يدوي وآلي.', SO: 'Galin gacan iyo toos ah.' } },
            { filename: 'lab-verification.png', title: { EN: 'Verification', AR: 'التحقق', SO: 'Xaqiijinta' }, desc: { EN: 'Result approval.', AR: 'الموافقة على النتائج.', SO: 'Oggolaanshaha natiijada.' } },
            { filename: 'lab-history.png', title: { EN: 'History', AR: 'التاريخ', SO: 'Taariikhda' }, desc: { EN: 'Patient history.', AR: 'التاريخ المرضي.', SO: 'Taariikhda bukaanka.' } }
        ]
    },
    'radiology-imaging': {
        icon: ViewfinderCircleIcon,
        hero: {
            title: { EN: 'Radiology & Imaging', AR: 'الأشعة والتصوير', SO: 'Raajada & Sawirida' },
            description: { EN: 'Direct integration for X-rays, MRI, and CT scans with embedded DICOM viewing.', AR: 'تكامل مباشر وعرض DICOM للأشعة.', SO: 'Isku-xirka tooska ah ee Raajada iyo daawashada DICOM.' }
        },
        features: [
            { icon: FilmIcon, title: { EN: 'PACS Integration', AR: 'تكامل PACS', SO: 'Isku-xirka PACS' }, description: { EN: 'Store and retrieve images.', AR: 'تخزين واسترجاع الصور.', SO: 'Kaydi oo soo qaado sawirada.' } },
            { icon: DeviceTabletIcon, title: { EN: 'DICOM Viewer', AR: 'عارض DICOM', SO: 'Daawashada DICOM' }, description: { EN: 'Web-based image review.', AR: 'مراجعة الصور عبر الويب.', SO: 'Dib-u-eegida sawirka ee webka.' } },
            { icon: DocumentChartBarIcon, title: { EN: 'Structured Reports', AR: 'تقارير منظمة', SO: 'Warbixin Habaysan' }, description: { EN: 'Radiologist templates.', AR: 'قوالب أطباء الأشعة.', SO: 'Tusaalooyinka dhaqtarka raajada.' } },
            { icon: ClockIcon, title: { EN: 'Turnaround Tracking', AR: 'تتبع وقت الإنجاز', SO: 'Dabagalka Waqtiga' }, description: { EN: 'Monitor reporting times.', AR: 'مراقبة أوقات الإبلاغ.', SO: 'Kormeer waqtiyada warbixinta.' } },
            { icon: CloudArrowUpIcon, title: { EN: 'Image Sharing', AR: 'مشاركة الصور', SO: 'Wadaagista Sawirka' }, description: { EN: 'Secure portal links.', AR: 'روابط بوابة آمنة.', SO: 'Xiriirinta badbaadada leh.' } },
            { icon: CheckBadgeIcon, title: { EN: 'Critical Alerts', AR: 'تنبيهات حرجة', SO: 'Digniinaha Muhiimka ah' }, description: { EN: 'Notify ER immediately.', AR: 'إخطار الطوارئ فوراً.', SO: 'La socodsii ER si degdeg ah.' } }
        ],
        views: [
            { filename: 'radiology-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Modality schedule.', AR: 'جدول الأجهزة.', SO: 'Jadwalka qalabka.' } },
            { filename: 'radiology-scheduling.png', title: { EN: 'Scheduling', AR: 'الجدولة', SO: 'Jadwalka' }, desc: { EN: 'Appointment slots.', AR: 'مواعيد الحجز.', SO: 'Waqtiyada ballanta.' } },
            { filename: 'radiology-dicom.png', title: { EN: 'DICOM Viewer', AR: 'عارض الصور', SO: 'Daawashada DICOM' }, desc: { EN: 'Zero-footprint viewer.', AR: 'عارض بدون تثبيت.', SO: 'Daawade fudud.' } },
            { filename: 'radiology-report.png', title: { EN: 'Reporting', AR: 'كتابة التقرير', SO: 'Warbixinta' }, desc: { EN: 'Dictation interface.', AR: 'واجهة الإملاء.', SO: 'Wajiga qorista.' } }
        ]
    },
    'ipd-nursing': {
        icon: UserGroupIcon,
        hero: {
            title: { EN: 'IPD & Nursing', AR: 'الأقسام الداخلية والتمريض', SO: 'IPD & Kalkaalisada' },
            description: { EN: 'Inpatient department management, bed allocation, and nursing notes.', AR: 'إدارة الأقسام الداخلية وتخصيص الأسرة وملاحظات التمريض.', SO: 'Maamulka qaybta jiifka, qoondaynta sariirta, iyo qoraalada kalkaalisada.' }
        },
        features: [
            { icon: UserGroupIcon, title: { EN: 'Bed Management', AR: 'إدارة الأسرة', SO: 'Maamulka Sariirta' }, description: { EN: 'Visual ward allocation.', AR: 'تخصيص الأجنحة المرئي.', SO: 'Qoondaynta waadhka muuqda.' } },
            { icon: ClipboardDocumentListIcon, title: { EN: 'Nursing Notes', AR: 'ملاحظات التمريض', SO: 'Qoraalada Kalkaalisada' }, description: { EN: 'Shift handover logs.', AR: 'سجلات تسليم الورديات.', SO: 'Diiwaanada wareejinta shaqada.' } },
            { icon: BeakerIcon, title: { EN: 'e-MAR', AR: 'إعطاء الأدوية', SO: 'Bixinta Daawada' }, description: { EN: 'Medication administration.', AR: 'إدارة إعطاء الأدوية.', SO: 'Maamulka bixinta daawada.' } },
            { icon: HeartIcon, title: { EN: 'Vitals Monitoring', AR: 'مراقبة العلامات', SO: 'Kormeerka Xogta' }, description: { EN: 'Flowsheets for charts.', AR: 'مخططات للعلامات.', SO: 'Shaxda xogta muhiimka ah.' } },
            { icon: DocumentTextIcon, title: { EN: 'Doctor Rounds', AR: 'جولات الطبيب', SO: 'Kormeerka Dhaqtarka' }, description: { EN: 'Daily progress notes.', AR: 'ملاحظات التقدم اليومية.', SO: 'Qoraalada horumarka maalinlaha ah.' } },
            { icon: ArrowPathIcon, title: { EN: 'Discharge Planning', AR: 'خطة الخروج', SO: 'Qorshaynta Bixida' }, description: { EN: 'Streamlined checkout.', AR: 'تبسيط عملية الخروج.', SO: 'Habaynta bixida fudud.' } }
        ],
        views: [
            { filename: 'ipd-patient-cockpit.png', title: { EN: 'Patient Cockpit', AR: 'واجهة المريض', SO: 'Wajiga Bukaanka' }, desc: { EN: 'Centralized patient view.', AR: 'عرض مركزي لبيانات المريض.', SO: 'Aragtida dhexe ee bukaanka.' } },
            { filename: 'ipd-dashboard.png', title: { EN: 'IPD Dashboard', AR: 'لوحة الأقسام الداخلية', SO: 'Dashboard-ka IPD' }, desc: { EN: 'Ward overview and stats.', AR: 'نظرة عامة وإحصائيات الجناح.', SO: 'Guudmarka iyo xogta waadhka.' } },
            { filename: 'ipd-vitals-record.png', title: { EN: 'Vitals Record', AR: 'سجل العلامات الحيوية', SO: 'Diiwaanka Xogta Muhiimka ah' }, desc: { EN: 'Patient vitals tracking.', AR: 'تتبع العلامات الحيوية للمريض.', SO: 'Dabagalka xogta muhiimka ah.' } },
            { filename: 'ipd-predischarge-checklist.png', title: { EN: 'Pre-discharge Checklist', AR: 'قائمة ما قبل الخروج', SO: 'Liiska Hubinta Bixida' }, desc: { EN: 'Discharge readiness steps.', AR: 'خطوات الاستعداد للخروج.', SO: 'Talaabooyinka diyaar garowga bixida.' } },
            { filename: 'ipd-clinical-order.png', title: { EN: 'Clinical Orders', AR: 'الأوامر السريرية', SO: 'Dalabaadka Kiliinikada' }, desc: { EN: 'Direct physician orders.', AR: 'أوامر الطبيب المباشرة.', SO: 'Dalabaadka tooska ah ee dhaqtarka.' } },
            { filename: 'ipd-discharge-summary.png', title: { EN: 'Discharge Summary', AR: 'ملخص الخروج', SO: 'Soo Koobida Bixida' }, desc: { EN: 'Final clinical summary.', AR: 'الملخص السريري النهائي.', SO: 'Soo koobida kiliinikada ee ugu dambaysa.' } },
            { filename: 'ipd-nursing-station.png', title: { EN: 'Nursing Station', AR: 'محطة التمريض', SO: 'Xarunta Kalkaalisada' }, desc: { EN: 'Admitted patients list.', AR: 'قائمة المرضى المنومين.', SO: 'Liiska bukaanada la dhigay.' } },
            { filename: 'ipd-ward-settings.png', title: { EN: 'Ward Settings', AR: 'إعدادات الجناح', SO: 'Dejinta Waadhka' }, desc: { EN: 'Configuration for IPD wards.', AR: 'تكوين أجنحة التنويم.', SO: 'Habaynta waadhadhka IPD.' } }
        ]
    },
    'pharmacy-management': {
        icon: BeakerIcon,
        hero: {
            title: { EN: 'Pharmacy Management', AR: 'إدارة الصيدلية', SO: 'Maamulka Farmashiyaha' },
            description: { EN: 'Complete pharmacy solution with batch tracking, expiry alerts, and POS.', AR: 'حل صيدلية متكامل مع تنبيهات انتهاء الصلاحية ونقاط البيع.', SO: 'Xal farmashiye dhamaystiran oo leh digniinaha dhicitaanka iyo POS.' }
        },
        features: [
            { icon: BeakerIcon, title: { EN: 'Prescription Filling', AR: 'صرف الوصفات', SO: 'Buuxinta Daawada' }, description: { EN: 'Scan and dispense.', AR: 'مسح وصرف.', SO: 'Sawir oo bixi.' } },
            { icon: ExclamationTriangleIcon, title: { EN: 'Expiry Alerts', AR: 'تنبيهات الصلاحية', SO: 'Digniinaha Dhicitaanka' }, description: { EN: 'Prevent dispensing expired meds.', AR: 'منع صرف الأدوية المنتهية.', SO: 'Ka hortag bixinta daawada dhacday.' } },
            { icon: ShieldCheckIcon, title: { EN: 'Drug Interactions', AR: 'التفاعلات الدوائية', SO: 'Falcelinta Daawada' }, description: { EN: 'AI safety checks.', AR: 'فحوصات أمان بالذكاء الاصطناعي.', SO: 'Hubinta badbaadada AI.' } },
            { icon: QrCodeIcon, title: { EN: 'Batch Tracking', AR: 'تتبع الدفعات', SO: 'Dabagalka Dufcada' }, description: { EN: 'Traceability for recalls.', AR: 'التتبع لعمليات السحب.', SO: 'Dabagalka dib-u-celinta.' } },
            { icon: ArchiveBoxIcon, title: { EN: 'Inventory Auto-Order', AR: 'الطلب التلقائي للمخزون', SO: 'Dalabka Tooska ah' }, description: { EN: 'Restock below minimum.', AR: 'إعادة التخزين عند الحد الأدنى.', SO: 'Dib u buuxi marka ay yaraato.' } },
            { icon: CreditCardIcon, title: { EN: 'Pharmacy POS', AR: 'نقاط البيع', SO: 'POS Farmashiyaha' }, description: { EN: 'Retail pharmacy sales.', AR: 'مبيعات التجزئة للصيدلية.', SO: 'Iibka tafaariiqda farmashiyaha.' } }
        ],
        views: [
            { filename: 'pharmacy-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Sales and alerts.', AR: 'المبيعات والتنبيهات.', SO: 'Iibka iyo digniinaha.' } },
            { filename: 'pharmacy-dispensing.png', title: { EN: 'Dispensing', AR: 'الصرف', SO: 'Bixinta' }, desc: { EN: 'Prescription queue.', AR: 'طابور الوصفات.', SO: 'Safka daawooyinka.' } },
            { filename: 'pharmacy-inventory.png', title: { EN: 'Inventory', AR: 'المخزون', SO: 'Kaydka' }, desc: { EN: 'Stock by batch.', AR: 'المخزون حسب الدفعة.', SO: 'Kaydka dufcad ahaan.' } },
            { filename: 'pharmacy-pos.png', title: { EN: 'POS Terminal', AR: 'نقاط البيع', SO: 'Mashiinka POS' }, desc: { EN: 'Cashier interface.', AR: 'واجهة أمين الصندوق.', SO: 'Wajiga lacag qabata.' } }
        ]
    },
    'surgery-ot': {
        icon: BoltIcon, // Using Bolt/Heart as replacement for BoltIcon in data
        hero: {
            title: { EN: 'Surgery & OT', AR: 'الجراحة وغرف العمليات', SO: 'Qaliinka & OT' },
            description: { EN: 'Operating theater scheduling, anesthesia records, and post-op recovery tracking.', AR: 'جدولة غرف العمليات وسجلات التخدير وتتبع التعافي.', SO: 'Jadwalka qolka qaliinka, diiwaanka suuxinta, iyo dabagalka soo kabashada.' }
        },
        features: [
            { icon: CalendarDaysIcon, title: { EN: 'OT Scheduling', AR: 'جدولة العمليات', SO: 'Jadwalka OT' }, description: { EN: 'Manage theater slots.', AR: 'إدارة أوقات الغرف.', SO: 'Maamul waqtiyada qolka.' } },
            { icon: ClipboardDocumentListIcon, title: { EN: 'Surgical Safety', AR: 'أمان الجراحة', SO: 'Badbaadada Qaliinka' }, description: { EN: 'WHO checklist integration.', AR: 'تكامل قائمة منظمة الصحة العالمية.', SO: 'Isku-xirka liiska WHO.' } },
            { icon: HeartIcon, title: { EN: 'Anesthesia Records', AR: 'سجلات التخدير', SO: 'Diiwaanka Suuxinta' }, description: { EN: 'Intra-op vitals log.', AR: 'سجل العلامات أثناء الجراحة.', SO: 'Diiwaanka xogta qaliinka dhexdiisa.' } },
            { icon: DocumentPlusIcon, title: { EN: 'Operative Notes', AR: 'ملاحظات العملية', SO: 'Qoraalada Qaliinka' }, description: { EN: 'Surgeon documentation.', AR: 'توثيق الجراح.', SO: 'Dukumeentiga qaliinka.' } },
            { icon: ArchiveBoxIcon, title: { EN: 'Implants & Consumables', AR: 'الغرسات والمستهلكات', SO: 'Qalabka & Agabka' }, description: { EN: 'Track usage during surgery.', AR: 'تتبع الاستخدام أثناء الجراحة.', SO: 'Dabagal isticmaalka qaliinka.' } },
            { icon: ClockIcon, title: { EN: 'PACU Tracking', AR: 'تتبع الإفاقة', SO: 'Dabagalka Soo Kabashada' }, description: { EN: 'Post-op recovery flow.', AR: 'تدفق التعافي بعد الجراحة.', SO: 'Socodka soo kabashada.' } }
        ],
        views: [
            { filename: 'surgery-dashboard.png', title: { EN: 'OT Schedule', AR: 'جدول العمليات', SO: 'Jadwalka OT' }, desc: { EN: 'Daily operations calendar.', AR: 'تقويم العمليات اليومية.', SO: 'Kalandarka hawlgalada maalinlaha.' } },
            { filename: 'surgery-preop.png', title: { EN: 'Pre-Op', AR: 'قبل العملية', SO: 'Qaliinka Ka Hor' }, desc: { EN: 'Pre-operative clearance.', AR: 'التصريح قبل العملية.', SO: 'Oggolaanshaha qaliinka ka hor.' } },
            { filename: 'surgery-intraop.png', title: { EN: 'Intra-Op Notes', AR: 'أثناء العملية', SO: 'Qaliinka Dhexdiisa' }, desc: { EN: 'Surgical documentation.', AR: 'توثيق العملية.', SO: 'Dukumeentiga qaliinka.' } },
            { filename: 'surgery-pacu.png', title: { EN: 'PACU', AR: 'الإفاقة', SO: 'PACU' }, desc: { EN: 'Recovery tracking.', AR: 'تتبع التعافي.', SO: 'Dabagalka soo kabashada.' } }
        ]
    },
    'inventory-stock': {
        icon: ArchiveBoxIcon,
        hero: {
            title: { EN: 'Inventory & Stock', AR: 'المخزون والمستودعات', SO: 'Inventory-ga & Qalabka' },
            description: { EN: 'Hospital-wide consumables tracking, automated stockout alerts, and procurement.', AR: 'تتبع المستهلكات وتنبيهات نفاد المخزون التلقائية.', SO: 'Dabagalka agabka isbitaalka oo dhan, digniinaha alaab-go\'itaanka tooska ah.' }
        },
        features: [
            { icon: ArchiveBoxIcon, title: { EN: 'Multi-Store', AR: 'مستودعات متعددة', SO: 'Bakhaaro Badan' }, description: { EN: 'Manage sub-stores easily.', AR: 'إدارة المستودعات الفرعية بسهولة.', SO: 'Maamul bakhaarada hoose si fudud.' } },
            { icon: TruckIcon, title: { EN: 'Procurement', AR: 'المشتريات', SO: 'Iibka' }, description: { EN: 'Purchase orders and GRN.', AR: 'أوامر الشراء واستلام البضائع.', SO: 'Dalabaadka iibka iyo GRN.' } },
            { icon: ArrowPathIcon, title: { EN: 'Stock Transfer', AR: 'نقل المخزون', SO: 'Bedelka Kaydka' }, description: { EN: 'Move items between wards.', AR: 'نقل العناصر بين الأجنحة.', SO: 'U wareeji agabka waadhadhka.' } },
            { icon: ShieldCheckIcon, title: { EN: 'Expiry Control', AR: 'التحكم بالصلاحية', SO: 'Xakamaynta Dhicitaanka' }, description: { EN: 'FEFO stock rotation.', AR: 'تدوير المخزون FEFO.', SO: 'Wareejinta kaydka FEFO.' } },
            { icon: DocumentMagnifyingGlassIcon, title: { EN: 'Stock Audits', AR: 'جرد المخزون', SO: 'Hubinta Kaydka' }, description: { EN: 'Physical count adjustments.', AR: 'تعديلات العد الفعلي.', SO: 'Isbedelada tirinta jirka.' } },
            { icon: ChartPieIcon, title: { EN: 'Consumption Analytics', AR: 'تحليلات الاستهلاك', SO: 'Falanqaynta Isticmaalka' }, description: { EN: 'Track usage trends.', AR: 'تتبع اتجاهات الاستخدام.', SO: 'Dabagal isbedelada isticmaalka.' } }
        ],
        views: [
            { filename: 'inventory-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Stock alerts.', AR: 'تنبيهات المخزون.', SO: 'Digniinaha kaydka.' } },
            { filename: 'inventory-purchase.png', title: { EN: 'Procurement', AR: 'المشتريات', SO: 'Iibka' }, desc: { EN: 'PO generation.', AR: 'إنشاء أوامر الشراء.', SO: 'Abuurista PO.' } },
            { filename: 'inventory-stock.png', title: { EN: 'Stock Ledger', AR: 'سجل المخزون', SO: 'Diiwaanka Kaydka' }, desc: { EN: 'Item movement history.', AR: 'تاريخ حركة العناصر.', SO: 'Taariikhda dhaqdhaqaaqa agabka.' } },
            { filename: 'inventory-reports.png', title: { EN: 'Reports', AR: 'التقارير', SO: 'Warbixinada' }, desc: { EN: 'Consumption data.', AR: 'بيانات الاستهلاك.', SO: 'Xogta isticmaalka.' } }
        ]
    },
    'billing-finance': {
        icon: CreditCardIcon,
        hero: {
            title: { EN: 'Billing & Finance', AR: 'الفواتير والتمويل', SO: 'Biillka & Maaliyadda' },
            description: { EN: 'Automated invoice generation, POS, insurance claims, and revenue management.', AR: 'إنشاء فواتير آلي، نقاط البيع، ومعالجة مطالبات التأمين.', SO: 'Abuurista qaansheegta tooska ah, POS, iyo sheegashooyinka caymiska.' }
        },
        features: [
            { icon: DocumentTextIcon, title: { EN: 'Automated Invoicing', AR: 'فواتير تلقائية', SO: 'Qaansheegad Toos ah' }, description: { EN: 'Auto-generate from orders.', AR: 'إنشاء تلقائي من الطلبات.', SO: 'Si toos ah uga abuur dalabaadka.' } },
            { icon: BanknotesIcon, title: { EN: 'Cashier POS', AR: 'نقاط البيع لأمين الصندوق', SO: 'POS Lacag-qabata' }, description: { EN: 'Process payments fast.', AR: 'معالجة المدفوعات بسرعة.', SO: 'Si dhakhso ah u socodsii bixinta.' } },
            { icon: ReceiptPercentIcon, title: { EN: 'Insurance Claims', AR: 'مطالبات التأمين', SO: 'Sheegashada Caymiska' }, description: { EN: 'Manage co-pays and batches.', AR: 'إدارة المدفوعات والدفعات.', SO: 'Maamul lacagaha la wadaago.' } },
            { icon: CurrencyDollarIcon, title: { EN: 'Revenue Cycle', AR: 'دورة الإيرادات', SO: 'Wareegga Dakhliga' }, description: { EN: 'Track pending payments.', AR: 'تتبع المدفوعات المعلقة.', SO: 'Dabagal lacagaha sugaya.' } },
            { icon: CalculatorIcon, title: { EN: 'Corporate Billing', AR: 'فواتير الشركات', SO: 'Biilasha Shirkadaha' }, description: { EN: 'B2B invoicing logic.', AR: 'فواتير الشركات والأعمال.', SO: 'Mantiqa biilasha B2B.' } },
            { icon: ChartBarIcon, title: { EN: 'Financial Dashboards', AR: 'لوحات مالية', SO: 'Dashboard Maaliyadeed' }, description: { EN: 'Real-time daily collections.', AR: 'التحصيلات اليومية المباشرة.', SO: 'Uruurinta maalinlaha ah ee tooska ah.' } }
        ],
        views: [
            { filename: 'billing-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Revenue overview.', AR: 'نظرة عامة على الإيرادات.', SO: 'Guudmarka dakhliga.' } },
            { filename: 'billing-invoicing.png', title: { EN: 'Invoicing', AR: 'الفواتير', SO: 'Qaansheegadka' }, desc: { EN: 'Patient billing.', AR: 'فواتير المريض.', SO: 'Biilasha bukaanka.' } },
            { filename: 'billing-insurance.png', title: { EN: 'Insurance', AR: 'التأمين', SO: 'Caymiska' }, desc: { EN: 'Claims management.', AR: 'إدارة المطالبات.', SO: 'Maamulka sheegashada.' } },
            { filename: 'billing-pos.png', title: { EN: 'POS', AR: 'نقاط البيع', SO: 'POS' }, desc: { EN: 'Cashier terminal.', AR: 'محطة أمين الصندوق.', SO: 'Mashiinka lacag qabata.' } }
        ]
    },
    'reports-analytics': {
        icon: PresentationChartLineIcon,
        hero: {
            title: { EN: 'Reports & Analytics', AR: 'التقارير والتحليلات', SO: 'Warbixinnada & Analytics' },
            description: { EN: 'Track clinical KPIs, financial reports, and Ministry of Health data exports.', AR: 'تتبع مؤشرات الأداء السريرية وتصدير بيانات وزارة الصحة.', SO: 'La soco KPIs kiliinikada iyo dhoofinta xogta Wasaaradda Caafimaadka.' }
        },
        features: [
            { icon: ChartPieIcon, title: { EN: 'Clinical KPIs', AR: 'مؤشرات سريرية', SO: 'KPIs Kiliinikada' }, description: { EN: 'Patient outcomes and ALOS.', AR: 'نتائج المرضى ومدة الإقامة.', SO: 'Natiijooyinka bukaanka iyo ALOS.' } },
            { icon: ArrowTrendingUpIcon, title: { EN: 'Financial Analytics', AR: 'تحليلات مالية', SO: 'Falanqaynta Maaliyadda' }, description: { EN: 'Profitability and aging.', AR: 'الربحية وأعمار الديون.', SO: 'Faa\'iidada iyo da\'da deynta.' } },
            { icon: DocumentChartBarIcon, title: { EN: 'MOH Export', AR: 'تصدير لوزارة الصحة', SO: 'Dhoofinta MOH' }, description: { EN: 'Epidemiological reports.', AR: 'تقارير وبائية.', SO: 'Warbixinnada cudurada safmarka ah.' } },
            { icon: FunnelIcon, title: { EN: 'Custom Query', AR: 'استعلام مخصص', SO: 'Weydiin Khaas ah' }, description: { EN: 'Drag-and-drop report builder.', AR: 'منشئ تقارير بالسحب والإفلات.', SO: 'Dhisaha warbixinta jiid-iyo-tuur.' } },
            { icon: ChartBarIcon, title: { EN: 'Operational Metrics', AR: 'مقاييس التشغيل', SO: 'Cabbirrada Hawlgalka' }, description: { EN: 'Staff performance tracking.', AR: 'تتبع أداء الموظفين.', SO: 'Dabagalka waxqabadka shaqaalaha.' } },
            { icon: PresentationChartLineIcon, title: { EN: 'Automated Reports', AR: 'تقارير آلية', SO: 'Warbixin Toos ah' }, description: { EN: 'Scheduled email delivery.', AR: 'تسليم مجدول عبر البريد.', SO: 'Gaarsiinta iimaylka ee jadwalsan.' } }
        ],
        views: [
            { filename: 'reports-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Hospital overview.', AR: 'نظرة عامة على المستشفى.', SO: 'Guudmarka isbitaalka.' } },
            { filename: 'reports-clinical.png', title: { EN: 'Clinical', AR: 'السريرية', SO: 'Kiliinikada' }, desc: { EN: 'Disease prevalence.', AR: 'انتشار الأمراض.', SO: 'Faafida cudurka.' } },
            { filename: 'reports-financial.png', title: { EN: 'Financial', AR: 'المالية', SO: 'Maaliyadeed' }, desc: { EN: 'Revenue streams.', AR: 'مصادر الإيرادات.', SO: 'Isha dakhliga.' } },
            { filename: 'reports-export.png', title: { EN: 'Export', AR: 'التصدير', SO: 'Dhoofinta' }, desc: { EN: 'MOH data formatting.', AR: 'تنسيق بيانات وزارة الصحة.', SO: 'Qaabaynta xogta MOH.' } }
        ]
    },
    'emergency-triage': {
        icon: BoltIcon,
        hero: {
            title: { EN: 'Emergency & Triage', AR: 'الطوارئ والفرز', SO: 'Degdegga & Kala-saarka' },
            description: { EN: 'Rapid triage classification (ESI), critical care flowsheets, and ER bed management.', AR: 'التصنيف السريع للفرز وإدارة أسرة الطوارئ.', SO: 'Kala-saarida degdega ah iyo maamulka sariiraha ER.' }
        },
        features: [
            { icon: ExclamationTriangleIcon, title: { EN: 'Rapid Triage', AR: 'فرز سريع', SO: 'Kala-saarid Degdeg ah' }, description: { EN: 'ESI scoring and priority.', AR: 'تسجيل ESI والأولوية.', SO: 'Dhibcaha ESI iyo mudnaanta.' } },
            { icon: BoltIcon, title: { EN: 'ER Bed Management', AR: 'إدارة أسرة الطوارئ', SO: 'Maamulka Sariirta ER' }, description: { EN: 'Visual ED mapping.', AR: 'خريطة الطوارئ المرئية.', SO: 'Khariirada ED muuqata.' } },
            { icon: HeartIcon, title: { EN: 'Critical Flowsheets', AR: 'مخططات الحالات الحرجة', SO: 'Shaxda Xasaasiga ah' }, description: { EN: 'Dynamic vitals entry.', AR: 'إدخال ديناميكي للعلامات.', SO: 'Galinta xogta firfircoon.' } },
            { icon: TruckIcon, title: { EN: 'EMS Handover', AR: 'تسليم الإسعاف', SO: 'Wareejinta EMS' }, description: { EN: 'Pre-hospital data capture.', AR: 'التقاط البيانات قبل المستشفى.', SO: 'Qabashada xogta isbitaalka ka hor.' } },
            { icon: ClockIcon, title: { EN: 'TAT Tracking', AR: 'تتبع وقت الإنجاز', SO: 'Dabagalka TAT' }, description: { EN: 'Monitor ED wait times.', AR: 'مراقبة أوقات انتظار الطوارئ.', SO: 'Kormeer waqtiyada sugitaanka ED.' } },
            { icon: ClipboardDocumentCheckIcon, title: { EN: 'Disposition', AR: 'التصرف والخروج', SO: 'Bixida & Bedelida' }, description: { EN: 'Admit or discharge safely.', AR: 'دخول أو خروج بأمان.', SO: 'Aqbalid ama bixid badbaado leh.' } }
        ],
        views: [
            { filename: 'er-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Active ED patients.', AR: 'مرضى الطوارئ الحاليين.', SO: 'Bukaanada ED firfircoon.' } },
            { filename: 'er-triage.png', title: { EN: 'Triage', AR: 'الفرز', SO: 'Kala-saarida' }, desc: { EN: 'Intake classification.', AR: 'تصنيف الاستقبال.', SO: 'Kala-saarida gelitaanka.' } },
            { filename: 'er-flowsheet.png', title: { EN: 'Flowsheet', AR: 'مخطط التدفق', SO: 'Shaxda Socodka' }, desc: { EN: 'Continuous charting.', AR: 'مخطط مستمر.', SO: 'Shaxayn joogto ah.' } },
            { filename: 'er-discharge.png', title: { EN: 'Disposition', AR: 'التصرف', SO: 'Bixida' }, desc: { EN: 'Transfer workflows.', AR: 'سير عمل النقل.', SO: 'Hanaanka shaqo bedelka.' } }
        ]
    },
    'blood-bank': {
        icon: HeartIcon,
        hero: {
            title: { EN: 'Blood Bank', AR: 'بنك الدم', SO: 'Bangiga Dhiigga' },
            description: { EN: 'Complete vein-to-vein workflow: donor registration, typing, and cross-matching.', AR: 'سير عمل كامل: تسجيل المتبرعين، فصيلة الدم، واختبارات التوافق.', SO: 'Hanaan shaqo dhamaystiran: diiwaangelinta, nooca dhiigga, iyo is-waafajinta.' }
        },
        features: [
            { icon: UserPlusIcon, title: { EN: 'Donor Registration', AR: 'تسجيل المتبرعين', SO: 'Diiwaangelinta Deeq-bixiyaha' }, description: { EN: 'Screening and history.', AR: 'الفحص والتاريخ الطبي.', SO: 'Baaritaanka iyo taariikhda.' } },
            { icon: BeakerIcon, title: { EN: 'Blood Typing', AR: 'فصيلة الدم', SO: 'Nooca Dhiigga' }, description: { EN: 'ABO/Rh and serology.', AR: 'فصيلة الدم والأمصال.', SO: 'ABO/Rh iyo serology.' } },
            { icon: ClipboardDocumentListIcon, title: { EN: 'Component Separation', AR: 'فصل المكونات', SO: 'Kala-saarida Qaybaha' }, description: { EN: 'PRBCs, Platelets, FFP.', AR: 'فصل المكونات المختلفة.', SO: 'PRBCs, Platelets, FFP.' } },
            { icon: HeartIcon, title: { EN: 'Cross-Matching', AR: 'اختبارات التوافق', SO: 'Is-waafajinta' }, description: { EN: 'Digital compatibility tests.', AR: 'اختبارات التوافق الرقمية.', SO: 'Tijaabooyinka waafaqsanaanta.' } },
            { icon: ArchiveBoxIcon, title: { EN: 'Real-Time Inventory', AR: 'مخزون مباشر', SO: 'Kaydka Tooska ah' }, description: { EN: 'Monitor blood bag stock.', AR: 'مراقبة مخزون أكياس الدم.', SO: 'Kormeer kaydka bacda dhiigga.' } },
            { icon: ExclamationTriangleIcon, title: { EN: 'Transfusion Reactions', AR: 'تفاعلات نقل الدم', SO: 'Falcelinta Dhiig-shubida' }, description: { EN: 'Log adverse events.', AR: 'سجل الأحداث السلبية.', SO: 'Diiwaangeli dhacdooyinka xun.' } }
        ],
        views: [
            { filename: 'bloodbank-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Inventory levels.', AR: 'مستويات المخزون.', SO: 'Heerarka kaydka.' } },
            { filename: 'bloodbank-donor.png', title: { EN: 'Donor Form', AR: 'نموذج المتبرع', SO: 'Foomka Deeq-bixiyaha' }, desc: { EN: 'Questionnaire & vitals.', AR: 'الاستبيان والعلامات.', SO: 'Su\'aalaha & xogta.' } },
            { filename: 'bloodbank-inventory.png', title: { EN: 'Inventory', AR: 'المخزون', SO: 'Kaydka' }, desc: { EN: 'Blood bag tracking.', AR: 'تتبع أكياس الدم.', SO: 'Dabagalka bacda dhiigga.' } },
            { filename: 'bloodbank-crossmatch.png', title: { EN: 'Crossmatch', AR: 'التوافق', SO: 'Is-waafajin' }, desc: { EN: 'Compatibility testing.', AR: 'اختبار التوافق.', SO: 'Tijaabada waafaqsanaanta.' } },
            { filename: 'bloodbank-sticker.png', title: { EN: 'Sticker Print', AR: 'طباعة الملصق', SO: 'Daabacaadda Istaarada' }, desc: { EN: 'Transfusion cross-match tag.', AR: 'ملصق توافق نقل الدم.', SO: 'Calaamadda is-waafajinta shubista.' } }
        ]
    },
    'human-resources': {
        icon: UserGroupIcon,
        hero: {
            title: { EN: 'Human Resources', AR: 'الموارد البشرية', SO: 'Maamulka Shaqaalaha' },
            description: { EN: 'Manage hospital staff, attendance, duty rosters, payroll, and credentials.', AR: 'إدارة موظفي المستشفى والحضور والرواتب.', SO: 'Maamul shaqaalaha isbitaalka, imaanshaha, mushaharka, iyo shahaadooyinka.' }
        },
        features: [
            { icon: IdentificationIcon, title: { EN: 'Staff Profiles', AR: 'ملفات الموظفين', SO: 'Qaybaha Shaqaalaha' }, description: { EN: 'Detailed employee records.', AR: 'سجلات الموظفين التفصيلية.', SO: 'Diiwaanada shaqaalaha oo faahfaahsan.' } },
            { icon: CalendarDaysIcon, title: { EN: 'Attendance', AR: 'الحضور', SO: 'Imaanshaha' }, description: { EN: 'Biometric integration.', AR: 'تكامل البصمة البيومترية.', SO: 'Isku-xirka biyometrigga.' } },
            { icon: BanknotesIcon, title: { EN: 'Payroll', AR: 'الرواتب', SO: 'Mushaharka' }, description: { EN: 'Automated salary calculation.', AR: 'حساب الراتب الآلي.', SO: 'Xisaabinta mushaharka tooska ah.' } },
            { icon: AcademicCapIcon, title: { EN: 'Credentials', AR: 'الشهادات', SO: 'Shahaadooyinka' }, description: { EN: 'Track medical licenses.', AR: 'تتبع التراخيص الطبية.', SO: 'Dabagal shatiyada caafimaadka.' } },
            { icon: UserGroupIcon, title: { EN: 'Duty Rosters', AR: 'جداول المهام', SO: 'Jadwalka Shaqada' }, description: { EN: 'Shift scheduling.', AR: 'جدولة الورديات.', SO: 'Jadwalka wareegga.' } },
            { icon: ChartPieIcon, title: { EN: 'HR Analytics', AR: 'تحليلات الموارد البشرية', SO: 'Falanqaynta HR' }, description: { EN: 'Turnover and costs.', AR: 'معدل الدوران والتكاليف.', SO: 'Bedelka iyo kharashyada.' } }
        ],
        views: [
            { filename: 'hr-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Staff overview.', AR: 'نظرة عامة على الموظفين.', SO: 'Guudmarka shaqaalaha.' } },
            { filename: 'hr-staff.png', title: { EN: 'Directory', AR: 'الدليل', SO: 'Hagaha' }, desc: { EN: 'Employee list.', AR: 'قائمة الموظفين.', SO: 'Liiska shaqaalaha.' } },
            { filename: 'hr-attendance.png', title: { EN: 'Attendance', AR: 'الحضور', SO: 'Imaanshaha' }, desc: { EN: 'Timesheets and rosters.', AR: 'سجلات الوقت والجداول.', SO: 'Warqadaha waqtiga.' } },
            { filename: 'hr-payroll.png', title: { EN: 'Payroll', AR: 'الرواتب', SO: 'Mushaharka' }, desc: { EN: 'Salary generation.', AR: 'إنشاء الرواتب.', SO: 'Abuurista mushaharka.' } }
        ]
    },
    'dental-department': {
        icon: PlusCircleIcon,
        hero: {
            title: { EN: 'Dental Department', AR: 'قسم الأسنان', SO: 'Qeybta Ilkaha' },
            description: { EN: 'Dedicated dental charting module with odontograms and specialized billing.', AR: 'وحدة مخصصة لعيادات الأسنان مع رسم تفاعلي والفواتير المتخصصة.', SO: 'Qaybta shaxda ilkaha oo u gaar ah oo leh odontograms iyo biilal khaas ah.' }
        },
        features: [
            { icon: PlusCircleIcon, title: { EN: 'Odontogram', AR: 'رسم الأسنان', SO: 'Odontogram' }, description: { EN: 'Interactive 3D charting.', AR: 'تخطيط تفاعلي ثلاثي الأبعاد.', SO: 'Shaxayn 3D is-dhexgal ah.' } },
            { icon: ClockIcon, title: { EN: 'Scheduling', AR: 'الجدولة', SO: 'Jadwalka' }, description: { EN: 'Manage dentist chairs.', AR: 'إدارة كراسي الأسنان.', SO: 'Maamul kuraasta dhakhtarka.' } },
            { icon: DocumentTextIcon, title: { EN: 'Treatment Planning', AR: 'تخطيط العلاج', SO: 'Qorshaynta Daaweynta' }, description: { EN: 'Phased cost estimates.', AR: 'تقديرات التكلفة المرحلية.', SO: 'Qiyaasaha kharashka.' } },
            { icon: CameraIcon, title: { EN: 'Dental Imaging', AR: 'تصوير الأسنان', SO: 'Sawirida Ilkaha' }, description: { EN: 'Intraoral camera sync.', AR: 'مزامنة الكاميرا داخل الفم.', SO: 'Wada-shaqaynta kamarada afka.' } },
            { icon: CurrencyDollarIcon, title: { EN: 'Specialized Billing', AR: 'فواتير متخصصة', SO: 'Biilal Khaas ah' }, description: { EN: 'Handle dental insurance.', AR: 'التعامل مع تأمين الأسنان.', SO: 'Qabo caymiska ilkaha.' } },
            { icon: FolderIcon, title: { EN: 'EHR Integration', AR: 'تكامل السجلات', SO: 'Isku-xirka EHR' }, description: { EN: 'Access medical history.', AR: 'الوصول للتاريخ الطبي.', SO: 'Helitaanka taariikhda caafimaadka.' } }
        ],
        views: [
            { filename: 'dental-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Clinic overview.', AR: 'نظرة عامة على العيادة.', SO: 'Guudmarka kilinikada.' } },
            { filename: 'dental-odontogram.png', title: { EN: 'Odontogram', AR: 'رسم الأسنان', SO: 'Odontogram' }, desc: { EN: 'Tooth charting.', AR: 'تخطيط الأسنان.', SO: 'Shaxda ilkaha.' } },
            { filename: 'dental-xray.png', title: { EN: 'X-Rays', AR: 'الأشعة', SO: 'Raajada' }, desc: { EN: 'Dental imaging.', AR: 'تصوير الأسنان.', SO: 'Sawirida ilkaha.' } },
            { filename: 'dental-billing.png', title: { EN: 'Treatment Plan', AR: 'خطة العلاج', SO: 'Qorshaha Daaweynta' }, desc: { EN: 'Phased billing.', AR: 'فواتير مرحلية.', SO: 'Biilasha heerkaysan.' } }
        ]
    },
    'maternity-obstetrics': {
        icon: UserIcon,
        hero: {
            title: { EN: 'Maternity & Obstetrics', AR: 'الولادة والتوليد', SO: 'Umulista & Dhalmada' },
            description: { EN: 'Comprehensive maternal care: ANC tracking, digital partograph, and neonatal records.', AR: 'رعاية شاملة للأمومة: تتبع ما قبل الولادة، التخطيط للولادة، وسجلات حديثي الولادة.', SO: 'Daryeelka hooyada oo dhamaystiran: dabagalka ANC, partograph, iyo diiwaanka ilmaha.' }
        },
        features: [
            { icon: HeartIcon, title: { EN: 'Antenatal Care', AR: 'رعاية ما قبل الولادة', SO: 'Daryeelka ANC' }, description: { EN: 'Track pregnancy visits.', AR: 'تتبع زيارات الحمل.', SO: 'Dabagal booqashooyinka uurka.' } },
            { icon: ChartBarIcon, title: { EN: 'Partograph', AR: 'تخطيط الولادة', SO: 'Partograph' }, description: { EN: 'Digital labor tracking.', AR: 'تتبع المخاض الرقمي.', SO: 'Dabagalka foosha dhijitaalka ah.' } },
            { icon: UserIcon, title: { EN: 'Neonatal Records', AR: 'سجلات حديثي الولادة', SO: 'Diiwaanka Ilmaha Dhashay' }, description: { EN: 'APGAR and initial exams.', AR: 'اختبارات APGAR والفحوصات.', SO: 'APGAR iyo imtixaanada bilowga.' } },
            { icon: ShieldCheckIcon, title: { EN: 'High-Risk Alerts', AR: 'تنبيهات الحالات الخطرة', SO: 'Digniinaha Khatarta' }, description: { EN: 'Automated clinical warnings.', AR: 'تحذيرات سريرية آلية.', SO: 'Digniinaha kiliinikada tooska ah.' } },
            { icon: ClipboardDocumentCheckIcon, title: { EN: 'Postnatal Care', AR: 'رعاية ما بعد الولادة', SO: 'Daryeelka Umusha' }, description: { EN: 'Mother and baby follow-up.', AR: 'متابعة الأم والطفل.', SO: 'Dabagalka hooyada iyo ilmaha.' } },
            { icon: UserGroupIcon, title: { EN: 'Family Planning', AR: 'تنظيم الأسرة', SO: 'Qorshaynta Qoyska' }, description: { EN: 'Contraceptive counseling.', AR: 'استشارات وسائل منع الحمل.', SO: 'La-talinta ka hortagga uurka.' } }
        ],
        views: [
            { filename: 'maternity-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Maternity overview.', AR: 'نظرة عامة على جناح الولادة.', SO: 'Guudmarka umulista.' } },
            { filename: 'maternity-anc.png', title: { EN: 'ANC Form', AR: 'نموذج ما قبل الولادة', SO: 'Foomka ANC' }, desc: { EN: 'Pregnancy tracking.', AR: 'تتبع الحمل.', SO: 'Dabagalka uurka.' } },
            { filename: 'maternity-delivery.png', title: { EN: 'Delivery', AR: 'الولادة', SO: 'Dhalmada' }, desc: { EN: 'Digital partograph.', AR: 'مخطط الولادة.', SO: 'Partograph dhijitaal ah.' } },
            { filename: 'maternity-neonatal.png', title: { EN: 'Neonatal', AR: 'حديثي الولادة', SO: 'Ilmaha Dhashay' }, desc: { EN: 'Newborn records.', AR: 'سجلات المولود الجديد.', SO: 'Diiwaanka ilmaha cusub.' } }
        ]
    },
    'mortuary-forensics': {
        icon: ArchiveBoxIcon,
        hero: {
            title: { EN: 'Mortuary & Forensics', AR: 'المشرحة والطب الشرعي', SO: 'Meydka & Baaritaanka' },
            description: { EN: 'Dignified body tracking, autopsy documentation, chain of custody, and reporting.', AR: 'تتبع محترم للجثث، توثيق التشريح، وسلسلة الحفظ.', SO: 'Dabagal sharaf leh ee meydka, dukumeentiga baaritaanka, iyo silsiladda xafidaanka.' }
        },
        features: [
            { icon: UserMinusIcon, title: { EN: 'Admissions', AR: 'الدخول', SO: 'Gelitaanka' }, description: { EN: 'Log deceased patients.', AR: 'تسجيل المرضى المتوفين.', SO: 'Diiwaangeli bukaanada dhintay.' } },
            { icon: ArchiveBoxIcon, title: { EN: 'Body Tracking', AR: 'تتبع الجثث', SO: 'Dabagalka Meydka' }, description: { EN: 'Cabinet assignment.', AR: 'تخصيص الثلاجات.', SO: 'Qoondaynta armaajooyinka.' } },
            { icon: DocumentTextIcon, title: { EN: 'Autopsy Notes', AR: 'ملاحظات التشريح', SO: 'Qoraalada Baaritaanka' }, description: { EN: 'Forensic findings.', AR: 'النتائج الطبية الشرعية.', SO: 'Natiijooyinka foreensiga.' } },
            { icon: LockClosedIcon, title: { EN: 'Chain of Custody', AR: 'سلسلة الحفظ', SO: 'Silsiladda Xafidaanka' }, description: { EN: 'Strict audit trails.', AR: 'مسارات تدقيق صارمة.', SO: 'Dabagal hubin adag.' } },
            { icon: ScaleIcon, title: { EN: 'Medico-Legal', AR: 'التقارير الشرعية', SO: 'Warbixinta Sharciga' }, description: { EN: 'Standardized reports.', AR: 'تقارير موحدة.', SO: 'Warbixino habaysan.' } },
            { icon: ClockIcon, title: { EN: 'Release', AR: 'التسليم', SO: 'Sii Daynta' }, description: { EN: 'Handover to next of kin.', AR: 'التسليم لأقارب المتوفى.', SO: 'Ku wareejinta qaraabada.' } }
        ],
        views: [
            { filename: 'mortuary-dashboard.png', title: { EN: 'Dashboard', AR: 'لوحة التحكم', SO: 'Dashboard' }, desc: { EN: 'Occupancy overview.', AR: 'إشغال المشرحة.', SO: 'Guudmarka buuxinta.' } },
            { filename: 'mortuary-register.png', title: { EN: 'Registration', AR: 'التسجيل', SO: 'Diiwaangelinta' }, desc: { EN: 'Admission log.', AR: 'سجل الدخول.', SO: 'Diiwaanka gelitaanka.' } },
            { filename: 'mortuary-autopsy.png', title: { EN: 'Autopsy', AR: 'التشريح', SO: 'Baaritaanka Meydka' }, desc: { EN: 'Forensic records.', AR: 'السجلات الشرعية.', SO: 'Diiwaanada foreensiga.' } },
            { filename: 'mortuary-release.png', title: { EN: 'Release', AR: 'التسليم', SO: 'Sii Daynta' }, desc: { EN: 'Chain of custody form.', AR: 'نموذج سلسلة الحفظ.', SO: 'Foomka silsiladda xafidaanka.' } }
        ]
    }
};
