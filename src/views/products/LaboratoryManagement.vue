<script setup>
import { inject, computed } from 'vue';
import ProductPageImageHero from '../../components/ProductPageImageHero.vue';
import labData from '../../i18n/products/laboratory.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => labData[currentLang.value] || labData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPageImageHero
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        heroImage="/src/assets/laboratory_hero.png"
        accentColor="#059669"
        accentGradientFrom="#064E3B"
        accentGradientTo="#059669"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
