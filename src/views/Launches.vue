<template>
<div class="viewContainer">
  <shared_UserInfo @logoutClicked="runLogout()"/>
  <shared_Header />
  <shared_NavBar />
<div class="componentContainer">
<h1>LAUNCHES</h1>


<div v-for="(launch, index) in this.launchesData" :key="index">
      <launches_oneLaunch ref="oneLaunch" :launchesData="launchesData"/>
    </div>


</div>
<shared_Footer/>
</div>
</template>

<script>
import shared_NavBar from '@/components/shared/shared_NavBar.vue';
import shared_UserInfo from '@/components/shared/shared_UserInfo.vue';
import shared_Header from '@/components/shared/shared_Header.vue';
import shared_Footer from '@/components/shared/shared_Footer.vue';
import launches_oneLaunch from '@/components/launches/launches_oneLaunch.vue';

export default {
  name: 'launches',
  components: {
    shared_NavBar,
    shared_UserInfo,
    shared_Header,
    shared_Footer,
    launches_oneLaunch,
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    retrieveStoreData() {
      this.launchesData = this.$store.state.launches
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
