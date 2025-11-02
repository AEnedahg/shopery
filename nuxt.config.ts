// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()    
    ]
  },
  modules: ['@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  srcDir: './',
  alias: {
    '@': './',
    '~': './',
    'assets': './assets',
    'public': './public'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo-shopery.png' }
      ],
      title: 'Shopery',
      meta: [
        {
          name: 'keywords',
          content: 'Shopery, food, groceries, foodstuffs, online shopping, supermarket, fresh produce, kitchen essentials, beverages, household items, grocery delivery, food market'
        },
        {
          name: 'description',
          content: 'Shopery — your trusted online marketplace for quality foodstuffs and groceries. Shop fresh produce, pantry staples, and everyday essentials delivered right to your door.'
        },
        {
          name: 'author',
          content: 'Anthony Enedah'
        }
      ]
    }
  }
})
