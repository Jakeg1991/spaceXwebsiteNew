<template>
  <div class="pageSpacer" v-show="this.$store.state.loggedIn == true">
    <div class="componentContainer">
      <div class="componentContainer">
        <h2>SPACEX</h2>
        <div class="flexBoxWrapper">
          <div class="componentContainerInner">
            <div class="infoHeaderContainer">
              <h3>Info</h3>
            </div>
            <div>
              <div class="infoBox">
                <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in
                  2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the
                  colonization of Mars. </p>
              </div>
              <div class="infoBox">
                <p>
                  SpaceX's achievements include;
                  <br>
                  <ul>
                    <li>building the first privately funded liquid-propellant rocket to reach orbit (Falcon 1 in 2008),</li>
                    <li>becoming the first private company to successfully launch, orbit, and recover a spacecraft
                      (Dragon in 2010),</li>
                    <li>being the first private company to send a spacecraft to the International Space Station (Dragon
                      in 2012),</li>
                    <li>building and testing the first propulsive landing technology for an orbital rocket (Falcon 9 in
                      2015),</li>
                    <li>being the first private company to launch an object into orbit around the sun (Falcon Heavy's
                      payload of a Tesla Roadster in 2018).</li>
                  </ul>
                </p>
              </div>
              <div class="infoBox">
                <p>All data within this app is courtesy of the <a target="_blank"
                    href="https://github.com/r-spacex/">open source spaceX REST API</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="componentContainer">
      <h2>NEXT LAUNCH :</h2>
<div class="flexBoxWrapper">
      <shared_countdown v-if="this.$store.state.loggedIn == true"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import shared_countdown from '@/components/shared/shared_countdown.vue';

export default {
  name: 'home',
  components: {
    shared_countdown,
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
  },
  mounted() {
    this.redirectPage()
  },
}
</script>

<style scoped>

</style>

