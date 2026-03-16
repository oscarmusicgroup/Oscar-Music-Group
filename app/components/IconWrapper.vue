<template>
  <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" :class="bgClass">
    <FontAwesomeIcon :icon="icon" :class="iconClass" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: any
  bgClass?: string
  iconClass?: string
}

withDefaults(defineProps<Props>(), {
  bgClass: 'bg-gradient-to-br from-cyan-500/20 to-purple-600/20',
  iconClass: 'w-6 h-6 text-cyan-400'
})
</script>
