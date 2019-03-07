<template>
<div>
  <div class="launchPatchClickable">
    <img v-bind:src="this.launch.links.mission_patch_small" class="missionPatch" />
    <div class="missionInfo">
      <h2><strong>{{this.launch.mission_name}}</strong></h2>
      <h2 v-if="this.launch.launch_success" style="color:#00d300">SUCCESS</h2>
      <h2 v-else style="color:#d30000">FAILURE</h2>
      <p>Flight Number: <strong>{{this.launch.flight_number}}</strong></p>
      <br>
      <p>Rocket: <strong>{{this.launch.rocket.rocket_name}}</strong></p>
      <br>
      <br>
      <p>Launch Date: <strong>{{this.launch.launch_date_utc}}</strong></p>
      <br>
      <p>Launch Site: <strong>{{this.launch.launch_site.site_name}}</strong></p>
    </div>
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
.missionInfo{
  height: 100%;
  width: 50%;
  font-size: 50%;
  padding: 10px;
  background-color: var(--highlightcolor);
  display: flex;
  flex-direction: column;
  justify-content:center;
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