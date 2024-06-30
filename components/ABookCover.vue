<template>
  <UContainer
    :ui="{
      base: 'flex flex-col',
      constrained: 'max-w-xl',
      padding: 'p-3',
    }"
  >
    <div class="flex flex-1 flex-col p-3">
      <div class="flex-1 p-6">
        <slot />
      </div>
    </div>
  </UContainer>
</template>
