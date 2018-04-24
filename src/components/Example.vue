<template>
  <div>
    <h1>{{ message }}</h1>
    <app-input :msg='message' @messChange="message = $event"></app-input>
  </div>
</template>

<script>
/* eslint-disable */
import Input from './Field.vue'
export default {
  data() {
    return {
      message: 'Test message'
    }
  },
  components: {
    'app-input': Input
  }
}
</script>
