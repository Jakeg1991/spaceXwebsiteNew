<template>
<!-- <div class="fixed">
<v-layout align-center justify-center row>
    <v-flex class="darkmodeSwitch">
        <v-switch :label="`Dark Mode`" v-on:change="changeDarkMode()" v-bind:value="darkmode" dark></v-switch>
    </v-flex>
    <v-layout align-center justify-center row fill-height>
        <img class="avatar" v-bind:src="this.$store.state.userData.photoURL" />
        <v-flex>
            Logged In: {{this.$store.state.userData.displayName}}
        </v-flex>
        <v-btn small v-on:click="logout()"> Logout </v-btn>
    </v-layout>
</v-layout>
</div> -->

<div>


        <v-btn small v-on:click="test()" style="top:200px"> Test </v-btn>
        <v-btn small v-on:click="test2()" style="top:200px"> Test2 </v-btn>



    <!-- <v-navigation-drawer 
     right
      v-model="this.drawer"
      absolute
      temporary
      class="userDraw"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-bind:src="this.$store.state.userData.photoURL" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="loginName">{{this.$store.state.userData.displayName}}</v-list-tile-title>
          </v-list-tile-content>
    <v-btn small v-on:click="logout()"> Logout </v-btn>
<v-btn small v-on:click="test()"> Test </v-btn>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

    <v-flex class="darkmodeSwitch">
        
                
        <v-switch  label="Dark Theme" v-on:change="changeDarkMode()" v-model="darkMode" dark>
                </v-switch>
    </v-flex>


      </v-list>
    </v-navigation-drawer> -->


 <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->


</div>
</template>

<script>
import firebase from "firebase/app";
export default {
    name: "shared_userInfo",
    props: ["drawer"],
    data() {
        return {
            drawer2:false,
            darkMode: [false]
        }
    },
    components: {},
    methods: {
        test(){this.drawer2 = true},
        test2(){console.log(this.drawer2)},
        changeDarkMode() {
            this.$store.dispatch('changeDarkMode')
        },
        logout() {
            this.$emit('logoutClicked')
        }
    },
    computed: {
        // darkmode() {
        //     return this.$store.state.darkMode
        // }
    },
}
</script>

<style scoped>
.fixed{
position: fixed;
z-index: 1;
background-color:var(--utlitybarcolor);
width: 100%;
}

.darkmodeSwitch{
    margin: 25px auto auto 80px;
}

.userData{
    display: flex;
    flex-flow: row;
    align-items: center
}
.userDraw{
    position: fixed;
    height: 10px;
    background-color:var(--utlitybarcolor);
    }

.loginName{
color:var(--fontcolor)
}

.avatar{
    border-radius: 25px;
    margin: 5px;
    height: 40px;
    width: 40px;
}
</style>



