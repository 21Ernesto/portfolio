<template>
  <section class="py-24" id="contacto">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-light text-center text-gray-800 mb-16">Contacto</h2>
      <div class="space-y-8">
        <div class="flex items-center space-x-6">
          <PhoneIcon class="w-8 h-8 text-green-500" />
          <a href="https://wa.me/5930986496051" target="_blank" class="text-xl text-gray-600 hover:text-green-500 transition-colors">
            +593 098 649 6051
          </a>
        </div>
        <div class="flex items-center space-x-6">
          <MailIcon class="w-8 h-8 text-green-500" />
          <a href="mailto:ernestojair2020@gmail.com" class="text-xl text-gray-600 hover:text-green-500 transition-colors">
            ernestojair2020@gmail.com
          </a>
        </div>
        <div class="flex items-center space-x-6">
          <MapPinIcon class="w-8 h-8 text-green-500" />
          <span class="text-xl text-gray-600">
            Ecuador - Sucumbios - Lago Agrio
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-vue-next'
</script>

