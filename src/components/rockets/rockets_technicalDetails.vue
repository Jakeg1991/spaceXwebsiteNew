<template>
<div class="componentContainer">
  <H2> TECHNICAL DETAILS</H2>
  <div class="flexBoxWrapper">
  <div class="componentContainerInner">
    <h3>GENERAL</h3>
    <HR/>
    <div class="techInfo">
    <p>Stages: {{rocketsData[0].stages}}</p>
    <p>Landing Legs: {{rocketsData[0].landing_legs.number}}</p>
    <p>Boosters: {{rocketsData[0].boosters}}</p>
    <br>
    <p>Mass(Kilograms): {{rocketsData[0].mass.kg}}</p>
    <p>Mass(Pounds): {{rocketsData[0].mass.lb}}</p>
    <br>
    <p>Payload Orbit: {{rocketsData[0].payload_weights[0].name}}</p>
    <p>Payload Weight(Kilograms)): {{rocketsData[0].payload_weights[0].kg}}</p>
    <p>Payload Weight(Pounds): {{rocketsData[0].payload_weights[0].lb}}</p>
    <br>
    <p>Diameter(Ft): {{rocketsData[0].diameter.feet}}</p>
    <p>Diameter(Mtrs): {{rocketsData[0].diameter.meters}}</p>
    <p>Height(Meters): {{rocketsData[0].height.meters}}</p>
    <p>Height(Feet): {{rocketsData[0].height.feet}}</p>
    </div>
  </div>
    <div class="componentContainerInner">
    <H3>ENGINES</H3>
    <HR/>
    <div class="techInfo">
    <p>Engine Layout: {{rocketsData[0].engines.layout}}</p>
    <br>
    <p>Propellant 1: {{rocketsData[0].engines.propellant_1}}</p>
    <p>Propellant 2: {{rocketsData[0].engines.propellant_2}}</p>
    <br>
    <p>Thrust at Sea Level(kiloNewtons): {{rocketsData[0].engines.thrust_sea_level.kN}}</p>
    <p>Thrust at Sea Level(Pound-force): {{rocketsData[0].engines.thrust_sea_level.lbf}}</p>
</div>
  </div>
    <div class="componentContainerInner">
    <H3>OTHER</H3>
    <HR/>
    <div class="techInfo">
    <p>Currently Active: {{rocketsData[0].active}}</p>
    <p>Cost per Launch: ${{rocketsData[0].cost_per_launch}}</p>
    <p>Country of Origin: {{rocketsData[0].country}}</p>
    <p>Success Rate: {{rocketsData[0].success_rate_pct}}%</p>
  </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "rockets_technicalDetails",
  props: ['rocketsData'],}
</script>

<style>
.flexBoxWrapper{
  display: flex;
  width: 100%;
  justify-content:space-around
}
.techInfo{
  margin: 15px
}
</style>


