<template>
<div class="launchPatchClickable" @click="dialog = true">


  <!-- <img v-if="this.launch.upcoming === false" v-bind:src="this.launch.links.mission_patch" class="missionPatch" @click="dialog = true"/> -->

  <v-lazy-image v-if="this.launch.upcoming === false"
  v-bind:src="this.launch.links.mission_patch" class="missionPatch"/>

  <v-lazy-image v-else
  src="http://fab.academany.org/2018/labs/fablabechofab/students/marc-lemaire/downloads/Week03/spacex-logo.svg" class="missionPatch"/>
  
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


<v-dialog v-model="dialog" width="750">
  <div class="modal">
    <div class="modalColumn" style="flex-basis:5%">
      <v-btn color="error" flat icon @click="dialog = false">
        <v-icon dark>close</v-icon>
      </v-btn>
    </div>


    <div class="modalColumn" style="flex-basis:95%">

<!-- <iframe v-if="this.dialog == true" width="100%" height="100%" v-bind:src="this.youtubeLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
<div v-if="this.dialog == true && this.launch.links.flickr_images.length > 0" class="carouselContainer">
  <!-- <div class="carouselSpinnerContainer">
  <img src="./../../assets/spinner.svg" alt="spinner" class="carouselSpinner">
  </div> -->
   <v-carousel :cycle="false" dark class="carousel">
      <v-carousel-item v-for="(item,i) in this.launch.links.flickr_images" :key="i" :src="item"></v-carousel-item>
    </v-carousel>
    </div>
    <div v-else class="noFlickrPlaceholder">
<h3>NO IMAGES OF LAUNCH AVAILABLE</h3>
    </div>
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
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    VLazyImage,
  },
  methods: {
    convertUnix(unix) {
      var a = new Date(unix * 1000);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
}
</script>

<style>
.carouselSpinner {
    height: 50px;
    margin: 10px;
}
.carouselSpinnerContainer {
  position: absolute;
      left: 42.6%;
    top: 50.25%;
    transform: translate(-50%, -50%);
}

.noFlickrPlaceholder{
  width: 600px;
  height: 100%;
  border-radius: 7px;
border: 1px;
border-style: solid;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: repeating-linear-gradient(
  45deg,
  rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.2) 10px,
  rgba(0, 0, 0, 0.3) 10px,
  rgba(0, 0, 0, 0.3) 20px
)
}

.carouselContainer{
  overflow: hidden;
  width: 600px;
  height: 100%;
  border-radius: 7px;
border: 1px;
border-style: solid;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: repeating-linear-gradient(
  45deg,
  rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.2) 10px,
  rgba(0, 0, 0, 0.3) 10px,
  rgba(0, 0, 0, 0.3) 20px
)
}

.carousel{
  /* height: 300px; */
  width: 600px;
}

.modalColumn{
  margin: 5px;
  padding: 5px;
display: flex;
flex-direction: column;
/* border: 1px;
border-style: solid;
border-radius: 7px; */
}

.modalRow{
margin: 2px;
padding: 5px
}

.modalRowInner{
/* border: 1px;
border-style: solid;
border-radius: 7px; */
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