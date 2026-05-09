<script setup>
import { inject, computed } from 'vue';
import ProductPageImageHero from '../../components/ProductPageImageHero.vue';
import pharmacyData from '../../i18n/products/pharmacy.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => pharmacyData[currentLang.value] || pharmacyData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageImageHero
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/pharmacy_hero.png"
        accentColor="#DC2626"
        accentGradientFrom="#7F1D1D"
        accentGradientTo="#DC2626"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
