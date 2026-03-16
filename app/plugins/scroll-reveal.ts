export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return

  nuxtApp.vueApp.directive('scroll-reveal', {
    mounted(el: HTMLElement, binding) {
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
