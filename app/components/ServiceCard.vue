<template>
  <div class="card group cursor-pointer">
    <div class="mb-4">
      <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-purple-600/40 transition-all duration-300">
        <component :is="icon" class="w-6 h-6 text-cyan-400" />
      </div>
    </div>
    <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-slate-400 text-sm">{{ description }}</p>
    <ul class="mt-4 space-y-2">
      <li v-for="feature in features" :key="feature" class="text-sm text-slate-400 flex items-start gap-2">
        <FontAwesomeIcon :icon="['fas', 'check']" class="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  title: string
  description: string
  features: string[]
  icon: Component
}

defineProps<Props>()
</script>
