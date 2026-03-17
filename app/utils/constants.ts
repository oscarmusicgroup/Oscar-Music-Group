/**
 * Application constants
 */

export const APP_NAME = 'Oscar Music Group'
export const APP_DESCRIPTION = 'Phân phối nhạc số toàn cầu từ Việt Nam'
export const APP_URL = 'https://oscarmusicgroup.vn'

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/oscarmusicgroup',
  discord: 'https://discord.gg/oscarmusicgroup',
  instagram: 'https://instagram.com/oscarmusicgroup',
  threads: 'https://threads.net/@oscarmusicgroup',
  tiktok: 'https://tiktok.com/@oscarmusicgroup',
}

/**
 * Contact Information
 */
export const CONTACT_INFO = {
  email: 'info@oscarmusicgroup.vn',
  supportEmail: 'support@oscarmusicgroup.vn',
  phone: '+84 (0) 9 1234 5678',
  address: 'Số 9 Ngách 78 ngõ 169 đường Hoàng Mai, Phường Tương Mai, Hà Nội',
}

/**
 * Business Hours
 */
export const BUSINESS_HOURS = {
  weekday: { open: '09:00', close: '18:00' },
  weekend: 'Closed',
}

/**
 * Platform Partners
 */
export const PLATFORMS = [
  { name: 'Spotify', icon: '▶' },
  { name: 'Apple Music', icon: '🍎' },
  { name: 'YouTube Music', icon: '▶' },
  { name: 'TikTok', icon: '♪' },
  { name: 'Instagram', icon: '📷' },
  { name: 'Zing MP3', icon: '♫' },
  { name: 'NhacCuaTui', icon: '🎵' },
  { name: 'SoundCloud', icon: '☁️' },
  { name: 'Tidal', icon: '🌊' },
  { name: 'Amazon Music', icon: '🎧' },
]

/**
 * Service Tiers
 */
export const SERVICE_TIERS = {
  ARTIST: {
    name: 'Dành cho Nghệ Sĩ',
    price: 'Miễn phí',
    description: 'Hoàn hảo cho ca sĩ, rapper, producer indie',
  },
  LABEL: {
    name: 'Dành cho Tổ Chức',
    price: 'Liên hệ',
    description: 'Dành cho nhãn hàng đĩa & tổ chức',
  },
}

/**
 * Release Timeframes
 */
export const TIMEFRAMES = {
  EXPRESS: { days: 1, name: 'Express' },
  STANDARD: { days: 3, name: 'Standard' },
  SCHEDULED: { days: 7, name: 'Scheduled' },
}

/**
 * Features
 */
export const FEATURES = {
  UNLIMITED_SONGS: 'Số lượng bài hát không giới hạn',
  WORLDWIDE_DISTRIBUTION: 'Phân phối 150+ nền tảng toàn cầu',
  TRANSPARENT_ROYALTIES: 'Doanh thu minh bạch, không phí ẩn',
  YOUTUBE_CONTENT_ID: 'YouTube Content ID integration',
  METADATA_CURATION: 'Metadata chuẩn hóa quốc tế',
  STUDIO_DISCOUNT: 'Giảm giá dịch vụ Studio',
  MARKETING_SUPPORT: 'Hỗ trợ marketing & promotion',
  REAL_TIME_ANALYTICS: 'Analytics theo thời gian thực',
}

/**
 * Common API Endpoints
 */
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  ARTISTS: '/api/artists',
  RELEASES: '/api/releases',
  ANALYTICS: '/api/analytics',
  PAYMENTS: '/api/payments',
}

/**
 * Page Metadata
 */
export const PAGE_METADATA = {
  HOME: {
    title: 'Phát Hành Nhạc Số Miễn Phí | Oscar Music Group',
    description: 'Phát hành nhạc của bạn lên Spotify, Apple Music và 150+ nền tảng toàn cầu.',
  },
  ABOUT: {
    title: 'Về Oscar Music Group | Phân phối Nhạc Số',
    description: 'Oscar Music Group - Đơn vị phân phối nhạc số hàng đầu tại Việt Nam',
  },
  SERVICES: {
    title: 'Dịch vụ | Oscar Music Group',
    description: 'Dịch vụ phân phối nhạc, quản lý bản quyền, YouTube Content ID',
  },
  PRICING: {
    title: 'Gói Dịch vụ | Oscar Music Group',
    description: 'Chọn gói phát hành phù hợp. Miễn phí cho nghệ sĩ hoặc liên hệ với label',
  },
  CONTACT: {
    title: 'Liên Hệ | Oscar Music Group',
    description: 'Liên hệ chúng tôi để tư vấn về dịch vụ phát hành nhạc',
  },
}

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Trường này là bắt buộc',
  INVALID_EMAIL: 'Email không hợp lệ',
  INVALID_PHONE: 'Số điện thoại không hợp lệ',
  SERVER_ERROR: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
  NETWORK_ERROR: 'Kết nối mạng bị lỗi. Vui lòng kiểm tra internet của bạn.',
}

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Cảm ơn! Chúng tôi sẽ liên hệ sớm.',
  SUBSCRIBED: 'Bạn đã đăng ký thành công!',
}

/**
 * Animation Durations (ms)
 */
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 1000,
}

/**
 * Debounce Delays (ms)
 */
export const DEBOUNCE_DELAYS = {
  SHORT: 300,
  MEDIUM: 500,
  LONG: 1000,
}

/**
 * Cache Durations (seconds)
 */
export const CACHE_DURATIONS = {
  SHORT: 300, // 5 minutes
  MEDIUM: 1800, // 30 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 1 day
}
