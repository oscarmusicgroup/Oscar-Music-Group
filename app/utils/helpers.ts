/**
 * Format number to currency
 */
export const formatCurrency = (value: number, currency = 'VND'): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format number with thousand separator
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('vi-VN').format(value)
}

/**
 * Format date
 */
export const formatDate = (date: Date | string, locale = 'vi-VN'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/**
 * Convert text to slug
 */
export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncate text to specified length
 */
export const truncate = (text: string, length: number, suffix = '...'): string => {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + suffix
}

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Debounce function
 */
export const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11) + Date.now().toString(36)
}

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (process.client) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
  return false
}

/**
 * Get query param from URL
 */
export const getQueryParam = (param: string): string | null => {
  if (process.client) {
    const params = new URLSearchParams(window.location.search)
    return params.get(param)
  }
  return null
}
