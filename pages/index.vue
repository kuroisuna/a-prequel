<script setup>
useHead({ title: 'Índice' })
</script>

<template>
  <ABookCover>
    <img class="mx-auto w-20 sm:w-24 mb-16" src="/we.svg" />

    <div class="space-y-12">
      <ContentList v-slot="{ list }">
        <AChapterTile v-for="story in list" :key="story._path" :item="story" />
      </ContentList>
    </div>
  </ABookCover>
</template>
