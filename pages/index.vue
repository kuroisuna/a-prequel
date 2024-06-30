<script lang="ts" setup>
useHead({ title: 'Índice' })
</script>

<template>
  <ABookCover>
    <div class="h-24 max-w-full overflow-hidden pb-20 pt-6">
      <ASilentLetter
        label="Proto\secuela"
        message="Vivimos en un mundo imperfecto donde existe la muerte. No por un acto de odio hacia nostros, o algún tipo de venganza que estemos sufriendo. Nuestro creador quería lo mejor, solo que sus planes no fueron exitosos. Por lo que debemos ver la vida como una oportunidad de ser como el pez que nada río arriba contra la corriente y al llegar a a cima se transformó en dragón..."
      />
    </div>

    <div class="space-y-12">
      <ContentList v-slot="{ list }">
        <AChapterTile v-for="story in list" :key="story._path" :item="story" />
      </ContentList>
    </div>
  </ABookCover>
</template>
