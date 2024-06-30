<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())
</script>

<template>
  <UContainer class="my-6">
    <NuxtLink to="/">
      <UButton icon="i-heroicons-bars-3-bottom-left" color="white" variant="ghost" size="xl" :padded="false" />
    </NuxtLink>

    <div class="grid-cols-3 gap-6 lg:grid">
      <header class="mt-12 lg:mt-8">
        <h1 class="font-display text-center text-4xl font-bold">{{ data?.chapter }} • {{ data?.title }}</h1>
      </header>

      <main class="col-span-2">
        <article class="prose prose-lg lg:prose-xl dark:prose-invert mx-auto font-serif leading-loose">
          <ContentDoc>
            <template #empty>
              <p class="mt-12 text-center lg:mt-8">Contenido no disponible</p>
            </template>
          </ContentDoc>
        </article>
      </main>
    </div>
  </UContainer>
</template>
