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
    },
    {
      path: '/book',
      name: 'book',
      component: require('../views/book-show.vue').default
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: require('../views/checkout/cart-page.vue').default
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
