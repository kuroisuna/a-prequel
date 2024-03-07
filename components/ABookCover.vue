<template>
  <UContainer
    :ui="{
      base: 'flex flex-col',
      constrained: 'max-w-xl',
      padding: 'p-3',
    }"
  >
    <div class="p-3 flex-1 flex flex-col">
      <div class="p-6 flex-1">
        <slot />
      </div>
    </div>
  </UContainer>
</template>
