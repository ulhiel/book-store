import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faBars,faSearch, faShoppingCart, faUser)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
