export const useSeoHead = (options: {
  title: string
  description: string
  image?: string
  url?: string
  keywords?: string
  author?: string
  themeColor?: string
  schema?: any
}) => {
  const router = useRouter()
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseUrl || 'https://oscarlabel.com'
  const currentUrl = baseUrl + router.currentRoute.value.path

  useHead({
    title: options.title,
    meta: [
      {
        name: 'description',
        content: options.description
      },
      {
        name: 'keywords',
        content: options.keywords || 'phát hành nhạc, Spotify, Apple Music, Oscar Music Group'
      },
      {
        property: 'og:title',
        content: options.title
      },
      {
        property: 'og:description',
        content: options.description
      },
      {
        property: 'og:image',
        content: options.image || `${baseUrl}/og-image.jpg`
      },
      {
        property: 'og:url',
        content: options.url || currentUrl
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: options.title
      },
      {
        name: 'twitter:description',
        content: options.description
      },
      {
        name: 'twitter:image',
        content: options.image || `${baseUrl}/og-image.jpg`
      },
      {
        name: 'twitter:site',
        content: '@oscarmusicgroup'
      },
      {
        name: 'author',
        content: options.author || 'Oscar Music Group'
      },
      {
        name: 'theme-color',
        content: options.themeColor || '#0ea5e9'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: options.url || currentUrl
      }
    ],
    script: options.schema ? [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(options.schema)
      }
    ] : []
  })
}
