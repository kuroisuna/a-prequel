<script setup>
useHead({ title: 'Índice' })
</script>

<template>
  <ABookCover>
    <div class="space-y-12">
      <ContentList v-slot="{ list }">
        <AChapterTile v-for="story in list" :key="story._path" :item="story" />
      </ContentList>
    </div>
  </ABookCover>
</template>
