<script setup lang="ts">
interface Props {
  est: string
}

defineProps<Props>()
</script>

<template>
  <span class="font-script font-light">{{ est }}</span>
</template>
