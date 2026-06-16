<script setup>
import { computed, onMounted, inject, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModuleImage from '../components/ModuleImage.vue';
import { modulesData } from '../i18n/modulesData';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();

const setIsHomePage = inject('setIsHomePage', () => {});
const currentLang = inject('currentLang');

onMounted(() => {
    setIsHomePage(false);
    window.scrollTo(0, 0);
});

// Watch for route changes to scroll to top
watch(() => route.params.slug, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic module data based on URL path
const slug = computed(() => route.path.split('/').filter(Boolean).pop());
const moduleInfo = computed(() => modulesData[slug.value]);
const lang = computed(() => currentLang.value || 'EN');

// Helpers to get localized string
const t = (obj) => {
    if (!obj) return '';
    return obj[lang.value] || obj.EN || '';
};

const goBackText = computed(() => {
    if (lang.value === 'AR') return 'العودة للصفحة الرئيسية';
    if (lang.value === 'SO') return 'Ku noqo Bogga Hore';
    return 'Back to Home';
});

const keyFeaturesText = computed(() => {
    if (lang.value === 'AR') return 'الميزات الرئيسية';
    if (lang.value === 'SO') return 'Astaamaha Muhiimka ah';
    return 'Key Features';
});

const appViewsText = computed(() => {
    if (lang.value === 'AR') return 'واجهات التطبيق';
    if (lang.value === 'SO') return 'Muuqaalada Codsiga';
    return 'Application Views';
});
</script>

<template>
    <div class="pt-32 pb-16 min-h-screen bg-slate-50" v-if="moduleInfo">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Back Button -->
            <router-link to="/" class="mb-8 inline-flex items-center text-[#1A3C5E] hover:text-[#0D7377] font-semibold transition-colors">
                <ArrowLeftIcon class="w-5 h-5 mr-2" :class="{'rotate-180': lang === 'AR'}" />
                {{ goBackText }}
            </router-link>

            <!-- Hero Section -->
            <div class="bg-gradient-to-br from-[#1A3C5E] to-[#0D7377] rounded-3xl overflow-hidden shadow-2xl mb-16 relative">
                <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
                <div class="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
                
                <div class="px-8 py-16 md:px-16 md:py-20 text-center md:text-left text-white relative z-10" :dir="lang === 'AR' ? 'rtl' : 'ltr'">
                    <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mb-6">
                        <div class="bg-white/20 p-4 rounded-2xl mb-4 md:mb-0 md:mx-6 backdrop-blur-sm">
                            <component :is="moduleInfo.icon" class="w-12 h-12 text-white" />
                        </div>
                        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">{{ t(moduleInfo.hero.title) }}</h1>
                    </div>
                    <p class="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mt-4" :class="lang === 'AR' ? 'md:pr-6' : 'md:pl-6'">
                        {{ t(moduleInfo.hero.description) }}
                    </p>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="mb-16" :dir="lang === 'AR' ? 'rtl' : 'ltr'">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-8 bg-[#0D7377] rounded-full"></div>
                    <h2 class="text-3xl font-bold text-[#1A3C5E]">{{ keyFeaturesText }}</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="feature in moduleInfo.features" :key="t(feature.title)" class="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                        <div class="bg-[#0D7377]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0D7377] transition-all duration-300">
                            <component :is="feature.icon" class="w-7 h-7 text-[#0D7377] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 class="text-xl font-bold text-[#1A3C5E] mb-3">{{ t(feature.title) }}</h3>
                        <p class="text-gray-600 leading-relaxed">{{ t(feature.description) }}</p>
                    </div>
                </div>
            </div>

            <!-- Application Views Grid -->
            <div class="mb-16" :dir="lang === 'AR' ? 'rtl' : 'ltr'">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-8 bg-[#0D7377] rounded-full"></div>
                    <h2 class="text-3xl font-bold text-[#1A3C5E]">{{ appViewsText }}</h2>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ModuleImage 
                        v-for="view in moduleInfo.views"
                        :key="view.filename"
                        :filename="view.filename" 
                        :alt="t(view.title)"
                        :title="t(view.title)"
                        :description="t(view.desc)"
                    />
                </div>
            </div>
        </div>
    </div>
    <div v-else class="pt-40 pb-16 min-h-screen flex items-center justify-center flex-col">
        <h1 class="text-3xl font-bold text-[#1A3C5E] mb-4">Module not found</h1>
        <router-link to="/" class="text-[#0D7377] font-semibold underline">Return Home</router-link>
    </div>
</template>
