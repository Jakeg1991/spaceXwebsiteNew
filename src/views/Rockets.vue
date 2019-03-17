<template>
<div>
<div class="componentContainer">
<rockets_rocketSelector ref="rocketSelector" :rocketsData="this.$store.state.rockets"/>
<rockets_generalInfo ref="generalInfo" :rocketsData="this.chosenRocketData"/>
<rockets_rocketCarousel ref="rocketGraphic" :rocketsData="this.chosenRocketData"/>
<rockets_technicalDetails ref="technicalDetails" :rocketsData="this.chosenRocketData"/>
<rockets_missionsFlown ref="missionsFlown" :chosenRocketMissionData="this.chosenRocketMissionData"/>
</div>
<shared_footer/>
</div>
</template>
<script>
import shared_footer from '@/components/shared/shared_footer.vue';
import rockets_technicalDetails from '@/components/rockets/rockets_technicalDetails.vue';
import rockets_rocketSelector from '@/components/rockets/rockets_rocketSelector.vue';
import rockets_rocketCarousel from '@/components/rockets/rockets_rocketCarousel.vue';
import rockets_generalInfo from '@/components/rockets/rockets_generalInfo.vue';
import rockets_missionsFlown from '@/components/rockets/rockets_missionsFlown.vue';

export default {
  name: 'rockets',
  data() {
    return {
      chosenRocketData: undefined,
      chosenRocketMissionData: undefined
    }
  },
  components: {
    rockets_technicalDetails,
    rockets_missionsFlown,
    rockets_rocketSelector,
    rockets_rocketCarousel,
    rockets_generalInfo,
    shared_footer
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

    retrieveStoreData() {
      this.rocketsData = this.$store.state.rockets
    },
    filterRockets(rocket) {
      this.chosenRocketData = this.$store.state.rockets
      .filter(oneRocket => oneRocket.rocket_name == rocket)
      
      this.chosenRocketMissionData = this.$store.state.launches
      .filter(oneLaunch => oneLaunch.rocket.rocket_name == rocket)
    },
//     filterMissions(rocket) {
// console.log( this.chosenRocketMissionData = this.$store.state.launches.rocket.rocket_name.filter((oneMission) => {
//       oneRocket.rocket_name == launch.upcoming
//       }))
//     }
    
  },
  created() {
    this.retrieveStoreData()
  },
  mounted() {
    this.redirectPage()
  }
}
</script>

<style scoped>
.rocketHeaderContainer{
  margin: 50px
}
</style>


