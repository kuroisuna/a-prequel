<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface Props {
  item: ParsedContent
}

const props = defineProps<Props>()
const thumbFilename = `${props.item.name}@0.1x.png`
</script>

<template>
  <div class="flex gap-4 items-center">
    <UAvatar size="xl" :src="`/assets/chapters/${thumbFilename}`" img-class="bg-black opacity-50" />
    <NuxtLink class="font-display text-lg md:text-xl hover:underline" :to="item._path">
      <strong class="block text-bold text-xl mr-2 no-underline">{{ item.chapter }}</strong>
      {{ item.title }}
    </NuxtLink>
    <!-- <ATapePlayer /> -->
  </div>
</template>
