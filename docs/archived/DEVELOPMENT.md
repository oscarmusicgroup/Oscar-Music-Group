# Oscar Music Group - Development Guide

Hướng dẫn toàn diện cho các lập trình viên làm việc trên dự án Oscar Music Group.

## 📚 Mục lục

1. [Setup Ban đầu](#setup-ban-đầu)
2. [Project Structure](#project-structure)
3. [Quy ước Code](#quy-ước-code)
4. [Phát triển Tính năng](#phát-triển-tính-năng)
5. [Testing](#testing)
6. [Deployment](#deployment)

## Setup Ban đầu

### 1. Clone Repository
```bash
git clone https://github.com/oscarmusicgroup/website.git
cd oscar-music-group
```

### 2. Cài đặt Dependencies
```bash
# Sử dụng npm
npm install

# Hoặc pnpm (recommended)
pnpm install
```

### 3. Environment Variables
```bash
# Copy file example
cp .env.example .env.local

# Điền các biến cần thiết
```

### 4. Chạy Development Server
```bash
npm run dev
# Truy cập http://localhost:3000
```

## Project Structure

```
oscar-music-group/
├── app/
│   ├── assets/
│   │   └── css/           # Global styles
│   ├── components/        # Vue components
│   ├── composables/       # Reusable logic
│   ├── layouts/          # Layout components
│   ├── middleware/       # Route middleware
│   ├── pages/            # Routes
│   ├── utils/            # Utility functions
│   └── app.vue           # Entry point
├── server/
│   ├── api/              # API routes
│   ├── middleware/       # Server middleware
│   ├── routes/           # Server routes
│   └── utils/            # Server utilities
├── public/               # Static files
├── nuxt.config.ts        # Nuxt config
├── tailwind.config.ts    # Tailwind config
└── package.json
```

## Quy ước Code

### Vue Components
```vue
<!-- components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title'
})

const emit = defineEmits<{
  change: [value: string]
}>()

const handleClick = () => {
  emit('change', 'new-value')
}
</script>

<style scoped>
.my-component {
  @apply space-y-4;
}
</style>
```

### Composables
```ts
// composables/useMyComposable.ts
export const useMyComposable = (initialValue: string) => {
  const state = ref(initialValue)

  const setState = (newValue: string) => {
    state.value = newValue
  }

  return {
    state: readonly(state),
    setState
  }
}
```

### API Routes
```ts
// server/api/my-endpoint.get.ts
export default defineEventHandler(async (event) => {
  // Validate & process
  const query = getQuery(event)
  
  // Response
  return {
    success: true,
    data: []
  }
})
```

### TypeScript Types
```ts
// types/index.ts
export interface Artist {
  id: string
  name: string
  email: string
  genre: string
  createdAt: Date
}

export interface Release {
  id: string
  title: string
  artistId: string
  platforms: string[]
  status: 'draft' | 'published' | 'rejected'
}
```

## Phát triển Tính năng

### 1. Tạo nhánh mới
```bash
git checkout -b feature/awesome-feature
```

### 2. Phát triển

**Tạo Page:**
```vue
<!-- app/pages/my-page.vue -->
<template>
  <div>
    <h1>My Page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

**Tạo Component:**
```vue
<!-- app/components/MyCard.vue -->
<template>
  <div class="card">
    <!-- content -->
  </div>
</template>

<script setup lang="ts">
// logic
</script>
```

**Tạo Composable:**
```ts
// app/composables/useMyLogic.ts
export const useMyLogic = () => {
  // logic return
}
```

### 3. Commit & Push
```bash
git add .
git commit -m "feature: add awesome feature"
git push origin feature/awesome-feature
```

## Styling

### Tailwind CSS
Project sử dụng Tailwind CSS. Áp dụng class directives:

```vue
<div class="bg-gradient-to-r from-cyan-500 to-purple-600">
  <p class="text-white font-bold md:text-2xl">
    Responsive text
  </p>
</div>
```

### Dark Mode
Dark mode được bật mặc định:

```tailwind
/* tailwind.config.ts */
darkMode: 'class'
```

```vue
<!-- Dark mode toggle -->
<button @click="toggleDarkMode">
  Toggle Dark
</button>
```

### Custom CSS
Thêm custom styles trong `app/assets/css/main.css`:

```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
           rounded-lg font-semibold hover:shadow-glow transition-all;
  }
}
```

## Forms & Validation

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="form.email"
      type="email"
      required
      class="form-input"
    />
    <button type="submit" class="btn-primary">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  email: ''
})

const handleSubmit = async () => {
  try {
    const result = await $fetch('/api/endpoint', {
      method: 'POST',
      body: form
    })
  } catch (error) {
    console.error(error)
  }
}
</script>
```

## API Integration

```ts
// composables/useApi.ts
export const useApi = () => {
  const { data, error, pending } = await useFetch(
    '/api/endpoint',
    {
      method: 'GET'
    }
  )

  return { data, error, pending }
}
```

## SEO

```ts
// useSeoMeta từ composable
useSeoMeta({
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
  image: '/og-image.jpg'
})
```

## Performance Tips

1. **Code Splitting**: Routes được tự động split
2. **Image Optimization**: Sử dụng `<NuxtImg>`
3. **Lazy Loading**: Components lazy load mặc định
4. **CSS Optimization**: Tailwind CSS purge auto
5. **Minification**: Production build tự động minify

## Testing

```bash
# Unit tests (when configured)
npm run test

# E2E tests (when configured)
npm run test:e2e
```

## Debugging

### Browser DevTools
- Inspect Vue components
- Track state changes
- Monitor network

### VS Code Extensions
- Volar (Vue 3 official)
- Tailwind CSS IntelliSense
- ESLint

## Building & Deployment

### Build
```bash
# Generate static site
npm run generate

# Build for production
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the .output directory to Netlify
```

## Troubleshooting

### Port already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --verbose
```

## Resources

- [Nuxt 4 Documentation](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support

Nếu bạn gặp vấn đề:
1. Kiểm tra documentation
2. Tìm kiếm trong GitHub issues
3. Liên hệ với team: dev@oscarmusicgroup.vn

---

Happy coding! 🚀
