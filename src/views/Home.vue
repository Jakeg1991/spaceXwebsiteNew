<template>
  <div>
    <div class="componentContainer">
      <H1>HOME</H1>
    </div>
      <shared_footer/>
  </div>
</template>

<script>
import store from '../store'
import shared_footer from '@/components/shared/shared_footer.vue';

export default {
  name: 'home',
  components: {
    shared_footer
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

