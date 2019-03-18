<template>
<div v-if="this.chosenRocketMissionData.filter(missions => missions.upcoming == false).length >0" class="componentContainer">
    <h2>MISSIONS FLOWN</h2>
    <div class="flexBoxWrapper">
    <div class="componentContainerInner">
        <div class="missionsFlownGrid">
        <div v-for="(launch, index) in this.chosenRocketMissionData.filter(missions => missions.upcoming == false)" :key="index" class="missionPatchRocket">
            <img v-bind:src="launch.links.mission_patch" class="missionPatchRocketIMG"/>
        </div>
        </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: "rockets_missionsFlown",
    props: ['chosenRocketMissionData'],
}
</script>

<style>
    .missionPatchRocketIMG{
        height: 125px;
        width: 125px;
    }
    .missionsFlownGrid {
        padding: 20px;
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
        justify-content: center;
    }
    .missionPatchRocket {
        height: 125px;
        width: 125px;
        transition: transform .2s;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        justify-content: center;
    }
    .missionPatchRocket:hover {
        transform: scale(2);
    }
</style>



