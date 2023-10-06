// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@vite-pwa/nuxt', '@nuxtjs/google-fonts'],

  app: {
    head: {
      titleTemplate: '%s - Una protosecuela',
    },
  },

  googleFonts: {
    families: {
      Vollkorn: [400, 600],
      BioRhyme: [300, 700],
      'Source Serif 4': [300, 400, 600],
      'Comic Neue': [300, 400, 700],
    },
  },

  tailwindcss: {
    config: {
      content: [
        'content/**/*.md',
      ],
      safelist: ['font-comic'],
      theme: {
        fontFamily: {
          script: ['BioRhyme'],
          display: ['Vollkorn'],
          serif: ['"Source Serif 4"'],
          comic: ['"Comic Neue"'],
        },
      },
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Una protosecuela',
      short_name: 'Protosecuela',
      theme_color: '#121212',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
})
