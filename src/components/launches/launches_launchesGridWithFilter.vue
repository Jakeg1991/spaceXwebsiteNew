<template>
<div>
<div  v-if="this.$store.state.launchesDataFetched == true" class="componentContainer">
    <h2>LAUNCH BROWSER</h2>
<div class="flexBoxWrapper">
    <div class="componentContainerFilter">
        <div class="filterOptionContainer">
            <input type="radio" value=1 v-model="reverseSort">
            <label for="two"> Soonest/Recent First</label>
            <br>
            <input type="radio" value=0 v-model="reverseSort">
            <label for="one"> Oldest First</label>
        </div>

        <div class="filterOptionContainer">
            <input type="radio" value="all"  v-model="launchUpcomingFilter">
            <label for="all"> All Launches</label>
            <br>
            <input type="radio" value=0 v-model="launchUpcomingFilter">
            <label for="past"> Past Launches</label>
            <br>
            <input type="radio" value=1 v-model="launchUpcomingFilter">
            <label for="upcoming"> Upcoming Launches</label>
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
    </div>
    </div>
</div>

<div class="launchesPatchGrid">

<transition name="fade" mode="out-in">

<div v-if="!this.sortLaunches.length > 0" class="noResultWarn">
<p strong> NO RESULTS -- PLEASE UPDATE FILTER... </p>
</div>
</transition>
        <transition-group name="fade" class="gridFlex">



        <div v-for="(launch) in this.sortLaunches" :key="launch.flight_number">
            <launches_oneLaunch ref="oneLaunch" :launch="launch" :key="launch.flight_number" />
        </div>


        </transition-group>
</div>
</div>
</template>

<script>
import launches_oneLaunch from '@/components/launches/launches_oneLaunch.vue';

export default {
    name: "launches_launchesGridWithFilter",
    props: ["launchesData"],
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
            // if (this.reverseSort) 
            // {return this.launchesDataFiltered.reverse()} 
            // else
            
                return this.launchesData
                
        },

        // launchesDataFiltered(){
        //     return this.launchesData
        //     .filter(launches => launches.upcoming == this.filterUpcoming())
        //     // .filter(launch => launch.launch_success == this.launchSuccessFilter)
        //     // .filter(launch => launch.rocket.rocket_name == "Falcon Heavy")
        //     // .filter(launch => launch.mission_name.toUpperCase().includes("HEAVY"))
        //     // .filter(launch => launch.launch_site.site_name == "KSC LC 39A")
        launchesDataFiltered(){
            let data = this.launchesData
            return data
        }
    },
    methods: {
        filterUpcoming(){
            return 1
        }
    },
}
</script>

<style>
.noResultWarn{
margin: 10px;
position: absolute;
color: white
}

.gridFlex {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
}

.launchesPatchGrid {
    margin: 0px 10px 0px 10px;
    padding: 0px 15px 15px 15px;
    transform-origin:top;
    min-height: 45px;
    height: auto;
}

.filterOptionContainer {
    border: 1px;
    border-style: solid;
    border-radius: 7px;
    padding: 5px;
    margin: 10px;
    background-color: rgba(240, 248, 255, 0.9);
    color: rgba(9, 83, 134, 1);
    display: inline-block;
}

.componentContainerFilter {
    margin: 10px;
    width: 100%;
    background-color: var(--utlitybarcolor);
    border-radius: 7px;
    padding: 0px 10px 0px 10px;
    border: 1px;
    border-style: solid;
    display: flex;
    justify-content: flex-start;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
</style>


