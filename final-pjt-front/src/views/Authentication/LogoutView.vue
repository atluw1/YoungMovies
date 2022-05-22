<template>
  <div>
    
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  created() {
    if (this.isLoggedIn) {
      this.logout()
    } else {
      alert('당신은 로그인 되어 있지 않습니다!')
      this.$router.back()
    }
  }
}

</script>

<style>

</style>