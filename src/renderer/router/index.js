import Vue from 'vue'
import Router from 'vue-router'

import layout from 'components/content/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('views/login')
    },
    {
      path: '/index',
      name: 'layout',
      component: layout,
      children: [
        // {
        //   name: 'dashboard',
        //   path: '/dashboard',
        //   component: () => import('views/dashboard'),
        //   meta: { title: '控制台' }
        // }
      ]
    }
  ]
})
