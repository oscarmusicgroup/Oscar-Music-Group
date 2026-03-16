<template>
  <div>
    <Head>
      <Title>Về Oscar Music Group | Phân phối Nhạc Số</Title>
      <Meta name="description" content="Oscar Music Group là đơn vị phân phối nhạc số hàng đầu tại Việt Nam, kết hợp studio vật lý chuyên nghiệp với nền tảng phân phối toàn cầu." />
    </Head>

    <!-- Hero Section -->
    <section class="py-20 border-b border-slate-700/40 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="container-snug text-center">
        <h1 class="section-title mb-4">Về Oscar Music Group</h1>
        <p class="section-subtitle">Kết nối nghệ sĩ Việt Nam với thế giới âm nhạc</p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-white">Câu chuyện của chúng tôi</h2>
            <div class="space-y-4 text-slate-400">
              <p>
                Oscar Music Group được thành lập dựa trên niềm đam mê với âm nhạc và sự hiểu biết sâu sắc về ngành công nghiệp sáng tạo. Chúng tôi nhận thấy rằng nhiều nghệ sĩ Việt Nam tài năng không có quyền truy cập dễ dàng đến các nền tảng phát trực tuyến trong nước và quốc tế.
              </p>
              <p>
                Chúng tôi quyết định xây dựng một trung gian đáng tin cậy, phối hợp chặt chẽ các tiêu chuẩn kỹ thuật quốc tế với sự hiểu biết về thị trường Việt Nam.
              </p>
              <p>
                Ngày nay, hơn 1,000 nghệ sĩ đã chọn Oscar Music Group để phát hành nhạc của họ, và chúng tôi vẫn đang phát triển.
              </p>
            </div>
          </div>

          <div class="card text-center space-y-4">
            <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              1000+
            </div>
            <p class="font-semibold text-white">Nghệ sĩ tin tưởng</p>
            <hr class="border-slate-700" />
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p class="text-3xl font-bold text-cyan-400">150+</p>
                <p class="text-sm text-slate-400">Nền tảng</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-purple-400">10M+</p>
                <p class="text-sm text-slate-400">Streams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-12">Được Sáng Lập Bởi</h2>

        <div class="flex justify-center">
          <div class="card text-center max-w-2xl w-full relative group overflow-hidden border border-cyan-500/30 p-12">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 mx-auto mb-6 p-1 shadow-lg shadow-cyan-500/20">
                <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                   <NuxtImg src="/image/lacquochuy.jpg" alt="Lạc Quốc Huy" class="w-full h-full object-cover" />
                </div>
              </div>
              <h4 class="text-2xl font-bold text-white mb-1">Lạc Quốc Huy</h4>
              <p class="text-cyan-400 font-medium mb-4">Nhà Sáng lập & Giám đốc điều hành</p>
              <div class="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-4"></div>
              <p class="text-slate-300">10 năm kinh nghiệm trong ngành âm nhạc, bản ghi âm và quản lý bản quyền số chuyên nghiệp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-12">Giá trị cốt lõi</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="card space-y-3">
            <h3 class="text-xl font-bold text-white">Minh bạch</h3>
            <p class="text-slate-400">Chúng tôi tin vào sự minh bạch hoàn toàn. Bạn sẽ biết chính xác bao nhiêu tiền bạn kiếm được từ mỗi nền tảng.</p>
          </div>

          <div class="card space-y-3">
            <h3 class="text-xl font-bold text-white">Chất lượng</h3>
            <p class="text-slate-400">Mỗi bản ghi được kiểm tra chất lượng âm thanh theo tiêu chuẩn quốc tế trước khi phát hành.</p>
          </div>

          <div class="card space-y-3">
            <h3 class="text-xl font-bold text-white">Hỗ trợ</h3>
            <p class="text-slate-400">Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ bạn thành công trong hành trình phát hành âm nhạc.</p>
          </div>

          <div class="card space-y-3">
            <h3 class="text-xl font-bold text-white">Sáng tạo</h3>
            <p class="text-slate-400">Chúng tôi không chỉ phân phối, chúng tôi đồng hành cùng bạn trong quá trình sáng tạo.</p>
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
            <h2 class="text-3xl font-bold text-white mb-4">Sẵn sàng để bắt đầu?</h2>
            <p class="text-slate-400 mb-8">Tham gia cộng đồng các nghệ sĩ đang phát hành cùng Oscar Music Group</p>
            <a href="https://app.oscarlabel.com/" class="btn-primary inline-block">Phát hành nhạc ngay</a>
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
