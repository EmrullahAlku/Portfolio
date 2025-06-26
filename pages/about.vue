<template>
  <div class="about-page">
    <div class="container">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-content">
          <div class="hero-image">
            <img 
              src="https://via.placeholder.com/300x300/6366f1/ffffff?text=EA" 
              alt="Emrullah Alku"
              class="profile-photo"
            />
          </div>
          <div class="hero-text">
            <h1 class="hero-title">Hakkımda</h1>
            <h2 class="hero-subtitle">Full-Stack Developer & Creative Designer</h2>
            <p class="hero-description">
              Merhaba! Ben Emrullah Alku, teknoloji ve tasarım tutkusu ile modern web çözümleri 
              geliştiren bir full-stack developer'ım. 3+ yıldır bu alanda çalışıyor ve 
              kullanıcı deneyimini ön planda tutarak işlevsel, estetik web uygulamaları oluşturuyorum.
            </p>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section section">
        <div class="story-content">
          <h2 class="section-title">Hikayem</h2>
          <div class="story-grid">
            <div class="story-text">
              <p class="story-paragraph">
                Yazılım geliştirme yolculuğum üniversite yıllarında başladı. Bilgisayar Mühendisliği 
                eğitimim sırasında web teknolojileriyle tanıştım ve bu alandaki potansiyeli keşfettim.
              </p>
              <p class="story-paragraph">
                İlk projelerimde HTML ve CSS ile başlayarak, zamanla JavaScript, Vue.js ve modern 
                web framework'lerini öğrendim. Her proje, yeni bir beceri kazanma ve daha iyi 
                çözümler üretme fırsatı oldu.
              </p>
              <p class="story-paragraph">
                Bugün, full-stack geliştirme ile tasarım arasında köprü kurarak, hem teknik hem de 
                görsel açıdan mükemmel web deneyimleri oluşturmaya odaklanıyorum.
              </p>
            </div>
            <div class="story-visual">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-year">2019</div>
                  <div class="timeline-event">Üniversite başlangıcı</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2021</div>
                  <div class="timeline-event">İlk web projesi</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2022</div>
                  <div class="timeline-event">Frontend uzmanlığı</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2023</div>
                  <div class="timeline-event">Full-stack geliştirici</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-event">Freelance kariyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills & Tools -->
      <section class="skills-tools section">
        <h2 class="section-title text-center mb-8">Kullandığım Teknolojiler</h2>
        <div class="tools-grid">
          <div class="tool-category">
            <h3 class="category-title">Frontend</h3>
            <div class="tools-list">
              <div class="tool-item">
                <Icon name="simple-icons:html5" size="24" />
                <span>HTML5</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:css3" size="24" />
                <span>CSS3</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:javascript" size="24" />
                <span>JavaScript</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:vuedotjs" size="24" />
                <span>Vue.js</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:nuxtdotjs" size="24" />
                <span>Nuxt.js</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:react" size="24" />
                <span>React</span>
              </div>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Backend</h3>
            <div class="tools-list">
              <div class="tool-item">
                <Icon name="simple-icons:nodedotjs" size="24" />
                <span>Node.js</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:python" size="24" />
                <span>Python</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:django" size="24" />
                <span>Django</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:express" size="24" />
                <span>Express.js</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:postgresql" size="24" />
                <span>PostgreSQL</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:mongodb" size="24" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Design & Tools</h3>
            <div class="tools-list">
              <div class="tool-item">
                <Icon name="simple-icons:figma" size="24" />
                <span>Figma</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:adobephotoshop" size="24" />
                <span>Photoshop</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:adobepremierepro" size="24" />
                <span>Premiere Pro</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:git" size="24" />
                <span>Git</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:visualstudiocode" size="24" />
                <span>VS Code</span>
              </div>
              <div class="tool-item">
                <Icon name="simple-icons:docker" size="24" />
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values & Approach -->
      <section class="values-section section">
        <h2 class="section-title text-center mb-8">Değerlerim & Yaklaşımım</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <Icon name="heroicons:lightbulb" size="32" />
            </div>
            <h3 class="value-title">İnovasyon</h3>
            <p class="value-description">
              Her projede yeni teknolojileri keşfetmeyi ve yaratıcı çözümler üretmeyi seviyorum.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <Icon name="heroicons:users" size="32" />
            </div>
            <h3 class="value-title">Kullanıcı Odaklı</h3>
            <p class="value-description">
              Kullanıcı deneyimini her zaman ön planda tutarak, sezgisel ve erişilebilir tasarımlar oluşturuyorum.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <Icon name="heroicons:cog-6-tooth" size="32" />
            </div>
            <h3 class="value-title">Kalite</h3>
            <p class="value-description">
              Temiz kod yazma, test etme ve sürekli iyileştirme prensipleriyle çalışıyorum.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <Icon name="heroicons:academic-cap" size="32" />
            </div>
            <h3 class="value-title">Sürekli Öğrenme</h3>
            <p class="value-description">
              Teknoloji hızla gelişiyor, ben de kendimi sürekli güncelleyerek bu gelişimi takip ediyorum.
            </p>
          </div>
        </div>
      </section>

      <!-- Fun Facts -->
      <section class="fun-facts section">
        <h2 class="section-title text-center mb-8">Kişisel Bilgiler</h2>
        <div class="facts-grid">
          <div class="fact-item">
            <Icon name="heroicons:map-pin" size="24" />
            <span>Kocaeli, Türkiye</span>
          </div>
          <div class="fact-item">
            <Icon name="heroicons:language" size="24" />
            <span>Türkçe, İngilizce</span>
          </div>
          <div class="fact-item">
            <Icon name="heroicons:coffee" size="24" />
            <span>Kahve bağımlısı</span>
          </div>
          <div class="fact-item">
            <Icon name="heroicons:musical-note" size="24" />
            <span>Müzik dinlemeyi seviyorum</span>
          </div>
          <div class="fact-item">
            <Icon name="heroicons:book-open" size="24" />
            <span>Teknoloji blogları okuyorum</span>
          </div>
          <div class="fact-item">
            <Icon name="heroicons:camera" size="24" />
            <span>Fotoğraf çekmeyi seviyorum</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Hakkımda - Emrullah Alku',
  meta: [
    {
      name: 'description',
      content: 'Emrullah Alku hakkında detaylı bilgi. Full-Stack Developer ve Creative Designer olarak hikayem, değerlerim ve yaklaşımım.'
    }
  ]
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 4rem;
}

.about-hero {
  margin-bottom: 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image {
  text-align: center;
}

.profile-photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid var(--primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.dark .profile-photo {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--muted-foreground);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;
}

.story-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--muted-foreground);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 5px;
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  border: 3px solid var(--background);
}

.timeline-year {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.timeline-event {
  color: var(--muted-foreground);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tool-category {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.dark .tool-category {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  text-align: center;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--secondary);
  border-radius: 8px;
  color: var(--foreground);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tool-item:hover {
  background: var(--accent);
  transform: translateY(-2px);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .value-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.dark .value-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.value-icon {
  color: var(--primary);
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1rem;
}

.value-description {
  color: var(--muted-foreground);
  line-height: 1.6;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--foreground);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .fact-item {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.fact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dark .fact-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero-content,
  .story-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .profile-photo {
    width: 200px;
    height: 200px;
  }
  
  .tools-list {
    grid-template-columns: 1fr;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
}
</style>