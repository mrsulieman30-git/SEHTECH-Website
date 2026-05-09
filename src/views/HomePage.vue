<script setup>
/**
 * HomePage.vue
 * This is a thin wrapper that emits a signal to App.vue telling it
 * to show the homepage content. The actual homepage sections live inside
 * App.vue (hero, about, specs, faq) to retain all existing translations
 * and state without a massive refactor.
 */
import { inject } from 'vue';

// Signal to parent that we're on the home page
const setIsHomePage = inject('setIsHomePage', null);
if (setIsHomePage) setIsHomePage(true);

import { onUnmounted } from 'vue';
onUnmounted(() => {
    if (setIsHomePage) setIsHomePage(false);
});
</script>

<template>
    <!-- Home content is rendered in App.vue via v-if="isHomePage" -->
    <div></div>
</template>
