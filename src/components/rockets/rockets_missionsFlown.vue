<template>
<div class="componentContainer">
    <h3>MISSIONS FLOWN</h3>
    <div class="componentContainerInner">
        <div class="missionsFlownGrid">
        <div v-for="(launch, index) in this.chosenRocketMissionData" :key="index" class="missionPatchRocket">
            <img v-bind:src="launch.links.mission_patch" class="missionPatchRocketIMG"/>
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
        height: 75px;
        width: 75px;
    }
    .missionsFlownGrid {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        justify-content: center;
    }
    .missionPatchRocket {
        height: 80px;
        width: 80px;
        transition: transform .2s;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        justify-content: center;
    }
    .missionPatchRocket:hover {
        transform: scale(3.5);
    }
</style>



