export default defineNuxtRouteMiddleware((to, from) => {
  // Track page view for analytics
  if (process.client) {
    // Google Analytics or similar tracking code
    // Example:
    // gtag('event', 'page_view', {
    //   page_path: to.path,
    //   page_title: to.name,
    // })

    console.log(`Page view: ${to.path}`)
  }
})
