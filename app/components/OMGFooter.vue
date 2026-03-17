<template>
  <footer class="border-t border-slate-700/40 bg-slate-900/50 backdrop-blur-md">
    <!-- Main Footer Content -->
    <div class="container-snug py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="font-bold text-white mb-4 flex items-center gap-2">
            <NuxtImg src="/logo.png" alt="Oscar Music Group Logo" class="w-8 h-8 object-contain" />
            Oscar Music Group
          </h3>
          <p class="text-slate-400 text-sm">
            Phát hành âm nhạc của bạn lên Spotify, Apple Music và 150+ nền tảng toàn cầu.
          </p>
          <div class="flex gap-4 mt-4">
            <a href="https://facebook.com/oscarmusicgroup" target="_blank" class="text-slate-400 hover:text-cyan-300 transition" aria-label="Facebook">
              <FontAwesomeIcon :icon="['fab', 'facebook']" class="w-5 h-5" />
            </a>
            <a href="https://discord.gg/qydQNrJD" target="_blank" class="text-slate-400 hover:text-cyan-300 transition" aria-label="Discord">
              <FontAwesomeIcon :icon="['fab', 'discord']" class="w-5 h-5" />
            </a>
            <a href="https://instagram.com/oscarmusicgroup" target="_blank" class="text-slate-400 hover:text-cyan-300 transition" aria-label="Instagram">
              <FontAwesomeIcon :icon="['fab', 'instagram']" class="w-5 h-5" />
            </a>
            <a href="https://threads.net/@oscarmusicgroup" target="_blank" class="text-slate-400 hover:text-cyan-300 transition" aria-label="Threads">
              <FontAwesomeIcon :icon="['fab', 'threads']" class="w-5 h-5" />
            </a>
            <a href="https://tiktok.com/@oscarmusicgroup" target="_blank" class="text-slate-400 hover:text-cyan-300 transition" aria-label="TikTok">
              <FontAwesomeIcon :icon="['fab', 'tiktok']" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-white mb-4">Dịch vụ</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="text-slate-400 hover:text-cyan-300 transition">Phân phối nhạc</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-slate-400 hover:text-cyan-300 transition">Quản lý bản quyền</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-slate-400 hover:text-cyan-300 transition">YouTube Content ID</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-slate-400 hover:text-cyan-300 transition">Studio thu âm</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-white mb-4">Công ty</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="text-slate-400 hover:text-cyan-300 transition">Về Oscar Music Group</NuxtLink></li>
            <!-- <li><a href="https://blog.oscarmusicgroup.vn" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-cyan-300 transition">Blog</a></li> -->
            <li><NuxtLink to="/contact" class="text-slate-400 hover:text-cyan-300 transition">Liên hệ</NuxtLink></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 transition">Tuyển dụng</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-semibold text-white mb-4">Pháp lý</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 transition">Chính sách bảo mật</a></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 transition">Điều khoản dịch vụ</a></li>
            <li><a href="#" class="text-slate-400 hover:text-cyan-300 transition">Chính sách cookie</a></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-700/40 pt-8">
        <!-- Contact Info -->
        <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[11px]">
          <div class="space-y-1">
            <p class="text-slate-400">
              <strong class="text-white">Công Ty TNHH OSCAR ENTERTAINMENT</strong>
            </p>
            <p class="text-slate-400">
              <strong class="text-white">Mã số Thuế:</strong> 0111343108
            </p>
          </div>
          <div class="space-y-1">
            <p class="text-slate-400">
              <strong class="text-white">Địa chỉ:</strong> Số 9 Ngách 78 ngõ 169 đường Hoàng Mai, Phường Tương Mai, Hà Nội
            </p>
            <p class="text-slate-400">
              <strong class="text-white">Email:</strong> <a href="mailto:support@oscarlabel.com" class="text-cyan-300 hover:text-cyan-200">support@oscarlabel.com</a>
            </p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-700/40">
          <p class="text-slate-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Oscar Music Group.
          </p>
          <p class="text-slate-400 text-sm mt-4 md:mt-0">
            Phát hành âm nhạc từ Việt Nam <span class="text-cyan-300"></span> ra thế giới
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script needed
</script>
