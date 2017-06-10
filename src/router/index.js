import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CreateEvent from '@/components/CreateEvent'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create-event',
      name: 'Login',
      component: CreateEvent
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
