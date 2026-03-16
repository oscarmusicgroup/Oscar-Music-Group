# Oscar Music Group - Digital Music Distribution Platform

Nền tảng phân phối nhạc số toàn cầu được xây dựng với Nuxt 4, Vue 3, Tailwind CSS và Vite.

## 🎵 Giới thiệu

Oscar Music Group là một nền tảng phân phối nhạc số chuyên nghiệp, giúp các nghệ sĩ độc lập phát hành nhạc lên hơn 150 nền tảng toàn cầu bao gồm Spotify, Apple Music, YouTube Music, TikTok và các nền tảng nội địa như Zing MP3, NhacCuaTui.

## ✨ Tính năng

- ✅ Phân phối nhạc lên 150+ nền tảng toàn cầu
- ✅ Quản lý bản quyền minh bạch
- ✅ YouTube Content ID integration
- ✅ Studio thu âm chuyên nghiệp
- ✅ Dashboard theo dõi doanh thu thời gian thực
- ✅ Metadata chuẩn hóa quốc tế
- ✅ Hỗ trợ marketing & promotion
- ✅ Responsive design - Dark mode optimized
- ✅ SEO optimized
- ✅ Performance > 95 Lighthouse score

## 🚀 Công nghệ

### Frontend
- **Nuxt 4** - The Intuitive Vue Framework
- **Vue 3** - Progressive JavaScript Framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **TypeScript** - Type safety for JavaScript

### Backend
- **Nitro** - Universal server engine
- **H3** - Ultralight server runtime
- **Node.js** - JavaScript runtime

### Optimization
- **@nuxt/image** - Image optimization
- **@nuxt/fonts** - Font optimization
- **SSG/SSR** - Static and Server-Side Rendering
- **Lazy Hydration** - Hydration on demand

## 📋 Yêu cầu

- Node.js 18+ hoặc 20+
- npm hoặc pnpm

## 🔧 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Hoặc sử dụng pnpm
pnpm install
```

## 💻 Phát triển

```bash
# Chạy development server
npm run dev

# Hoặc với pnpm
pnpm dev
```

Server sẽ khởi động tại `http://localhost:3000`

## 🔨 Build

```bash
# Build cho production
npm run build

# Preview build
npm run preview

# Generate static site
npm run generate
```

## 📁 Cấu trúc dự án

```
oscar-music-group/
├── app/
│   ├── app.vue                   # Entry point
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind directives
│   ├── components/
│   │   ├── OMGHeader.vue         # Navigation header
│   │   ├── OMGFooter.vue         # Footer
│   │   ├── ServiceCard.vue       # Service card component
│   │   ├── PricingCard.vue       # Pricing tier card
│   │   ├── TestimonialCard.vue   # Testimonial card
│   │   └── ThemeToggle.vue       # Dark mode toggle
│   ├── composables/
│   │   ├── useTheme.ts           # Theme management
│   │   └── useSeoMeta.ts         # SEO management
│   ├── layouts/
│   │   └── default.vue           # Default layout
│   ├── middleware/
│   │   └── analytics.ts          # Analytics tracking
│   ├── pages/
│   │   ├── index.vue             # Homepage
│   │   ├── about.vue             # About page
│   │   ├── services.vue          # Services page
│   │   ├── pricing.vue           # Pricing page
│   │   └── contact.vue           # Contact page
│   ├── plugins/
│   │   └── ...
│   └── utils/
│       ├── helpers.ts            # Utility functions
│       └── constants.ts          # Project constants
├── server/
│   ├── api/
│   │   └── contact.post.ts       # Contact form API
│   └── routes/
│       ├── sitemap.xml.ts        # XML sitemap
│       └── robots.txt.ts         # Robots.txt for SEO
├── docs/
│   ├── archived/                 # Archived documentation
│   └── Readme.md                 # Legacy docs reference
├── dev/                          # Development assets
├── public/                       # Static assets
├── nuxt.config.ts                # Nuxt configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
├── .env.example                  # Environment variables example
├── .gitignore                    # Git ignore rules
└── README.md                     # This file (Source of Truth)
```

## 🎨 Giao diện

- **Dark Mode**: Mặc định, tối ưu cho người dùng
- **Color Scheme**: Cyan & Purple gradient
- **Typography**: Inter + Space Grotesk
- **Responsive**: Mobile-first design

## 📈 SEO Optimization

- ✅ Sitemap XML auto-generation
- ✅ Robots.txt configuration
- ✅ OpenGraph meta tags
- ✅ Twitter card support
- ✅ Structured data (JSON-LD ready)
- ✅ Canonical links
- ✅ Meta descriptions
- ✅ Keywords optimization
- ✅ SSR/SSG rendering

## ⚡ Performance

Mục tiêu hiệu năng:
- Lighthouse Performance Score: **> 95**
- Largest Contentful Paint (LCP): **< 2.5s**
- Interaction to Next Paint (INP): **< 200ms**
- Cumulative Layout Shift (CLS): **< 0.1**
- Time to First Byte (TTFB): **< 500ms**

## 🧪 Testing

```bash
# Run tests (when configured)
npm run test
```

## 📝 Các từ khóa SEO chính

- phát hành nhạc Spotify
- phân phối nhạc số
- Zing MP3 phát hành
- DistroKid alternative
- TuneCore competitor
- phá hành nhạc toàn cầu
- Oscar Music Group
- Phát hành nhạc Việt Nam

## 📞 Liên hệ

- **Email**: support@oscarlabel.com
- **Điện thoại**: +84 849 297 957
- **Địa chỉ**: Số 9 Ngách 78 ngõ 169 đường Hoàng Mai, Phường Tương Mai, Hà Nội

## 📄 Giấy phép

MIT License - Xem [LICENSE](./LICENSE) file để biết chi tiết

## 🤝 Đóng góp

Chúng tôi hoan nghênh những đóng góp từ cộng đồng. Vui lòng:

1. Fork repository này
2. Tạo branch cho feature của bạn (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add amazing feature'`)
4. Push đến branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## 📚 Tài liệu

Để biết thêm chi tiết về phát triển và triển khai, xem các tài liệu trong thư mục `docs/archived/`:

- **DEVELOPMENT.md** - Hướng dẫn phát triển chi tiết
- **DEPLOYMENT.md** - Hướng dẫn triển khai
- **PROJECT_SUMMARY.md** - Tóm tắt dự án
- **CHECKLIST.md** - Checklist triển khai

## 🙏 Cảm ơn

Cảm ơn tất cả những người đã hỗ trợ Oscar Music Group!

---

**Oscar Music Group** - Đưa âm nhạc của bạn ra thế giới 🎵
