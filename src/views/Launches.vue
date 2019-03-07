<template>
<div>
<div class="componentContainer">
<launches_pastLaunches/>
</div>
<shared_Footer/>
</div>
</template>

<script>
import shared_Footer from '@/components/shared/shared_Footer.vue';
import launches_pastLaunches from '@/components/launches/launches_pastLaunches.vue';

export default {
  name: 'launches',
  components: {
    shared_Footer,
    launches_pastLaunches,
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



