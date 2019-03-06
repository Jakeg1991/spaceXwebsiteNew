<template>
    <div>
        <!-- <p>{{this.launch.flight_number}}</p>
        <p>{{this.launch.mission_name}}</p>
        <p>{{this.launch.launch_date_utc}}</p>
        <p>{{this.launch.upcoming}}</p> -->
        <div class="launchPatchClickable">
          <img v-bind:src="this.launch.links.mission_patch_small" class="missionPatch"/>
          <div class="missionInfo">
        <p>Flight Number: {{this.launch.flight_number}}</p>
        <br>
        <p>Mission Name: {{this.launch.mission_name}}</p>
        <br>
        <p>Launch Date: {{this.launch.launch_date_utc}}</p>
          </div>
          
        </div>
    </div>
</template>

<script>
export default {
  name: "oneLaunch",
  props: ['launch'],
  components: {
  },}
</script>

<style>
.missionInfo{
  height: 100%;
  width: 50%;
  font-size: 50%;
  padding: 10px;
  background-color: aliceblue
}

.launchPatchClickable{
  height: 150px;
  width: 250px;
  background-color: var(--innercolor);
  border: 1px;
  border-style: solid;
  transition: transform .2s;
  display: flex;
  justify-content: center
}

.launchPatchClickable:hover {
  transform: scale(1.5);
}

.missionPatch{
  width: 50%;
  margin: 10px
}

</style>