<template>
  <section class="py-24" id="sobre-mi">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-light text-center text-gray-800 mb-16">Sobre Mí</h2>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
          <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" alt="Profile" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 space-y-6">
          <p class="text-gray-600 leading-relaxed">{{ about }}</p>
          <div>
            <h3 class="text-xl font-medium text-gray-800 mb-4">Habilidades</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in skills" 
                :key="skill.name"
                class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string;
  level: number;
  category: string;
}

const about = ref(
  'Soy un desarrollador apasionado por crear soluciones web innovadoras y eficientes. ' +
  'Con experiencia en tecnologías frontend y backend, me especializo en crear ' +
  'aplicaciones web responsivas y escalables.'
)

const skills = ref<Skill[]>([
  { name: 'Vue.js', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Ionic', level: 45, category: 'frontend' },
  { name: 'PHP', level: 75, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'SQLServer', level: 70, category: 'database' },
  { name: 'Tailwind CSS', level: 90, category: 'css' },
  { name: 'Bootstrap', level: 80, category: 'css' },
])
</script>