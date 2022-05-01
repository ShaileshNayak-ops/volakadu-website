import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about', 
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/contactUs', 
      name: 'contactUs',
      component: () => import('@/views/ContactUs.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('@/views/Publications.vue')
    }
  ]
})

export default router
