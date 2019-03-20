<template>
<div class="pageSpacer">
<div class="componentContainer">
<launches_launchesGrid/>
</div>
</div>
</template>

<script>
import launches_launchesGrid from '@/components/launches/launches_launchesGrid.vue';

export default {
  name: 'launches',
  components: {
    launches_launchesGrid,
  },
  data() {
    return {
      pastLaunches: [],
    }
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    retrieveStoreData() {
      this.pastLaunches = this.$store.state.launches
    },
    runLogout() {
      this.$emit('logoutRunFunc')
    },
  },
  mounted() {
    this.redirectPage()
  },
  created() {
    this.retrieveStoreData()
    this.redirectPage()
  },}

</script>

<style>

</style>



