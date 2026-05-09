<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { 
    CheckCircleIcon, 
    ArrowRightIcon,
    ChevronDownIcon,
    SparklesIcon,
    ShieldCheckIcon,
    BoltIcon,
    GlobeAltIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
    // ─── Product Identity ────────────────────────────
    productName: { type: String, required: true },
    productTagline: { type: String, default: '' },
    productDescription: { type: String, default: '' },
    productIcon: { type: Object, default: null },
    heroImage: { type: String, default: '' },
    
    // ─── Color Scheme ────────────────────────────────
    // Each product gets a unique accent color while maintaining the SEHTECH palette
    accentColor: { type: String, default: '#0D7377' },
    accentColorLight: { type: String, default: '#0D7377' },
    accentGradientFrom: { type: String, default: '#1A3C5E' },
    accentGradientTo: { type: String, default: '#0D7377' },
    heroBgClass: { type: String, default: '' },
    
    // ─── Content ─────────────────────────────────────
    heroFeatures: { 
        type: Array, 
        default: () => [
            'Offline-Ready', 
            'AI-Powered', 
            'Multi-Language'
        ] 
    },
    
    // Key highlights shown in the hero section
    highlights: {
        type: Array,
        default: () => [
            { label: 'Modules', value: '10+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Languages', value: '3' }
        ]
    },
    
    // Core capability cards
    capabilities: {
        type: Array,
        default: () => [
            { 
                title: 'Smart Dashboard', 
                description: 'Real-time analytics and KPIs at a glance with customizable widgets and automated reporting.',
                icon: SparklesIcon
            },
            { 
                title: 'Role-Based Access', 
                description: 'Granular user permissions with multi-level role hierarchy ensuring data security compliance.',
                icon: ShieldCheckIcon
            },
            { 
                title: 'Lightning Fast', 
                description: 'Built on modern architecture delivering sub-second response times even on low-bandwidth connections.',
                icon: BoltIcon
            },
            { 
                title: 'Multi-Language', 
                description: 'Full trilingual support in English, Arabic, and Somali with RTL layout adaptation.',
                icon: GlobeAltIcon
            }
        ]
    },
    
    // Feature list for the detailed section
    features: {
        type: Array,
        default: () => [
            {
                category: 'Core Operations',
                items: [
                    'Patient Registration & Records',
                    'Appointment Scheduling',
                    'Visit History Tracking',
                    'Insurance Management'
                ]
            },
            {
                category: 'Clinical Workflow',
                items: [
                    'Queue Management',
                    'Vital Signs Recording',
                    'Prescription Writing',
                    'Lab Order Integration'
                ]
            },
            {
                category: 'Administration',
                items: [
                    'Billing & Invoicing',
                    'Staff Management',
                    'Inventory Tracking',
                    'Financial Reports'
                ]
            }
        ]
    },
    
    // Module breakdown
    modules: {
        type: Array,
        default: () => []
    },
    
    // Workflow steps
    workflow: {
        type: Array,
        default: () => [
            { step: '01', title: 'Discovery Call', description: 'We assess your facility needs and current workflow challenges.' },
            { step: '02', title: 'Custom Setup', description: 'System configured to your departments, roles, and operational flow.' },
            { step: '03', title: 'Staff Training', description: 'On-site training ensuring every team member is confident and productive.' },
            { step: '04', title: 'Go Live & Support', description: 'Smooth launch with dedicated 24/7 support and continuous optimization.' }
        ]
    },

    // FAQ
    faq: {
        type: Array,
        default: () => [
            { question: 'Does this system work offline?', answer: 'Yes. Our PWA architecture ensures full functionality even without internet connectivity. Data syncs automatically when connection is restored.' },
            { question: 'How long does implementation take?', answer: 'Typical deployment takes 1-2 weeks depending on facility size. This includes configuration, data migration, and comprehensive staff training.' },
            { question: 'Is my data secure?', answer: 'Absolutely. Each facility gets an isolated instance with end-to-end encryption, role-based access control, and full audit trails.' },
            { question: 'What about ongoing support?', answer: 'We provide 24/7 technical support, regular system updates, and dedicated account management for all our clients.' }
        ]
    },

    // UI text translations (passed from parent)
    texts: {
        type: Object,
        default: () => ({
            badge: 'SEHTECH Product Suite',
            scheduleDemo: 'Schedule Demo',
            startTrial: 'Start Free Trial',
            viewAllProducts: 'View All Products',
            backToHome: '← Back to Home',
            coreCapabilities: 'Core Capabilities',
            capabilitiesTitle: 'Built for Real-World Impact',
            capabilitiesDesc: 'Every feature is designed with the operational realities of your facility in mind.',
            featureBreakdown: 'Feature Breakdown',
            featuresTitle: 'Everything Your Facility Needs',
            featuresDesc: 'A comprehensive suite of tools designed to streamline every aspect of your operations — from patient intake to financial reporting.',
            howItWorks: 'How It Works',
            workflowTitle: 'From Consultation to Go-Live',
            workflowDesc: 'A streamlined deployment process designed to get you operational with minimal disruption.',
            faqLabel: 'FAQ',
            faqTitle: 'Common Questions',
            ctaTitle: 'Ready to Transform Your Operations?',
            ctaDesc: 'Start your free 30-day trial today. No commitment, no setup fees. Just results.',
            performanceOverview: 'Performance Overview',
            hipaaReady: 'HIPAA Ready',
            complianceVerified: 'Compliance verified',
            worksOffline: 'Works Offline',
            pwaArchitecture: 'PWA Architecture',
        })
    }
});

