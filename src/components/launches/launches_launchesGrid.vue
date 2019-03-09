<template>
<div class="componentContainer">
    <h3>PAST LAUNCHES</h3>
    <h5>CLICK FOR MORE INFO</h5>
    <div class="componentContainerInner">
        <select v-model="reverseSort">
            <option disabled value="">Please select one</option>
            <option>false</option>
            <option>true</option>
        </select>
        <span>Selected: {{ reverseSort }}</span>
    </div>
    <br>
    <div class="launchesPatchGrid">
        <div v-for="(launch, index) in this.sortedLaunches" :key="index">
            {{index}}
            <launches_oneLaunch ref="oneLaunch" :launch="launch" />
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
            sortedLaunches: [],
            reverseSort: true,
        }
    },
    components: {
        launches_oneLaunch,
    },
    computed: {

        sortLaunches() {
            if (this.reverseSort == true) {
                this.sortedLaunches = this.$store.state.launches.slice().reverse()
            } else {
                this.sortedLaunches = this.$store.state.launches
            }
        }

    },
    methods: {
    },
    mounted() {
        this.sortLaunches
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


