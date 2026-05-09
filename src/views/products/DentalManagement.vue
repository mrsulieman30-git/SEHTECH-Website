<script setup>
import { inject, computed } from 'vue';
import ProductPageBento from '../../components/ProductPageBento.vue';
import dentalData from '../../i18n/products/dental.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => dentalData[currentLang.value] || dentalData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageBento
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/dental_hero.png"
        accentColor="#0891B2"
        accentGradientFrom="#164E63"
        accentGradientTo="#0891B2"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
