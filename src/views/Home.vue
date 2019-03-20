<template>
  <div class="pageSpacer">
    <div class="componentContainer">
      <H1>HOME</H1>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'home',
  components: {
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
        console.log(this.$store.state.loggedIn)
      }
    },
  },
  mounted() {
    this.redirectPage
  },
  created() {
    this.redirectPage
  }
}
</script>

<style scoped>

</style>

