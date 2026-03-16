<template>
  <div>
    <Head>
      <Title>Gói Dịch vụ | Oscar Music Group</Title>
      <Meta name="description" content="Chọn gói phát hành phù hợp. Dành cho Nghệ sĩ Indie (Miễn phí) hoặc Label (Liên hệ). Phát hành lên 150+ nền tảng toàn cầu." />
    </Head>

    <!-- Hero Section -->
    <section class="py-20 border-b border-slate-700/40 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="container-snug text-center">
        <h1 class="section-title mb-4">Gói Dịch vụ Phát hành</h1>
        <p class="section-subtitle">Chọn gói phù hợp với mục tiêu của bạn</p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Dành cho Nghệ Sĩ"
            description="Hoàn hảo cho ca sĩ, rapper, producer indie"
            price="Miễn phí"
            :isFeatured="true"
            :features="[
              'Số lượng bài hát: Không giới hạn',
              'Nghệ sĩ quản lý: 10 Nghệ sĩ',
              'Tỷ lệ chia sẻ doanh thu: 75% cho artist',
              'Phát hành: 50+ nền tảng toàn cầu + Zing MP3, NhacCuaTui',
              'YouTube Content ID: Tích hợp',
              'Kiểm soát chất lượng audio',
              'Giảm 10% phí thu âm tại Oscar Studio',
              'Marketing: SmartLink cơ bản + Pitching playlist tuỳ dự án',
              'Hỗ trợ: 1-3 ngày làm việc',
              'Metadata chuẩn hóa quốc tế'
            ]"
            ctaText="Phát hành miễn phí"
            to="https://app.oscarlabel.com"
          />

          <PricingCard
            name="Dành cho Tổ chức"
            description="Dành cho nhãn hàng đĩa & tổ chức chuyên nghiệp"
            price="Liên hệ"
            :features="[
              'Số lượng bài hát: Không giới hạn',
              'Nghệ sĩ quản lý: Không giới hạn',
              'Tỷ lệ chia sẻ doanh thu: 90% cho label',
              'Phát hành: 150+ nền tảng toàn cầu',
              'YouTube Content ID: Tích hợp + Quản lý % doanh thu',
              'Copyright: Tùy chọn',
              'Kiểm soát chất lượng audio nâng cao',
              'Giảm 15% phí thu âm tại Oscar Studio',
              'Marketing: Pitching playlist + Truyền thông + SmartLink',
              'Hỗ trợ: Chăm sóc 1:1 chuyên biệt'
            ]"
            ctaText="Liên hệ tư vấn"
          />
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-12">So sánh chi tiết</h2>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-700/40">
                <th class="text-left py-4 px-4 text-white font-semibold">Tính năng</th>
                <th class="text-center py-4 px-4 text-cyan-400 font-semibold">Nghệ Sĩ</th>
                <th class="text-center py-4 px-4 text-purple-400 font-semibold">Tổ chức</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr v-for="item in comparisonItems" :key="item.name" class="border-b border-slate-800 hover:bg-slate-900/30 transition-colors">
                <td class="py-4 px-4 text-slate-300 font-medium">{{ item.name }}</td>
                <td class="text-center py-4 px-4">
                  <span v-if="item.artist === true" class="text-cyan-400">✓</span>
                  <span v-else-if="item.artist === false" class="text-slate-500">✗</span>
                  <span v-else class="text-slate-400 text-sm">{{ item.artist }}</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span v-if="item.label === true" class="text-purple-400">✓</span>
                  <span v-else-if="item.label === false" class="text-slate-500">✗</span>
                  <span v-else class="text-slate-400 text-sm">{{ item.label }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <h2 class="section-title text-center mb-12">Câu hỏi thường gặp</h2>

        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="card cursor-pointer"
            @click="toggleFaq(index)"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-semibold text-white">{{ faq.question }}</h3>
              <svg
                :class="['w-5 h-5 text-cyan-400 transition-transform', activeFaq === index && 'rotate-180']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p v-if="activeFaq === index" class="text-slate-400 text-sm mt-4">
              {{ faq.answer }}
            </p>
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
            <h2 class="text-3xl font-bold text-white mb-4">Chọn gói của bạn ngay hôm nay</h2>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://app.oscarlabel.com" class="btn-primary">Phát hành miễn phí</a>
              <a href="/contact" class="btn-secondary">Liẻn hệ tư vấn</a>
            </div>
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

const activeFaq = ref<number | null>(null)

const comparisonItems = [
  { name: 'Giá thành', artist: 'Miễn phí', label: 'Liên hệ' },
  { name: 'Số bài hát', artist: 'Không giới hạn', label: 'Không giới hạn' },
  { name: 'Nghệ sĩ quản lý', artist: '10 Nghệ sĩ', label: 'Không giới hạn' },
  { name: 'Tỷ lệ chia sẻ doanh thu', artist: '75%', label: '90%' },
  { name: 'Số nền tảng', artist: '50+', label: '150+' },
  { name: 'YouTube Content ID', artist: true, label: true },
  { name: 'Copyright tùy chọn', artist: false, label: true },
  { name: 'Hỗ trợ Studio', artist: '-10%', label: '-15%' },
  { name: 'Pitching Playlist', artist: 'Tuỳ dự án', label: true },
  { name: 'Hỗ trợ Marketing', artist: 'SmartLink cơ bản', label: 'Toàn diện' },
  { name: 'Thời gian hỗ trợ', artist: '1-3 ngày', label: '1:1 chuyên biệt' }
]

const faqs = [
  {
    question: 'Oscar Music Group có thu phí phát hành không?',
    answer: 'Không! Phát hành nhạc lên Oscar Music Group hoàn toàn miễn phí cho nghệ sĩ cá nhân. Chúng tôi chỉ kiếm tiền khi bạn kiếm tiền từ streams.'
  },
  {
    question: 'Mất bao lâu để nhạc của tôi lên Spotify?',
    answer: 'Thông thường 3-5 ngày làm việc. Oscar Music Group kiểm tra metadata và chất lượng audio trước khi gửi tới các nền tảng.'
  },
  {
    question: 'Tôi sẽ nhận được bao nhiêu doanh thu?',
    answer: 'Bạn nhận 75% tổng doanh thu từ tất cả nền tảng. Tiền được thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử mỗi tháng.'
  },
  {
    question: 'Có hợp đồng dài hạn không?',
    answer: 'Không có hợp đồng dài hạn. Bạn có thể hủy bất cứ lúc nào. Bạn giữ 100% quyền sở hữu master của mình.'
  },
  {
    question: 'Làm cách nào để đăng ký?',
    answer: 'Chỉ cần truy cập trang đăng ký, điền thông tin và tải lên bài hát của bạn. Quá trình chỉ mất khoảng 5 phút.'
  }
]

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>
