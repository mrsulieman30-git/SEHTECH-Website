<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { CheckCircleIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    productName: { type: String, required: true },
    productTagline: { type: String, default: '' },
    productDescription: { type: String, default: '' },
    heroImage: { type: String, default: '' },
    accentColor: { type: String, default: '#0D7377' },
    accentGradientFrom: { type: String, default: '#1A3C5E' },
    accentGradientTo: { type: String, default: '#0D7377' },
    heroFeatures: { type: Array, default: () => ['Offline-Ready', 'AI-Powered', 'Multi-Language'] },
    highlights: { type: Array, default: () => [{ label: 'Modules', value: '10+' }, { label: 'Uptime', value: '99.9%' }, { label: 'Languages', value: '3' }] },
    capabilities: { type: Array, default: () => [] },
    features: { type: Array, default: () => [] },
    workflow: { type: Array, default: () => [] },
    faq: { type: Array, default: () => [] },
    texts: {
        type: Object,
        default: () => ({
            badge: 'SEHTECH Solutions',
            scheduleDemo: 'Schedule Demo',
            startTrial: 'Start Free Trial',
            allProducts: '← All Products',
            backToHome: '← Back to Home',
            whyChoose: 'Why Choose This System',
            coreCapabilities: 'Core Capabilities',
            featureBreakdown: 'Feature Breakdown',
            everythingIncluded: 'Everything Included',
            implementationProcess: 'Implementation Process',
            howWeDeploy: 'How We Deploy',
            faqLabel: 'FAQ',
            faqTitle: 'Common Questions',
            readyToStart: 'Ready to Get Started?',
            ctaDescB: 'Book a free consultation and see how we can transform your operations.',
        })
    }
});

let observer = null;
const activeFaq = ref(null);
const toggleFaq = (idx) => { activeFaq.value = activeFaq.value === idx ? null : idx; };

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    setTimeout(() => { document.querySelectorAll('.pr').forEach(el => observer.observe(el)); }, 200);
});
onUnmounted(() => { if (observer) observer.disconnect(); });
</script>

