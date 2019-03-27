<template>
  <div class="pageSpacer" v-show="this.$store.state.loggedIn == true">
      <div class="componentContainer">
        <launches_launchesGridWithFilter ref="launchesGrid" :launchesData="this.launchesData" />
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
      launchesData: undefined,
    }
  },
  methods: {
    showData() {
        this.launchesData = this.$store.state.launchesData
    },
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
    this.showData()
    this.redirectPage()
  },
}
</script>

<style>

</style>



