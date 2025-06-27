<template>
  <div class="home-page">
    <div v-if="pending" class="loading-state">
      <p>Yükleniyor...</p>
    </div>
    <div v-else-if="error" class="error-state">
      <p>İçerik yüklenirken bir hata oluştu.</p>
    </div>
    <div v-else class="">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title" v-html="hero.title"></h1>
              <p class="hero-subtitle">{{ hero.subtitle }}</p>
              <p class="hero-description">{{ hero.description }}</p>
              <div class="hero-buttons">
                <NuxtLink
                  v-for="button in hero.buttons"
                  :key="button.text"
                  :to="button.link"
                  :class="[
                    'btn',
                    button.type === 'primary' ? 'btn-primary' : 'btn-secondary',
                  ]"
                >
                  {{ button.text }}
                </NuxtLink>
              </div>
            </div>
            <div class="hero-visual">
              <div class="floating-card floating-animation">
                <Icon
                  :name="hero.visual?.[0]?.icon || 'heroicons:code-bracket'"
                  size="48"
                />
              </div>
              <div class="floating-card floating-animation-delayed">
                <Icon
                  :name="hero.visual?.[1]?.icon || 'heroicons:paint-brush'"
                  size="48"
                />
              </div>
              <div class="floating-card floating-animation-delayed-2">
                <Icon
                  :name="hero.visual?.[2]?.icon || 'heroicons:rocket-launch'"
                  size="48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills-section section">
        <div class="container">
          <h2 class="section-title text-center mb-8">Yeteneklerim</h2>
          <div class="skills-grid">
            <div
              v-for="skill in skills"
              :key="skill.category"
              class="skill-category"
            >
              <div class="skill-header">
                <Icon :name="skill.icon" size="32" class="skill-icon" />
                <h3>{{ skill.category }}</h3>
              </div>
              <div class="skill-items">
                <div
                  v-for="item in skill.items"
                  :key="item.label"
                  class="skill-item"
                >
                  <Icon :name="item.icon" size="24" />
                  <span>{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Preview -->
      <section class="about-preview section">
        <div class="container about-content">
          <div class="about-text">
            <h2 class="section-title mb-4">{{ aboutPreview.title }}</h2>
            <p class="about-description">
              {{ aboutPreview.description }}
            </p>
            <NuxtLink :to="aboutPreview.link" class="btn btn-secondary mt-4">
              {{ aboutPreview.linkText }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from "#app";

const { data, pending, error } = await useAsyncData("index", () =>
  queryCollection("index").path("/").first()
);

const hero = computed(() => data.value.hero);
const skills = computed(() => data.value.skills);
const aboutPreview = computed(() => data.value.aboutPreview);

useHead({
  title: () => (hero.value ? `Ana Sayfa - Emrullah Alku` : "Ana Sayfa"),
  meta: [
    {
      name: "description",
      content: hero.value ? hero.value.description : "",
    },
  ],
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  padding-top: 80px;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--background) 0%,
    var(--secondary) 100%
  );
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--foreground);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: var(--primary);
}

.dark .floating-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.floating-card:nth-child(1) {
  top: 20px;
  left: 50px;
}

.floating-card:nth-child(2) {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.floating-card:nth-child(3) {
  bottom: 40px;
  left: 30%;
}

.skills-section {
  background: var(--muted);
}

.dark .skills-section {
  background: var(--secondary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--foreground);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.skill-category {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.dark .skill-category {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.skill-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
}

.skill-icon {
  color: var(--primary);
}

.skill-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--secondary);
  border-radius: 8px;
  color: var(--foreground);
  font-weight: 500;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--muted-foreground);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--muted-foreground);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content,
  .skills-grid,
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .skill-items {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
