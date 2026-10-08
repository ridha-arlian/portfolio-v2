import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'Ridha Arlian',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg?v=2'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Portfolio of Ridha Arlian, a software engineer based in Banda Aceh, Indonesia.'
        },
        { name: 'theme-color', content: '#f5f5f2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ridha Arlian' },
        { property: 'og:image', content: 'https://ridhaarlian.my.id/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
  site: {
    url: 'https://ridhaarlian.my.id',
    name: 'Ridha Arlian',
  },
  sitemap: {
    // Prerender sitemap as static files at build time so crawlers
    // always get an instant 200 (no on-demand generation on cold serverless functions)
    zeroRuntime: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],
  i18n: {
    baseUrl: 'https://ridhaarlian.my.id',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'id', name: 'Indonesia', file: 'id.json' },
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  }
})