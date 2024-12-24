<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 text-gray-800">
    <header class="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-10 shadow-md">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo de la agencia -->
        <h1 class="text-2xl font-bold tracking-wide text-blue-600 hover:text-blue-700 transition duration-300">
          Nubex
        </h1>
        <!-- Navegación -->
        <nav>
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
    </header>

    <main class="pt-20">
      <TransitionGroup name="fade-slide" tag="div" appear>
        <HomeSection id="inicio" key="home" class="section-padding" />
        <ProjectsSection id="proyectos" key="projects" class="section-padding" />
        <AboutSection id="sobre-mi" key="about" class="section-padding" />
        <ContactSection id="contacto" key="contact" class="section-padding" />
      </TransitionGroup>
    </main>

    <footer class="bg-blue-600 text-white py-8">
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
  padding-top: 4rem;
  padding-bottom: 4rem;
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

.text-blue-600 {
  color: #2563eb;
}

.hover\:text-blue-700:hover {
  color: #1d4ed8;
}

.text-orange-500 {
  color: #f97316;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.from-blue-50 {
  --tw-gradient-from: #eff6ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 246, 255, 0));
}

.to-orange-50 {
  --tw-gradient-to: #fff7ed;
}

.bg-orange-500 {
  background-color: #f97316;
}
</style>

