import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/how-it-works',
        name: 'how-it-works',
        component: () => import('../views/how-it-works.vue'),
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('../views/privacy.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/sign-up',
        name: 'signup',
        component: () => import('../views/sign-up.vue'),
    },
  ],
})

export default router
