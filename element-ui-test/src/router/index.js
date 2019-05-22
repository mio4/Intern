import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import test_table from '@/components/test_table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : '/home',
      name : 'HomePage',
      component : HomePage
    },
    {
      path : '/test_table',
      name : 'test_table',
      component: test_table
    }
  ]
})
