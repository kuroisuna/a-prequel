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
          <ContentDoc>
            <template #empty>
              <div class="!-mt-3 text-gray-400 space-y-5">
                <h3 class="font-display">Esta historia aún no está publicada... tenga paciencia.</h3>
                <p class="font-script">
                  Desde los tranquilos zenshū de las montañas japonesas hasta las solemnes capillas de la Europa
                  medieval, la paciencia ha sido venerada como una virtud divina. Los monjes budistas buscan la
                  paciencia no solo como una disciplina, sino como un camino hacia la iluminación, un medio para
                  liberarse de los sufrimientos terrenales. Mientras, en las iglesias góticas, los fieles son recordados
                  de la paciencia de Job, quien a pesar de las adversidades, nunca renegó de su fe.
                </p>
                <p class="font-script">
                  En el desierto abrasador, donde el sol no da tregua, los sufíes danzan en trance, encontrando la
                  paciencia en cada giro, en cada paso, rendidos a la voluntad de Alá. Es en este desierto donde el
                  Corán enseña que "Dios está con los que tienen paciencia". Más allá, en las tierras sagradas de la
                  India, los devotos hindúes entienden la paciencia como un acto de devoción a los dioses, una entrega
                  total al flujo divino del tiempo.
                </p>
                <p class="font-script">
                  A través de las diferentes culturas y religiones, se encuentra un hilo común que teje historias de
                  perseverancia y resistencia. Ya sea esperando la revelación, la iluminación o simplemente el cambio de
                  estaciones, la paciencia se manifiesta como un puente hacia lo divino, un recordatorio de que, en la
                  vasta tapeztría del tiempo, cada momento tiene un propósito y un lugar. La paciencia es, después de
                  todo, la aceptación tranquila del ritmo del universo.
                </p>
              </div>
            </template>
          </ContentDoc>
        </article>
      </main>
    </div>
  </UContainer>
</template>
