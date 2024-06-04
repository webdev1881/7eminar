export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt', 
    'dayjs-nuxt', 
    '@pinia/nuxt', [
    '@vee-validate/nuxt',
    {
      autoImports: true,
    },
  ], ],
  

  pinia: {
		storesDirs: ['./store/**'],
	},

  dayjs: {
    locales: ['uk'],
    // plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'uk',
    // defaultTimezone: 'America/New_York',
  },
  
  plugins: [
    // '~/plugins/time.js',
  ],

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})