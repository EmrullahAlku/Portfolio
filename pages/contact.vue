<template>
  <div class="contact-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">İletişim</h1>
        <p class="page-subtitle">
          Benimle iletişime geçin, projelerinizi konuşalım
        </p>
      </header>

      <div class="contact-content">
        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2 class="form-title">Mesaj Gönderin</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Ad Soyad *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  class="form-input"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              
              <div class="form-group">
                <label for="email">E-posta *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  class="form-input"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">Konu</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                class="form-input"
                placeholder="Mesajınızın konusu"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Mesaj *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                class="form-textarea"
                rows="6"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
            >
              <Icon v-if="!isSubmitting" name="heroicons:paper-airplane" size="20" />
              <Icon v-else name="heroicons:arrow-path" size="20" class="spinning" />
              {{ isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info-section">
          <h2 class="info-title">İletişim Bilgileri</h2>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <Icon name="heroicons:envelope" size="24" />
              </div>
              <div class="method-content">
                <h3>E-posta</h3>
                <a href="mailto:emrullah.alku@example.com" class="contact-link">
                  emrullah.alku@example.com
                </a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <Icon name="heroicons:phone" size="24" />
              </div>
              <div class="method-content">
                <h3>Telefon</h3>
                <a href="tel:+905551234567" class="contact-link">
                  +90 555 123 45 67
                </a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <Icon name="heroicons:map-pin" size="24" />
              </div>
              <div class="method-content">
                <h3>Konum</h3>
                <span class="contact-text">Kocaeli, Türkiye</span>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="social-section">
            <h3 class="social-title">Sosyal Medya</h3>
            <div class="social-links">
              <a 
                href="https://github.com/emrullah-alku" 
                target="_blank" 
                class="social-link"
                aria-label="GitHub"
              >
                <Icon name="simple-icons:github" size="24" />
              </a>
              
              <a 
                href="https://linkedin.com/in/emrullah-alku" 
                target="_blank" 
                class="social-link"
                aria-label="LinkedIn"
              >
                <Icon name="simple-icons:linkedin" size="24" />
              </a>
              
              <a 
                href="https://twitter.com/emrullah_alku" 
                target="_blank" 
                class="social-link"
                aria-label="Twitter"
              >
                <Icon name="simple-icons:twitter" size="24" />
              </a>
              
              <a 
                href="https://instagram.com/emrullah.alku" 
                target="_blank" 
                class="social-link"
                aria-label="Instagram"
              >
                <Icon name="simple-icons:instagram" size="24" />
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="availability-section">
            <h3 class="availability-title">Çalışma Durumu</h3>
            <div class="availability-status">
              <div class="status-indicator available"></div>
              <span class="status-text">Yeni projeler için müsaitim</span>
            </div>
            <p class="availability-note">
              Genellikle 24 saat içinde geri dönüş yaparım.
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <section class="faq-section section">
        <h2 class="section-title text-center mb-8">Sık Sorulan Sorular</h2>
        <div class="faq-grid">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
          >
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'İletişim - Emrullah Alku',
  meta: [
    {
      name: 'description',
      content: 'Emrullah Alku ile iletişime geçin. Web projeleriniz için işbirliği fırsatları ve danışmanlık hizmetleri.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    alert('Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.')
  } catch (error) {
    alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
  } finally {
    isSubmitting.value = false
  }
}

const faqs = [
  {
    question: 'Hangi teknolojilerle çalışıyorsunuz?',
    answer: 'Özellikle Vue.js, Nuxt.js, JavaScript, Python ve Django ile çalışıyorum. Frontend ve backend geliştirme konularında deneyimliyim.'
  },
  {
    question: 'Proje süreçleri nasıl işliyor?',
    answer: 'Önce ihtiyaçlarınızı analiz ederiz, ardından teknik çözüm önerisini paylaşırım. Geliştirme sürecinde düzenli güncellemeler alırsınız.'
  },
  {
    question: 'Uzaktan çalışma yapıyor musunuz?',
    answer: 'Evet, tamamen uzaktan çalışıyorum. Dünya çapında müşterilerle başarılı projeler geliştiriyorum.'
  },
  {
    question: 'Proje teslim süreleri nasıl?',
    answer: 'Proje büyüklüğüne göre değişiklik gösterir. Küçük projeler 1-2 hafta, büyük projeler 1-3 ay sürebilir.'
  }
]
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 4rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--muted-foreground);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-form-section,
.contact-info-section {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.dark .contact-form-section,
.dark .contact-info-section {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.form-title,
.info-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--foreground);
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-indigo);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.method-icon {
  background: var(--secondary);
  padding: 0.75rem;
  border-radius: 12px;
  color: var(--primary);
}

.method-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.25rem;
}

.contact-link {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--primary-indigo);
}

.contact-text {
  color: var(--muted-foreground);
}

.social-section {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  margin-bottom: 1.5rem;
}

.social-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--secondary);
  color: var(--foreground);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  color: var(--primary-foreground);
  transform: translateY(-2px);
}

.availability-section {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
}

.availability-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1rem;
}

.availability-status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.status-indicator.available {
  background: #10b981;
}

.status-text {
  font-weight: 500;
  color: var(--foreground);
}

.availability-note {
  color: var(--muted-foreground);
  font-size: 0.875rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.dark .faq-item {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.75rem;
}

.faq-answer {
  color: var(--muted-foreground);
  line-height: 1.6;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--foreground);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>