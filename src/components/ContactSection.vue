<template>
  <!-- El template se mantiene exactamente igual -->
  <section class="py-24 bg-gradient-to-br from-blue-50 to-orange-50" id="contacto">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-blue-800 mb-16">Contáctame</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <h3 class="text-2xl font-semibold text-blue-700 mb-6">Información de Contacto</h3>
          <div class="flex items-center space-x-6 group">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <PhoneIcon class="w-6 h-6 text-blue-600" />
            </div>
            <a href="https://wa.me/5930986496051" target="_blank" class="text-xl text-gray-700 hover:text-orange-500 transition-colors">
              +593 098 649 6051
            </a>
          </div>
          <div class="flex items-center space-x-6 group">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <MapPinIcon class="w-6 h-6 text-blue-600" />
            </div>
            <span class="text-xl text-gray-700">
              Ecuador - Sucumbios - Lago Agrio
            </span>
          </div>
          <div class="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63833.84305801095!2d-76.90856371972658!3d0.09158859999998707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e28993b0e5c8c3f%3A0x6f1a9a7a9c7a9a9a!2sLago%20Agrio%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1625000000000!5m2!1ses!2sec" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <form @submit.prevent="sendEmail" class="bg-white p-8 rounded-lg shadow-lg space-y-6" ref="formEl">
          <h3 class="text-2xl font-semibold text-blue-700 mb-6">Envíame un mensaje</h3>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input type="text" id="name" v-model="form.name" required name="from_name"
              class="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" v-model="form.email" required name="from_email"
              class="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea id="message" v-model="form.message" rows="4" required name="message"
              class="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"></textarea>
          </div>
          <button type="submit" 
            class="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            :disabled="sending"
          >
            <span>{{ sending ? 'Enviando...' : 'Enviar Mensaje' }}</span>
            <SendIcon v-if="!sending" class="w-5 h-5" />
            <LoaderIcon v-else class="w-5 h-5 animate-spin" />
          </button>
          <transition name="fade">
            <p v-if="message" :class="{'text-green-600': !error, 'text-red-600': error}" class="text-center font-medium">
              {{ message }}
            </p>
          </transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { PhoneIcon, MapPinIcon, SendIcon, LoaderIcon } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_6fxifp4'
const TEMPLATE_ID = 'template_2jma3s5'
const PUBLIC_KEY = 'aPD1-f_EOUJ8y_CYi'

const formEl = ref()
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sending = ref(false)
const message = ref('')
const error = ref(false)

const sendEmail = async () => {
  sending.value = true
  message.value = ''
  error.value = false

  try {
    const templateParams = {
      to_email: 'ernestojair2020@gmail.com', // Email que recibirá los mensajes
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email // Esto asegura que al responder, se enviará al email del remitente
    }

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    message.value = '¡Mensaje enviado con éxito! Te responderé pronto.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    console.error(e)
    message.value = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

input, textarea {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.group:hover .text-blue-600 {
  color: #2563eb;
}
</style>