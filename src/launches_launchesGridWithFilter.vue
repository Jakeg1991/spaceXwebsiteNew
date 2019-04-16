<template>
<div>
    <div class="componentContainer">
        <h2>LAUNCH BROWSER</h2>
        <div class="flexBoxWrapper">
            <div class="componentContainerFilter">
                <div class="filterOptionContainer">
                    <input type="radio" value=0 v-model="reverseSort">
                    <label for="two"> Soonest/Recent First</label>
                    <br>
                    <input type="radio" value=1 v-model="reverseSort">
                    <label for="one"> Oldest First</label>
                </div>
                <div class="filterOptionContainer">
                    <input type="radio" value=2 v-model="launchUpcomingFilter">
                    <label> All Launches</label>
                    <br>
                    <input type="radio" value=0 v-model="launchUpcomingFilter">
                    <label> Past Launches</label>
                    <br>
                    <input type="radio" value=1 v-model="launchUpcomingFilter">
                    <label> Upcoming Launches</label>
                </div>
                <div class="filterOptionContainer">
                    <input type="radio" value=2 v-model="launchSuccessFilter">
                    <label> All Launches</label>
                    <br>
                    <input type="radio" value=1 v-model="launchSuccessFilter">
                    <label> Successful Launches</label>
                    <br>
                    <input type="radio" value=0 v-model="launchSuccessFilter">
                    <label> Failed Launches</label>
                </div>
                <div class="filterOptionContainer">
                    <v-text-field solo flat color="rgba(9, 83, 134, 1)" v-model="launchSearchFilter"
                        label="Search By Keyword"></v-text-field>
                </div>
                <div class="filterOptionContainer">
                    <v-select :items="rockets" solo flat v-model="currentSelectedRocket"
                        v-on:input="changeSelectedRocket()">
                    </v-select>
                </div>
                <div class="clearFilterButton">
                    <v-btn v-on:click="clear()" color="info">Clear Filter</v-btn>
                </div>
            </div>
        </div>
    </div>
    <div class="launchesPatchGrid">
        <div class=gridFlex v-if="this.$store.state.launchesDataFetched == true">
            <div v-for="(launch) in this.launchesDataCompute" v-bind:key="launch.flight_number">
                <launches_oneLaunch ref="oneLaunch" :launch="launch" v-bind:key="launch.flight_number" />
            </div>
        </div>
        <div v-if="!this.launchesDataCompute.length > 0" class="noResultWarn">
            <p strong> NO RESULTS -- PLEASE UPDATE FILTER... </p>
        </div>
    </div>
</div>
</template>

<script>
import launches_oneLaunch from '@/launches_oneLaunch.vue';

export default {
    name: "launches_launchesGridWithFilter",
    props: ["launchesData"],
    data() {
        return {
            reverseSort: 1,
            launchSuccessFilter: 2,
            launchUpcomingFilter: 2,
            launchSearchFilter: "",
            rockets: ["All Rocket Types", "Falcon 1", "Falcon 9", "Falcon Heavy", "Big Falcon Rocket"],
            currentSelectedRocket: "All Rocket Types"
        }
    },
    components: {
        launches_oneLaunch,
    },
    computed: {
        launchesDataCompute() {
            return this.rocketsFilter(
                this.sortReverse(
                this.searchFilter(
                    this.upcomingFilter(
                        this.successFilter(
                            this.$store.state.launchesData)))))
        }
    },
    methods: {
        clear() {
            this.reverseSort = 1
            this.launchSuccessFilter = 2
            this.launchUpcomingFilter = 2
            this.launchSearchFilter = ""
            this.currentSelectedRocket = "All Rocket Types"

        },
        sortReverse(data){
            if(this.reverseSort == 1){
                return data
            } else {
                return data.reverse()
            }
        },
        successFilter(data) {
            if (this.launchSuccessFilter == 2) {
                return data
            } else {
                return data.filter(launches => launches.launch_success == this.launchSuccessFilter)
            }
        },
        upcomingFilter(data) {
            if (this.launchUpcomingFilter == 2) {
                return data
            } else {
                return data.filter(launches => launches.upcoming == this.launchUpcomingFilter)
            }
        },
        searchFilter(data) {
            if (this.launchSearchFilter === "") {
                return data
            } else {
                return data.filter(launches => launches.mission_name.toUpperCase().includes(this.launchSearchFilter.toUpperCase()))
            }
        },
        rocketsFilter(data) {
            if (this.currentSelectedRocket === "All Rocket Types") {
                return data
            } else {
                return data.filter(launches => launches.rocket.rocket_name == this.currentSelectedRocket)
            }
        },
    }
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

.clearFilterButton{
    margin:10px;
    display: inline-block;
}

.componentContainerFilter {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
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
</style>


