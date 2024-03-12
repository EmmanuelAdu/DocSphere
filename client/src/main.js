// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // Import the router configuration
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Use Vuetify as a plugin
Vue.use(vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify, // Instantiating vuetify
  router,
  components: { App },
  template: '<App/>'
})
