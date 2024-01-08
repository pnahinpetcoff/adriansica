import { createRouter, createWebHistory } from 'vue-router'
import Pics from '../views/PicsView.vue'
import Contact from '../views/ContactView.vue'
import Bio from '../views/BioView.vue'
import Merch from '../views/MerchView.vue'
import Academy from '../views/AcademyView.vue'
import Agency from '../views/AgencyView.vue'
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
    path: '/merch',
    name: 'merch',
    component: Merch
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/MusicView.vue')
  },
  {
    path: '/academy',
    name: 'academy',
    component: Academy
  },
  {
    path: '/agency',
    name: 'agency',
    component: Agency
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