import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import TestPage from '../components/TestPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/test-page',
      component: TestPage
    }
  ]
})
