<script setup>
import { inject, computed } from 'vue';
import ProductPageBento from '../../components/ProductPageBento.vue';
import quranData from '../../i18n/products/quranSchool.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => quranData[currentLang.value] || quranData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageBento
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/quran_school_hero.png"
        accentColor="#0F766E"
        accentGradientFrom="#134E4A"
        accentGradientTo="#0F766E"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
