<template>
  <section class="py-24" id="proyectos">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl font-light text-center text-gray-800 mb-16">Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <article v-for="project in projects" :key="project.id" class="flex flex-col">
          <div class="relative aspect-video mb-4 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex space-x-4">
                <!-- <a 
                  :href="project.github" 
                  target="_blank" 
                  class="text-white hover:text-green-300 transition-colors duration-300"
                >
                  <GithubIcon class="w-6 h-6" />
                </a> -->
                <a 
                  :href="project.demo" 
                  target="_blank" 
                  class="text-white hover:text-green-300 transition-colors duration-300"
                >
                  <ExternalLinkIcon class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-medium text-gray-800 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4 flex-grow">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
            >
              {{ tech }}
            </span>
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