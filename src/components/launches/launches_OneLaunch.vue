<template>
<div class="launchPatchClickable" @click="dialog = true">


  <!-- <img v-if="this.launch.upcoming === false" v-bind:src="this.launch.links.mission_patch" class="missionPatch" @click="dialog = true"/> -->

  <v-lazy-image v-if="this.launch.upcoming === false"
  v-bind:src="this.launch.links.mission_patch" class="missionPatch"/>

  <v-lazy-image v-else
  src="./../../assets/patch_placeholder.png" class="missionPatch"/>
  
<!-- 
  text(t).html().replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g -->

  <!-- <img v-else src="@/assets/patch_placeholder.png" class="missionPatch"/> -->
  
  <div class="missionInfo">
    <div class="missionHeaderContainer" style="flex-basis:30%">
      <h2 class='altHeader'><strong>{{this.launch.mission_name}}</strong></h2>
    </div>
      <h2 v-if="this.launch.launch_success === true" style="color:#00d300">SUCCESS</h2>
      <h2 v-else-if="this.launch.launch_success === false" style="color:#d30000">FAILURE</h2>
      <h2 v-else style="color:#00d3d3">UPCOMING</h2>
    <div class="infoDivider">
    <div style="padding-right:2px text-align:start">
    <p>Flight Nº:</p>
    <p>Rocket:</p>
    <p>Date:</p>
    </div>
    <div>
    <p><strong>{{this.launch.flight_number}}</strong></p>
    <p><strong>{{this.launch.rocket.rocket_name}}</strong></p>
    <p><strong>{{this.convertUnix(this.launch.launch_date_unix)}}</strong></p>
    </div>
    </div>
  </div>


<!-- MODAL -->


<v-dialog v-model="dialog" width="1000">
  <div class="modal">
    <div class="modalColumn" style="flex-basis:5%">
      <v-btn color="error" flat icon @click="dialog = false">
        <v-icon dark>close</v-icon>
      </v-btn>
    </div>


    <div class="modalColumn" style="flex-basis:95%">

<iframe v-if="this.dialog == true" width="100%" height="100%" v-bind:src="this.youtubeLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>


  </div>
</v-dialog>


</div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "oneLaunch",
  props: ['launch'],
  data(){
    return {
      dialog: false,
      youtubeLink: "https://www.youtube.com/watch?v=0a_00nJ_Y88"

    }
  },
  components: {
    VLazyImage,
  },
  methods:{
            convertUnix(unix) {
  var a = new Date(unix * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ';
  return time;
        }
  },
  created(){
      this.youtubeLink = "https://www.youtube.com/embed/0a_00nJ_Y88"
  },
}
</script>

<style>
.modalColumn{
  margin: 5px;
  padding: 5px;
display: flex;
flex-direction: column;
border: 1px;
border-style: solid;
border-radius: 7px;
}

.modalRow{
margin: 2px;
padding: 5px
}

.modalRowInner{
border: 1px;
border-style: solid;
border-radius: 7px;
margin: 2px;
padding: 5px;

}

.modal{
  color: black;
  height: 60vh;
  background-color: var(--utlitybarcolor);
  border-radius: 7px;
  padding: 10px;
  border: 1px;
  border-style: solid;
  display: flex;
  justify-content: flex-start;
  display: flex;

}

.infoDivider{
  display: flex;
}

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

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

</style>