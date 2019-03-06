<template>
  <div>
    <div class="componentContainer">
      <H1>HOME</H1>
    </div>
      <shared_Footer/>
  </div>
</template>

<script>
import store from '../store'
import shared_Footer from '@/components/shared/shared_Footer.vue';

export default {
  name: 'home',
  computed: {},
  components: {
    shared_NavBar,
    shared_UserInfo,
    shared_Header,
    shared_Footer
  },
  methods: {
        redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
  },
  mounted() {
    this.redirectPage
    }
  },
}
</script>

<style scoped>

</style>

