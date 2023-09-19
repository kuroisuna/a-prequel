<script setup>
useHead({ title: 'Índice' })
</script>

<template>
  <main>
    <ContentList v-slot="{ list }">
      <div v-for="story in list" :key="story._path">
        <h2>{{ story.title }}</h2>
        <p>{{ story.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
