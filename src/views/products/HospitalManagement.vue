<script setup>
import { inject, computed } from 'vue';
import ProductPage from '../../components/ProductPage.vue';
import hospitalData from '../../i18n/products/hospital.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => hospitalData[currentLang.value] || hospitalData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPage
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/hospital_hero.png"
        accentColor="#0D7377"
        accentColorLight="#25A5A7"
        accentGradientFrom="#1A3C5E"
        accentGradientTo="#0D7377"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
