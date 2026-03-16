export default defineNuxtConfig({
  // SSR disabled for dev, enabled for production
  ssr: process.env.NODE_ENV === 'production',

  // Compatibility
  compatibilityDate: '2026-03-15',

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
        { property: 'og:url', content: 'https://oscarfamily.vn/oscarmusicgroup' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@oscarmusicgroup' },
        { name: 'google-site-verification', content: 'YOUR_GOOGLE_SITE_VERIFICATION' },
        { name: 'theme-color', content: '#0a0e17' },
        { name: 'msapplication-TileColor', content: '#0a0e17' }
      ],
      link: [
        { rel: 'canonical', href: 'https://oscarfamily.vn/oscarmusicgroup' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favico/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favico/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favico/favicon-16x16.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favico/favicon.svg' },
        { rel: 'shortcut icon', href: '/favico/favicon.ico' },
        { rel: 'manifest', href: '/favico/site.webmanifest' }
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
    { src: '~/plugins/scroll-reveal.ts', mode: 'client' }
  ],

  // Features
  features: {
    inlineStyles: false
  },

  // Experimental Features
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // Route Rules for Hybrid Rendering (only in production)
  routeRules: {
    '/api/**': { cache: { maxAge: 60 * 10 } }
  },

  // Sitemap Configuration - Prerender only in production
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: process.env.NODE_ENV === 'production'
        ? ['/sitemap.xml', '/robots.txt']
        : []
    },
    compressPublicAssets: process.env.NODE_ENV === 'production',
    minify: process.env.NODE_ENV === 'production'
  },

  // Image Optimization
  image: {
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // CSS & Tailwind
  css: ['./app/assets/css/main.css'],

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Vite Configuration - Optimized for development
  vite: {
    build: {
      minify: 'esbuild',
      sourcemap: false,
      reportCompressed: false
    },
    optimizeDeps: {
      include: ['vue', 'nuxt'],
      holdUntilCrawlEnd: true
    },
    server: {
      middlewareMode: false,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3000
      }
    }
  },

  // TypeScript
  typescript: {
    strict: true
  },

  // Devtools - Only in development
  devtools: {
    enabled: process.env.NODE_ENV !== 'production'
  },

  // Build
  build: {
    analyze: false
  }
})
