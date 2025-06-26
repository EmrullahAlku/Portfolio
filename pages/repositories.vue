<template>
  <div class="repositories-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Projelerim</h1>
        <p class="page-subtitle">
          Geliştirdiğim web uygulamaları ve açık kaynak projeler
        </p>
      </header>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeFilter = category"
          :class="{ active: activeFilter === category }"
          class="filter-tab"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-links">
                <a 
                  v-if="project.demo" 
                  :href="project.demo" 
                  target="_blank" 
                  class="project-link"
                >
                  <Icon name="heroicons:eye" size="20" />
                  Demo
                </a>
                <a 
                  v-if="project.github" 
                  :href="project.github" 
                  target="_blank" 
                  class="project-link"
                >
                  <Icon name="simple-icons:github" size="20" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-category">{{ project.category }}</span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="project-stats">
              <div class="stat">
                <Icon name="heroicons:star" size="16" />
                {{ project.stars }}
              </div>
              <div class="stat">
                <Icon name="heroicons:code-bracket" size="16" />
                {{ project.language }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub Stats -->
      <section class="github-stats section">
        <h2 class="section-title text-center mb-8">GitHub İstatistikleri</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <Icon name="simple-icons:github" size="32" />
            </div>
            <div class="stat-info">
              <div class="stat-number">{{ githubStats.repos }}</div>
              <div class="stat-label">Toplam Repo</div>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <Icon name="heroicons:star" size="32" />
            </div>
            <div class="stat-info">
              <div class="stat-number">{{ githubStats.stars }}</div>
              <div class="stat-label">Toplam Star</div>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <Icon name="heroicons:code-bracket" size="32" />
            </div>
            <div class="stat-info">
              <div class="stat-number">{{ githubStats.commits }}</div>
              <div class="stat-label">Bu Yıl Commit</div>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <Icon name="heroicons:users" size="32" />
            </div>
            <div class="stat-info">
              <div class="stat-number">{{ githubStats.followers }}</div>
              <div class="stat-label">Takipçi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Projelerim - Emrullah Alku',
  meta: [
    {
      name: 'description',
      content: 'Emrullah Alku\'nun geliştirdiği web uygulamaları, açık kaynak projeleri ve GitHub istatistikleri.'
    }
  ]
})

const activeFilter = ref('Tümü')

const categories = ['Tümü', 'Web App', 'Frontend', 'Full-Stack', 'Mobile']

const projects = [
  {
    id: 1,
    title: 'E-Ticaret Platform',
    description: 'Modern e-ticaret sitesi. Ürün katalogu, sepet yönetimi ve ödeme sistemi ile tam özellikli online mağaza.',
    category: 'Full-Stack',
    technologies: ['Nuxt.js', 'Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
    demo: 'https://demo.example.com',
    github: 'https://github.com/emrullah-alku/ecommerce',
    stars: 24,
    language: 'Vue.js'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Proje yönetimi uygulaması. Görev takibi, ekip işbirliği ve deadline yönetimi özellikleri.',
    category: 'Web App',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Manager',
    demo: 'https://tasks.example.com',
    github: 'https://github.com/emrullah-alku/task-manager',
    stars: 18,
    language: 'TypeScript'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Hava durumu takip uygulaması. Gerçek zamanlı veriler, 7 günlük tahmin ve interaktif haritalar.',
    category: 'Frontend',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
    image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+App',
    demo: 'https://weather.example.com',
    github: 'https://github.com/emrullah-alku/weather-dashboard',
    stars: 32,
    language: 'JavaScript'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Kişisel blog platformu. Markdown editör, kategori sistemi ve admin paneli ile komple blog çözümü.',
    category: 'Full-Stack',
    technologies: ['Nuxt.js', 'Python', 'Django', 'PostgreSQL'],
    image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Blog+Platform',
    demo: 'https://blog.example.com',
    github: 'https://github.com/emrullah-alku/blog-platform',
    stars: 15,
    language: 'Python'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Kişisel portfolio sitesi. Animasyonlu navigasyon, dark mode ve responsive tasarım.',
    category: 'Frontend',
    technologies: ['Nuxt.js', 'Vue.js', 'CSS3', 'Framer Motion'],
    image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Portfolio',
    demo: 'https://portfolio.example.com',
    github: 'https://github.com/emrullah-alku/portfolio',
    stars: 41,
    language: 'Vue.js'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Gerçek zamanlı sohbet uygulaması. Socket.io ile anlık mesajlaşma ve dosya paylaşımı.',
    category: 'Web App',
    technologies: ['Socket.io', 'Express.js', 'React', 'Redis'],
    image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Chat+App',
    demo: 'https://chat.example.com',
    github: 'https://github.com/emrullah-alku/chat-app',
    stars: 28,
    language: 'JavaScript'
  }
]

const githubStats = {
  repos: 45,
  stars: 158,
  commits: 324,
  followers: 89
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tümü') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})
</script>

<style scoped>
.repositories-page {
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--muted-foreground);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-tab:hover {
  background: var(--accent);
  color: var(--accent-foreground);
}

.filter-tab.active {
  background: var(--primary);
  color: var(--primary-foreground);
  border-color: var(--primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .project-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.dark .project-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--primary-indigo);
  transform: translateY(-2px);
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
}

.project-category {
  background: var(--secondary);
  color: var(--secondary-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-description {
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--accent);
  color: var(--accent-foreground);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--muted-foreground);
  font-size: 0.875rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .stat-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.dark .stat-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  color: var(--primary);
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--muted-foreground);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>