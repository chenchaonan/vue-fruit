import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);

let state={

};
let store=new Vuex.Store({
  state,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});


