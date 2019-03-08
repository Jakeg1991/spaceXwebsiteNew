<template>
<div>
<div class="componentContainer">
<launches_launchesGrid/>
</div>
<shared_footer/>
</div>
</template>

<script>
import shared_footer from '@/components/shared/shared_footer.vue';
import launches_launchesGrid from '@/components/launches/launches_launchesGrid.vue';

export default {
  name: 'launches',
  components: {
    shared_footer,
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
  },}

</script>

<style>

</style>



