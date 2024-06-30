<script setup lang="ts">
const isOpen = ref(false)

await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <UContainer :ui="{ padding: 'p-4 sm:p-6 lg:p-8' }">
    <NuxtLink to="/"><img class="w-12 sm:w-24" src="/we.svg" /></NuxtLink>
  </UContainer>
</template>
