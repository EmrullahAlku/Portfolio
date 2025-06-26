<template>
  <UButton
    icon="i-heroicons-moon"
    :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
    variant="outline"
    color="gray"
    class="fixed top-6 right-6 z-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
  />
</template>

<script setup>
const colorMode = useColorMode()
</script>