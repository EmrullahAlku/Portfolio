<template>
  <div class="about-page">
    <div v-if="pending" class="loading-state">
      <p>Yükleniyor...</p>
    </div>
    <div v-else-if="error" class="error-state">
      <p>İçerik yüklenirken bir hata oluştu.</p>
    </div>
    <div v-else-if="doc" class="container">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-content">
          <div class="hero-image">
            <img :src="doc.image" alt="Emrullah Alku" class="profile-photo" />
          </div>
          <div class="hero-text">
            <h1 class="hero-title">{{ doc.title }}</h1>
            <h2 class="hero-subtitle">{{ doc.subtitle }}</h2>
            <p class="hero-description">
              {{ doc.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section section">
        <div class="story-content">
          <ContentRenderer :value="doc" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: doc } = await useAsyncData("about", () => {
  return queryCollection("about").path(route.path).first();
});

useSeoMeta({
  title: () => (doc.value ? `${doc.value.title} - Emrullah Alku` : "Hakkımda"),
  description: () =>
    doc.value
      ? doc.value.description
      : "Emrullah Alku'nun hikayesi, vizyonu ve hedefleri.",
});
</script>

<style scoped>
.about-page {
  padding: 4rem 0;
  background-color: var(--background);
  color: var(--foreground);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.about-hero {
  text-align: center;
  margin-bottom: 5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
  }
}

.hero-image .profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 6px solid var(--card);
  box-shadow:
    0 0 0 4px var(--primary),
    0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.hero-image .profile-photo:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 0 6px var(--primary),
    0 15px 50px rgba(0, 0, 0, 0.25);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 600px;
}

/* Story Section */
.story-section {
  padding-bottom: 4rem;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.dark .story-content {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.story-content::before {
  content: "“";
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 8rem;
  font-family: "Times New Roman", Times, serif;
  color: var(--primary);
  opacity: 0.1;
  line-height: 1;
  z-index: 0;
}

:deep(.story-content h2) {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  position: relative;
  z-index: 1;
  text-align: left;
  border-bottom: 1px solid var(--border);
  color: var(--primary);
}

:deep(.story-content h2::after) {
  display: none;
}

:deep(.story-content h2 a) {
  color: inherit;
  text-decoration: none;
}

:deep(.story-content p) {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  text-align: left;
}
</style>
