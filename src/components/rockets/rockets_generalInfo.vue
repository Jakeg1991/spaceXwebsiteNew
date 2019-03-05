<template>
  <div class="componentContainer">
    <h1>{{this.rocketsData[0].rocket_name}}</h1>
    <h2>GENERAL INFO</h2>
    <p>{{rocketsData[0].description}}</p>
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


