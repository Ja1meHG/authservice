import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FetchUserView from '@/views/FetchUserView.vue'
import FetchAllView from '@/views/FetchAllView.vue'
import Userpost from '@/components/Userpost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/fetchUser/: Gmail',
      name: 'user',
      component: FetchUserView
    },
    {
      path: '/fetchAll/',
      name: 'users',
      component: FetchAllView
    },
    {
      path: '/userpost',
      name: 'registro',
      component: Userpost
    }

  ]
})

export default router
