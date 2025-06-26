<template>
  <div class="skill-card bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
    <div class="text-center">
      <div :class="[colorClasses[color]?.bg || 'bg-blue-100 dark:bg-blue-900/30', 'rounded-full p-4 mb-6 inline-block']">
        <Icon :name="icon" :class="colorClasses[color]?.text || 'text-blue-500'" size="32" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
      <div class="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          :class="[
            'h-2 rounded-full transition-all duration-1000 delay-500',
            colorClasses[color]?.progress || 'bg-gradient-to-r from-blue-400 to-blue-600'
          ]"
          :style="{ width: animatedWidth + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  icon: String,
  color: String,
  proficiency: Number
})

const colorClasses = {
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-500',
    progress: 'bg-gradient-to-r from-orange-400 to-orange-600'
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-500',
    progress: 'bg-gradient-to-r from-yellow-400 to-yellow-600'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-500',
    progress: 'bg-gradient-to-r from-green-400 to-green-600'
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-500',
    progress: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-500',
    progress: 'bg-gradient-to-r from-purple-400 to-purple-600'
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-500',
    progress: 'bg-gradient-to-r from-indigo-400 to-indigo-600'
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-500',
    progress: 'bg-gradient-to-r from-pink-400 to-pink-600'
  }
}

const animatedWidth = ref(0)

onMounted(() => {
  // Animate progress bar after component mounts
  setTimeout(() => {
    animatedWidth.value = props.proficiency
  }, 500)
})
</script>