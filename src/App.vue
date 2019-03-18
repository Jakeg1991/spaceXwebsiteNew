<template>
  <v-app>
    <div class="body">
      <div class="fixed">
        <shared_userInfo @logoutClicked="logout()"/>
        <shared_navBar />
        <!-- <shared_header ref="header"/> -->
      </div>

<transition name="swipe" mode="out-in">
  <keep-alive>
      <router-view @loginRunFunc="login()" @logoutRunFunc="logout()" @redirectFunc="redirect()"/>
      </keep-alive>
 </transition>

    </div>
  </v-app>
</template>
<script>
import firebase from "firebase/app";
import shared_userInfo from '@/components/shared/shared_userInfo.vue';
import shared_navBar from '@/components/shared/shared_navBar.vue';
import shared_header from '@/components/shared/shared_header.vue';
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyAeDJ0KU9ELqJv5Fe6FCeh4K0vRn0IZ1qs",
  authDomain: "spacexapplogin.firebaseapp.com",
  databaseURL: "https://spacexapplogin.firebaseio.com",
  projectId: "spacexapplogin",
  storageBucket: "spacexapplogin.appspot.com",
  messagingSenderId: "167057019693"
};
firebase.initializeApp(config);

export default {
  name: 'App',
  data() {
    return {
      loggedIn: false,
    }
  },
  components:{
    shared_userInfo,
    shared_navBar,
    shared_header
  },
  computed: {
    loggedInCompute() {
      return !this.$store.state.loggedIn
    },

    darkModeCompute() {
      return !this.$store.state.darkMode
    }
  },
  watch: {
    loggedInCompute(newCompute) {
      if (newCompute == true) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    },
    darkModeCompute(newCompute) {
      if (newCompute == true) {
        this.darkMode(true)
      } else {
        this.darkMode(false)
      }
    },
  },
  methods: {
    darkModeInit() {
      if (this.$store.state.darkMode == true) {
        this.darkMode(true)
      } else {
        this.darkMode(false)
      }
    },
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$store.dispatch('setUserInfo', result.user)
          this.$store.dispatch('login')
          this.$router.push('/')
        })
        .catch(function (error) {
          alert("error" + error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('logout');
          this.$router.push('/login')
        })
        .catch(function (error) {
          alert("alert logout");
        });
    },
    redirect() {
      // this.$router.push('/login')
    },
    darkMode(boonlean) {
      if (boonlean == false) {
        document.documentElement.style.setProperty('--bgcolor', "rgba(190, 190, 190)")
        document.documentElement.style.setProperty('--highlightcolor', "rgba(240, 248, 255, 0.9)")
        document.documentElement.style.setProperty('--highlightcolor2', "rgba(9, 83, 134, 1)")
        document.documentElement.style.setProperty('--innercolor', "rgba(255, 255, 255)")
        document.documentElement.style.setProperty('--fontcolor', "rgba(9, 83, 134, 1)")
        document.documentElement.style.setProperty('--utlitybarcolor', " rgba(214, 216, 219, 0.9)")
      } else {
        document.documentElement.style.setProperty('--bgcolor', '#141414')
        document.documentElement.style.setProperty('--highlightcolor',  "rgba(80, 80, 80, 0.9)")
        document.documentElement.style.setProperty('--highlightcolor2',  "rgba(9, 83, 134, 1)")
        document.documentElement.style.setProperty('--innercolor', '#303030')
        document.documentElement.style.setProperty('--fontcolor', '#e0e0e0')
        document.documentElement.style.setProperty('--utlitybarcolor', ' #303030a9')
      }
    }
  },
  mounted() {
    this.darkModeInit()
    this.$store.dispatch('getLaunches').then(this.$refs.header.$refs.countdown.createCountdownClock())
    this.$store.dispatch('getRockets')
  },
}
</script>

<style lang="scss"> :root {
  --bgcolor: rgba(190, 190, 190);
  --highlightcolor: rgba(240, 248, 255, 0.9);
  --highlightcolor2: rgba(9, 83, 134, 1);
  --innercolor: rgb(255, 255, 255);
  --fontcolor: rgba(9, 83, 134, 1);
  --utlitybarcolor: rgba(214, 216, 219, 0.9);
}

@font-face {
  font-family: "bankGothicRegular";
  src: url('~/../../assets/fonts/bankgothic/bankgothic-regular.ttf');
  font-style: normal;
}

p {
  margin: 0;
  text-align: justify;
}

br {
  display: block;
  content: "";
  margin-top: 5px;
}

h3 {
  color: white
}

.infoHeaderContainer {
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px -10px;
  padding: 15px 15px 5px 15px;
  min-width: 120px;
  background-color: var(--highlightcolor2);
}

h2 {
  margin: 0px 0px 0px -10px;
  padding: 10px 10px 0px 10px;
}

.body {
  font-family: 'bankGothicRegular', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-image: url("https://www.spacex.com/sites/spacex/files/crew_dragon_iss_resized.jpg");
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: var(--bgcolor);
  color: var(--fontcolor);
  width: 100%;
  height: 100%;
}

.componentContainer {
  margin: 15px;
}

.componentContainerInner {
  margin: 10px;
  width: 100%;
  background-color: var(--innercolor);
  border-radius: 5px;
  padding: 0px 10px 0px 10px;
  border: 1px;
  border-style: solid;
  display: flex;
  justify-content: flex-start
}

.infoBox {
  margin: 7px;
  padding: 25px 10px 25px 10px
}

.flexBoxWrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.flexBoxWrapper {
  display: flex;
  width: 100%;
  justify-content: space-around
}



//ANIMATIONS


.swipe-enter-active {
  transition: transform 0.45s;
}

.swipe-leave-active {
  transition: transform 0.45s;
}

.swipe-enter {
  transform: translateX(1500px);
  opacity: 100;
}

.swipe-leave-to {
  transform: translateX(-1500px);
  opacity: 100;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


