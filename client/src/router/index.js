import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'; // Correct path to HomePage component
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
