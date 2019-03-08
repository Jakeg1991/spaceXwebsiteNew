<template>
  <div class="componentContainer">
        <h3>MEDIA</h3>
    <div class="flexBoxWrapper">
    <div class="componentContainerCarousel">
    <v-carousel :cycle="false">
      <v-carousel-item v-for="(item,i) in this.rocketsData[0].flickr_images" :key="i" :src="item" reverse-transition="fade"
        transition="fade" dark></v-carousel-item>
    </v-carousel>
    </div>
  <div class="componentContainerCarousel">

<iframe width="100%" height="100%" v-bind:src="this.youtubeLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
</div>
  </div>
</template>

<script>
export default {
    name: "rockets_rocketCarousel",
    props: ['rocketsData'],
    data(){
      return{
        youtubeLink:"https://www.youtube.com/embed/dLQ2tZEH6G0"
      }
    },
    computed(){
      (console.log(this))
}}
</script>

<style scoped>
.componentContainerCarousel{
  width: 100%;

  margin: 5px;
border-radius: 5px;
padding: 10px;


}
</style>



