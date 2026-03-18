export default defineNuxtPlugin((nuxtApp) => {
  // Register the directive on both server and client to avoid SSR errors
  nuxtApp.vueApp.directive('scroll-reveal', {
    getSSRProps() {
      // Return empty props for server side to avoid hydration mismatch
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (!process.client) return
      
      // Add initial hidden state
      el.classList.add('reveal-hidden')
      
      // Get animation delay from binding value if provided
      const delay = binding.value?.delay || 0
      if (delay) {
        el.style.animationDelay = `${delay}ms`
      }

      // Get animation type from binding value
      const animationType = binding.value?.animation || 'slide-up'
      el.classList.add(`reveal-${animationType}`)

      // Create intersection observer
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            // Stop observing after animation triggers
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      observer.observe(el)

      // Cleanup on unmount
      // @ts-ignore
      el._observer = observer
    },
    unmounted(el: HTMLElement & { _observer?: IntersectionObserver }) {
      if (el._observer) {
        el._observer.disconnect()
        delete el._observer
      }
    }
  })
})
