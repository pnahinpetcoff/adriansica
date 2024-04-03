import { createRouter, createWebHistory } from 'vue-router'
import Pics from '../views/PicsView.vue'
import Contact from '../views/ContactView.vue'
import Bio from '../views/BioView.vue'
import Venta from '../views/VentaView.vue'
import Obras from '../views/ObrasView.vue'
import Home from '../views/HomeView.vue'
import Donation from '../views/DonationView.vue'
import NotFound from '../views/PageNotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pics',
    name: 'pics',
    component: Pics
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/productos',
    name: 'productos',
    component: Venta
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio
  },
  {
    path: '/obras',
    name: 'obras',
    component: Obras
  },
  {
    path: '/donation',
    name: 'donation',
    component: Donation
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router