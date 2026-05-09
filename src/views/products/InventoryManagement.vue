<script setup>
import { inject, computed } from 'vue';
import ProductPage from '../../components/ProductPage.vue';
import inventoryData from '../../i18n/products/inventory.js';
import { templateTexts } from '../../i18n/templateTexts.js';

const currentLang = inject('currentLang', { value: 'EN' });
const content = computed(() => inventoryData[currentLang.value] || inventoryData.EN);
const texts = computed(() => templateTexts[currentLang.value] || templateTexts.EN);
</script>

<template>
    <ProductPage
        :productName="content.productName"
        :productTagline="content.productTagline"
        :productDescription="content.productDescription"
        accentColor="#D97706"
        accentColorLight="#FBBF24"
        accentGradientFrom="#78350F"
        accentGradientTo="#D97706"
        :heroFeatures="content.heroFeatures"
        :highlights="content.highlights"
        :capabilities="content.capabilities"
        :features="content.features"
        :workflow="content.workflow"
        :faq="content.faq"
        :texts="texts"
    />
</template>
