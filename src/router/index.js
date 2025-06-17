// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import the pages/components to be used as routes
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import BirthChartPage from '@/views/BirthChartPage.vue'
import BirthDataPage from '@/views/BirthDataPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/birthChart', name: 'birthChart', component: BirthChartPage },
  { path: '/birthDataPage', name: 'birthData', component: BirthDataPage }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router