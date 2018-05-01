import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Foo = { template: '<app-table></app-table>' }
const Bar = { template: '<app-table2></app-table2>' }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
