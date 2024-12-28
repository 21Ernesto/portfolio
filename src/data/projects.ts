import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Diccionario Tseltal",
    description: "Una plataforma para buscar palabras de un idioma Mexicano llamdo Tseltal.",
    image: "./TseltalDiccionario.png",
    technologies: ["Laravel", "JavaScript", "MySql", "Tailwind CSS"],
    github: "",
    demo: "https://ditsel.aldelim.org/"
  },
  {
    id: 2,
    title: "Tico Belleza",
    description: "Una plataforma para ofrecer servicio de belleza para mujeres, hombres y mascotas en Costa Rica.",
    image: "/TicoBelleza.png",
    technologies: ["Laravel", "Vue.js", "MySql", "Tailwind CSS"],
    github: "",
    demo: "https://www.ticobelleza.com/"
  },
  {
    id: 3,
    title: "Manual de tseltal de Guaquitepec",
    description: "Este sitio web parte del Diccionario Tseltal, pero son lecciones con audios.",
    image: "/Manual.png",
    technologies: ["Laravel", "MySql", "Tailwind CSS"],
    github: "",
    demo: "https://manualtseltal.aldelim.org/"
  },
  {
    id: 4,
    title: "Ya Jnop Tseltal",
    description: "Es una aplicación del Tseltal para aprender a leer y escribir en Tseltal.",
    image: "/YaJnopTseltal.png",
    technologies: ["Laravel", "Ionic", "MySql", "Tailwind CSS"],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=ya.jnop.tseltal"
  },
  {
    id: 5,
    title: "Rutas Mayas del Sureste",
    description: "Una plataforma para ofrecer rutas turísticas en la región del sureste de México.",
    image: "/RutasMayasDelSureste.png",
    technologies: ["Laravel", "Livewire", "JavaScript", "Stripe", "MySql", "Tailwind CSS"],
    github: "",
    demo: "https://rutasmayasdelsureste.com/"
  },
]