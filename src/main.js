// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.scss'
import Buefy from 'buefy'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:3000');

Vue.use(Buefy, VueSocketIO, SocketInstance)
Object.defineProperties(Vue.prototype, {
  VueSocketIO: {
    get () {
      return VueSocketIO
    }
  },
})

// Vue.use();

// Vue.use(Buefy,VueSocketio, 'http://localhost:3000')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
