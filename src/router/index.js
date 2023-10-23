import {createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {name: 'activity-search'}
    },
    {
      path: '/activity/search',
      name: 'activity-search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchHistoryView.vue')
    },
    {
      path: '/activity/drive',
      name: 'activity-drive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/DriveActivityView.vue')
    },
    {
      path: '/activity/email',
      name: 'activity-email',
      component: () => import('@/views/EmailActivityView.vue')
    },
    {
      path: '/anonymous-email',
      name: 'anonymous-email',
      component: () => import('@/views/AnonymousEmailView.vue')
    }
  ]
})

export default router
