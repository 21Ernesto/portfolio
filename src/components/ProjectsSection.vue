<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 to-orange-50" id="proyectos">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-blue-800 mb-16">Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <article v-for="project in projects" :key="project.id" class="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <div class="flex space-x-4">
                <a 
                  v-if="project.github"
                  :href="project.github" 
                  target="_blank" 
                  class="text-white hover:text-orange-300 transition-colors duration-300"
                  aria-label="Ver código en GitHub"
                >
                  <GithubIcon class="w-6 h-6" />
                </a>
                <a 
                  :href="project.demo" 
                  target="_blank" 
                  class="text-white hover:text-orange-300 transition-colors duration-300"
                  aria-label="Ver demo del proyecto"
                >
                  <ExternalLinkIcon class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GithubIcon, ExternalLinkIcon } from 'lucide-vue-next'
import { projects } from '../data/projects'

</script>