<template>
  <div class="pageSpacer" v-show="this.$store.state.loggedIn == true">
    <div v-if="this.dataFetched == true">
      <div class="componentContainer">
        <rockets_rocketSelector ref="rocketSelector" :rocketsData="this.$store.state.rocketsData" />
        <rockets_generalInfo ref="generalInfo" :rocketsData="this.chosenRocketData" />
        <rockets_rocketCarousel ref="rocketGraphic" :rocketsData="this.chosenRocketData" />
        <rockets_technicalDetails ref="technicalDetails" :rocketsData="this.chosenRocketData" />
        <rockets_missionsFlown ref="missionsFlown" :chosenRocketMissionData="this.chosenRocketMissionData" />
      </div>
    </div>
    <div v-else> DATA NOT FETCHED</div>
  </div>
</template>

<script>
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
      chosenRocketMissionData: undefined,
      dataFetched: false,
    }
  },
  components: {
    rockets_technicalDetails,
    rockets_missionsFlown,
    rockets_rocketSelector,
    rockets_rocketCarousel,
    rockets_generalInfo,
  },
  methods: {
    showData() {
      if (this.$store.state.rocketsDataFetched = true) {
        this.dataFetched = true
        this.filterRockets("Falcon 1")
      }
    },
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    filterRockets(rocket) {
      this.chosenRocketData = this.$store.state.rocketsData
        .filter(oneRocket => oneRocket.rocket_name == rocket)
      this.chosenRocketMissionData = this.$store.state.launchesData
        .filter(oneLaunch => oneLaunch.rocket.rocket_name == rocket)
    },
  },
  mounted() {
    this.showData()
    this.redirectPage()
  }
}
</script>


