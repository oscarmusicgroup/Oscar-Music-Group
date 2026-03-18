<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
      <!-- Animated Background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-32 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <!-- Hero Content -->
      <div class="container-snug">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <div class="space-y-4">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span class="text-white">Đưa âm nhạc</span>
                <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  của bạn ra thế giới
                </span>
              </h1>

              <p class="text-xl text-slate-400">
                Hệ sinh thái phân phối nhạc số toàn diện, kết nối bạn với hơn <strong class="text-cyan-300">150+ nền tảng</strong> toàn cầu. Quản lý bản quyền minh bạch. Tích hợp <strong class="text-cyan-300">Trí Tuệ nhân tạo</strong> tham gia vào quá trình phát hành sản phẩm.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://app.oscarlabel.com" class="btn-primary inline-block">
                Phát hành miễn phí
              </a>
              <NuxtLink to="/pricing" class="btn-secondary inline-flex items-center gap-2">
                Tìm hiểu các gói phát hành
                <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="w-4 h-4" />
              </NuxtLink>
            </div>

            <!-- Trust Badge -->
            <div class="space-y-3">
              <p class="text-sm text-slate-400">Tin cậy bởi hàng ngàn nghệ sĩ indie</p>
              <div class="flex gap-4">
                <div class="text-center">
                  <p class="text-2xl font-bold text-white">1000+</p>
                  <p class="text-xs text-slate-400">Nghệ sĩ</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-white">10M+</p>
                  <p class="text-xs text-slate-400">Lượng streams</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-white">150+</p>
                  <p class="text-xs text-slate-400">Nền tảng</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right - Video/Image -->
          <div class="relative flex items-center justify-center min-h-[400px]">
            <!-- Wrapper isolated for Safari composite rendering -->
            <div 
              class="relative w-full aspect-video md:aspect-square flex items-center justify-center pointer-events-none mix-blend-screen"
              style="
                transform: translate3d(0,0,0); 
                isolation: isolate;
                -webkit-mask-image: -webkit-radial-gradient(center, circle cover, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);
                mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);
              "
            >
              <video
                autoplay
                muted
                loop
                playsinline
                class="video-introding w-full h-full object-cover"
                style="
                  -webkit-filter: contrast(120%) brightness(95%);
                  filter: contrast(120%) brightness(95%); 
                  transform: translate3d(0,0,0); 
                  will-change: transform, filter;
                "
              >
                <source src="/video-introding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Ecosystem Section -->
    <section v-scroll-reveal="{ animation: 'fade-in' }" class="py-16 border-t border-slate-700/40">
      <div class="container-snug">
        <p class="text-center text-slate-400 text-sm mb-8 uppercase tracking-widest">Phát hành đến 150+ nền tảng toàn cầu</p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-12">
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 0 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <FontAwesomeIcon :icon="['fab', 'spotify']" class="w-10 h-10 text-[#1DB954] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(29,185,84,0.3)] transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Spotify</span>
          </div>
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 100 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <FontAwesomeIcon :icon="['fab', 'apple']" class="w-10 h-10 text-[#FA243C] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(250,36,60,0.3)] transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Apple Music</span>
          </div>
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 200 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img src="/zingmp3.png" alt="Zing MP3" class="w-10 h-10 rounded-full object-contain group-hover:scale-110 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Zing MP3</span>
          </div>
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 300 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <FontAwesomeIcon :icon="['fab', 'youtube']" class="w-10 h-10 text-[#FF0000] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">YouTube Music</span>
          </div>
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 400 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <FontAwesomeIcon :icon="['fab', 'tiktok']" class="w-10 h-10 text-white drop-shadow-[2px_2px_0_#ff0050,-2px_-2px_0_#00f2fe] group-hover:scale-110 transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">TikTok</span>
          </div>
          <div v-scroll-reveal="{ animation: 'slide-left', delay: 500 }" class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img src="/nct.png" alt="NhacCuaTui" class="w-10 h-10 object-contain group-hover:scale-110 drop-shadow-[0_0_10px_rgba(0,160,233,0.4)] transition-transform duration-300" />
            <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">NhacCuaTui</span>
          </div>

          <!-- Extended Platforms -->
          <template v-if="showMore">
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'soundcloud']" class="w-10 h-10 text-[#ff5500] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,85,0,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">SoundCloud</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'amazon']" class="w-10 h-10 text-[#FF9900] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,153,0,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Amazon Music</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'napster']" class="w-10 h-10 text-white group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Napster</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'deezer']" class="w-10 h-10 text-[#00C7F2] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(0,199,242,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Deezer</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'mixcloud']" class="w-10 h-10 text-[#5000ff] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(80,0,255,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Mixcloud</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'bandcamp']" class="w-10 h-10 text-[#629aa9] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(98,154,169,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Bandcamp</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'lastfm']" class="w-10 h-10 text-[#d51007] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(213,16,7,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Last.fm</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'yandex']" class="w-10 h-10 text-[#ffcc00] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,204,0,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Yandex Music</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'itunes-note']" class="w-10 h-10 text-[#EA4CC0] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(234,76,192,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">iTunes</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'google-play']" class="w-10 h-10 text-[#3BCCFF] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(59,204,255,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Google Play</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <FontAwesomeIcon :icon="['fab', 'facebook']" class="w-10 h-10 text-[#1877F2] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(24,119,242,0.3)] transition-transform duration-300" />
              <span class="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Facebook</span>
            </div>
            <div class="platform-logo group flex flex-col items-center justify-center gap-3 cursor-pointer animate-fade-in">
              <div class="w-10 h-10 bg-slate-800/50 rounded-full border border-slate-700 flex items-center justify-center font-bold text-slate-300 text-xl group-hover:scale-110 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:border-slate-500 group-hover:text-white transition-all duration-300">+</div>
              <span class="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">And more+</span>
            </div>
          </template>
        </div>

        <!-- Show More Button -->
        <div class="flex justify-center mt-10">
          <button @click="showMore = !showMore" class="text-slate-400 hover:text-white text-sm font-medium px-6 py-2 rounded-full border border-slate-700/50 hover:border-slate-500 transition-all duration-300 flex items-center gap-2">
            <span>{{ showMore ? 'Rút gọn' : 'Xem thêm' }}</span>
            <FontAwesomeIcon :icon="showMore ? ['fas', 'minus'] : ['fas', 'plus']" class="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>

    <!-- USP Section -->
    <section v-scroll-reveal="{ animation: 'slide-up' }" class="py-20 border-t border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-4">Tại sao chọn Oscar Music Group?</h2>
        <p class="section-subtitle text-center mb-12">Kết hợp sức mạnh của studio vật lý và nền tảng phân phối số hiện đại</p>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 0 }" class="card text-center">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon :icon="['fas', 'shield']" class="w-8 h-8 text-cyan-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Giữ 100% Bản quyền</h3>
            <p class="text-slate-400 text-center">
              Bạn giữ quyền sở hữu master tuyệt đối. Không có ràng buộc hợp đồng dài hạn.
            </p>
          </div>

          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 100 }" class="card text-center">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon :icon="['fas', 'rocket']" class="w-8 h-8 text-cyan-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Phát hành nhanh</h3>
            <p class="text-slate-400 text-center">
              3-5 ngày làm việc lên Spotify, Apple Music, YouTube và tất cả nền tảng.
            </p>
          </div>

          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 200 }" class="card text-center">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon :icon="['fas', 'chart-line']" class="w-8 h-8 text-cyan-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Doanh thu Minh bạch</h3>
            <p class="text-slate-400 text-center">
              Theo dõi doanh thu theo thời gian thực. Thanh toán qua chuyển khoản hoặc ví điện tử.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Platform Section -->
    <section v-scroll-reveal="{ animation: 'slide-up' }" class="py-24 border-t border-slate-700/40 bg-slate-950/50">
      <div class="container-snug">
        <h2 class="section-title text-center mb-4">Nền tảng Quản lý Chuyên nghiệp</h2>
        <p class="section-subtitle text-center mb-16">Công cụ mạnh mẽ giúp bạn làm chủ sự nghiệp âm nhạc từ con số đến dòng tiền</p>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- AI Predictive Analytics Dashboard -->
          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 0 }" class="group">
            <div class="card h-full flex flex-col border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-xl font-bold text-white mb-1">Phân tích bằng AI</h3>
                  <p class="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Oscar AI Engine</p>
                </div>
                <div class="p-2 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/30">
                  <FontAwesomeIcon :icon="['fas', 'brain']" class="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <!-- AI Dashboard Visual -->
              <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 mb-6 flex-1">
                <!-- Trending Insights -->
                <div class="grid grid-cols-2 gap-2 mb-4">
                  <div class="p-2 bg-slate-800/40 rounded-lg border border-slate-700/30">
                    <p class="text-[8px] text-slate-500 mb-1 uppercase tracking-tighter">Viral Velocity</p>
                    <div class="flex items-center justify-between">
                      <span class="text-sm font-bold text-white">High</span>
                      <span class="text-[9px] text-cyan-400">92%</span>
                    </div>
                  </div>
                  <div class="p-2 bg-slate-800/40 rounded-lg border border-slate-700/30">
                    <p class="text-[8px] text-slate-500 mb-1 uppercase tracking-tighter">AI Target Reach</p>
                    <div class="flex items-center justify-between">
                      <span class="text-sm font-bold text-white">+250K</span>
                      <span class="text-[9px] text-purple-400">Next 30d</span>
                    </div>
                  </div>
                </div>
                
                <!-- Future Forecast Chart -->
                <div class="h-28 relative mb-4">
                  <div class="absolute top-0 right-0 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8px] text-slate-400 flex items-center gap-2">
                    <span class="flex items-center gap-1"><span class="w-2 h-0.5 bg-cyan-400"></span> Live</span>
                    <span class="flex items-center gap-1"><span class="w-2 h-0.5 border-t border-dashed border-cyan-400/60"></span> AI Forecast</span>
                  </div>
                  <svg viewBox="0 0 100 40" class="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                    <!-- Real Data Curve -->
                    <path 
                      d="M0,38 L10,35 Q20,38 30,30 T50,25 T60,20" 
                      fill="none" 
                      stroke="#22d3ee" 
                      stroke-width="1.5" 
                      stroke-linecap="round"
                    />
                    <!-- AI Forecast Curve (Dashed) -->
                    <path 
                      d="M60,20 Q70,15 80,10 T100,2" 
                      fill="none" 
                      stroke="#22d3ee" 
                      stroke-width="1.5" 
                      stroke-dasharray="3,2"
                      stroke-linecap="round"
                      opacity="0.6"
                    />
                    <path 
                      d="M0,40 L0,38 L10,35 Q20,38 30,30 T50,25 T60,20 Q70,15 80,10 T100,2 V40 Z" 
                      fill="url(#gradient-ai)" 
                      opacity="0.1" 
                    />
                    <defs>
                      <linearGradient id="gradient-ai" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#22d3ee" />
                        <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <!-- AI Recommendations -->
                <div class="p-3 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
                  <div class="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon :icon="['fas', 'lightbulb']" class="text-[10px] text-cyan-400" />
                    <span class="text-[9px] font-bold text-white uppercase tracking-wider">AI Recommendation</span>
                  </div>
                  <ul class="space-y-1">
                    <li class="text-[9px] text-slate-300 flex items-center gap-2">
                      <span class="w-1 h-1 rounded-full bg-cyan-400"></span>
                      Thời điểm tối ưu: Thứ Bảy, 19:00
                    </li>
                    <li class="text-[9px] text-slate-300 flex items-center gap-2">
                      <span class="w-1 h-1 rounded-full bg-cyan-400"></span>
                      Tiềm năng Viral: Khu vực Đông Nam Á
                    </li>
                  </ul>
                </div>
              </div>

              <div class="space-y-4">
                <p class="text-slate-300 text-[13px] leading-relaxed">
                  "Mọi con số không chỉ minh bạch mà còn biết nói. Hệ thống AI tiên tiến phân tích dữ liệu để cung cấp cho bạn những insight chiến lược về xu hướng và thị trường."
                </p>
                <div class="flex items-center gap-2 text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Vận hành bởi Oscar AI Engine
                  <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-[10px]" />
                </div>
              </div>
            </div>
          </div>

          <!-- Distribution Tracking Dashboard -->
          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 100 }" class="group">
            <div class="card h-full flex flex-col border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden">
              <div class="flex items-center justify-between mb-8">
                <div>
                  <h3 class="text-xl font-bold text-white mb-1">Quản lý phân phối</h3>
                  <p class="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Distribution Tracking</p>
                </div>
                <div class="p-2 rounded-lg bg-cyan-500/10">
                  <FontAwesomeIcon :icon="['fas', 'globe']" class="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <!-- Distribution Visual -->
              <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 mb-6 flex-1 space-y-3">
                <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/20">
                  <div class="flex items-center gap-3">
                    <FontAwesomeIcon :icon="['fab', 'spotify']" class="text-[#1DB954] w-4 h-4" />
                    <span class="text-xs text-white">Spotify</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>
                <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/20">
                  <div class="flex items-center gap-3">
                    <FontAwesomeIcon :icon="['fab', 'apple']" class="text-[#FA243C] w-4 h-4" />
                    <span class="text-xs text-white">Apple Music</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>
                <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/20">
                  <div class="flex items-center gap-3">
                    <FontAwesomeIcon :icon="['fab', 'tiktok']" class="text-white w-4 h-4" />
                    <span class="text-xs text-white">TikTok</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>
                <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/20 opacity-60">
                  <div class="flex items-center gap-3">
                    <FontAwesomeIcon :icon="['fab', 'youtube']" class="text-[#FF0000] w-4 h-4" />
                    <span class="text-xs text-white">Youtube Music</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                    PENDING
                  </span>
                </div>
              </div>

              <div class="space-y-4">
                <p class="text-slate-300 text-sm leading-relaxed">
                  "Đưa âm nhạc của bạn lên hơn 150 nền tảng chỉ trong vài cú click."
                </p>
                <div class="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                  Tự động hóa hoàn toàn
                </div>
              </div>
            </div>
          </div>

          <!-- Wallet & Financial Dashboard -->
          <div v-scroll-reveal="{ animation: 'zoom-in', delay: 200 }" class="group">
            <div class="card h-full flex flex-col border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden">
              <div class="flex items-center justify-between mb-8">
                <div>
                  <h3 class="text-xl font-bold text-white mb-1">Ví & Thanh toán</h3>
                  <p class="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Financial & Wallet</p>
                </div>
                <div class="p-2 rounded-lg bg-cyan-500/10">
                  <FontAwesomeIcon :icon="['fas', 'wallet']" class="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <!-- Wallet Visual -->
              <div class="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 mb-6 flex-1">
                <div class="mb-4">
                  <p class="text-[10px] text-slate-500 mb-1">Số dư khả dụng</p>
                  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">90.010.240 VND</p>
                </div>
                <div class="space-y-2 mt-4">
                  <p class="text-[10px] text-slate-500 mb-2 uppercase tracking-tighter">Lịch sử rút tiền</p>
                  <div class="flex items-center justify-between py-1.5 border-b border-slate-800 flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                        <FontAwesomeIcon :icon="['fas', 'university']" class="text-[10px] text-slate-400" />
                      </div>
                      <span class="text-[11px] text-slate-300">Vietcombank</span>
                    </div>
                    <span class="text-[11px] font-bold text-emerald-400">Success</span>
                  </div>
                  <div class="flex items-center justify-between py-1.5 border-b border-slate-800 flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                        <FontAwesomeIcon :icon="['fab', 'paypal']" class="text-[10px] text-slate-400" />
                      </div>
                      <span class="text-[11px] text-slate-300">PayPal Express</span>
                    </div>
                    <span class="text-[11px] font-bold text-emerald-400">Success</span>
                  </div>
                </div>
                <button class="w-full mt-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white font-bold hover:bg-white/10 transition-colors">
                  Rút tiền ngay
                </button>
              </div>

              <div class="space-y-4">
                <p class="text-slate-300 text-sm leading-relaxed">
                  "Rút tiền nhanh chóng, sòng phẳng. Nhận lên đến 90% doanh thu từ tác phẩm của bạn."
                </p>
                <div class="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                  Thoải mái rút tiền 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section v-scroll-reveal="{ animation: 'slide-up' }" class="py-20 border-t border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-4">Gói dịch vụ</h2>
        <p class="section-subtitle text-center mb-12">Chọn gói phù hợp với nhu cầu của bạn</p>

        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div v-scroll-reveal="{ animation: 'slide-right', delay: 0 }">
            <PricingCard
              name="Dành cho Nghệ sĩ"
              description="Dành cho ca sĩ, rapper indie"
              price="Miễn phí"
              :features="[
                'Số lượng bài hát: Không giới hạn',
                'Nghệ sĩ quản lý: 10 Nghệ sĩ',
                'Tỷ lệ chia sẻ doanh thu: 75%',
                'Cửa hàng: 50+ nền tảng toàn cầu + VN',
                'Hỗ trợ YouTube Content ID',
                'Giảm 10% phí sản xuất tại Oscar Studio',
                'Hỗ trợ 2-3 ngày làm việc'
              ]"
              ctaText="Phát hành ngay"
              to="https://app.oscarlabel.com"
              :isFeatured="true"
            />
          </div>

          <div v-scroll-reveal="{ animation: 'slide-left', delay: 100 }">
            <PricingCard
              name="Dành cho Tổ Chức"
              description="Dành cho nhãn hàng đĩa"
              price="Liên hệ"
              :features="[
                'Số lượng bài hát: Không giới hạn',
                'Nghệ sĩ quản lý: không giới hạn',
                'Tỷ lệ chia sẻ doanh thu lên đến: 90%',
                'Cửa hàng: 150+ nền tảng toàn cầu',
                'YouTube Content ID + Quản lý % doanh thu',
                'Copyright tùy chọn',
                'Chăm sóc 1:1 chuyên biệt'
              ]"
              ctaText="Liên hệ ngay"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section v-scroll-reveal="{ animation: 'slide-up' }" class="py-20 border-t border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-4">Đánh Giá của khách hàng</h2>
        <p class="section-subtitle text-center mb-12">Nghe những câu chuyện từ những Nghệ sĩ đã phát hành cùng Oscar Music Group</p>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }">
            <TestimonialCard
              quote="Oscar Music Group giúp tôi phát hành bài hát lên Zing Mp3 chỉ trong 2 ngày. Rất chuyên nghiệp và uy tín!"
              author="Tú Trinh"
              role="Nhạc sĩ Indie"
              avatar="/image/TuTrinh.WEBP"
            />
          </div>
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 100 }">
            <TestimonialCard
              quote="Tôi rất impressed với cách họ xử lý metadata và chuẩn hóa mức độ âm thanh theo tiêu chuẩn quốc tế."
              author="Maxon Producer"
              role="Producer"
              avatar="/image/MaxonProducer.WEBP"
            />
          </div>
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }">
            <TestimonialCard
              quote="Dịch vụ khách hàng xuất sắc. Họ luôn sẵn sàng giúp đỡ khi tôi gặp vấn đề chỉ trong vòng 1-2 ngày."
              author="Minh Hoàng"
              role="Ca sĩ R&B"
              avatar="/image/MinhHoang.webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Oscar Insights: Ecosystem & Knowledge Section -->
    <section v-scroll-reveal="{ animation: 'slide-up' }" class="py-24 border-t border-slate-700/40 bg-slate-950/30">
      <div class="container-snug">
        <!-- Header -->
        <div class="flex flex-col items-center mb-12 text-center">
          <div class="max-w-3xl">
            <h2 class="section-title mb-4 text-gradient">Tư duy chiến lược - Tầm nhìn thị trường</h2>
            <p class="text-slate-400">Chia sẻ kinh nghiệm thực chiến từ đơn vị sở hữu hệ sinh thái âm nhạc đa nền tảng.</p>
          </div>
        </div>

        <!-- Stats Bar (Flexible & Impactful) -->
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="glass p-8 rounded-2xl border-cyan-500/10 text-center hover:border-cyan-500/40 transition-all duration-500 hover:shadow-glow">
            <p class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">700M+</p>
            <p class="text-sm font-bold text-white mb-1 uppercase tracking-widest">View TikTok</p>
            <p class="text-xs text-slate-500">Hệ thống Oscar Entertainment</p>
          </div>
          <div class="glass p-8 rounded-2xl border-purple-500/10 text-center hover:border-purple-500/40 transition-all duration-500 hover:shadow-glow">
            <p class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">10M+</p>
            <p class="text-sm font-bold text-white mb-1 uppercase tracking-widest">View YouTube</p>
            <p class="text-xs text-slate-500">Produced by Oscar Entertainment</p>
          </div>
          <div class="glass p-8 rounded-2xl border-cyan-500/10 text-center hover:border-cyan-500/40 transition-all duration-500 hover:shadow-glow">
            <p class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 mb-3">10M+</p>
            <p class="text-sm font-bold text-white mb-1 uppercase tracking-widest">Streams</p>
            <p class="text-xs text-slate-500">Digital Music Platforms</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section v-scroll-reveal="{ animation: 'zoom-in' }" class="py-20 border-t border-slate-700/40">
      <div class="container-snug">
        <div class="relative rounded-2xl overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-2xl"></div>
          <div class="relative glass border border-slate-600/40 rounded-2xl p-12 text-center">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
              Đưa âm nhạc của bạn lên một tầm cao mới cùng Oscar Music Group
            </h2>
            <p class="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Bắt đầu phát hành nhạc của bạn lên Spotify, Apple Music và 150+ nền tảng toàn cầu ngay hôm nay.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.oscarlabel.com" class="btn-primary">Phát hành miễn phí</a>
              <a href="/contact" class="btn-secondary">Liên hệ tư vấn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const showMore = ref(false)

definePageMeta({
  layout: 'default'
})

// Combined SEO and Style configuration
useHead({
  title: 'Phát Hành Nhạc Số Miễn Phí | Oscar Music Group',
  meta: [
    { name: 'description', content: 'Phát hành nhạc lên Spotify, Apple Music, TikTok và 150+ nền tảng. Dịch vụ phân phối nhạc số chuyên nghiệp tại Việt Nam từ Oscar Music Group.' },
    { name: 'keywords', content: 'phát hành nhạc, Spotify, Apple Music, phân phối nhạc số, Oscar Music Group, TikTok, Zing MP3' },
    { property: 'og:title', content: 'Phát Hành Nhạc Số Miễn Phí | Oscar Music Group' },
    { property: 'og:description', content: 'Khoảng cách gần nhất tới thế giới âm nhạc. Phát hành từ Việt Nam ra toàn cầu.' },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:url', content: 'https://oscarlabel.com' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  style: [
    {
      textContent: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `
    }
  ]
})
</script>
