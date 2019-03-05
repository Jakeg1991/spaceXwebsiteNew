<template>
<div class="componentContainer">
    <h1>{{this.rocketsData[0].rocket_name}}</h1>
  <div class="componentContainerInner">
    <p>{{rocketsData[0].description}}</p>
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
</style>


