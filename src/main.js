import Vue from 'vue'
import App from './App.vue'

import AppNav from './components/Nav.vue';
import AppNavUser from './components/NavUser.vue';

Vue.component('AppNav', AppNav);
Vue.component('AppNavUser', AppNavUser);

new Vue({
  el: '#app',
  render: h => h(App)
});
