import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Table from './components/table.vue'
import Table2 from './components/table2.vue'
import Leftmenu from './components/left-menu.vue'
import Settings from './components/settings.vue'
import Filter from './components/filter-btn.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component ('app-header', Header)
Vue.component ('app-footer', Footer)
Vue.component ('app-table', Table)
Vue.component ('app-table2', Table2)
Vue.component ('app-left-menu', Leftmenu)
Vue.component ('app-settings', Settings)
Vue.component ('app-filter', Filter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
