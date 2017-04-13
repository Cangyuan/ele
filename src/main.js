// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import rule from './components/rule'
import support from './components/support'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/support', component: support},
  { path: '/rule', component: rule},
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

//路由end
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
// router.push(support)