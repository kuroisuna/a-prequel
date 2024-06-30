<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface Props {
  item: ParsedContent
}

const props = defineProps<Props>()
const thumbFilename = `${props.item.name}@0.1x.png`
</script>

<template>
  <div class="flex items-center gap-4">
    <!-- <UAvatar size="xl" :src="`/assets/chapters/${thumbFilename}`" :alt="item.chapter" img-class="bg-black opacity-50" /> -->
    <NuxtLink
      class="font-display text-xl duration-300 md:text-xl md:text-gray-600 dark:md:text-gray-200"
      :to="item._path"
    >
      <strong class="text-bold mr-1 font-serif text-xl text-black !no-underline dark:text-white">{{
        item.chapter
      }}</strong>
      {{ item.title }}
    </NuxtLink>
    <!-- <ATapePlayer /> -->
  </div>
</template>
