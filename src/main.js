import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { APP_NAME } from './constants'

Vue.config.errorHandler = (error, vm, info) => console.warn(APP_NAME, error, vm, info);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
