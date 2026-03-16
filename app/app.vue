<template>
  <div class="bg-slate-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

// Initialize dark mode
onMounted(() => {
  document.documentElement.classList.add('dark')
})

useHead({
  htmlAttrs: {
    lang: 'vi',
  },
})
</script>
