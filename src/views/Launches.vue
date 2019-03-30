<template>
  <div class="pageSpacer">
      <div class="componentContainer">
        <launches_launchesGridWithFilter ref="launchesGrid"/>
      </div>
  </div>
</template>

<script>
import launches_launchesGridWithFilter from '@/components/launches/launches_launchesGridWithFilter.vue';
export default {
  name: 'launches',
  components: {
    launches_launchesGridWithFilter,
  },
  data() {
    return {
      dataFetched: false,
    }
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    runLogout() {
      this.$emit('logoutRunFunc')
    },
  },
  mounted() {
    this.redirectPage()
  },
}
</script>

<style>

</style>



