<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
    <div class="text-center">
      <div :class="[colorClasses[color]?.bg || 'bg-blue-100 dark:bg-blue-900/30', 'rounded-full p-4 mb-6 inline-block']">
        <Icon :name="icon" :class="colorClasses[color]?.iconColor || 'text-blue-500'" size="32" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-blue-600 dark:text-blue-400 font-semibold mb-3">{{ issuer }}</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Completed: {{ date }}</p>
      <div class="flex flex-wrap gap-2 justify-center">
        <span 
          v-for="skill in skills" 
          :key="skill" 
          :class="[colorClasses[color]?.skillBg || 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', 'px-3 py-1 rounded-full text-xs']"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  issuer: String,
  date: String,
  icon: String,
  color: String,
  skills: Array
})

const colorClasses = {
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-500',
    skillBg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-500',
    skillBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-500',
    skillBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-500',
    skillBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400'
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-500',
    skillBg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-500',
    skillBg: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400'
  }
}
</script>