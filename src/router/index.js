import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/public/Home.vue'
import Cocktails from '../views/public/Cocktails.vue'
import Contact from '../views/public/Contact.vue'

import PublicLayout from '../views/public/Layout.vue'
import AdminLayout from '../views/admin/Layout.vue'
import Dashboard from '../views/admin/Dashboard.vue'

import UserIndex from '@/views/admin/users/UserIndex.vue'
import UserEdit from '@/views/admin/users/UserEdit.vue'
import UserAdd from '@/views/admin/users/UserAdd.vue'

import CocktailIndex from '@/views/admin/cocktails/CocktailIndex.vue'
import CocktailEdit from '@/views/admin/cocktails/CocktailEdit.vue'

import Login from '@/views/auth/Login.vue'
import { authGuard } from '@/_helpers/auth-guard.js'


const routes = [
  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/cocktails',
        name: 'cocktails',
        component: Cocktails
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    //beforeEnter: authGuard,
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'users/index',
        name: 'UserIndex',
        component: UserIndex
      },
      {
        path: 'users/edit/:id(\\d+)',
        name: 'UserEdit',
        component: UserEdit,
        props: true
      },
      {
        path: 'users/add',
        name: 'UserAdd',
        component: UserAdd
      },

      {
        path: 'cocktails/index',
        name: 'CocktailIndex',
        component: CocktailIndex
      },
      {
        path: 'cocktails/edit/:id(\\d+)?',
        name: 'CocktailEdit',
        component: CocktailEdit,
        props: true
      },
      {
        path: '/:pathMatch(.*)*', redirect: '/admin/dashboard'
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login, //beforeEnter: authGuard
  },
  {
    path: '/:pathMatch(.*)*', redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched[0].name == 'admin') {
    authGuard()
  }
  next()
})

export default router
