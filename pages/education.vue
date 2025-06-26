<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          <Icon name="heroicons:academic-cap" class="inline-block text-blue-600 mr-4" size="48" />
          Education & Certifications
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Continuous learning and professional development in technology and design
        </p>
      </div>
      
      <!-- Education Timeline -->
      <div class="mb-20 animate-fadeInUp">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Academic Background</h2>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div class="relative flex items-center mb-12 animate-fadeInUp">
              <div class="flex-1 text-right pr-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Bachelor of Computer Science</h3>
                  <p class="text-blue-600 dark:text-blue-400 font-semibold mb-2">Istanbul Technical University</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">2019 - 2023</p>
                  <p class="text-gray-600 dark:text-gray-300">Specialized in software engineering, algorithms, and web development with focus on modern frameworks and database design.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div class="flex-1 pl-8"></div>
            </div>
            
            <div class="relative flex items-center mb-12 animate-fadeInUp">
              <div class="flex-1 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div class="flex-1 pl-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">High School Diploma</h3>
                  <p class="text-purple-600 dark:text-purple-400 font-semibold mb-2">Science High School</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">2015 - 2019</p>
                  <p class="text-gray-600 dark:text-gray-300">Mathematics and Science focused curriculum with early introduction to programming and computational thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Certifications Grid -->
      <div class="animate-fadeInUp">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Professional Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CertificationCard 
            v-for="(certification, index) in certifications" 
            :key="certification.title"
            v-bind="certification"
            class="animate-fadeInUp"
            :style="{ animationDelay: `${1 + index * 0.1}s` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const certifications = [
  {
    title: 'Vue.js Developer Certification',
    issuer: 'Vue Mastery',
    date: 'March 2023',
    icon: 'simple-icons:vuedotjs',
    color: 'green',
    skills: ['Vue 3', 'Composition API', 'Nuxt 3']
  },
  {
    title: 'Python Django Developer',
    issuer: 'Django Software Foundation',
    date: 'January 2023',
    icon: 'simple-icons:python',
    color: 'blue',
    skills: ['Django', 'REST API', 'PostgreSQL']
  },
  {
    title: 'UX/UI Design Professional',
    issuer: 'Google UX Design',
    date: 'October 2022',
    icon: 'simple-icons:figma',
    color: 'purple',
    skills: ['Figma', 'User Research', 'Prototyping']
  },
  {
    title: 'Video Production Specialist',
    issuer: 'Adobe Certified Expert',
    date: 'September 2022',
    icon: 'simple-icons:adobepremierepro',
    color: 'indigo',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading']
  },
  {
    title: 'Modern JavaScript Developer',
    issuer: 'FreeCodeCamp',
    date: 'June 2022',
    icon: 'simple-icons:javascript',
    color: 'yellow',
    skills: ['ES6+', 'Async/Await', 'APIs']
  },
  {
    title: 'Motion Graphics Designer',
    issuer: 'School of Motion',
    date: 'August 2022',
    icon: 'simple-icons:adobeaftereffects',
    color: 'pink',
    skills: ['Animation', 'Typography', 'Visual Effects']
  }
]

// SEO
useHead({
  title: 'Education - Emrullah Alku',
  meta: [
    { name: 'description', content: 'Academic background and professional certifications in software development and design.' }
  ]
})
</script>