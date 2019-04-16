<template>
  <div class="componentContainer">
        <h2>MEDIA</h2>
    <div class="flexBoxWrapper">
    <div class="componentContainerFilter">
    <div class="componentContainerCarousel">
    <v-carousel :cycle="false" dark>
      <v-carousel-item v-for="(item,i) in this.rocketsData[0].flickr_images" :key="i" :src="item"></v-carousel-item>
    </v-carousel>
    </div>
  <div class="componentContainerCarousel">

<iframe width="100%" height="100%" v-bind:src="this.youtubeLinkCompute" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
    name: "rockets_rocketCarousel",
    props: ['rocketsData'],
    data(){
      return{}
    },
    computed: {
      youtubeLinkCompute() {
        if (this.rocketsData[0].rocket_name == "Falcon 1") {
          return "https://www.youtube.com/embed/dLQ2tZEH6G0"
        }
                else if (this.rocketsData[0].rocket_name == "Falcon 9") {
          return "https://www.youtube.com/embed/IBEH4t05AvM"
        }
                else if (this.rocketsData[0].rocket_name == "Falcon Heavy") {
          return "https://www.youtube.com/embed/sB_nEtZxPog"
        }
                else if (this.rocketsData[0].rocket_name == "Big Falcon Rocket") {
          return "https://www.youtube.com/embed/tS_Rb8dMmyA"
        }
        else {return "https://www.youtube.com/embed/0qo78R_yYFA"}
      }
    }
}
</script>

<style scoped>
.componentContainerCarousel{
  width: 100%;
  margin: 15px;
overflow: hidden;
border-radius: 7px;
    border: 1px;
    border-style: solid;


}
</style>



