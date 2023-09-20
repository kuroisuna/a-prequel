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
      'Source Serif 4': true,
    },
  },

  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          display: ['Vollkorn'],
          serif: ['"Source Serif 4"'],
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
