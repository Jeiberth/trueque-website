import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    {
        path: '/',
        name: 'beg',
        component: HomeView,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/how-it-works',
        name: 'how-it-works',
        component: () => import('../views/how-it-works.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    // {
    //     path: '/',
    //     name: 'signup',
    //     component: () => import('../views/sign-up.vue'),
    // },
    {
        path: '/sign-up',
        name: 'signup', 
        beforeEnter() {
            window.open('https://app.trueque.art/#/', '_blank')
            return false
        }
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('../views/privacy/privacy.vue'),
    },
    {
        path: '/privacy/delete-account',
        name: 'privacy-delete-account',
        component: () => import('../views/privacy/privacy-delete-account.vue'),
    },
    {
        path: '/privacy/child-safety-standards',
        name: 'child-safety-standards',
        component: () => import('../views/privacy/child-safety-standards.vue'),
    },
  ],
})

export default router
