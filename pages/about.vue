<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          <Icon name="heroicons:user" class="inline-block text-emerald-500 mr-4" size="48" />
          About Me
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Passionate developer and designer with a love for creating meaningful digital experiences
        </p>
      </div>
      
      <div class="max-w-6xl mx-auto">
        <!-- Personal Story -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fadeInUp">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Emrullah Alku Portrait" 
              class="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Journey</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Emrullah Alku, a passionate full-stack developer and creative designer based in Istanbul, Turkey. My journey into technology began during high school when I discovered the power of code to bring ideas to life.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a Computer Science degree and years of hands-on experience, I specialize in modern web technologies like Vue.js, Nuxt 3, and Django. I believe in creating digital experiences that are not only functional but also beautiful and intuitive.
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, creating motion graphics, or contributing to open-source projects. I'm always eager to learn new technologies and collaborate on exciting projects.
            </p>
          </div>
        </div>
        
        <!-- Skills & Interests -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fadeInUp">
          <div
            v-for="(interest, index) in interests"
            :key="interest.title"
            class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fadeInUp"
            :style="{ animationDelay: `${0.8 + index * 0.1}s` }"
          >
            <div class="bg-gray-100 dark:bg-gray-700 rounded-full p-4 mb-6 inline-block">
              <Icon :name="interest.icon" :class="interest.color" size="32" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ interest.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ interest.description }}</p>
          </div>
        </div>
        
        <!-- Fun Facts -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white animate-fadeInUp">
          <h2 class="text-3xl font-bold text-center mb-8">Fun Facts About Me</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(fact, index) in funFacts"
              :key="fact.label"
              class="text-center animate-fadeInUp"
              :style="{ animationDelay: `${1.6 + index * 0.1}s` }"
            >
              <div class="text-4xl font-bold mb-2">{{ fact.value }}</div>
              <p class="text-purple-100">{{ fact.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const interests = [
  {
    title: 'Web Development',
    description: 'Building responsive, scalable web applications with modern frameworks and best practices.',
    icon: 'heroicons:code-bracket',
    color: 'text-blue-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user-centered designs that provide exceptional digital experiences.',
    icon: 'heroicons:paint-brush',
    color: 'text-purple-500'
  },
  {
    title: 'Motion Graphics',
    description: 'Bringing designs to life with engaging animations and visual effects.',
    icon: 'heroicons:film',
    color: 'text-red-500'
  },
  {
    title: 'Open Source',
    description: 'Contributing to the developer community through open-source projects and knowledge sharing.',
    icon: 'heroicons:heart',
    color: 'text-green-500'
  },
  {
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions to complex problems.',
    icon: 'heroicons:light-bulb',
    color: 'text-yellow-500'
  },
  {
    title: 'Collaboration',
    description: 'Working with teams to deliver outstanding results and meaningful impact.',
    icon: 'heroicons:users',
    color: 'text-indigo-500'
  }
]

const funFacts = [
  { label: 'Cups of Coffee', value: '500+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies Learned', value: '15' },
  { label: 'Passion for Learning', value: '∞' }
]

// SEO
useHead({
  title: 'About - Emrullah Alku',
  meta: [
    { name: 'description', content: 'Learn about Emrullah Alku, a passionate full-stack developer and creative designer from Istanbul, Turkey.' }
  ]
})
</script>