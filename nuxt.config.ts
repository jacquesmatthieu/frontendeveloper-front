// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Front-end Developer',
      meta: [
        { name: 'description', content: 'Front-end Developer' },
        { name: 'author', content: 'Front-end Developer' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@vesp/nuxt-fontawesome'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
      regular: ['circle', 'calendar'],
      brands: ['github', 'linkedin']
    }
  }
})
