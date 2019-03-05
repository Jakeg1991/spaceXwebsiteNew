<template>
  <div class="componentContainer">
    <H2> TECHNICAL DETAILS</H2>
    <p>Boosters: {{rocketsData[0].boosters}}</p>
    <p>Stages: {{rocketsData[0].stages}}</p>
    <p>Mass(Kg): {{rocketsData[0].mass.kg}}</p>
    <p>Mass(Lb): {{rocketsData[0].mass.lb}}</p>
    <p>Payload Orbit: {{rocketsData[0].payload_weights[0].name}}</p>
    <p>Payload Weight(Kg): {{rocketsData[0].payload_weights[0].kg}}</p>
    <p>Payload Weight(Lb): {{rocketsData[0].payload_weights[0].lb}}</p>
    <p>Landing Legs: {{rocketsData[0].landing_legs.number}}</p>
    <p>Cost per Launch: ${{rocketsData[0].cost_per_launch}}</p>
    <p>Country of Origin: {{rocketsData[0].country}}</p>
  </div>
</template>

<script>
export default {
  name: "rockets_technicalDetails",
  props: ['rocketsData'],}
</script>

<style>

</style>


