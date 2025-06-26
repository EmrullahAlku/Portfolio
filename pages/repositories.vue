<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          <Icon name="simple-icons:github" class="inline-block text-gray-800 dark:text-white mr-4" size="48" />
          My Repositories
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Open source projects and code examples showcasing my development skills and contributions
        </p>
      </div>
      
      <!-- GitHub Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fadeInUp">
        <div
          v-for="(stat, index) in githubStats"
          :key="stat.label"
          class="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg animate-fadeInUp"
          :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
        >
          <div :class="[stat.color, 'text-3xl font-bold mb-2']">{{ stat.value }}</div>
          <p class="text-gray-600 dark:text-gray-300">{{ stat.label }}</p>
        </div>
      </div>
      
      <!-- Featured Repositories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
        <RepositoryCard 
          v-for="(repo, index) in repositories" 
          :key="repo.name"
          v-bind="repo"
          class="animate-fadeInUp"
          :style="{ animationDelay: `${1 + index * 0.1}s` }"
        />
      </div>
      
      <!-- GitHub Profile Link -->
      <div class="text-center mt-16 animate-fadeInUp">
        <UButton 
          size="xl"
          class="bg-gray-800 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
        >
          <Icon name="simple-icons:github" class="mr-3" size="20" />
          View All Repositories on GitHub
          <Icon name="heroicons:arrow-top-right-on-square" class="ml-3" size="16" />
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const githubStats = [
  { label: 'Public Repositories', value: '42', color: 'text-blue-600' },
  { label: 'Total Commits', value: '1,247', color: 'text-green-500' },
  { label: 'Stars Earned', value: '156', color: 'text-amber-500' },
  { label: 'Followers', value: '23', color: 'text-purple-500' }
]

const repositories = [
  {
    name: 'vue-portfolio-template',
    description: 'A modern, responsive portfolio template built with Vue 3 and Nuxt 3. Features dark mode, animations, and mobile-first design.',
    language: 'Vue',
    stars: 24,
    forks: 8,
    color: 'green'
  },
  {
    name: 'django-ecommerce-api',
    description: 'RESTful API for e-commerce applications using Django REST Framework. Includes authentication, payment processing, and inventory management.',
    language: 'Python',
    stars: 31,
    forks: 12,
    color: 'blue'
  },
  {
    name: 'js-animation-library',
    description: 'Lightweight JavaScript animation library for modern web applications. Supports CSS transforms, scroll animations, and easing functions.',
    language: 'JavaScript',
    stars: 18,
    forks: 5,
    color: 'yellow'
  },
  {
    name: 'nuxt-blog-cms',
    description: 'Headless CMS blog built with Nuxt 3, featuring markdown support, SEO optimization, and dynamic routing for content management.',
    language: 'Vue',
    stars: 37,
    forks: 15,
    color: 'green'
  },
  {
    name: 'css-component-library',
    description: 'Modular CSS component library with utility classes, responsive design patterns, and accessibility-first approach.',
    language: 'CSS',
    stars: 14,
    forks: 3,
    color: 'blue'
  },
  {
    name: 'python-data-viz',
    description: 'Data visualization tools and templates using Python, Matplotlib, and Seaborn for creating interactive charts and dashboards.',
    language: 'Python',
    stars: 22,
    forks: 7,
    color: 'blue'
  }
]

// SEO
useHead({
  title: 'Repositories - Emrullah Alku',
  meta: [
    { name: 'description', content: 'Open source projects and GitHub repositories showcasing development skills in Vue.js, Python, and modern web technologies.' }
  ]
})
</script>