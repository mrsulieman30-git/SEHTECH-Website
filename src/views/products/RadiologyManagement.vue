<script setup>
import { inject, computed } from 'vue';
import ProductPageBento from '../../components/ProductPageBento.vue';
import radiologyData from '../../i18n/products/radiology.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => radiologyData[currentLang.value] || radiologyData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageBento
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/radiology_hero.png"
        accentColor="#7C3AED"
        accentGradientFrom="#2D1B69"
        accentGradientTo="#7C3AED"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
