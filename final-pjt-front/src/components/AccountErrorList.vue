<template>
  <div class="account-error-list">
    <div v-for="(errors, field) in authError" :key="field">
      {{ field }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccountErrorList',
  computed: {
    ...mapGetters(['authError'])
  },
}
</script>

<style>
  .account-error-list {
    color: #E91E63;
  }
</style>