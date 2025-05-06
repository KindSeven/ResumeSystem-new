import Home from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('@/views/TemplateSelect.vue'),
    },
    {
      path: '/priview/:templateId',
      name: 'priview',
      component: () => import('@/views/PreviewPage.vue'),
      props: true,
    },
  ],
})

export default router
