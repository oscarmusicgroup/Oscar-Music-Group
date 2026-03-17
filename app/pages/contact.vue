<template>
  <div>
    <Head>
      <Title>Liên Hệ | Oscar Music Group</Title>
      <Meta name="description" content="Liên hệ Oscar Music Group để tư vấn về dịch vụ phát hành nhạc, studio thu âm" />
    </Head>

    <!-- Hero Section -->
    <section class="py-20 border-b border-slate-700/40 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="container-snug text-center">
        <h1 class="section-title mb-4">Liên Hệ Chúng Tôi</h1>
        <p class="section-subtitle">Chúng tôi luôn sẵn sàng trả lời các câu hỏi của bạn</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-white">Thông tin liên hệ</h2>

            <div class="card">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="['fas', 'map-pin']" class="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Địa chỉ</h4>
                  <p class="text-slate-400 text-sm">
                    Số 9 Ngách 78 ngõ 169 đường Hoàng Mai,<br />
                    Phường Tương Mai, Hà Nội, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="['fas', 'envelope']" class="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:support@oscarlabel.com" class="text-cyan-300 hover:text-cyan-200 text-sm transition-colors">
                    support@oscarlabel.com
                  </a>
                  <br />
                  <a href="mailto:contact@oscarfamily.vn" class="text-cyan-300 hover:text-cyan-200 text-sm transition-colors">
                    contact@oscarfamily.vn
                  </a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="['fas', 'phone']" class="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Điện thoại</h4>
                  <a href="tel:+84849297957" class="text-cyan-300 hover:text-cyan-200 text-sm transition-colors">
                    +84 (0) 849 297 957
                  </a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="['fas', 'clock']" class="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Giờ làm việc</h4>
                  <p class="text-slate-400 text-sm">
                    Thứ 2 - Thứ 7: 9:00 - 18:00<br />
                    Chủ nhật: Đóng cửa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <form @submit.prevent="submitForm" class="card space-y-4">
              <div>
                <label class="block text-sm font-medium text-white mb-2">Tên của bạn *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-white mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-white mb-2">Nghệ danh</label>
                <input
                  v-model="form.artistName"
                  type="text"
                  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Nghệ danh của bạn"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-white mb-2">Chủ đề *</label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Chọn chủ đề</option>
                  <option>Tư vấn phát hành nhạc</option>
                  <option>Hỏi về dịch vụ Studio</option>
                  <option>Liên hệ kinh doanh</option>
                  <option>Hỗ trợ kỹ thuật</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-white mb-2">Tin nhắn *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Viết tin nhắn của bạn ở đây..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn' }}
              </button>

              <p v-if="submitMessage" :class="['text-sm text-center', submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400']">
                {{ submitMessage.text }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 border-b border-slate-700/40">
      <div class="container-snug">
        <h2 class="text-2xl font-bold text-white mb-8 text-center">Vị trí của chúng tôi</h2>
        <div class="relative rounded-2xl overflow-hidden h-[450px] bg-slate-800 border border-slate-700/50 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.045381992841!2d105.85384577715473!3d20.99081788907703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313675f499deb1f9%3A0x2786d8017533be2b!2zT3NjYXIgU3R1ZGlvIC0gUGjDsm5nIFRodSDDgm0gSMOgIE7hu5lp!5e0!3m2!1sen!2s!4v1773673590317!5m2!1sen!2s"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full [filter:invert(90%)_hue-rotate(180deg)_brightness(100%)_contrast(90%)]"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container-snug">
        <h2 class="text-2xl font-bold text-white mb-8 text-center">Câu hỏi thường gặp</h2>

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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const form = reactive({
  name: '',
  email: '',
  artistName: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref<{ text: string; type: 'success' | 'error' } | null>(null)

const activeFaq = ref<number | null>(null)

const faqs = [
  {
    question: 'Làm thế nào để bắt đầu phát hành nhạc?',
    answer: 'Bạn có thể đăng ký miễn phí trên ứng dụng và tải lên bài hát của mình trong vòng 5 phút. Không cần hợp đồng dài hạn.'
  },
  {
    question: 'Bao lâu để nhạc lên Spotify?',
    answer: 'Thông thường 3-5 ngày làm việc. Oscar Music Group kiểm tra metadata trước khi gửi.'
  },
  {
    question: 'Bạn hỗ trợ tiếng Anh không?',
    answer: 'Có, chúng tôi hỗ trợ cả tiếng Việt và tiếng Anh. Email chúng tôi hoặc sử dụng thẻ chat.'
  },
  {
    question: 'Có phí ẩn nào không?',
    answer: 'Hoàn toàn không. Chúng tôi truyền đạt tất cả chi phí một cách rõ ràng từ đầu.'
  }
]

const submitForm = async () => {
  submitMessage.value = null
  isSubmitting.value = true
  try {
    // Call API with a plain object copy of the form
    const response = await $fetch<{ message: string }>('/api/contact', {
      method: 'POST',
      body: { ...form }
    })
    
    submitMessage.value = {
      text: response.message || 'Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.',
      type: 'success'
    }
    
    // Reset form
    form.name = ''
    form.email = ''
    form.artistName = ''
    form.subject = ''
    form.message = ''
  } catch (error: any) {
    console.error('Submit error:', error)
    submitMessage.value = {
      text: error.data?.statusMessage || 'Có lỗi xảy ra. Vui lòng thử lại sau hoặc gửi mail trực tiếp.',
      type: 'error'
    }
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>
