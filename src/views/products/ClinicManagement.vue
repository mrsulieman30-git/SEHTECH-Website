<script setup>
import { inject, computed } from 'vue';
import ProductPageImageHero from '../../components/ProductPageImageHero.vue';
import clinicData from '../../i18n/products/clinic.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => clinicData[currentLang.value] || clinicData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageImageHero
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/hero_bg.png"
        accentColor="#2563EB"
        accentGradientFrom="#1E3A5F"
        accentGradientTo="#2563EB"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
