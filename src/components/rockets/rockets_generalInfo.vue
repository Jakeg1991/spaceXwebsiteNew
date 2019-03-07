<template>
<div class="componentContainer">
    <h3>GENERAL INFO</h3>
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


