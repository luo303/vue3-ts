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
      redirect: '/channel',
      children: [
        {
          path: 'manage',
          component: () => import('@/views/article/manage.vue'),
          name: 'manage',
          meta: {
            title: '文章管理',
            icon: 'Promotion'
          }
        },
        {
          path: 'channel',
          component: () => import('@/views/article/channel.vue'),
          name: 'channel',
          meta: {
            title: '文章分类',
            icon: 'Menu'
          }
        },
        {
          path: 'user',
          redirect: '/user/profile',
          name: 'article',
          meta: {
            title: '个人中心',
            icon: 'Avatar'
          },
          children: [
            {
              path: 'profile',
              component: () => import('@/views/user/profile.vue'),
              name: 'profile',
              meta: {
                title: '基本资料',
                icon: 'List'
              }
            },
            {
              path: 'avatar',
              component: () => import('@/views/user/avatar.vue'),
              name: 'avatar',
              meta: {
                title: '更换头像',
                icon: 'MagicStick'
              }
            },
            {
              path: 'password',
              component: () => import('@/views/user/password.vue'),
              name: 'password',
              meta: {
                title: '更改密码',
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
