<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ name }}</h3>
      <Icon name="simple-icons:github" class="text-gray-400 text-xl" />
    </div>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-1">
          <div :class="[languageColors[language] || 'bg-gray-500', 'w-3 h-3 rounded-full']"></div>
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ language }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon name="heroicons:star" class="w-4 h-4 text-amber-500" />
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ stars }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon name="heroicons:code-bracket" class="w-4 h-4 text-gray-400" />
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ forks }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  language: String,
  stars: Number,
  forks: Number,
  color: String
})

const languageColors = {
  Vue: 'bg-green-500',
  Python: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  CSS: 'bg-blue-400'
}
</script>