<template>
  <div id="app">
    <NavigationHeader />
    <NuxtPage />
  </div>
</template>

<script setup>
// Enable dark mode
useHead({
  htmlAttrs: {
    lang: 'tr'
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>