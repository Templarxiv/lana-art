import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import GalleryMain from '../components/gallery/GalleryMain.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryMain,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
  ],
})

export default router
