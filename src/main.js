import './startup'

import Vue from 'vue'
import App from './App'
import router from './router'
import * as resources from './resources'
import resource from './plugins/resource'
import deviceQueries from './plugins/device-queries'
import config from './config'
import Vuetify from 'vuetify'
import VueGtag from 'vue-gtag';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(resource, {
  resources,
  store,
  endpoint: 'https://api.cosmicjs.com/v1/' + config.COSMIC_BUCKET
})

Vue.use(VueGtag, {
  config: { id: 'G-VFJPPK7F58' }
});

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
})

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
