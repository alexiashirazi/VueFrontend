import { createRouter, createWebHistory } from 'vue-router'
import BlogSection from '../components/BlogSection.vue'
import TheWelcome from '../components/TheWelcome.vue'

const routes = [
  {
    path: '/welcome', // Optional route for TheWelcomeView
    name: 'Welcome',
    component: TheWelcome,
  },
  {
    path: '/', // Default route
    name: 'Blog',
    component: BlogSection, // Render BlogSection on the root path
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
