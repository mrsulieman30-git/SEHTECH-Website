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
    heroFeatures: { type: Array, default: () => [] },
    highlights: { type: Array, default: () => [{ label: 'Modules', value: '10+' }, { label: 'Uptime', value: '99.9%' }, { label: 'Languages', value: '3' }] },
    capabilities: { type: Array, default: () => [] },
    features: { type: Array, default: () => [] },
    workflow: { type: Array, default: () => [] },
    faq: { type: Array, default: () => [] },
    texts: {
        type: Object,
        default: () => ({
            scheduleDemo: 'Schedule Demo',
            startTrial: 'Start Free Trial',
            allProducts: '← All Products',
            backToHome: '← Back to Home',
            coreCapabilities: 'Core Capabilities',
            whatSetsApart: 'What Sets Us Apart',
            featureBreakdown: 'Feature Breakdown',
            exploreModules: 'Explore Every Module',
            deploymentJourney: 'Deployment Journey',
            pathToGoLive: 'Your Path to Go-Live',
            faqLabel: 'FAQ',
            haveQuestions: 'Have Questions?',
            transformToday: 'Transform Your Operations Today',
            ctaDescC: 'Join leading facilities already using SEHTECH. Start your free trial now.',
        })
    }
});

let observer = null;
const activeFaq = ref(null);
const activeTab = ref(0);
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

    <!-- ═══ HERO — SPLIT LAYOUT WITH IMAGE ═══ -->
    <header class="relative min-h-[85vh] flex items-center overflow-hidden" :style="`background: linear-gradient(135deg, ${accentGradientFrom} 0%, ${accentGradientTo} 100%);`">
        <div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 36px 36px;"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 rounded-full" :style="`background: radial-gradient(circle, ${accentColor} 0%, transparent 70%);`"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 md:py-40 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <!-- Text: 3 cols -->
                <div class="lg:col-span-3 text-start animate-reveal">
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="feat in heroFeatures" :key="feat" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/10">{{ feat }}</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-5">{{ productName }}</h1>
                    <p class="text-lg text-white/60 mb-4 font-light max-w-lg" v-if="productTagline">{{ productTagline }}</p>
                    <p class="text-sm text-white/40 mb-10 max-w-md" v-if="productDescription">{{ productDescription }}</p>

                    <!-- Highlight counters inline -->
                    <div class="flex flex-wrap gap-8 mb-10">
                        <div v-for="(h, i) in highlights" :key="i" class="text-start">
                            <p class="text-3xl font-black text-white">{{ h.value }}</p>
                            <p class="text-[10px] text-white/40 uppercase tracking-widest font-bold">{{ h.label }}</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <a href="https://wa.me/252905243072" target="_blank" rel="noopener noreferrer"
                           class="group inline-flex items-center gap-3 bg-white text-gray-900 px-7 py-3.5 rounded-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-black/20">
                            <svg class="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                            {{ texts.scheduleDemo }} <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <router-link to="/" class="inline-flex items-center gap-2 text-white/60 hover:text-white px-4 py-3.5 font-semibold transition">{{ texts.allProducts }}</router-link>
                    </div>
                </div>

                <!-- Image: 2 cols -->
                <div class="lg:col-span-2 hidden lg:block">
                    <div class="relative">
                        <div class="rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                            <img v-if="heroImage" :src="heroImage" alt="" class="w-full h-[400px] object-cover" />
                            <div v-else class="w-full h-[400px] flex items-center justify-center" :style="`background: ${accentColor}22;`">
                                <span class="text-8xl opacity-30">📊</span>
                            </div>
                        </div>
                        <!-- Accent corner decoration -->
                        <div class="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10" :style="`background: ${accentColor}33;`"></div>
                        <div class="absolute -top-3 -left-3 w-16 h-16 rounded-xl -z-10" :style="`background: ${accentColor}22;`"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 80" class="w-full h-14 fill-white"><path d="M0,50 C480,80 960,20 1440,50 L1440,80 L0,80 Z"></path></svg>
        </div>
    </header>

    <!-- ═══ CAPABILITIES — BENTO GRID (2 large + 2 small) ═══ -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.coreCapabilities }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.whatSetsApart }}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Large cards: first 2 -->
                <div v-for="(cap, idx) in capabilities.slice(0, 2)" :key="idx"
                     class="pr p-10 rounded-3xl text-start group hover:shadow-2xl transition-all duration-500"
                     :style="`background: linear-gradient(135deg, ${accentGradientFrom}08, ${accentColor}08); border: 1px solid ${accentColor}15; transition-delay: ${idx * 80}ms;`">
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" :style="`background: ${accentColor}12;`">
                        <component :is="cap.icon" class="w-9 h-9" :style="`color: ${accentColor};`" />
                    </div>
                    <h4 class="font-bold text-2xl text-[#1A3C5E] mb-3">{{ cap.title }}</h4>
                    <p class="text-gray-500 leading-relaxed">{{ cap.description }}</p>
                </div>
                <!-- Small cards: next 2 side by side -->
                <div v-for="(cap, idx) in capabilities.slice(2, 4)" :key="idx + 2"
                     class="pr p-8 rounded-2xl border border-slate-100 shadow-sm text-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                     :style="`transition-delay: ${(idx + 2) * 80}ms;`">
                    <div class="flex items-start gap-5">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" :style="`background: ${accentColor}10;`">
                            <component :is="cap.icon" class="w-7 h-7" :style="`color: ${accentColor};`" />
                        </div>
                        <div>
                            <h4 class="font-bold text-lg text-[#1A3C5E] mb-2">{{ cap.title }}</h4>
                            <p class="text-gray-500 text-sm leading-relaxed">{{ cap.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ FEATURES — TABBED PANELS ═══ -->
    <section class="py-24 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.featureBreakdown }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.exploreModules }}</h2>
            </div>
            <!-- Tab buttons -->
            <div class="pr flex flex-wrap justify-center gap-3 mb-12">
                <button v-for="(group, idx) in features" :key="idx"
                    @click="activeTab = idx"
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
                    :class="activeTab === idx ? 'text-white shadow-lg' : 'bg-white text-gray-500 border border-slate-200 hover:border-slate-300'"
                    :style="activeTab === idx ? `background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor}); box-shadow: 0 8px 20px -5px ${accentColor}44;` : ''">
                    {{ group.category }}
                </button>
            </div>
            <!-- Tab content -->
            <div class="pr">
                <transition name="tab" mode="out-in">
                    <div :key="activeTab" class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div v-for="(item, i) in features[activeTab]?.items" :key="i" class="flex items-center gap-4 py-3 border-b border-slate-50 text-start group/item">
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" :style="`background: ${accentColor}10;`">
                                    <CheckCircleIcon class="w-5 h-5" :style="`color: ${accentColor};`" />
                                </div>
                                <span class="text-gray-700 font-medium group-hover/item:text-gray-900 transition">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>

    <!-- ═══ WORKFLOW — VERTICAL TIMELINE ═══ -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.deploymentJourney }}</p>
                <h2 class="text-3xl md:text-5xl font-black text-[#1A3C5E]">{{ texts.pathToGoLive }}</h2>
            </div>
            <div class="relative">
                <!-- Vertical line -->
                <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" :style="`background: linear-gradient(to bottom, transparent, ${accentColor}40, transparent);`"></div>
                <div class="space-y-12">
                    <div v-for="(w, idx) in workflow" :key="idx" class="pr relative flex items-start gap-8" :class="idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'" :style="`transition-delay: ${idx * 120}ms;`">
                        <!-- Circle -->
                        <div class="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg text-white font-black text-sm"
                             :style="`background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor});`">
                            {{ w.step }}
                        </div>
                        <!-- Content card -->
                        <div class="md:w-[calc(50%-3rem)] ml-20 md:ml-0 bg-slate-50 rounded-2xl p-6 border border-slate-100 text-start hover:shadow-lg transition-all">
                            <h4 class="font-bold text-lg text-[#1A3C5E] mb-2">{{ w.title }}</h4>
                            <p class="text-gray-500 text-sm leading-relaxed">{{ w.description }}</p>
                        </div>
                        <div class="hidden md:block md:w-[calc(50%-3rem)]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ FAQ — ACCORDION ═══ -->
    <section class="py-24 bg-slate-50 border-t border-slate-100" v-if="faq.length">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 pr">
                <p class="text-sm font-bold uppercase tracking-widest mb-3" :style="`color: ${accentColor};`">{{ texts.faqLabel }}</p>
                <h2 class="text-3xl font-black text-[#1A3C5E]">{{ texts.haveQuestions }}</h2>
            </div>
            <div class="space-y-3">
                <div v-for="(item, i) in faq" :key="i"
                     class="pr bg-white rounded-xl overflow-hidden border border-slate-100 transition-all duration-300"
                     :class="activeFaq === i ? 'shadow-lg' : 'hover:shadow-md'"
                     :style="activeFaq === i ? `border-color: ${accentColor}30;` : ''">
                    <button @click="toggleFaq(i)" class="w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="font-bold text-[#1A3C5E]">{{ item.question }}</span>
                        <ChevronDownIcon class="w-5 h-5 transition-transform duration-300 shrink-0 ml-4" :style="`color: ${accentColor};`" :class="{'rotate-180': activeFaq === i}" />
                    </button>
                    <div v-show="activeFaq === i" class="px-5 pb-5 text-gray-500 text-sm leading-relaxed text-start border-t border-slate-50">
                        <p class="pt-3">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══ CTA — DARK CARD ═══ -->
    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 text-center pr">
            <div class="rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl" :style="`background: linear-gradient(135deg, ${accentGradientFrom}, ${accentColor});`">
                <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-black text-white mb-4">{{ texts.transformToday }}</h2>
                    <p class="text-white/50 text-lg mb-10 max-w-xl mx-auto">{{ texts.ctaDescC }}</p>
                    <div class="flex flex-wrap items-center justify-center gap-4">
                        <a href="https://wa.me/252905243072" target="_blank" rel="noopener noreferrer"
                           class="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30 group">
                            <svg class="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.454 3.424 1.258 4.876L2.012 22l5.305-1.391c1.385.753 2.969 1.183 4.653 1.183 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.946-9.987zm6.756 13.911c-.276.776-1.359 1.488-2.228 1.58-.613.064-1.411.092-2.228-.184-3.34-.112-6.023-3.08-6.183-3.235-.124-.16-.948-1.257-.948-2.396 0-1.139.597-1.701.811-1.931.214-.23.468-.288.625-.288.156 0 .313.003.454.011.144.006.336-.057.525.39.19.46.643 1.57.701 1.685.057.114.095.247.019.4-.076.152-.114.247-.228.38-.114.133-.242.298-.346.399-.117.114-.24.238-.104.472.136.234.606 1.002 1.301 1.62.894.797 1.649 1.042 1.883 1.157.234.114.37.095.506-.057.136-.152.59-1.295.75-1.737.159-.441.319-.368.537-.288.217.08 1.378.653 1.615.772.237.119.395.178.452.276.057.098.057.568-.219 1.344z"/></svg>
                            {{ texts.startTrial }}
                        </a>
                        <router-link to="/" class="text-white/60 hover:text-white font-semibold transition">{{ texts.backToHome }}</router-link>
                    </div>
                </div>
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
.tab-enter-active { transition: all 0.3s ease-out; }
.tab-leave-active { transition: all 0.2s ease-in; }
.tab-enter-from { opacity: 0; transform: translateY(10px); }
.tab-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
