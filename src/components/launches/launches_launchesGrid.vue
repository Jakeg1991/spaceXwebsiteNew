<template>
<div class="componentContainer">
    <h2>PAST LAUNCHES</h2>
<div class="flexBoxWrapper">
    <div class="componentContainerFilter">
        <div class="filterOptionContainer">
            <input type="radio" value=1 v-model="reverseSort">
            <label for="two"> Sort Descending</label>
            <br>
            <input type="radio" value=0 v-model="reverseSort">
            <label for="one"> Sort Ascending</label>
        </div>

        <div class="filterOptionContainer">
            <input type="radio" value="all" v-model="launchUpcomingFilter">
            <label for="one"> All Launches</label>
            <br>
            <input type="radio" value=0 v-model="launchUpcomingFilter">
            <label for="two"> Past Launches</label>
            <br>
            <input type="radio" value=1 v-model="launchUpcomingFilter">
            <label for="one"> Upcoming Launches</label>
        </div>

        <div class="filterOptionContainer">
            <input type="radio" value=null v-model="launchSuccessFilter">
            <label for="one"> All Launches</label>
            <br>
            <input type="radio" value=1 v-model="launchSuccessFilter">
            <label for="two"> Successful Launches</label>
            <br>
            <input type="radio" value=0 v-model="launchSuccessFilter">
            <label for="one"> Failed Launches</label>
        </div>
    <v-btn v-on:click="test()">TEST</v-btn>
    </div>
</div>
<div v-if="!this.sortLaunches.length > 0">



  <div class="flexBoxWrapper">
    <div class="componentContainerNoResults">
NO RESULTS -- PLEASE UPDATE FILTER
      </div>
    </div>




</div>
<div v-else>
    <div class="launchesPatchGrid">
        <div v-for="(launch, index) in this.sortLaunches" :key="index">
            {{index}}
            <launches_oneLaunch ref="oneLaunch" :launch="launch" :key="launch.flight_number" />
        </div>
    </div>
</div>
</div>
</template>

<script>
import launches_oneLaunch from '@/components/launches/launches_oneLaunch.vue';

export default {
    name: "pastLaunches",
    props: [],
    data() {
        return {
            reverseSort: 1,
            launchSuccessFilter: 1,
            launchUpcomingFilter: 0,
        }
    },
    components: {
        launches_oneLaunch,
    },
    computed: {
        sortLaunches() {
            if (this.reverseSort) 
            {return this.launchesDataFiltered.reverse()} 
            else
            {return this.launchesDataFiltered}
        },
        launchesDataFiltered(){
            return this.$store.state.launches
            .filter(launch => launch.upcoming == this.launchUpcomingFilter )
            .filter(launch => launch.launch_success == this.launchSuccessFilter)
            // .filter(launch => launch.rocket.rocket_name == "Falcon Heavy")
            // .filter(launch => launch.mission_name.toUpperCase().includes("HEAVY"))
            // .filter(launch => launch.launch_site.site_name == "KSC LC 39A")
        }

    },
    methods: {
        test(){
            console.log(this.sortLaunches.length)
        }
    },
    mounted() {
        this.launchesData = this.$store.state.launches
    }
}
</script>

<style>
.componentContainerNoResults {
    min-height: 100px;
    margin: 10px;
    width: 100%;
    background-color: var(--innercolor);
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    border: 1px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.launchesPatchGrid{
  display: flex;
  align-content:flex-start;
  flex-wrap: wrap;
  justify-content:center;
}

.filterOptionContainer{
     border: 1px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    background-color: rgba(240, 248, 255, 0.9);
    color: rgba(9, 83, 134, 1);
    display: inline-block;
}

  .componentContainerFilter {
    margin: 10px;
    width: 100%;
    background-color: var(--highlightcolor2);
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    border: 1px;
    border-style: solid;
    display: flex;
    justify-content: flex-start
  }
</style>