<template>
<div class="product-page-wrapper">

    <!-- ═══ HERO — FULL IMAGE BACKGROUND ═══ -->
    <header class="relative min-h-[90vh] flex items-end overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img v-if="heroImage" :src="heroImage" alt="" class="w-full h-full object-cover" />
            <div class="absolute inset-0" :style="`background: linear-gradient(to top, ${accentGradientFrom} 0%, ${accentGradientFrom}DD 30%, ${accentGradientTo}88 60%, transparent 100%);`"></div>
            <div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 pt-40 w-full">
            <div class="max-w-3xl animate-reveal text-start">
                <div class="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wider border border-white/15 mb-6 backdrop-blur-sm uppercase">
                    <span class="w-1.5 h-1.5 rounded-full animate-pulse" :style="`background-color: ${accentColor};`"></span>
                    {{ texts.badge }}
                </div>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5">{{ productName }}</h1>
                <p class="text-lg md:text-xl text-white/70 mb-3 font-light max-w-xl" v-if="productTagline">{{ productTagline }}</p>
                <p class="text-sm text-white/45 mb-8 max-w-lg" v-if="productDescription">{{ productDescription }}</p>

                <!-- Floating stat cards -->
                <div class="flex flex-wrap gap-4 mb-10">
                    <div v-for="(h, i) in highlights" :key="i" class="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/10 text-center min-w-[100px]">
                        <p class="text-2xl font-black text-white">{{ h.value }}</p>
                        <p class="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-1">{{ h.label }}</p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-3">
                    <a href="https://wa.me/252905243072" target="_blank" rel="noopener noreferrer"
                       class="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                       :style="`background: ${accentColor}; box-shadow: 0 20px 40px -10px ${accentColor}66;`">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                        {{ texts.scheduleDemo }} <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <router-link to="/" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-6 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm">
                        {{ texts.allProducts }}
                    </router-link>
                </div>
            </div>
        </div>
    </header>

    <!-- ═══ CAPABILITIES — 3-COLUMN BORDERED CARDS ═══ -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.whyChoose }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.coreCapabilities }}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(cap, idx) in capabilities.slice(0, 3)" :key="idx"
                     class="pr relative p-8 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-start group"
                     :style="`border-color: ${accentColor}20; transition-delay: ${idx * 100}ms;`">
                    <div class="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full" :style="`background: ${accentColor};`"></div>
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" :style="`background: ${accentColor}10;`">
                        <component :is="cap.icon" class="w-9 h-9" :style="`color: ${accentColor};`" />
                    </div>
                    <h4 class="font-bold text-xl text-[#1A3C5E] mb-3">{{ cap.title }}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">{{ cap.description }}</p>
                    <div class="mt-6 w-full h-1 rounded-full bg-slate-100 overflow-hidden">
                        <div class="h-full rounded-full w-0 group-hover:w-full transition-all duration-700" :style="`background: linear-gradient(to right, ${accentColor}, ${accentGradientTo});`"></div>
                    </div>
                </div>
            </div>
            <!-- 4th capability as a wide banner -->
            <div v-if="capabilities[3]" class="pr mt-8 p-8 rounded-2xl border-2 flex flex-col md:flex-row gap-6 items-center text-start" :style="`border-color: ${accentColor}15; background: ${accentColor}05;`">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" :style="`background: ${accentColor}15;`">
                    <component :is="capabilities[3].icon" class="w-9 h-9" :style="`color: ${accentColor};`" />
                </div>
                <div>
                    <h4 class="font-bold text-xl text-[#1A3C5E] mb-2">{{ capabilities[3].title }}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">{{ capabilities[3].description }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ FEATURES — ALTERNATING ZIGZAG ROWS ═══ -->
    <section class="py-24 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.featureBreakdown }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.everythingIncluded }}</h2>
            </div>
            <div class="space-y-12">
                <div v-for="(group, idx) in features" :key="idx"
                     class="pr grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                     :style="`transition-delay: ${idx * 100}ms;`">
                    <!-- Number side -->
                    <div :class="idx % 2 === 1 ? 'md:order-2' : ''" class="text-start">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="text-6xl font-black opacity-10" :style="`color: ${accentColor};`">{{ String(idx + 1).padStart(2, '0') }}</span>
                            <h3 class="text-2xl font-bold text-[#1A3C5E]">{{ group.category }}</h3>
                        </div>
                    </div>
                    <!-- Features side -->
                    <div :class="idx % 2 === 1 ? 'md:order-1' : ''">
                        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <ul class="space-y-3">
                                <li v-for="(item, i) in group.items" :key="i" class="flex items-center gap-3 text-start">
                                    <CheckCircleIcon class="w-5 h-5 shrink-0" :style="`color: ${accentColor};`" />
                                    <span class="text-gray-700 text-sm font-medium">{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ WORKFLOW — HORIZONTAL STEPPER ═══ -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.implementationProcess }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.howWeDeploy }}</h2>
            </div>
            <!-- Horizontal stepper -->
            <div class="relative pr">
                <!-- Connecting line -->
                <div class="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5" :style="`background: linear-gradient(to right, ${accentColor}30, ${accentColor}, ${accentColor}30);`"></div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div v-for="(w, idx) in workflow" :key="idx" class="relative text-center group">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-xl mb-6 relative z-10 group-hover:scale-110 transition-transform text-white font-black text-lg"
                             :style="`background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor});`">
                            {{ w.step }}
                        </div>
                        <h4 class="font-bold text-lg text-[#1A3C5E] mb-2">{{ w.title }}</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">{{ w.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ FAQ — 2 COLUMN GRID ═══ -->
    <section class="py-24 bg-slate-50 border-t border-slate-100" v-if="faq.length">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.faqLabel }}</p>
                <h2 class="text-3xl font-black text-[#1A3C5E]">{{ texts.faqTitle }}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(item, i) in faq" :key="i" class="pr bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-start hover:shadow-lg transition-all">
                    <h4 class="font-bold text-[#1A3C5E] mb-3 text-lg">{{ item.question }}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="py-20 relative overflow-hidden" :style="`background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor});`">
        <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 28px 28px;"></div>
        <div class="max-w-3xl mx-auto px-4 text-center relative z-10 pr">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">{{ texts.readyToStart }}</h2>
            <p class="text-white/60 text-lg mb-10 max-w-xl mx-auto">{{ texts.ctaDescB }}</p>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <a href="https://wa.me/252905243072" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl group">
                    <svg class="w-6 h-6 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                    {{ texts.startTrial }}
                </a>
                <router-link to="/" class="text-white/70 hover:text-white font-semibold transition">{{ texts.backToHome }}</router-link>
            </div>
        </div>
    </section>

</div>
</template>

<style scoped>
.pr { opacity: 0; transform: translateY(30px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
.pr.revealed { opacity: 1; transform: translateY(0); }
@keyframes reveal { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-reveal { animation: reveal 0.8s ease-out forwards; }
</style>
