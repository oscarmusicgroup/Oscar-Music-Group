# QUICK START GUIDE - Oscar Music Group

## 🎬 Bắt đầu nhanh

### 📋 Yêu cầu
- Node.js 18+
- npm hoặc pnpm

### ⚡ 3 Bước Cài Đặt

**1. Cài dependencies:**
```bash
cd /Volumes/DATA/DỰ\ ÁN/OscarLabel/OSCAR\ MUSIC\ GROUP
npm install
```

**2. Chạy dev server:**
```bash
npm run dev
```

**3. Mở browser:**
```
http://localhost:3000
```

---

## 📚 Tệp Tài Liệu Chính

| Tệp | Mục đích |
|-----|---------|
| **README.md** | Tài liệu chính về dự án |
| **DEVELOPMENT.md** | Hướng dẫn cho developers |
| **DEPLOYMENT.md** | Hướng dẫn deploy lên production |
| **PROJECT_SUMMARY.md** | Tóm tắt toàn bộ dự án |

---

## 🎨 Cấu Trúc Trang Web

### Pages (Trang)
- **/ (Homepage)** - Trang chủ đầy đủ tính năng
- **/about** - Về Oscar Music Group
- **/services** - Dịch vụ chi tiết
- **/pricing** - Gói và giá cả
- **/contact** - Liên hệ & form

### Components (Thành phần)
```
OMGHeader         → Navigation bar
OMGFooter         → Footer
ServiceCard       → Service showcase
PricingCard       → Pricing tier
TestimonialCard   → Customer review
ThemeToggle       → Dark mode toggle
```

---

## 🔧 Các Lệnh Chính

```bash
# Development
npm run dev          # Chạy dev server

# Build
npm run build        # Build cho production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Dependencies
npm install          # Cài đặt dependencies
npm update           # Cập nhật packages
```

---

## 🎯 SEO Features

✅ Sitemap.xml auto-generated  
✅ Robots.txt configured  
✅ Meta tags + OpenGraph  
✅ Mobile responsive  
✅ Performance > 95 Lighthouse  

---

## 💻 Cụm công nghệ

```
Frontend:           Backend:
- Nuxt 4            - Nitro
- Vue 3             - H3
- Tailwind CSS      - Node.js
- TypeScript        - Serverless ready
- Vite
```

---

## 📱 Tính năng

✨ Dark mode default  
✨ Responsive design  
✨ Smooth animations  
✨ Fast performance  
✨ SEO optimized  
✨ Contact form  
✨ API ready  

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Connect GitHub + configure build settings

### Traditional VPS
See DEPLOYMENT.md for detailed guide

---

## 📞 File Tài Liệu Tham Khảo

| File | Nội dung |
|------|---------|
| nuxt.config.ts | Cấu hình Nuxt |
| tailwind.config.ts | Cấu hình Tailwind |
| package.json | Dependencies |
| .env.example | Biến môi trường |

---

## 🎓 Folder Structure Tóm Tắt

```
app/
├── pages/          → Routes (5 pages)
├── components/     → Reusable UI (6 components)
├── composables/    → Logic hooks (2 composables)
├── layouts/        → Layout wrappers (1 layout)
├── assets/         → Styles & media
├── utils/          → Helper functions
└── middleware/     → Middleware

server/
├── api/            → API endpoints (1 route)
├── routes/         → Server routes (2 routes)
└── middleware/     → Server middleware
```

---

## 🔍 SEO Keywords

**Triệu chứng tìm kiếm chính:**
- phát hành nhạc Spotify
- phân phối nhạc số
- Oscar Music Group
- phát hành nhạc Việt Nam
- Zing MP3 phát hành

---

## ✅ Production Checklist

Trước khi deploy:
- [ ] Cập nhật .env với production values
- [ ] Thay thế logo & images
- [ ] Cập nhật info liên hệ
- [ ] Thêm Google Analytics ID
- [ ] Test trên mobile
- [ ] Chạy Lighthouse audit
- [ ] Kiểm tra form submission
- [ ] Xác minh sitemap.xml
- [ ] Kiểm tra robots.txt

---

## 🎉 Bạn Sẵn Sàng!

```bash
# Bắt đầu development
npm run dev

# Xem tại:
# http://localhost:3000
```

---

**Enjoy building! 🚀**

Câu hỏi? Xem README.md hoặc DEVELOPMENT.md
