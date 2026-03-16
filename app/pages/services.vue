<template>
  <div>
    <Head>
      <Title>Dịch vụ Phân phối Nhạc | Oscar Music Group</Title>
      <Meta name="description" content="Dịch vụ phân phối nhạc số, quản lý bản quyền, YouTube Content ID, Studio thu âm" />
    </Head>

    <!-- Hero Section -->
    <section class="py-20 border-b border-slate-700/40 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="container-snug text-center">
        <h1 class="section-title mb-4">Dịch vụ</h1>
        <p class="section-subtitle">Giải pháp hoàn chỉnh cho sự nghiệp âm nhạc của bạn</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Service 1 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
              <FontAwesomeIcon :icon="['fas', 'music']" class="w-8 h-8 text-cyan-400" />
            </div>
            <h3 class="text-2xl font-bold text-white">Phân phối Nhạc Số Toàn Cầu</h3>
            <p class="text-slate-400 mb-4">
              Phát hành nhạc của bạn lên hơn 150 nền tảng âm nhạc trên toàn thế giới chỉ trong vài ngày.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Spotify, Apple Music, YouTube Music</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Zing MP3, NhacCuaTui, Nhac.vn</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">TikTok, Instagram Reels, YouTube Shorts</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">+140 nền tảng khác</span>
              </li>
            </ul>
          </div>

          <!-- Service 2 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
              <FontAwesomeIcon :icon="['fas', 'shield']" class="w-8 h-8 text-purple-400" />
            </div>
            <h3 class="text-2xl font-bold text-white">Quản lý Bản quyền Minh bạch</h3>
            <p class="text-slate-400 mb-4">
              Theo dõi doanh thu từ mỗi nền tảng theo thời gian thực. Nhận thanh toán hàng tháng.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Dashboard chi tiết doanh thu</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Report doanh thu từng platformDashboard chi tiết doanh thu</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Thanh toán chuyển khoản hoặc ví điện tử</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Không có phí ẩn</span>
              </li>
            </ul>
          </div>

          <!-- Service 3 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-600/20 flex items-center justify-center">
              <FontAwesomeIcon :icon="['fas', 'video']" class="w-8 h-8 text-pink-400" />
            </div>
            <h3 class="text-2xl font-bold text-white">YouTube Content ID</h3>
            <p class="text-slate-400 mb-4">
              Bảo vệ bản quyền trên YouTube. Kiếm tiền từ những video sử dụng nhạc của bạn.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Đăng ký Content ID miễn phí</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Quản lý quyền sở hữu</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Kiếm tiền từ các video cover</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Bảo vệ nội dung có bản quyền</span>
              </li>
            </ul>
          </div>

          <!-- Service 4 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center">
              <FontAwesomeIcon :icon="['fas', 'database']" class="w-8 h-8 text-blue-400" />
            </div>
            <h3 class="text-2xl font-bold text-white">Metadata & Chuẩn hóa Kỹ thuật</h3>
            <p class="text-slate-400 mb-4">
              Đảm bảo bài hát của bạn được hiển thị chính xác và đạt chuẩn âm thanh quốc tế trên mọi nền tảng.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Giao thức DDEX (Digital Data Exchange) bảo mật</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Chuẩn hóa Spotify Loudness (-14 LUFS)</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Apple Digital Masters & Lossless ready</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Cấp mã ISRC & UPC quốc tế tự động</span>
              </li>
            </ul>
          </div>

          <!-- Service 5 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-600/20 flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white">Studio Thu Âm</h3>
            <p class="text-slate-400 mb-4">
              Dịch vụ recording, mixing & mastering theo tiêu chuẩn quốc tế.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Studio chuyên nghiệp tại Hà Nội</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Kỹ sư âm thanh có kinh nghiệm</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Giảm 10-15% phí dịch vụ</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Coaching vocal sẵn có</span>
              </li>
            </ul>
          </div>

          <!-- Service 6 -->
          <div class="card space-y-4">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white">Marketing & Promotion</h3>
            <p class="text-slate-400 mb-4">
              Hỗ trợ tiếp thị hợp lý lực để bài hát của bạn tiếp cận nhiều người nghe hơn.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">SmartLink - Liên kết tất cả nền tảng</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Pitching Playlist cho các curator</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Hỗ trợ truyền thông qua kênh của hệ thống Oscar</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-300">Analytics & insights</span>
              </li>
            </ul>
          </div>

          <!-- Service 7 (AI - New) -->
          <div class="card space-y-4 border-dashed border-cyan-500/30 relative overflow-hidden group">
            <div class="absolute top-4 right-4 px-2 py-1 bg-cyan-500/20 rounded text-[10px] text-cyan-400 font-bold border border-cyan-500/30">LỘ TRÌNH 2026</div>
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FontAwesomeIcon :icon="['fas', 'wand-magic-sparkles']" class="w-8 h-8 text-cyan-400" />
            </div>
            <h3 class="text-2xl font-bold text-white">AI Mastering Engine</h3>
            <p class="text-slate-400 mb-4">
              Dịch vụ tối ưu hóa âm thanh bằng trí tuệ nhân tạo, giúp bản thu đạt chuẩn radio ngay lập tức.
            </p>
            <ul class="space-y-2 opacity-60">
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Tự động phân tích và cân bằng tần số</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Tối ưu hóa độ rộng Stereo (Stereo Imaging)</span>
              </li>
              <li class="flex items-start gap-2">
                <FontAwesomeIcon :icon="['fas', 'check']" class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span class="text-slate-300">Tích hợp trực tiếp vào quy trình tải lên</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container-snug">
        <div class="relative rounded-2xl overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-2xl"></div>
          <div class="relative glass border border-slate-600/40 rounded-2xl p-12 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Bắt đầu sử dụng các dịch vụ của chúng tôi</h2>
            <p class="text-slate-400 mb-8">Tất cả dịch vụ đi kèm với hỗ trợ chuyên nghiệp 24/7</p>
            <a href="https://app.oscarlabel.com" class="btn-primary inline-block">Phát hành ngay</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
