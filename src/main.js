import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import "@/assets/css/tailwind.css"

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
