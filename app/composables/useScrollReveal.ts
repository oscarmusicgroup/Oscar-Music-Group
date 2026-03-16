export const useScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger 100px before element fully enters
    threshold: 0.1
  }

  const createObserver = (callback: (isVisible: boolean) => void) => {
    if (!process.client) return null
    
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(true)
        }
      })
    }, observerOptions)
  }

  const observeElement = (element: Element, callback?: () => void) => {
    if (!process.client) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          if (callback) callback()
          // Optional: stop observing after animation
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(element)
    return observer
  }

  return {
    createObserver,
    observeElement,
    observerOptions
  }
}
