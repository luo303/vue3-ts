import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login'
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'home'
    },
    {
      path: '/layout',
      component: () => import('@/views/layout/index.vue'),
      name: 'home'
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any'
    }
  ]
})

export default router
