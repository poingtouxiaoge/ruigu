import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
