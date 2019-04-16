<template>
  <div>
    <v-toolbar color="rgba(9, 83, 134, 0.9)" class="ui" fixed>
      <v-toolbar-items>
        <v-btn flat color=white to="/">Home</v-btn>
        <v-btn flat color=white to="/launches">Launches</v-btn>
        <v-btn flat color=white to="/rockets">Rockets</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat dark @click.stop="drawer = !drawer">
          Options
        </v-btn>
      </v-toolbar-items>
    <v-navigation-drawer right v-model="drawer" class="userDraw blue-grey darken-3" color="rgba(9, 83, 134, 0.9)" fixed>
      <v-list class="pa-1 blue-grey darken-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-bind:src="this.$store.state.userData.photoURL" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{this.$store.state.userData.displayName}}</v-list-tile-title>
          </v-list-tile-content>
          <v-btn flat big round color="warning" v-on:click="logout(), drawer = !drawer"> Logout </v-btn>
        </v-list-tile>
      </v-list>
      <v-list class="pt-4 pl-3 text-md-center">
        <v-list-tile>
          <v-switch label="Dark Theme" v-on:change="changeDarkMode()" v-model="darkMode">
          </v-switch>
        </v-list-tile>
        <v-list-tile>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-btn flat round @click.stop="drawer = !drawer"> Close </v-btn>
      </v-list>
    </v-navigation-drawer>
    </v-toolbar>
  </div>

</template>

<script>
export default {
  name: "shared_navBar",
  components: {},
  data() {
    return {
      drawer: false,
      darkMode: false
    }
  },
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    },

    changeDarkMode() {
      this.$store.dispatch('changeDarkMode')
    },
    logout() {
      this.$emit('logoutClicked')
    }
  },
}
</script>

<style>

.fixed{
position: fixed;
width: 100%;
z-index: 2
}

.fixed2{
position: fixed;
background-color:var(--utlitybarcolor);
width: 100%;
}

.userData{
    display: flex;
    flex-flow: row;
    align-items: center;
}
.userDraw{
    overflow: visible;
    }

.avatar{
    border-radius: 25px;
    margin: 5px;
    height: 40px;
    width: 40px;
}
</style>
