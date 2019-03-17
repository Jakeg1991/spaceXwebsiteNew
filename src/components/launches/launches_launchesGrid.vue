<template>
<div class="componentContainer">
    <h3>PAST LAUNCHES</h3>
    <h5>CLICK FOR MORE INFO</h5>
    <div class="componentContainerInner">
        <select v-model="reverseSort">
            <option disabled value=1>Please select one</option>
            <option value=1>false</option>
            <option value=2>true</option>
        </select>
        <span>sort reverse: {{ reverseSort }}</span>
        <br>
        <!-- <select v-model="launchUpcomingFilter">
            <option disabled value="">Please select one</option>
            <option></option>
            <option>true</option>
        </select>
        <span>launchUpcoming: {{ launchUpcomingFilter }}</span> -->

<input type="radio" id="one" value="Upc" v-model="launchUpcomingFilter">
<label for="one">Upcoming Launches</label>
<br>
<input type="radio" id="two" value="Pas" v-model="launchUpcomingFilter">
<label for="two">Past Launches</label>
<br>
<input type="radio" id="two" value="All" v-model="launchUpcomingFilter">
<label for="two">All Launches</label>
<br>
<span>Picked: {{ launchUpcomingFilter }}</span>

        <br>
        <select v-model="launchSuccessFilter">
            <option value=false>false</option>
            <option value=true>true</option>
        </select>
        <span>launchSuccess: {{ launchSuccessFilter }}</span>
    </div>
    <br>
    <button v-on:click="test()">TEST</button>
    <div class="launchesPatchGrid">
        <div v-for="(launch, index) in this.sortLaunches" :key="index">
            {{index}}
            <launches_oneLaunch ref="oneLaunch" :launch="launch" :key="launch.flight_number"/>
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
            reverseSort: false,
            launchSuccessFilter: false,
            launchUpcomingFilter: "All",
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
            .filter(launch => launch.upcoming == true || launch.upcoming == false )
            // .filter(launch => launch.launch_success == this.launchSuccessFilter)
            // .filter(launch => launch.rocket.rocket_name == "Falcon Heavy")
            // .filter(launch => launch.mission_name.toUpperCase().includes("HEAVY"))
            // .filter(launch => launch.launch_site.site_name == "KSC LC 39A")
        }

    },
    methods: {
        test(){
            console.log(this.launchUpcomingFilter)
        }
    },
    mounted() {
        this.launchesData = this.$store.state.launches
    }
}
</script>

<style>
.launchesPatchGrid{
  display: flex;
  align-content:flex-start;
  flex-wrap: wrap;
  justify-content:center;
}
</style>


