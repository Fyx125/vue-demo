import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/login'
// import Reg from '@/reg'
// import List from '@/components/list'
import List2 from '@/components/list2'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/reg',
    //   name: 'reg',
    //   component: Reg
    // },
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: List
    // },
    {
      path: '/list2',
      name: 'list2',
      component: List2
    }
  ]
})
