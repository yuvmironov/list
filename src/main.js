import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Valid from '@/Plugins/Validate'

import LoaderComponent from './Plugins/Loader/Loader'

Vue.config.productionTip = false

Vue.use(LoaderComponent)
Vue.use(Valid)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
