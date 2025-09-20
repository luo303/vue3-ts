import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores'

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
      meta: {
        title: 'layout',
        icon: 'Lock',
        hidden: true
      },
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index.vue'),
          name: 'home',
          meta: {
            title: '首页',
            icon: 'HomeFilled'
          }
        },
        {
          path: 'acl',
          redirect: '/acl/user',
          name: 'acl',
          meta: {
            title: '权限管理',
            icon: 'Lock'
          },
          children: [
            {
              path: 'user',
              component: () => import('@/views/acl/User.vue'),
              name: 'user',
              meta: {
                title: '用户管理',
                icon: 'Avatar'
              }
            },
            {
              path: 'player',
              component: () => import('@/views/acl/player.vue'),
              name: 'player',
              meta: {
                title: '角色管理',
                icon: 'UserFilled'
              }
            },
            {
              path: 'menu',
              component: () => import('@/views/acl/menu.vue'),
              name: 'menu',
              meta: {
                title: '菜单管理',
                icon: 'Menu'
              }
            }
          ]
        },
        {
          path: 'shopping',
          name: 'shopping',
          redirect: '/shopping/brand',
          meta: {
            title: '商品管理',
            icon: 'ShoppingCartFull'
          },
          children: [
            {
              path: 'attr',
              name: 'attr',
              component: () => import('@/views/shopping/attr.vue'),
              meta: {
                title: '属性管理',
                icon: 'MagicStick'
              }
            },
            {
              path: 'brand',
              name: 'brand',
              component: () => import('@/views/shopping/brand.vue'),
              meta: {
                title: '品牌管理',
                icon: 'GoodsFilled'
              }
            },
            {
              path: 'SKU',
              name: 'SKU',
              component: () => import('@/views/shopping/sku.vue'),
              meta: {
                title: 'SKU管理',
                icon: 'Flag'
              }
            },
            {
              path: 'SPU',
              name: 'SPU',
              component: () => import('@/views/shopping/spu.vue'),
              meta: {
                title: 'SPU管理',
                icon: 'Opportunity'
              }
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
//添加路由前置守卫
router.beforeEach((to, from, next) => {
  const userstore = useUserStore()
  if (!userstore.token && to.path !== '/login') next('/login')
  else next()
})
export default router
