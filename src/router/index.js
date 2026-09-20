import {createRouter, createWebHistory } from 'vue-router'

// the three per-user activity pages share one view; the route name selects the report
const userActivityView = () => import('@/views/UserActivityView.vue');

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
      component: userActivityView
    },
    {
      path: '/activity/drive',
      name: 'activity-drive',
      component: userActivityView
    },
    {
      path: '/activity/email',
      name: 'activity-email',
      component: userActivityView
    },
    {
      path: '/anonymous-email',
      name: 'anonymous-email',
      component: () => import('@/views/AnonymousEmailView.vue')
    },
    {
      path: '/print',
      name: 'print',
      component: () => import('@/views/PrintView.vue')
    }
  ]
})

export default router
