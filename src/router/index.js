import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserAccountView from '../views/UserAccountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: ['/Home', '/Index'],
    component: HomeView
  },
  {
    path: '/user/:id?',
    name: 'user',
    alias: ['/User', '/UserAccount'],
    component: UserAccountView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // redirect: '/user1',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
