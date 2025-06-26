<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition flex items-center justify-center relative overflow-hidden">
      <!-- Background Animation Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div 
          class="absolute top-20 left-20 w-32 h-32 bg-blue-600/10 rounded-full floating-animation"
        />
        <div 
          class="absolute bottom-20 right-20 w-24 h-24 bg-purple-600/10 rounded-full floating-animation-delayed"
        />
        <div 
          class="absolute top-1/2 left-10 w-16 h-16 bg-amber-400/10 rounded-full floating-animation-delayed-2"
        />
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="animate-fadeInUp">
          <h2 class="text-6xl md:text-8xl font-bold text-gradient mb-6">Portfolio</h2>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Creative Designer crafting digital experiences with passion and precision
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton 
              size="xl" 
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </UButton>
            <UButton 
              variant="outline" 
              size="xl"
              class="border-2 border-blue-600 text-blue-600 dark:text-purple-400 dark:border-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Download CV
            </UButton>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="heroicons:chevron-down" class="text-2xl text-gray-400" />
      </div>
    </section>

    <!-- Section Divider -->
    <div 
      ref="dividerRef" 
      :class="['section-divider mx-auto w-24', { 'animate': dividerInView }]" 
    />

    <!-- Software Section -->
    <section ref="softwareRef" class="min-h-screen bg-white dark:bg-gray-800 theme-transition py-20 relative overflow-hidden">
      <!-- Geometric Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-full h-full" style="background-image: url(&quot;data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%236366F1' fill-opacity='0.1'><polygon points='60,60 30,60 30,30 60,30'/></g></svg>&quot;)" />
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fadeInUp" v-show="softwareInView">
          <h2 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <Icon name="heroicons:code-bracket" class="inline-block text-blue-600 mr-4" size="48" />
            Software Development
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building robust, scalable applications with modern technologies and best practices
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" v-show="softwareInView">
          <SkillCard 
            v-for="(skill, index) in softwareSkills" 
            :key="skill.title"
            v-bind="skill"
            class="animate-fadeInUp"
            :style="{ animationDelay: `${index * 0.1}s` }"
          />
        </div>
      </div>
    </section>

    <!-- Sharp Transition Element -->
    <div class="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-pulse-slow" />
    </div>

    <!-- Design Section -->
    <section ref="designRef" class="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 theme-transition py-20 relative overflow-hidden">
      <!-- Creative Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fadeInUp" v-show="designInView">
          <h2 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <Icon name="heroicons:paint-brush" class="inline-block text-pink-500 mr-4" size="48" />
            Creative Design
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Crafting visually stunning designs and compelling multimedia content that tells your story
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" v-show="designInView">
          <SkillCard 
            v-for="(skill, index) in designSkills" 
            :key="skill.title"
            v-bind="skill"
            class="animate-fadeInUp"
            :style="{ animationDelay: `${index * 0.1}s` }"
          />
        </div>
        
        <!-- Design Portfolio Showcase -->
        <div class="mt-20 animate-fadeInUp" v-show="designInView">
          <h3 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Design Portfolio</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(item, index) in designPortfolio"
              :key="item.title"
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fadeInUp"
              :style="{ animationDelay: `${0.8 + index * 0.1}s` }"
            >
              <img :src="item.image" :alt="item.title" class="w-full h-56 object-cover" />
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ item.title }}</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div class="container mx-auto px-6 text-center">
        <div class="animate-fadeInUp">
          <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and creative design
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton 
              size="xl"
              class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Project
            </UButton>
            <UButton 
              variant="outline" 
              size="xl"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule a Call
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Skills data
const softwareSkills = [
  {
    title: 'HTML & CSS',
    description: 'Semantic markup and modern CSS with flexbox, grid, and animations',
    icon: 'simple-icons:html5',
    color: 'orange',
    proficiency: 95
  },
  {
    title: 'JavaScript',
    description: 'ES6+ features, async programming, and modern JavaScript patterns',
    icon: 'simple-icons:javascript',
    color: 'yellow',
    proficiency: 90
  },
  {
    title: 'Vue & Nuxt 3',
    description: 'Component-based architecture with Vue.js and server-side rendering with Nuxt 3',
    icon: 'simple-icons:vuedotjs',
    color: 'green',
    proficiency: 95
  },
  {
    title: 'Python & Django',
    description: 'Backend development with Python and full-stack web applications using Django',
    icon: 'simple-icons:python',
    color: 'blue',
    proficiency: 85
  }
]

const designSkills = [
  {
    title: 'Figma',
    description: 'UI/UX design, prototyping, and collaborative design systems',
    icon: 'simple-icons:figma',
    color: 'purple',
    proficiency: 95
  },
  {
    title: 'Photoshop',
    description: 'Photo editing, digital art, and graphic design compositions',
    icon: 'simple-icons:adobephotoshop',
    color: 'blue',
    proficiency: 90
  },
  {
    title: 'Premiere Pro',
    description: 'Video editing, color grading, and professional post-production',
    icon: 'simple-icons:adobepremierepro',
    color: 'indigo',
    proficiency: 85
  },
  {
    title: 'After Effects',
    description: 'Motion graphics, visual effects, and animated compositions',
    icon: 'simple-icons:adobeaftereffects',
    color: 'pink',
    proficiency: 90
  }
]

const designPortfolio = [
  {
    title: 'Brand Identity',
    description: 'Complete brand system with logo, colors, and typography',
    image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design with intuitive interfaces',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  },
  {
    title: 'Video Production',
    description: 'Professional video editing and motion graphics',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  }
]

// Refs for intersection observer
const softwareRef = ref(null)
const designRef = ref(null)  
const dividerRef = ref(null)

const softwareInView = ref(false)
const designInView = ref(false)
const dividerInView = ref(false)

// Set up intersection observers
onMounted(() => {
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === softwareRef.value) {
        softwareInView.value = entry.isIntersecting
      } else if (entry.target === designRef.value) {
        designInView.value = entry.isIntersecting
      } else if (entry.target === dividerRef.value) {
        dividerInView.value = entry.isIntersecting
      }
    })
  }, observerOptions)

  if (softwareRef.value) observer.observe(softwareRef.value)
  if (designRef.value) observer.observe(designRef.value)
  if (dividerRef.value) observer.observe(dividerRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})

// SEO
useHead({
  title: 'Emrullah Alku - Portfolio',
  meta: [
    { name: 'description', content: 'Full-Stack Developer & Creative Designer specializing in Vue.js, Nuxt 3, Python Django, and modern design tools.' }
  ]
})
</script>