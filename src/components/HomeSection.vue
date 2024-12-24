<template>
  <section class="py-24" id="inicio">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <div class="mb-8 relative inline-block">
        <img 
          src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" 
          alt="Profile" 
          class="w-32 h-32 rounded-full object-cover"
        >
      </div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{{ description }}</p>
      
      <div class="flex justify-center space-x-6 mb-8">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 hover:text-green-500 transition-colors duration-300"
        >
          <component :is="social.icon" class="w-6 h-6" />
        </a>
      </div>

      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a 
          href="#proyectos" 
          class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Ver Proyectos
        </a>
        <a 
          href="#contacto" 
          class="border border-green-500 text-green-500 px-6 py-2 rounded-md hover:bg-green-50 transition duration-300"
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