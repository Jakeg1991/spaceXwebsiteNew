<template>
<div class="componentContainer">
    <h3>GENERAL INFO</h3>
  <div class="componentContainerInner">
    <p>{{rocketsData[0].description}}</p>

<div>
  <b-button @click="showCollapse = !showCollapse" :class="showCollapse ? 'collapsed' : null" aria-controls="collapse4"
    :aria-expanded="showCollapse ? 'true' : 'false'">
    Toggle Collapse
  </b-button>
  <b-collapse class="mt-2" v-model="showCollapse" id="collapse4">
    <b-card>I should start open!</b-card>
  </b-collapse>
</div>

  </div>

  </div>
</template>

<script>
export default {
  name: "rockets_generalInfo",
  props: ['rocketsData'],
  data(){
    return {
      showCollapse: true
    }
  },
  components: {
  },}
</script>

<style>
</style>


