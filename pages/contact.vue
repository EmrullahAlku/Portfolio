<template>
  <div class="contact-page">
    <div v-if="pending" class="loading-state">
      <p>Yükleniyor...</p>
    </div>
    <div v-else-if="error || !doc" class="error-state">
      <p>İçerik yüklenirken bir hata oluştu.</p>
    </div>
    <div v-else class="container">
      <header class="page-header">
        <h1 class="page-title">{{ doc.title }}</h1>
        <p class="page-subtitle">
          {{ doc.subtitle }}
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

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <Icon
                v-if="!isSubmitting"
                name="heroicons:paper-airplane"
                size="20"
              />
              <Icon
                v-else
                name="heroicons:arrow-path"
                size="20"
                class="spinning"
              />
              {{ isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder" }}
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
                <a
                  :href="`mailto:${doc.contactInfo.email}`"
                  class="contact-link"
                >
                  {{ doc.contactInfo.email }}
                </a>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">
                <Icon name="heroicons:map-pin" size="24" />
              </div>
              <div class="method-content">
                <h3>Konum</h3>
                <span class="contact-text">{{ doc.contactInfo.location }}</span>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="social-section">
            <h3 class="social-title">Sosyal Medya</h3>
            <div class="social-links">
              <a
                v-for="social in doc.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="social-link"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" size="24" />
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="availability-section">
            <h3 class="availability-title">Çalışma Durumu</h3>
            <div class="availability-status">
              <div class="status-indicator available"></div>
              <span class="status-text">{{ doc.availability.status }}</span>
            </div>
            <p class="availability-note">
              {{ doc.availability.note }}
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <section class="faq-section section">
        <h2 class="section-title text-center mb-8">Sık Sorulan Sorular</h2>
        <div class="faq-grid">
          <div v-for="(faq, index) in doc.faqs" :key="index" class="faq-item">
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const route = useRoute();
const { data: doc } = await useAsyncData("contact", () =>
  queryCollection("contact").path(route.path).first()
);

useHead({
  title: () =>
    doc.value
      ? `${doc.value.title} - Emrullah Alku`
      : "İletişim - Emrullah Alku",
  meta: [
    {
      name: "description",
      content: () =>
        doc.value?.subtitle ||
        "Emrullah Alku ile iletişime geçin. Web projeleriniz için işbirliği fırsatları ve danışmanlık hizmetleri.",
    },
  ],
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    alert(
      "Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım."
    );
  } catch (error) {
    alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
  } finally {
    isSubmitting.value = false;
  }
};
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
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
