import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'welcome',
      component: require('../views/welcome').default
    },
    {
      path: '/category',
      name: 'category',
      component: require('../views/category').default
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
