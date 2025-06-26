<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Merhaba, Ben 
              <span class="text-gradient">Emrullah Alku</span>
            </h1>
            <p class="hero-subtitle">
              Full-Stack Developer & Creative Designer
            </p>
            <p class="hero-description">
              Modern web teknolojileri ve yaratıcı tasarım çözümleri ile 
              dijital deneyimler oluşturuyorum. HTML/CSS, JavaScript, Nuxt.js/Vue 
              ve Python/Django ile geliştirme yapıyorum.
            </p>
            <div class="hero-buttons">
              <NuxtLink to="/repositories" class="btn btn-primary">
                Projelerimi Gör
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-secondary">
                İletişime Geç
              </NuxtLink>
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-card floating-animation">
              <Icon name="heroicons:code-bracket" size="48" />
            </div>
            <div class="floating-card floating-animation-delayed">
              <Icon name="heroicons:paint-brush" size="48" />
            </div>
            <div class="floating-card floating-animation-delayed-2">
              <Icon name="heroicons:rocket-launch" size="48" />
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
          <!-- Software Development -->
          <div class="skill-category">
            <div class="skill-header">
              <Icon name="heroicons:code-bracket" size="32" class="skill-icon" />
              <h3>Software Development</h3>
            </div>
            <div class="skill-items">
              <div class="skill-item">
                <Icon name="simple-icons:html5" size="24" />
                <span>HTML/CSS</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:javascript" size="24" />
                <span>JavaScript</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:nuxtdotjs" size="24" />
                <span>Nuxt 3/Vue</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:python" size="24" />
                <span>Python/Django</span>
              </div>
            </div>
          </div>

          <!-- Design -->
          <div class="skill-category">
            <div class="skill-header">
              <Icon name="heroicons:paint-brush" size="32" class="skill-icon" />
              <h3>Design</h3>
            </div>
            <div class="skill-items">
              <div class="skill-item">
                <Icon name="simple-icons:figma" size="24" />
                <span>Figma</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:adobephotoshop" size="24" />
                <span>Photoshop</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:adobepremierepro" size="24" />
                <span>Premiere Pro</span>
              </div>
              <div class="skill-item">
                <Icon name="simple-icons:adobeaftereffects" size="24" />
                <span>After Effects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title mb-4">Hakkımda</h2>
            <p class="about-description">
              Teknoloji ve tasarım tutkusu ile modern web çözümleri geliştiren bir 
              full-stack developer'ım. Kullanıcı deneyimini ön planda tutarak, 
              işlevsel ve estetik web uygulamaları oluşturuyorum.
            </p>
            <NuxtLink to="/about" class="btn btn-secondary mt-4">
              Daha Fazla Bilgi
            </NuxtLink>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">3+</div>
              <div class="stat-label">Yıl Deneyim</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Tamamlanan Proje</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Ana Sayfa - Emrullah Alku',
  meta: [
    {
      name: 'description',
      content: 'Full-Stack Developer ve Creative Designer Emrullah Alku\'nun portfolio website. Modern web teknolojileri ve yaratıcı tasarım çözümleri.'
    }
  ]
})
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
  background: linear-gradient(135deg, var(--background) 0%, var(--secondary) 100%);
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