<template>
<div class="componentContainer">
  <H2> TECHNICAL DETAILS</H2>
  <div class="flexBoxWrapper">
    <div class="componentContainerInner">
      <div class="infoHeaderContainer">
        <h3>General</h3>
      </div>
      <div class="infoBox">
        <div class="infoDivider">
          <div style="padding-right:10px">
            <p>Stages:</p>
            <p>Landing Legs:</p>
            <p>Boosters:</p>

            <p>Mass:</p>
            <br>

            <p>Payload Orbit:</p>
            <p>Payload Weight:</p>
            <br>

            <p>Diameter:</p>
            <br>
            <p>Height:</p>
            <br>
          </div>
          <div>
            <p>{{rocketsData[0].stages}}</p>
            <p>{{rocketsData[0].landing_legs.number}}</p>
            <p>{{rocketsData[0].boosters}}</p>
            <p>{{rocketsData[0].mass.kg}} kG</p>
            <p>{{rocketsData[0].mass.lb}} Lb</p>
            <p>{{rocketsData[0].payload_weights[0].name}}</p>
            <p>{{rocketsData[0].payload_weights[0].kg}} kG</p>
            <p>{{rocketsData[0].payload_weights[0].lb}} Lb</p>
            <p>{{rocketsData[0].diameter.meters}} M</p>
            <p>{{rocketsData[0].diameter.feet}} Ft</p>
            <p>{{rocketsData[0].height.meters}} M</p>
            <p>{{rocketsData[0].height.feet}} Ft</p>
          </div>
        </div>
      </div>
  </div>

    <div class="componentContainerInner">
      <div class="infoHeaderContainer">
    <h3>Engines</h3>
    </div>
    <div class="infoBox">
      <div class="infoDivider">
        <div style="padding-right:10px">
    <p>Engine Type:</p>
    <p>Engine Layout:</p>
    <p>Nº of Engine(s):</p>

    <p>Propellant 1:</p>
    <p>Propellant 2:</p>

    <p>Thrust/Sea Level:</p>
    <br>

    <p>Thrust/Vacuum:</p>
    <br>
    </div>

    <div>
    <p>{{rocketsData[0].engines.type}}</p>
    <p>{{rocketsData[0].engines.layout}}</p>
    <p>{{rocketsData[0].engines.number}}</p>

    <p>{{rocketsData[0].engines.propellant_1}}</p>
    <p>{{rocketsData[0].engines.propellant_2}}</p>

    <p>{{rocketsData[0].engines.thrust_sea_level.kN}} kN x {{rocketsData[0].engines.number}}</p>
    <p>{{rocketsData[0].engines.thrust_sea_level.lbf}} lbf x {{rocketsData[0].engines.number}}</p>

    <p>{{rocketsData[0].engines.thrust_vacuum.kN}} kN x {{rocketsData[0].engines.number}}</p>
    <p>{{rocketsData[0].engines.thrust_vacuum.lbf}} lbf x {{rocketsData[0].engines.number}}</p>
    </div>
</div>
</div>
  </div>

    <div class="componentContainerInner">
            <div class="infoHeaderContainer">
    <H3>Other</H3>
            </div>

    <div class="infoBox">
    <div class="infoDivider">
      <div style="padding-right:10px">
    <p>Currently Active:</p>
    <p>Cost per Launch:</p>
    <p>Country of Origin:</p>
    <p>Success Rate:</p>
    </div>
      <div>
    <p v-if="rocketsData[0].active == false">No</p>
    <p v-else>Yes</p>
    <p>${{rocketsData[0].cost_per_launch}}</p>
    <p>{{rocketsData[0].country}}</p>
    <p>{{rocketsData[0].success_rate_pct}}%</p>
    </div>
    </div>
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

<style scoped>

p:after {
  content:"";
  display:inline-block;
  width:0px;
}

</style>



