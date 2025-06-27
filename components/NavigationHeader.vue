<template>
  <div>
    <div class="navigation-container">
      <!-- Inverted Half Circle Navigation -->
      <div
        class="inverted-navigation"
        :class="{ expanded: isExpanded }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="toggleMenu"
      >
        <div class="profile-container">
          <img
            src="../public/pp.jpg"
            alt="Emrullah Alku"
            class="profile-image"
          />
          <div class="profile-info">
            <h3>Emrullah Alku</h3>
            <p>Full-Stack Developer</p>
          </div>
        </div>

        <!-- Dark Mode Toggle -->
        <button @click.stop="toggleDarkMode" class="theme-toggle">
          <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" />
        </button>
      </div>

      <!-- Navigation Items -->
      <template v-if="isMenuOpen">
        <NuxtLink
          v-for="item in menuItemsWithStyles"
          :key="item.name"
          :to="item.path"
          class="circular-menu-item"
          :style="item.style"
          @click="closeMenu"
        >
          <Icon :name="item.icon" size="24" />
        </NuxtLink>
      </template>
    </div>
    <!-- Circular Menu Overlay -->
    <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
    <button v-if="isMenuOpen" class="close-menu-button" @click="closeMenu">
      <Icon name="heroicons:x-mark" size="32" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const colorMode = useColorMode();
const isExpanded = ref(false);
const isMenuOpen = ref(false);

const isDark = computed(() => colorMode.value === "dark");

const menuItems = [
  { name: "Home", path: "/", icon: "heroicons:home" },
  { name: "Education", path: "/education", icon: "heroicons:academic-cap" },
  {
    name: "Repositories",
    path: "/repositories",
    icon: "heroicons:code-bracket",
  },
  { name: "About", path: "/about", icon: "heroicons:user" },
  { name: "Contact", path: "/contact", icon: "heroicons:envelope" },
];

const menuRadius = 200;
const menuItemsWithStyles = computed(() => {
  const totalItems = menuItems.length;
  const expandedWidth = 300;
  const centerX = expandedWidth / 2;
  const centerY = 0;

  return menuItems.map((item, index) => {
    const arcAngle = (5 * Math.PI) / 6; // 180 degrees
    const startAngle = (11 * Math.PI) / 12;
    const angle = startAngle - (index / (totalItems - 1)) * arcAngle;

    const x = centerX + menuRadius * Math.cos(angle);
    const y = centerY + menuRadius * Math.sin(angle);
    const delay = index * 0.05;

    return {
      ...item,
      style: {
        top: `${y - 30}px`,
        left: `${x - 30}px`,
        "animation-delay": `${delay}s`,
      },
    };
  });
});

const handleMouseEnter = () => {
  isExpanded.value = true;
};

const handleMouseLeave = () => {
  if (!isMenuOpen.value) {
    isExpanded.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    isExpanded.value = true;
  } else {
    isExpanded.value = false;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  isExpanded.value = false;
};

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style scoped>
.navigation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.inverted-navigation {
  position: relative;
  width: 120px;
  height: 60px;
  background: var(--card);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 60px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dark .inverted-navigation {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.inverted-navigation.expanded {
  width: 300px;
  height: 150px;
  border-radius: 0 0 150px 150px;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.expanded .profile-container {
  opacity: 1;
  transform: translateY(0);
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--primary);
}

.profile-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
}

.profile-info p {
  font-size: 0.75rem;
  color: var(--muted-foreground);
  margin: 0;
}

.theme-toggle {
  position: absolute;
  top: 10px;
  right: 15px;
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  color: var(--foreground);
}

.expanded .theme-toggle {
  opacity: 1;
}

.theme-toggle:hover {
  background: var(--accent);
  transform: scale(1.05);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  animation: fadeIn 0.3s ease-out;
  z-index: 999;
}

.dark .menu-overlay {
  background: rgba(0, 0, 0, 0.7);
}

.circular-menu-item {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--foreground);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: menuItemSlideIn 0.5s ease-out;
  z-index: 1001;
}

.dark .circular-menu-item {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.circular-menu-item:hover {
  transform: scale(1.1);
  background: var(--accent);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.dark .circular-menu-item:hover {
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.close-menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1002;
  padding: 0;
}

/* Circular positioning */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes menuItemSlideIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
