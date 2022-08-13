<script setup lang='ts'>
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <div v-if="isDark" class="i-carbon-moon" />
    <div v-else class="i-carbon-sun" />
  </button>
</template>
