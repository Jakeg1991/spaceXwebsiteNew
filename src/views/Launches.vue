<template>
<div>
<div class="componentContainer">
<div class="launchesPatchGrid">
<div v-for="(launch, index) in this.allLaunches" :key="index">
      <launches_oneLaunch ref="oneLaunch" :launch="launch"/>
    </div>
</div>
</div>
<shared_Footer/>
</div>
</template>

<script>
import shared_Footer from '@/components/shared/shared_Footer.vue';
import launches_oneLaunch from '@/components/launches/launches_oneLaunch.vue';

export default {
  name: 'launches',
  components: {
    shared_Footer,
    launches_oneLaunch,
  },
  data(){
    return{
      allLaunches:[],
      filteredLaunches:[]
    }
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    retrieveStoreData() {
      this.allLaunches = this.$store.state.launches
      this.filteredLaunches = this.$store.state.launches
      console.log(this.$store.state.launches)
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
  },
}
</script>

<style>
.launchesPatchGrid{
  display: flex;
  align-content:flex-start;
  flex-wrap: wrap;
  justify-content:center;
  border: 1px;
}
</style>



