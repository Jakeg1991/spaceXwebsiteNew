<template>
<div class="componentContainer">
    <h3>GENERAL INFO</h3>
    <div class="flexBoxWrapper">
  <div class="componentContainerInner">
        <h3>Description</h3>
        <hr>
        <div class="techInfo">
    <p>{{rocketsData[0].description}}</p>
    </div>
  </div>
  <div class="rocketGraphicContainer">
  </div>
  <div class="componentContainerInner">
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
.rocketGraphicContainer{
  height: 500px;
  width: 100%;
  background-color: black;
  margin: 5px;
border-radius: 5px;
padding: 10px;
    border: 1px;
    border-style: solid
}
</style>


