<template>
  <div class="new-design">
    <div class="container">
      <div class="row">
          <h3 class="col-6">{{ msg }}</h3>
          <div class="col-6">
            <input type="text" :value="msg" @input="changeMess">
            <p>{{ mess }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: [ 'msg' ],
  data () {
    return {
      mess: ''
    }
  },
  methods: {
    changeMess (event) {
      this.mess = event.target.value
      this.$emit('messChange', this.mess)
    }
  }
}
</script>
<style scoped>

</style>
