<template>
  <header class="sticky top-0 z-50 glass border-b border-slate-700/40">
    <nav class="container-snug py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <NuxtImg src="/logo.png" alt="Oscar Music Group Logo" class="w-10 h-10 object-contain" />
        <span class="font-bold text-xl text-white hidden sm:inline group-hover:text-cyan-300 transition-colors">
          Oscar Music Group
        </span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/services" class="text-slate-300 hover:text-cyan-300 transition-colors">
          Dịch vụ
        </NuxtLink>
        <NuxtLink to="/pricing" class="text-slate-300 hover:text-cyan-300 transition-colors">
          Gói phát hành
        </NuxtLink>
        <NuxtLink to="/about" class="text-slate-300 hover:text-cyan-300 transition-colors">
          Về chúng tôi
        </NuxtLink>
        <!-- <a href="https://blog.oscarmusicgroup.vn" class="text-slate-300 hover:text-cyan-300 transition-colors">
          Blog
        </a> -->
        <NuxtLink to="/contact" class="text-slate-300 hover:text-cyan-300 transition-colors">
          Liên hệ
        </NuxtLink>
      </div>

      <!-- CTA Buttons -->
      <div class="flex items-center gap-3">
        <!-- <button class="btn-secondary hidden sm:inline-block">Đăng nhập</button> -->
        <a href="https://app.oscarlabel.com/" class="btn-primary text-sm">Đăng Ký Ngay</a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon v-if="!mobileMenuOpen" :icon="['fas', 'bars']" class="w-6 h-6" />
          <FontAwesomeIcon v-else :icon="['fas', 'times']" class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-700/40 backdrop-blur-md">
        <div class="container-snug py-4 space-y-3">
          <NuxtLink to="/services" class="block text-slate-300 hover:text-cyan-300 py-2">
            Dịch vụ
          </NuxtLink>
          <NuxtLink to="/pricing" class="block text-slate-300 hover:text-cyan-300 py-2">
            Gói phát hành
          </NuxtLink>
          <NuxtLink to="/about" class="block text-slate-300 hover:text-cyan-300 py-2">
            Về chúng tôi
          </NuxtLink>
          <NuxtLink to="/contact" class="block text-slate-300 hover:text-cyan-300 py-2">
            Liên hệ
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
