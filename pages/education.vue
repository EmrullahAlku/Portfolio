<template>
  <div class="education-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Eğitim</h1>
        <p class="page-subtitle">
          Akademik geçmişim ve sürekli öğrenme yolculuğum
        </p>
      </header>

      <!-- Education Timeline -->
      <section class="education-timeline">
        <div class="timeline-item" v-for="education in educationList" :key="education.id">
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
                  <span v-for="skill in education.skills" :key="skill" class="skill-tag">
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
            v-for="cert in certifications" 
            :key="cert.id"
            class="certification-card"
          >
            <div class="cert-icon">
              <Icon :name="cert.icon" size="32" />
            </div>
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-date">{{ cert.date }}</p>
            <a v-if="cert.link" :href="cert.link" target="_blank" class="cert-link">
              Sertifikayı Görüntüle
              <Icon name="heroicons:arrow-top-right-on-square" size="16" />
            </a>
          </div>
        </div>
      </section>

      <!-- Skills Progress -->
      <section class="skills-progress section">
        <h2 class="section-title text-center mb-8">Teknik Beceriler</h2>
        <div class="skills-list">
          <div 
            v-for="skill in technicalSkills" 
            :key="skill.name"
            class="skill-progress-item"
          >
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Eğitim - Emrullah Alku',
  meta: [
    {
      name: 'description',
      content: 'Emrullah Alku\'nun eğitim geçmişi, sertifikaları ve teknik becerileri. Sürekli öğrenme ve gelişim yolculuğu.'
    }
  ]
})

const educationList = [
  {
    id: 1,
    institution: 'Kocaeli Üniversitesi',
    degree: 'Bilgisayar Mühendisliği',
    period: '2019 - 2023',
    description: 'Yazılım geliştirme, veri yapıları, algoritmalar ve modern web teknolojileri konularında kapsamlı eğitim aldım.',
    skills: ['JavaScript', 'Python', 'Java', 'SQL', 'Web Development', 'Software Engineering']
  },
  {
    id: 2,
    institution: 'FreeCodeCamp',
    degree: 'Full Stack Web Development',
    period: '2022 - 2023',
    description: 'Modern web teknolojileri ve full-stack geliştirme konularında pratik odaklı eğitim.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'RESTful APIs']
  },
  {
    id: 3,
    institution: 'Udemy',
    degree: 'Advanced Vue.js & Nuxt.js',
    period: '2023 - 2024',
    description: 'Vue.js ve Nuxt.js framework\'leri ile modern single-page application geliştirme.',
    skills: ['Vue.js', 'Nuxt.js', 'Composition API', 'State Management']
  }
]

const certifications = [
  {
    id: 1,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    date: 'Ocak 2023',
    icon: 'simple-icons:freecodecamp',
    link: 'https://freecodecamp.org'
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: 'Aralık 2022',
    icon: 'simple-icons:freecodecamp',
    link: 'https://freecodecamp.org'
  },
  {
    id: 3,
    title: 'Vue.js Complete Guide',
    issuer: 'Udemy',
    date: 'Haziran 2023',
    icon: 'simple-icons:udemy',
    link: 'https://udemy.com'
  },
  {
    id: 4,
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: 'Mart 2023',
    icon: 'simple-icons:coursera',
    link: 'https://coursera.org'
  }
]

const technicalSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js / Nuxt.js', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Python', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'Figma', level: 80 }
]
</script>

<style scoped>
.education-page {
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

.education-timeline {
  position: relative;
  margin: 4rem 0;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 11px;
  top: 20px;
  width: 18px;
  height: 18px;
  background: var(--primary);
  border-radius: 50%;
  border: 3px solid var(--background);
  z-index: 1;
}

.education-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .education-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.dark .education-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.institution {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
}

.period {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.degree {
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.description {
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skills-learned h5 {
  color: var(--foreground);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--secondary);
  color: var(--secondary-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.certification-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .certification-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.dark .certification-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.cert-icon {
  color: var(--primary);
  margin-bottom: 1rem;
}

.cert-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.5rem;
}

.cert-issuer {
  color: var(--muted-foreground);
  margin-bottom: 0.5rem;
}

.cert-date {
  color: var(--muted-foreground);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.cert-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.cert-link:hover {
  color: var(--primary-indigo);
}

.skills-list {
  max-width: 800px;
  margin: 0 auto;
}

.skill-progress-item {
  margin-bottom: 2rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--foreground);
}

.skill-level {
  color: var(--muted-foreground);
  font-size: 0.875rem;
}

.progress-bar {
  height: 8px;
  background: var(--secondary);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(45deg, var(--primary-indigo), var(--primary-purple));
  border-radius: 4px;
  transition: width 0.8s ease;
}

@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>