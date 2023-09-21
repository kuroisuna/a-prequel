<template>
  <UContainer
    :ui="{
      base: 'flex flex-col',
      constrained: 'max-w-xl min-h-[calc(100dvh)]',
      padding: 'p-3',
    }"
  >
    <div class="bg-gray-700/25 rounded-xl p-3 flex-1 flex flex-col">
      <div class="bg-black/25 rounded-lg p-6 flex-1">
        <slot />
      </div>
    </div>
  </UContainer>
</template>
