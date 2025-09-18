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
      component: () => import('@/views/layout/index.vue'),
      name: 'layout',
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index.vue'),
          name: 'home'
        },
        {
          path: 'acl',
          redirect: 'acl/user',
          name: 'acl',
          children: [
            {
              path: 'user',
              component: () => import('@/views/acl/User.vue'),
              name: 'user'
            },
            {
              path: 'player',
              component: () => import('@/views/acl/player.vue'),
              name: 'player'
            },
            {
              path: 'menu',
              component: () => import('@/views/acl/menu.vue'),
              name: 'menu'
            }
          ]
        },
        {
          path: 'shopping',
          name: 'shopping',
          children: [
            {
              path: 'attr',
              name: 'attr',
              component: () => import('@/views/shopping/attr.vue')
            },
            {
              path: 'brand',
              name: 'brand',
              component: () => import('@/views/shopping/brand.vue')
            },
            {
              path: 'SKU',
              name: 'SKU',
              component: () => import('@/views/shopping/sku.vue')
            },
            {
              path: 'SPU',
              name: 'SPU',
              component: () => import('@/views/shopping/spu.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/screen',
      component: () => import('@/views/screen/index.vue'),
      name: 'screen'
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
