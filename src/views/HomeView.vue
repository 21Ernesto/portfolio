<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 text-gray-800">
    <header class="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-10 shadow-md">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo de la agencia -->
          <h1 class="text-2xl font-bold tracking-wide text-blue-600 hover:text-blue-700 transition duration-300">
            Nubex
          </h1>
          <!-- Botón de menú para móviles -->
          <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
          <!-- Navegación para pantallas medianas y grandes -->
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li v-for="(section, index) in sections" :key="index">
                <a :href="section.href"
                  class="text-sm font-medium uppercase tracking-wider hover:text-orange-500 transition duration-300 relative group">
                  {{ section.name }}
                  <span
                    class="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Menú móvil -->
        <nav :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="md:hidden mt-4">
          <ul class="flex flex-col space-y-4">
            <li v-for="(section, index) in sections" :key="index">
              <a :href="section.href"
                class="text-sm font-medium uppercase tracking-wider hover:text-orange-500 transition duration-300 block py-2"
                @click="closeMenu">
                {{ section.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="pt-20">
      <TransitionGroup name="fade-slide" tag="div" appear>
        <HomeSection id="inicio" key="home" class="section-padding" />
        <ProjectsSection id="proyectos" key="projects" class="section-padding" />
        <AboutSection id="sobre-mi" key="about" class="section-padding" />
        <ContactSection id="contacto" key="contact" class="section-padding" />
      </TransitionGroup>
    </main>

    <footer class="border-t-2 border-blue-500 text-black py-4">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Nubex. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { TransitionGroup } from 'vue'
import { MenuIcon, XIcon } from 'lucide-vue-next'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import HomeSection from '@/components/HomeSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'

interface Section {
  name: string
  href: string
}

const sections: Ref<Section[]> = ref([
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' }
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-padding {
  @apply py-16;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.float-animation {
  animation: float 4s ease-in-out infinite;
}
</style>