<template>
  <div class="education-page">
    <div v-if="pending" class="loading-spinner">Yükleniyor...</div>
    <div v-else-if="error">İçerik yüklenirken bir hata oluştu.</div>
    <div v-else-if="doc" class="container">
      <header class="page-header">
        <h1 class="page-title">{{ doc.title }} {{ doc.subtitle }}</h1>
        <p class="page-subtitle">
          {{ doc.subtitle }}
        </p>
      </header>

      <!-- Education Timeline -->
      <section class="education-timeline">
        <div
          class="timeline-item"
          v-for="(education, index) in doc.education"
          :key="index"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="education-card">
              <div class="education-header">
                <h3 class="institution">{{ education.institution }}</h3>
                <span class="period">{{ education.period }}</span>
              </div>
              <h4 class="degree">{{ education.degree }}</h4>
              <p class="description">{{ education.description }}</p>
              <div class="skills-learned" v-if="education.skills">
                <h5>Öğrenilen Beceriler:</h5>
                <div class="skill-tags">
                  <span
                    v-for="skill in education.skills"
                    :key="skill"
                    class="skill-tag"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="certifications-section section">
        <h2 class="section-title text-center mb-8">Sertifikalar</h2>
        <div class="certifications-grid">
          <div
            v-for="(cert, index) in doc.certifications"
            :key="index"
            class="certification-card"
          >
            <div class="cert-icon">
              <Icon :name="cert.icon" size="32" />
            </div>
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-date">{{ cert.date }}</p>
            <button @click="openCertificate(cert.link)" class="cert-link">
              Sertifikayı Görüntüle
              <Icon name="heroicons:eye" size="16" />
            </button>
          </div>
        </div>
      </section>

      <!-- Certificate Modal -->
      <div
        v-if="selectedCertificate"
        class="certificate-modal-overlay"
        @click="closeCertificate"
      >
        <div class="certificate-modal-content" @click.stop>
          <button class="close-button" @click="closeCertificate">
            <Icon name="heroicons:x-mark" size="32" />
          </button>
          <iframe
            :src="selectedCertificate"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>

      <!-- Skills Section -->
      <section class="skills-section section">
        <h2 class="section-title text-center mb-8">Teknik Beceriler</h2>
        <div class="skills-grid">
          <div
            v-for="(skill, index) in doc.skills"
            :key="index"
            class="skill-badge"
          >
            {{ skill }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAsyncData } from "#app";
import { useRoute } from "vue-router";

const route = useRoute();
const {
  data: doc,
  pending,
  error,
} = await useAsyncData("education", () => {
  return queryCollection("education").path(route.path).first();
});

const selectedCertificate = ref(null);

const openCertificate = (path) => {
  selectedCertificate.value = path;
};

const closeCertificate = () => {
  selectedCertificate.value = null;
};

useSeoMeta({
  title: () => (doc.value ? `${doc.value.title} - Emrullah Alku` : "Eğitim"),
  description: () =>
    doc.value
      ? doc.value.subtitle
      : "Emrullah Alku'nun eğitim geçmişi, sertifikaları ve teknik becerileri.",
});
</script>

<style scoped>
.education-page {
  padding: 4rem 0;
  background-color: var(--background);
  color: var(--foreground);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--muted-foreground);
}

.section {
  margin-top: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
}

.education-timeline {
  position: relative;
  padding: 2rem 0;
}

.education-timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--border);
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 12px;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--primary);
  border: 2px solid var(--background);
}

.education-card {
  background-color: var(--card);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.institution {
  font-size: 1.5rem;
  font-weight: 600;
}

.period {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

.degree {
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 1rem;
}

.skills-learned h5 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: var(--secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.certification-card {
  background-color: var(--card);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  text-align: center;
}

.cert-icon {
  margin-bottom: 1rem;
  color: var(--primary);
}

.cert-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.cert-issuer {
  color: var(--muted-foreground);
  margin-bottom: 0.5rem;
}

.cert-date {
  font-size: 0.9rem;
  color: var(--muted-foreground);
  margin-bottom: 1rem;
}

.cert-link {
  color: var(--primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
}

.certificate-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.certificate-modal-content {
  position: relative;
  background-color: var(--card);
  width: 90%;
  height: 90%;
  max-width: 1200px;
  border-radius: 8px;
  overflow: hidden;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--foreground);
  cursor: pointer;
  z-index: 1001;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.skill-badge {
  background-color: var(--card);
  color: var(--foreground);
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  transform: translateY(-3px);
  background-color: var(--primary);
  color: var(--primary-foreground);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
