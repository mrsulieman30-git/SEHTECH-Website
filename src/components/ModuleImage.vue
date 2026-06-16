<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  filename: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Module Screenshot'
  },
  title: {
    type: String,
    default: 'Screenshot Placeholder'
  },
  description: {
    type: String,
    default: 'Upload a screenshot here.'
  }
});

// Import all png, jpg, jpeg images in the modules folder
// using eager to avoid async component wrapping for simple images
const pngImages = import.meta.glob('/src/assets/modules/*.png', { eager: true, as: 'url' });
const jpgImages = import.meta.glob('/src/assets/modules/*.jpg', { eager: true, as: 'url' });
const jpegImages = import.meta.glob('/src/assets/modules/*.jpeg', { eager: true, as: 'url' });

const allImages = { ...pngImages, ...jpgImages, ...jpegImages };

const imageUrl = computed(() => {
  const path = `/src/assets/modules/${props.filename}`;
  return allImages[path] || null;
});

const isLightboxOpen = ref(false);

const openLightbox = () => {
    if (imageUrl.value) isLightboxOpen.value = true;
};

const closeLightbox = () => {
    isLightboxOpen.value = false;
};
</script>

<template>
  <!-- Render Actual Image if found -->
  <div v-if="imageUrl" class="w-full group relative flex flex-col h-full">
    <!-- Image Card -->
    <div class="bg-white rounded-3xl p-4 shadow-lg border border-slate-100 cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full" @click="openLightbox">
        
        <!-- Image Container -->
        <div class="overflow-hidden rounded-2xl relative bg-slate-50 border border-slate-100 mb-4 aspect-video flex-shrink-0">
            <img :src="imageUrl" :alt="alt" class="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500">
            
            <!-- Overlay hint for clicking -->
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span class="bg-white/90 text-[#1A3C5E] px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    Click to Enlarge
                </span>
            </div>
        </div>
        
        <!-- Label Area -->
        <div class="text-center px-2 flex flex-col flex-grow justify-center">
            <h4 class="text-lg font-bold text-[#1A3C5E] mb-2">{{ title }}</h4>
            <p class="text-sm text-slate-500 leading-relaxed">{{ description }}</p>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
        <div v-if="isLightboxOpen" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 md:p-12" @click="closeLightbox">
            
            <!-- Close Button -->
            <button @click="closeLightbox" class="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md z-[110]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <!-- Image Area -->
            <div class="relative w-full h-full flex items-center justify-center mb-6" @click.stop>
                <img :src="imageUrl" :alt="alt" class="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 cursor-zoom-out" @click="closeLightbox">
            </div>
            
            <!-- Bottom Title in Lightbox -->
            <div class="text-center w-full max-w-4xl px-4 flex-shrink-0" @click.stop>
                <h3 class="text-2xl font-bold text-white mb-2">{{ title }}</h3>
                <p class="text-slate-300 text-lg">{{ description }}</p>
            </div>
        </div>
    </Teleport>
  </div>

  <!-- Render Placeholder if NOT found -->
  <div v-else class="bg-slate-200 border-2 border-dashed border-slate-400 rounded-3xl h-[300px] flex flex-col items-center justify-center text-slate-500 shadow-inner w-full p-6">
    <div class="text-xl font-semibold mb-3 text-slate-600 text-center">{{ title }} (Placeholder)</div>
    <code class="bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-mono text-sm mb-4 break-all text-center">{{ filename }}</code>
    <p class="text-base text-center">{{ description }}</p>
  </div>
</template>
