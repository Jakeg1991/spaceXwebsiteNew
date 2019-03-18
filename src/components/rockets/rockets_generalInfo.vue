<template>
<div class="componentContainer">
  <h2>GENERAL INFO</h2>
  <div class="flexBoxWrapper">
    <div class="componentContainerInner" style="flex-basis:60%">
      <div class="infoHeaderContainer">
      <h3>Falcon Rocket Family</h3>
      </div>
      <div>
        <div class="infoBox">
          <p>The Falcon rocket family is an American family of multi-use rocket launch vehicles developed and operated
            by Space Exploration Technologies </p>
        </div>
        <div class="infoBox">
          <p>The vehicles in this family include the flight-tested Falcon 1,
            Falcon 9 and Falcon Heavy. The Falcon 1 made its first successful flight on 28 September 2008,
            after several failures on the initial attempts. The larger Evolved Expendable Launch Vehicle (EELV)-class
            Falcon 9 flew successfully into orbit on its maiden launch on 4 June 2010. The Falcon 9 was designed for
            reuse; over a dozen first stages have landed vertically, and several have been launched again. SpaceX's
            three-core variant, Falcon Heavy, was successfully launched on February 6, 2018.
          </p>
        </div>
      </div>
    </div>
    <div class="componentContainerInner">
      <div class="infoHeaderContainer">
      <h3>{{rocketsData[0].rocket_name}}</h3>
      </div>
      <div class="infoBox">
        <p> 
          {{rocketsData[0].description}}
        </p>
      </div>
      <div class="rocketGraphicContainer">
        <transition name="fade" mode="out-in">
        <img key=1 v-if="rocketsData[0].rocket_name == 'Falcon 1'" src="@/assets/falcon1Graphic.jpg" alt="" class="rocketImage">
        <img key=2 v-else-if="rocketsData[0].rocket_name == 'Falcon 9'" src="@/assets/falcon9Graphic.jpg" alt="" class="rocketImage">
        <img key=3 v-else-if="rocketsData[0].rocket_name == 'Falcon Heavy'" src="@/assets/falconHGraphic.jpg" alt="" class="rocketImage">
        <img key=4 v-else-if="rocketsData[0].rocket_name == 'Big Falcon Rocket'" src="@/assets/BFRGraphic.jpg" alt="" class="rocketImage">
        <img key=5 v-else src="@/assets/RocketPlaceHolder.jpg" alt="" class="rocketImage">
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rockets_generalInfo",
  props: ['rocketsData'],
  components: {
  },}
</script>

<style>
.rocketImage {
max-height:100%;
position:initial
}

.rocketGraphicContainer {
  height: 500px;
  min-width: 300px;
  width: 100%;
  background-color: black;
  margin: 20px 15px 20px 5px;
  border-radius: 5px;
  padding: 10px;
  border: 1px;
  border-style: solid
}
</style>


