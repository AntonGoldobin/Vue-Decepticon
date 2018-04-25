import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Field from './components/Field.vue'
import Table from './components/table.vue'
import Leftmenu from './components/left-menu.vue'

Vue.use(BootstrapVue)
Vue.component ('app-header', Header)
Vue.component ('app-footer', Footer)
Vue.component ('app-field', Field)
Vue.component ('app-table', Table)
Vue.component ('app-left-menu', Leftmenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
