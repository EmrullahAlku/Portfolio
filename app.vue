<template>
  <div class="min-h-screen">
    <!-- Navigation Header with Inverted Half Circle -->
    <NavigationHeader 
      @menu-toggle="handleMenuToggle" 
      :is-menu-open="isMenuOpen" 
    />
    
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <!-- Menu Overlay -->
    <MenuOverlay 
      :is-open="isMenuOpen" 
      @navigate="handleNavigate" 
    />
    
    <!-- Main Content -->
    <main 
      class="transition-all duration-500"
      :class="{ 'blur-sm': isMenuOpen }"
      :style="{ filter: isMenuOpen ? 'blur(5px)' : 'none' }"
    >
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const handleMenuToggle = (isOpen) => {
  isMenuOpen.value = isOpen
}

const handleNavigate = (page) => {
  navigateTo(page === 'home' ? '/' : `/${page}`)
  isMenuOpen.value = false
}

// Close menu when clicking outside or pressing escape
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      isMenuOpen.value = false
    }
  }

  const handleClickOutside = (e) => {
    if (isMenuOpen.value && !e.target.closest('.nav-item, .navigation-header')) {
      isMenuOpen.value = false
    }
  }

  document.addEventListener('keydown', handleEscape)
  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.removeEventListener('click', handleClickOutside)
  })
})

// SEO and meta
useHead({
  title: 'Emrullah Alku - Portfolio',
  meta: [
    { name: 'description', content: 'Full-Stack Developer & Creative Designer crafting digital experiences with passion and precision' },
    { property: 'og:title', content: 'Emrullah Alku - Portfolio' },
    { property: 'og:description', content: 'Full-Stack Developer & Creative Designer crafting digital experiences with passion and precision' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>