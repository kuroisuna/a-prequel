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
    <!-- <UAvatar size="xl" :src="`/assets/chapters/${thumbFilename}`" :alt="item.chapter" img-class="bg-black opacity-50" /> -->
    <NuxtLink
      class="font-display text-xl md:text-xl md:text-gray-600 dark:md:text-gray-200 duration-300"
      :to="item._path"
    >
      <strong class="text-bold text-black dark:text-white font-serif text-xl mr-1 !no-underline">{{
        item.chapter
      }}</strong>
      {{ item.title }}
    </NuxtLink>
    <!-- <ATapePlayer /> -->
  </div>
</template>
