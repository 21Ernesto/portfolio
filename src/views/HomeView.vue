<template>
  <div class="min-h-screen bg-white text-gray-800">
    <header class="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-10">
      <nav class="max-w-5xl mx-auto px-4 py-4">
        <ul class="flex justify-center space-x-8">
          <li v-for="(section, index) in sections" :key="index">
            <a :href="section.href"
              class="text-sm uppercase tracking-wider hover:text-green-500 transition duration-300 relative group">
              {{ section.name }}
              <span
                class="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="pt-16">
      <TransitionGroup name="fade-slide" tag="div" appear>
        <HomeSection id="inicio" key="home" />
        <ProjectsSection id="proyectos" key="projects" />
        <AboutSection id="sobre-mi" key="about" />
        <ContactSection id="contacto" key="contact" />
      </TransitionGroup>
    </main>
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