<template>
  <div>
    <div>{{ apiKey }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SuggestQueryView',
  data: function () {
    return {
      movieQuery: ''
    }},
  computed: {
    apiKey : function () {
      return this.$store.state.apiKey
  }
  }
}

</script>

<style>

</style>