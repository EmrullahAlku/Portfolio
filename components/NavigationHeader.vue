<template>
  <div class="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 navigation-header">
    <div class="relative">
      <!-- Inverted Half Circle Name Display -->
      <div
        :class="[
          isHovered || isMenuOpen ? 'full-circle' : 'inverted-half-circle',
          'bg-gradient-to-r from-blue-600 to-purple-600 w-48 h-24 flex items-start justify-center pt-4 cursor-pointer shadow-2xl hover:shadow-purple-500/25 transition-all duration-500'
        ]"
        @click="handleClick"
        @mouseenter="isHovered = true"
        @mouseleave="handleMouseLeave"
      >
        <h1 class="text-white font-bold text-lg tracking-wide">Emrullah Alku</h1>
      </div>
      
      <!-- Profile Photo -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-75"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-75"
      >
        <img
          v-if="isHovered || isMenuOpen"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
          alt="Emrullah Alku Profile Photo"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full object-cover cursor-pointer"
          @click="handleProfileClick"
        />
      </Transition>
      
      <!-- Circular Menu Around Profile -->
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <div 
          v-if="isMenuOpen" 
          class="circular-menu absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div
            v-for="(item, index) in menuItems"
            :key="item.id"
            :class="[
              'circular-menu-item',
              `menu-item-${index + 1}`,
              'nav-item'
            ]"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="$emit('navigate', item.id)"
          >
            <Icon :name="item.icon" :class="item.color" size="24" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isMenuOpen: Boolean
})

const emit = defineEmits(['menu-toggle', 'navigate'])

const isHovered = ref(false)

const menuItems = [
  { id: 'home', icon: 'heroicons:home', color: 'text-blue-600' },
  { id: 'education', icon: 'heroicons:academic-cap', color: 'text-purple-600' },
  { id: 'repositories', icon: 'simple-icons:github', color: 'text-gray-700 dark:text-gray-300' },
  { id: 'about', icon: 'heroicons:user', color: 'text-emerald-500' },
  { id: 'contact', icon: 'heroicons:envelope', color: 'text-amber-500' }
]

const handleClick = () => {
  if (!props.isMenuOpen) {
    emit('menu-toggle', true)
  }
}

const handleProfileClick = () => {
  if (props.isMenuOpen) {
    emit('menu-toggle', false)
  }
}

const handleMouseLeave = () => {
  if (!props.isMenuOpen) {
    isHovered.value = false
  }
}

watch(() => props.isMenuOpen, (newValue) => {
  if (!newValue) {
    isHovered.value = false
  }
})
</script>

<style scoped>
.circular-menu-item {
  animation: menuItemSlideIn 0.3s ease-out;
}
</style>