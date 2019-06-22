import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Host from '@/page/Host'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/host',
      name: 'Host',
      component: Host
    }
  ],
  mode: 'history'
})
