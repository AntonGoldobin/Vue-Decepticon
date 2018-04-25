<template>
  <div id="app">
   <app-header></app-header>
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
export default {
  name: 'app',
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