// ─── Scroll animation observer ──────────────────────
let observer = null;
const activeFaq = ref(null);

const toggleFaq = (idx) => {
    activeFaq.value = activeFaq.value === idx ? null : idx;
};

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    setTimeout(() => {
        document.querySelectorAll('.product-reveal').forEach(el => {
            observer.observe(el);
        });
    }, 200);
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});

// Color style helpers
const heroGradientStyle = computed(() => ({
    background: `linear-gradient(135deg, ${props.accentGradientFrom} 0%, ${props.accentGradientTo} 50%, ${props.accentColor} 100%)`
}));

const accentBorderStyle = computed(() => ({
    borderColor: `${props.accentColor}33`
}));
</script>

<template>
    <div class="product-page-wrapper">
        
        <!-- ═══════════════ HERO SECTION ═══════════════ -->
        <header class="relative min-h-[85vh] flex items-center overflow-hidden">
            <!-- Background -->
            <div class="absolute inset-0 z-0" :style="heroGradientStyle">
                <!-- Mesh pattern -->
                <div class="absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
                <!-- Decorative orbs -->
                <div class="absolute top-20 right-20 w-[500px] h-[500px] rounded-full opacity-10" :style="`background: radial-gradient(circle, ${accentColor} 0%, transparent 70%);`"></div>
                <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" :style="`background: radial-gradient(circle, white 0%, transparent 70%);`"></div>
                <!-- Geometric shapes -->
                <div class="absolute top-1/4 right-[10%] w-32 h-32 border border-white/10 rounded-2xl rotate-12 hidden lg:block"></div>
                <div class="absolute bottom-1/3 right-[20%] w-20 h-20 border border-white/5 rounded-xl -rotate-6 hidden lg:block"></div>
                <div class="absolute top-1/3 left-[5%] w-16 h-16 border border-white/5 rounded-lg rotate-45 hidden lg:block"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 md:py-40">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <!-- Left Content -->
                    <div class="text-start animate-reveal">
                        <!-- Product badge -->
                        <div class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-wide border border-white/15 mb-8 backdrop-blur-sm">
                            <span class="w-2 h-2 rounded-full animate-pulse" :style="`background-color: ${accentColor};`"></span>
                            {{ texts.badge }}
                        </div>
                        
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
                            {{ productName }}
                        </h1>
                        
                        <p class="text-xl md:text-2xl text-white/70 mb-4 font-light leading-relaxed max-w-xl" v-if="productTagline">
                            {{ productTagline }}
                        </p>
                        
                        <p class="text-base text-white/50 mb-10 leading-relaxed max-w-lg" v-if="productDescription">
                            {{ productDescription }}
                        </p>

                        <!-- Hero feature pills -->
                        <div class="flex flex-wrap gap-3 mb-10">
                            <span 
                                v-for="feat in heroFeatures" 
                                :key="feat"
                                class="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-sm"
                            >
                                {{ feat }}
                            </span>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex flex-wrap gap-4">
                            <a 
                                href="https://wa.me/252905243072" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/20"
                            >
                                <svg class="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                                {{ texts.scheduleDemo }}
                                <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <router-link 
                                to="/" 
                                class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-md hover:border-white/40"
                            >
                                {{ texts.viewAllProducts }}
                            </router-link>
                        </div>
                    </div>

                    <!-- Right Side — Product Preview Card -->
                    <div class="hidden lg:block">
                        <div class="relative">
                            <!-- Floating card mockup -->
                            <div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8 shadow-2xl shadow-black/20">
                                <!-- Mock window chrome -->
                                <div class="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                                    <div class="w-3 h-3 rounded-full bg-red-400/70"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-400/70"></div>
                                    <div class="flex-1 mx-4">
                                        <div class="h-7 bg-white/10 rounded-lg flex items-center px-3">
                                            <span class="text-white/40 text-xs font-mono">sehtech.app</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Mock dashboard content -->
                                <div class="space-y-4">
                                    <!-- Stats row -->
                                    <div class="grid grid-cols-3 gap-3">
                                        <div v-for="(h, idx) in highlights" :key="idx" class="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                                            <p class="text-2xl font-extrabold text-white mb-1">{{ h.value }}</p>
                                            <p class="text-xs text-white/40 uppercase tracking-wider font-semibold">{{ h.label }}</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Mock chart area -->
                                    <div class="bg-white/5 rounded-xl p-5 border border-white/5">
                                        <div class="flex justify-between items-center mb-4">
                                            <span class="text-white/60 text-sm font-semibold">{{ texts.performanceOverview }}</span>
                                            <span class="text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-300 font-bold">↑ 24%</span>
                                        </div>
                                        <!-- Minimal chart bars -->
                                        <div class="flex items-end gap-2 h-24">
                                            <div v-for="h in [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]" :key="h" class="flex-1 rounded-t-sm transition-all duration-700 opacity-80" :style="`height: ${h}%; background: linear-gradient(to top, ${accentColor}88, ${accentColor}22);`"></div>
                                        </div>
                                    </div>

                                    <!-- Mock list items -->
                                    <div class="space-y-2">
                                        <div v-for="i in 3" :key="i" class="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                                            <div class="w-8 h-8 rounded-lg flex items-center justify-center" :style="`background: ${accentColor}22;`">
                                                <CheckCircleIcon class="w-5 h-5" :style="`color: ${accentColor};`" />
                                            </div>
                                            <div class="flex-1">
                                                <div class="h-3 bg-white/15 rounded-full w-3/4 mb-1.5"></div>
                                                <div class="h-2 bg-white/8 rounded-full w-1/2"></div>
                                            </div>
                                            <div class="w-16 h-6 rounded-md bg-white/5"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Floating badges -->
                            <div class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 animate-float">
                                <div class="w-10 h-10 rounded-xl flex items-center justify-center" :style="`background: ${accentColor}15;`">
                                    <ShieldCheckIcon class="w-6 h-6" :style="`color: ${accentColor};`" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">{{ texts.hipaaReady }}</p>
                                    <p class="text-[10px] text-gray-400 font-medium">{{ texts.complianceVerified }}</p>
                                </div>
                            </div>
                            
                            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 animate-float-delayed">
                                <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                    <BoltIcon class="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">{{ texts.worksOffline }}</p>
                                    <p class="text-[10px] text-gray-400 font-medium">{{ texts.pwaArchitecture }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom wave -->
            <div class="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" class="w-full h-20 fill-slate-50"><path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,85 L1440,120 L0,120 Z"></path></svg>
            </div>
        </header>

        <!-- ═══════════════ CAPABILITIES SECTION ═══════════════ -->
        <section class="py-24 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 product-reveal">
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <div class="w-12 h-1 rounded-full" :style="`background: linear-gradient(to right, transparent, ${accentColor});`"></div>
                        <h2 class="font-bold tracking-wide uppercase text-sm" :style="`color: ${accentColor};`">{{ texts.coreCapabilities }}</h2>
                        <div class="w-12 h-1 rounded-full" :style="`background: linear-gradient(to left, transparent, ${accentColor});`"></div>
                    </div>
                    <p class="mt-2 text-3xl md:text-5xl font-extrabold text-[#1A3C5E]">{{ texts.capabilitiesTitle }}</p>
                    <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{{ texts.capabilitiesDesc }}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div 
                        v-for="(cap, idx) in capabilities" 
                        :key="idx"
                        class="product-reveal bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-start relative overflow-hidden"
                        :style="`transition-delay: ${idx * 80}ms;`"
                    >
                        <!-- Top accent bar on hover -->
                        <div class="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" :style="`background: linear-gradient(to right, ${accentGradientFrom}, ${accentColor});`"></div>
                        
                        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" :style="`background: ${accentColor}12;`">
                            <component :is="cap.icon" class="w-8 h-8" :style="`color: ${accentColor};`" />
                        </div>
                        <h4 class="font-bold text-xl text-[#1A3C5E] mb-3">{{ cap.title }}</h4>
                        <p class="text-sm text-gray-600 leading-relaxed">{{ cap.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════ FEATURES BREAKDOWN ═══════════════ -->
        <section class="py-24 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <!-- Left — Heading & Description -->
                    <div class="product-reveal text-start sticky top-32">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-1 rounded-full" :style="`background: linear-gradient(to right, ${accentColor}, #E8A020);`"></div>
                            <h2 class="font-bold tracking-wide uppercase text-sm" :style="`color: ${accentColor};`">{{ texts.featureBreakdown }}</h2>
                        </div>
                        <h3 class="text-3xl md:text-4xl font-extrabold text-[#1A3C5E] mb-6 leading-tight">
                            {{ texts.featuresTitle }}
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-8">
                            {{ texts.featuresDesc }}
                        </p>
                        
                        <!-- Quick stat -->
                        <div class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                            <div class="grid grid-cols-3 gap-4">
                                <div v-for="(h, idx) in highlights" :key="idx" class="text-center">
                                    <p class="text-2xl font-extrabold" :style="`color: ${accentColor};`">{{ h.value }}</p>
                                    <p class="text-xs text-gray-500 uppercase font-semibold mt-1">{{ h.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right — Feature Categories -->
                    <div class="space-y-6">
                        <div 
                            v-for="(group, idx) in features" 
                            :key="idx"
                            class="product-reveal bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-500 text-start"
                            :style="`transition-delay: ${idx * 100}ms;`"
                        >
                            <div class="flex items-center gap-3 mb-5">
                                <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm" :style="`background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor});`">
                                    {{ String(idx + 1).padStart(2, '0') }}
                                </div>
                                <h4 class="text-xl font-bold text-[#1A3C5E]">{{ group.category }}</h4>
                            </div>
                            <ul class="space-y-3">
                                <li v-for="(item, i) in group.items" :key="i" class="flex items-center gap-3 group/item">
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition" :style="`background: ${accentColor}12;`">
                                        <CheckCircleIcon class="w-4 h-4" :style="`color: ${accentColor};`" />
                                    </div>
                                    <span class="text-gray-700 text-sm font-medium group-hover/item:text-gray-900 transition">{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════ DEPLOYMENT WORKFLOW ═══════════════ -->
        <section class="py-24 relative overflow-hidden" :style="`background: linear-gradient(135deg, ${accentGradientFrom} 0%, ${accentGradientTo} 100%);`">
            <!-- Decorative -->
            <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
            <div class="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full" :style="`background: radial-gradient(circle, ${accentColor} 0%, transparent 70%);`"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 product-reveal">
                    <h2 class="text-sm font-bold tracking-wide uppercase text-white/60 mb-4">{{ texts.howItWorks }}</h2>
                    <p class="text-3xl md:text-5xl font-extrabold text-white">{{ texts.workflowTitle }}</p>
                    <p class="mt-4 text-lg text-white/50 max-w-2xl mx-auto">{{ texts.workflowDesc }}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div 
                        v-for="(w, idx) in workflow" 
                        :key="idx"
                        class="product-reveal bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-start hover:bg-white/15 transition-all duration-500 group relative"
                        :style="`transition-delay: ${idx * 100}ms;`"
                    >
                        <!-- Step number -->
                        <span class="text-5xl font-black text-white/10 absolute top-4 right-6 group-hover:text-white/20 transition-colors">{{ w.step }}</span>
                        
                        <!-- Connector line (hidden on last) -->
                        <div v-if="idx < workflow.length - 1" class="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20"></div>
                        
                        <div class="relative z-10">
                            <div class="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span class="text-white font-bold text-lg">{{ w.step }}</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-3">{{ w.title }}</h4>
                            <p class="text-white/50 text-sm leading-relaxed">{{ w.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════ FAQ ═══════════════ -->
        <section class="py-24 bg-white" v-if="faq.length">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 product-reveal">
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <div class="w-12 h-1 rounded-full" :style="`background: linear-gradient(to right, transparent, ${accentColor});`"></div>
                        <h2 class="font-bold tracking-wide uppercase text-sm" :style="`color: ${accentColor};`">{{ texts.faqLabel }}</h2>
                        <div class="w-12 h-1 rounded-full" :style="`background: linear-gradient(to left, transparent, ${accentColor});`"></div>
                    </div>
                    <p class="mt-2 text-3xl font-extrabold text-[#1A3C5E]">{{ texts.faqTitle }}</p>
                </div>

                <div class="space-y-4">
                    <div 
                        v-for="(item, index) in faq" 
                        :key="index" 
                        class="product-reveal border border-slate-200 rounded-xl transition-all duration-300"
                        :class="activeFaq === index ? 'shadow-lg border-opacity-40' : 'hover:shadow-md'"
                        :style="activeFaq === index ? `border-color: ${accentColor}33; box-shadow: 0 10px 25px -5px ${accentColor}15;` : ''"
                    >
                        <button 
                            @click="toggleFaq(index)" 
                            class="w-full flex justify-between items-center p-6 bg-slate-50/50 hover:bg-slate-100/80 transition text-left focus:outline-none"
                            :class="activeFaq === index ? 'bg-opacity-50' : ''"
                            :style="activeFaq === index ? `background: ${accentColor}08;` : ''"
                        >
                            <span class="font-bold text-[#1A3C5E] text-lg">{{ item.question }}</span>
                            <ChevronDownIcon 
                                class="w-6 h-6 transition-transform duration-300 shrink-0 ml-4"
                                :style="`color: ${accentColor};`"
                                :class="{'rotate-180': activeFaq === index}" 
                            />
                        </button>
                        <div v-show="activeFaq === index" class="px-6 pb-6 bg-white text-gray-700 leading-relaxed text-start border-t border-slate-100">
                            <p class="pt-4 text-base text-gray-600">{{ item.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════ CTA SECTION ═══════════════ -->
        <section class="py-24 bg-slate-50 border-t border-slate-100">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center product-reveal">
                <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a1628] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
                    <!-- Decorative -->
                    <div class="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full" :style="`background: radial-gradient(circle, ${accentColor} 0%, transparent 70%);`"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 opacity-5 rounded-full" style="background: radial-gradient(circle, #E8A020 0%, transparent 70%);"></div>
                    
                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">{{ texts.ctaTitle }}</h2>
                        <p class="text-slate-400 text-lg mb-10 max-w-xl mx-auto">{{ texts.ctaDesc }}</p>
                        
                        <div class="flex flex-wrap items-center justify-center gap-4">
                            <a 
                                href="https://wa.me/252905243072" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30 group"
                            >
                                <svg class="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                                {{ texts.startTrial }}
                            </a>
                            <router-link 
                                to="/" 
                                class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition font-semibold"
                            >
                                {{ texts.backToHome }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
/* ═══ Product Page Animations ═══ */
.product-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.product-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
.animate-float {
    animation: float 4s ease-in-out infinite;
}
.animate-float-delayed {
    animation: float 4s ease-in-out infinite 1s;
}

@keyframes reveal {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-reveal { animation: reveal 0.8s ease-out forwards; }
</style>
