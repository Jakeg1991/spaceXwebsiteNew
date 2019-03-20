<template>

  <div class="launchPatchClickable">
    <img v-if="this.launch.launch_success === true" v-bind:src="this.launch.links.mission_patch" class="missionPatch" />
    <img v-else v-bind:src="this.launch.links.mission_patch_small" class="missionPatch" />
    <div class="missionInfo">
      <h2 class='altHeader'><strong>{{this.launch.mission_name}}</strong></h2>
      <h2 v-if="this.launch.launch_success === true" style="color:#00d300">SUCCESS</h2>
      <h2 v-else-if="this.launch.launch_success === false" style="color:#d30000">FAILURE</h2>
      <h2 v-else style="color:#00d3d3">UPCOMING</h2>
      <p>Flight Nº: <strong>{{this.launch.flight_number}}</strong></p>
      <p>Rocket: <strong>{{this.launch.rocket.rocket_name}}</strong></p>
      <p>Date: <strong>{{this.launch.launch_date_utc}}</strong></p>
      <p>Site: <strong>{{this.launch.launch_site.site_name}}</strong></p>
    </div>
  </div>

</template>

<script>
export default {
  name: "oneLaunch",
  props: ['launch'],
  components: {}
}
</script>

<style>
.altHeader{
  color: var(--fontcolor)
}

.missionInfo{
  border-radius: 10px;
  height: 100%;
  width: 50%;
  font-size: 50%;
  padding: 10px;
  background-color: var(--innercolor);
  color: var(--fontcolor);
  display: flex;
  flex-direction: column;
  justify-content:center;
}

.launchPatchClickable{
  margin: 5px 15px 5px 15px;
  border-radius: 10px;
  height: 150px;
  width: 250px;
  background-color: var(--highlightcolor);
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