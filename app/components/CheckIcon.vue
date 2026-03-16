<template>
  <FontAwesomeIcon :icon="['fas', 'check']" :class="iconClass" />
</template>

<script setup lang="ts">
interface Props {
  iconClass?: string
}

withDefaults(defineProps<Props>(), {
  iconClass: 'w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0'
})
</script>
