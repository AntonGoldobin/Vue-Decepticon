<template>
  <div id="main" class="bg-light">
  <app-header></app-header>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
   <b-container>
     <b-row>
       <b-col col sm='2'>
        <app-left-menu></app-left-menu>
      </b-col>
       <b-col col sm='10'>
          <app-table></app-table>
      </b-col>
    </b-row>
   </b-container>
     <app-footer></app-footer>
 </div>
</template>

<script>
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app2')

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss">
@import '../style/application.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
