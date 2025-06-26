<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 menu-overlay"
    >
      <!-- Empty overlay for darkening effect -->
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})

defineEmits(['navigate'])
</script>