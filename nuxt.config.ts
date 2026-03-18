export default defineNuxtConfig({
  // SSR enabled
  ssr: true,

  // Compatibility
  compatibilityDate: '2026-03-15',

  // Nitro Production Configuration
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml', '/robots.txt']
    },
    compressPublicAssets: true,
    minify: true
  },

  // Meta & SEO Configuration
  app: {
    head: {
      title: 'Oscar Music Group | Phát Hành Nhạc Số Miễn Phí',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Phát hành nhạc của bạn lên Spotify, Apple Music, TikTok và 150+ nền tảng toàn cầu. Hỗ trợ phân phối nhạc số chuyên nghiệp tại Việt Nam.' },
        { name: 'keywords', content: 'phát hành nhạc Spotify, phân phối nhạc số, Zing MP3, TuneCore, DistroKid, Oscar Music Group' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Oscar Music Group | Phát Hành Nhạc Số Miễn Phí' },
        { property: 'og:description', content: 'Khoảng cách gần nhất tới thế giới âm nhạc. Phát hành từ Việt Nam ra toàn cầu.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://oscarlabel.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'google-site-verification', content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '2hF0hnwKu0RmM_snws86JksF6i81rH9pVpmj0bhwTM4' }
      ],
      link: [
        { rel: 'canonical', href: 'https://oscarlabel.com' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favico/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favico/favicon-16x16.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favico/favicon.svg' },
        { rel: 'shortcut icon', href: '/favico/favicon.ico' }
      ]
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image'
  ],

  // FontAwesome Configuration
  plugins: [
    '~/plugins/fontawesome.ts',
    { src: '~/plugins/scroll-reveal.ts' }
  ],

  // Experimental Features - Re-enable defaults for better SSR
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  // Image Optimization
  image: {
    format: ['webp'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },

  // CSS & Tailwind
  css: ['./app/assets/css/main.css'],

  // Vite Configuration
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false
    }
  },

  // TypeScript
  typescript: {
    strict: true
  },

  // Runtime Config
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    adminEmail: process.env.ADMIN_EMAIL || 'oscaruniversal.group@gmail.com',

    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://oscarlabel.com'
    }
  }
})
