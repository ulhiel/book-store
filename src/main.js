import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faShoppingCart, faUser, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('top-navbar', require('./components/basics/top-navbar').default)
Vue.component('top-message', require('./components/basics/top-message.vue').default)
Vue.component('top-category', require('./components/basics/top-category.vue').default)
Vue.component('welcome-banner', require('./components/welcome/top-banner.vue').default)
Vue.component('editors-choice', require('./components/welcome/editors-choice.vue').default)
Vue.component('footer-bottom', require('./components/basics/footer.vue').default)
Vue.component('new-arrival', require('./components/welcome/new-arrival.vue').default)
Vue.component('best-selling', require('./components/welcome/best-selling.vue').default)
Vue.component('bottom-banner', require('./components/welcome/bottom-banner.vue').default)

Vue.component('similar-recomendation', require('./components/book-display/similar-recomendation.vue').default)
Vue.component('book-review', require('./components/book-display/book-review.vue').default)
Vue.component('book-action', require('./components/book-display/book-action.vue').default)

Vue.component('card-display', require('./components/book-display/card-display').default)
Vue.component('cart-page-item', require('./views/checkout/cart-item.vue').default)
Vue.component('checkout-summary', require('./components/checkout/checkout-summary.vue').default)
Vue.component('navbar-cart-item', require('./components/basics/navbar-cart-item').default)

Vue.component('sidebar',require('./components/basics/sidebar.vue').default)
 
library.add(faBars,faSearch, faShoppingCart, faUser, faTrash)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
