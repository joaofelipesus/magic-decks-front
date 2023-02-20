import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/app.scss'

Vue.config.productionTip = false

Vue.use(Toast, { hideProgressBar: true })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
