import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import contact from '@/pages/contact'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
