<template>
  <div class="componentContainerCarousel">
    <v-carousel :cycle="false">
      <v-carousel-item v-for="(item,i) in this.rocketsData[0].flickr_images" :key="i" :src="item" reverse-transition="fade"
        transition="fade" dark></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
    name: "rockets_rocketGraphic",
    props: ['rocketsData'],
}
</script>

<style scoped>
.componentContainerCarousel{
  margin: 40px
}
</style>



