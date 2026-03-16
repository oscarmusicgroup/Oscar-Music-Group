<template>
  <div :class="['card', isFeatured && 'ring-2 ring-cyan-500/50 relative', 'flex flex-col']">
    <!-- Featured Badge -->
    <div v-if="isFeatured" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <span class="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
        Phổ biến nhất
      </span>
    </div>

    <!-- Plan Name -->
    <h3 class="text-2xl font-bold text-white mb-2 text-center">{{ name }}</h3>

    <!-- Description -->
    <p class="text-slate-400 text-sm mb-4 text-center">{{ description }}</p>

    <!-- Price -->
    <div class="mb-6 text-center">
      <span class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
        {{ price }}
      </span>
    </div>

    <!-- CTA Button -->
    <NuxtLink 
      :to="to" 
      :target="to.startsWith('http') ? '_blank' : '_self'"
      class="btn-primary mb-6 font-semibold w-full block text-center"
    >
      {{ ctaText }}
    </NuxtLink>

    <!-- Features List -->
    <div class="space-y-3 flex-1">
      <div v-for="feature in features" :key="feature" class="flex items-start gap-3">
        <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
        <span class="text-slate-300 text-sm">{{ feature }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  description: string
  price: string
  features: string[]
  ctaText?: string
  to?: string
  isFeatured?: boolean
}

withDefaults(defineProps<Props>(), {
  ctaText: 'Bắt đầu ngay',
  to: '/contact',
  isFeatured: false
})
</script>
