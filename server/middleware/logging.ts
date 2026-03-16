/**
 * Server middleware for request logging and monitoring
 */
export default defineEventHandler(async (event) => {
  const startTime = Date.now()

  // Log incoming request
  const requestPath = getRequestURL(event).pathname
  const method = event.node.req.method

  // Skip logging for static assets
  if (requestPath.startsWith('/_')) return

  // Perform action
  const responseTime = Date.now() - startTime

  // Log after response
  console.log(`${method} ${requestPath} - ${responseTime}ms`)

  // Add performance headers
  if (event.node.res) {
    event.node.res.setHeader('X-Response-Time', `${responseTime}ms`)
  }
})
