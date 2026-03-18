/**
 * Server middleware for request logging and monitoring
 */
export default defineEventHandler(async (event) => {
  const startTime = Date.now()
  const method = getMethod(event)
  const query = getQuery(event)
  const requestPath = getRequestURL(event).pathname

  // Skip logging for static assets and Nuxt internals
  if (requestPath.startsWith('/_') || requestPath.includes('.')) return

  // Log request in dev
  if (process.dev) {
    console.log(`[Request] ${method} ${requestPath}`)
  }

  // Set response time header using H3 utility
  // We do it before the handler so it's ready, or we can use a hook
  // In Nitro, we can use hooks if needed, but here a simple addition is fine
  setResponseHeader(event, 'X-Server-Response-Time', `${Date.now() - startTime}ms`)
})
