<template>
    <div class="componentContainer">
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
export default {
    name: "rockets_rocketGraphic",
    props: ['rocketsData'],
    data(){
        return{
            items: [
          {
            src: "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1"
          },
          {
            src: "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_02_default_liftoff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"
          },
        ]
        }
    },
created(){
    console.log(this.rocketsData)
}
}
</script>

<style scoped>

</style>



