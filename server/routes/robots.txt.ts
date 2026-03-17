export default defineEventHandler((event) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: https://oscarlabel.com/sitemap.xml

# Google
User-agent: Googlebot
Allow: /

# Bing
User-agent: Bingbot
Allow: /

# Facebook
User-agent: facebookexternalhit
Allow: /

# Rate limiting
User-agent: *
Crawl-delay: 1
Request-rate: 100/hour`

  setResponseHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})
