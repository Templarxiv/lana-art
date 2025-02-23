import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../components/gallery/GalleryMain.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../components/Contacts.vue'),
    },
  ],
})

export default router
