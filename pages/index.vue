<script setup>
useHead({ title: 'Índice' })
</script>

<template>
  <ABookCover>
    <img class="mx-auto w-20 sm:w-24 mb-16" src="/we.svg" />

    <ContentList v-slot="{ list }">
      <div v-for="story in list" :key="story._path">
        <AChapterTile :item="story" />
      </div>
    </ContentList>
  </ABookCover>
</template>
