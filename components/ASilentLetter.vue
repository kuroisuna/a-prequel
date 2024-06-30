<script lang="ts" setup>
interface Props {
  label: string
  message: string
}

const props = defineProps<Props>()
const element = ref<HTMLElement>()

onMounted(() => {
  animateLetters()
})

function animateLetters() {
  if (!element.value) return

  // Clear previous content
  element.value.innerHTML = ''

  const duration = 750
  const fadeDuration = 500
  let index = 0

  function showLetter() {
    if (index >= props.message.length) {
      setTimeout(() => animateLetters(), duration)
      return
    }

    const letter = document.createElement('span')
    letter.textContent = props.message[index]

    if (props.message[index] === ' ') {
      letter.textContent = '_'
      letter.classList.add('text-transparent')
    }

    letter.classList.add(
      'opacity-0',
      'inline-block',
      'transition-all',
      `duration-${fadeDuration}`,
      'ease-in-out',
      'underline',
      'decoration-transparent',
      'underline-offset-8',
      'decoration-2',
    )

    if (element.value) {
      element.value.appendChild(letter)
    }

    setTimeout(() => {
      letter.classList.remove('opacity-0', 'max-w-0')
      letter.classList.add('opacity-100', 'max-w-full')
    }, 0)

    // Trigger fade-out and width decrease, then remove after duration
    setTimeout(() => {
      letter.classList.remove('opacity-100', 'max-w-full', 'decoration-transparent')
      letter.classList.add('max-w-0', 'decoration-slate-400', 'opacity-50')
      setTimeout(() => {
        if (element.value?.contains(letter)) {
          element.value.removeChild(letter)
        }
      }, fadeDuration)
    }, duration)

    index++
    setTimeout(showLetter, duration / 5)
  }

  showLetter()
}

watch(
  () => props.message,
  () => {
    animateLetters()
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="">
    <span class="font-script mr-2 text-xl text-slate-400">{{ label }}</span>
    <span ref="element" class="max-w-xs whitespace-nowrap font-mono text-lg font-light text-gray-400" />
  </div>
</template>
