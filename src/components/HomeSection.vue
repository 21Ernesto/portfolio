<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 to-orange-50" id="inicio">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <div class="mb-8 relative inline-block">
        <img 
          src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" 
          alt="Profile" 
          class="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
        >
        <div class="absolute -bottom-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Full Stack
        </div>
      </div>
      <h1 class="text-5xl font-bold text-blue-800 mb-4 transition-all duration-300 hover:text-blue-600">{{ title }}</h1>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">{{ description }}</p>
      
      <div class="flex justify-center space-x-6 mb-8">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-orange-500 transition-colors duration-300"
        >
          <component :is="social.icon" class="w-8 h-8" />
        </a>
      </div>

      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a 
          href="#proyectos" 
          class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg text-lg font-semibold"
        >
          Ver Proyectos
        </a>
        <a 
          href="#contacto" 
          class="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 shadow-md hover:shadow-lg text-lg font-semibold"
        >
          Contactar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next'

const title = ref('¡Hola, soy Ernesto Guerrero!')
const description = ref(
  'Desarrollador Full Stack apasionado por crear experiencias web increíbles. ' +
  'Especializado en Vue.js, Ionic, Laravel, React, SQLServer, MySQL, Tailwind CSS, Bootstrap.'
)
const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/21Ernesto',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ernestojairguerrero/',
    icon: LinkedinIcon
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/tuusuario',
  //   icon: TwitterIcon
  // }
])
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}
</style>