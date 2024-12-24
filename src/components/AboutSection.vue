<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 to-orange-50" id="sobre-mi">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-blue-800 mb-16">Sobre Mí</h2>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-orange-400 p-1 shadow-lg transform hover:rotate-3 transition-transform duration-300">
          <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" alt="Profile"
            class="w-full h-full object-cover rounded-full">
        </div>
        <div class="flex-1 space-y-6">
          <p class="text-gray-700 leading-relaxed text-lg">{{ about }}</p>
          <div>
            <h3 class="text-2xl font-semibold text-blue-700 mb-4">Habilidades</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="skill in skills" :key="skill.name"
                class="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                :title="`Nivel: ${skill.level}%`"
              >
                {{ skill.name }}
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-orange-500 h-1 rounded-full" :style="{ width: `${skill.level}%` }"></div>
                </div>
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
  'aplicaciones web responsivas y escalables. Mi enfoque se centra en la calidad del código, ' +
  'la experiencia del usuario y la adopción de las mejores prácticas de la industria.'
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
  { name: 'C#', level: 43, category: 'backend' },
  { name: 'ASP.NET', level: 23, category: 'frontend and backend' },
])
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>