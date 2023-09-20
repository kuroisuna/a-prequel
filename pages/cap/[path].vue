<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())
</script>

<template>
  <UContainer class="my-6">
    <NuxtLink to="/">
      <UButton icon="i-heroicons-bars-3-bottom-left" color="white" variant="ghost" size="xl" :padded="false" />
    </NuxtLink>

    <div class="lg:grid grid-cols-3 gap-6">
      <header class="mt-12 lg:mt-8">
        <h1 class="text-center font-display font-bold text-4xl">{{ data?.chapter }} • {{ data?.title }}</h1>
      </header>

      <main class="col-span-2">
        <article class="mx-auto font-serif prose prose-lg lg:prose-xl dark:prose-invert leading-loose">
          <ContentDoc />
        </article>
      </main>
    </div>
  </UContainer>
</template>
