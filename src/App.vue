<template>
  <v-app>
    <div class="body">
      <div class="fixed">
        <transition name="fade">
          <div v-if="this.$store.state.loggedIn == true">
            <shared_navBar @openDrawer="openDrawer()" @logoutClicked="logout()" />
          </div>
        </transition>
      </div>
      <keep-alive>
        <router-view @loginRunFunc="login()" @logoutRunFunc="logout()" @redirectFunc="redirectLogin()" />
      </keep-alive>
      <transition name="fade">
        <div v-if="this.$store.state.loggedIn == true">
          <shared_footer />
        </div>
      </transition>
    </div>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import shared_navBar from '@/shared_navBar.vue';
import shared_footer from '@/shared_footer.vue';
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAeDJ0KU9ELqJv5Fe6FCeh4K0vRn0IZ1qs",
  authDomain: "spacexapplogin.firebaseapp.com",
  databaseURL: "https://spacexapplogin.firebaseio.com",
  projectId: "spacexapplogin",
  storageBucket: "spacexapplogin.appspot.com",
  messagingSenderId: "167057019693"
};
firebase.initializeApp(firebaseConfig);

export default {
  name: 'App',
  data() {
    return {
      loggedIn: false,
      drawer: false,
    }
  },
  components: {
    shared_navBar,
    shared_footer
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
        document.documentElement.style.setProperty('--bgcolor', "rgba(190, 190, 190)")
        document.documentElement.style.setProperty('--highlightcolor', "rgba(9, 83, 134, 0.9)")
        document.documentElement.style.setProperty('--innercolor', "rgba(255, 255, 255)")
        document.documentElement.style.setProperty('--fontcolor', "rgba(9, 83, 134, 1)")
        document.documentElement.style.setProperty('--utlitybarcolor', " rgba(9, 83, 134, 0.9)")
        document.documentElement.style.setProperty('--bgimage', "url('https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2014_-_10_replacement_-_iss039e021507.jpg?itok=4y_yxHSD')")
      } else {
        document.documentElement.style.setProperty('--bgcolor', 'rgb(20,20,20)')
        document.documentElement.style.setProperty('--highlightcolor', "rgba(80, 80, 80, 0.9)")
        document.documentElement.style.setProperty('--innercolor', 'rgb(61,61,61)')
        document.documentElement.style.setProperty('--fontcolor', 'rgb(224,224,224)')
        document.documentElement.style.setProperty('--utlitybarcolor', 'rgba(48,48,48,0.9)')
        document.documentElement.style.setProperty('--bgimage', "url('https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2013_-_11_vandenberg_sunset_rocket_on_pad.jpg?itok=d6cI50Qk')")
      }
    },
  },
  methods: {

    openDrawer() {
      this.drawer = !this.drawer
    },

    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$store.dispatch('setUserInfo', result.user)
          this.$store.dispatch('loginSuccessfulMsg')
          setTimeout(this.loginAndRedirectHome, 3000);
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
    redirectLogin() {
      this.$router.push('/login')
    },
    loginAndRedirectHome() {
      this.$router.push('/')
      this.$store.dispatch('login')
    },
  },
  created() {
    this.$store.dispatch('fetchRocketsData'),
    this.$store.dispatch('fetchLaunchesData')
    this.$store.dispatch('fetchSpaceXData')
  }
}
</script>

<style lang="scss"> :root {
  --bgcolor: rgba(190, 190, 190);
  --highlightcolor: rgba(9, 83, 134, 0.9);
  --innercolor: rgb(255, 255, 255);
  --fontcolor: rgba(9, 83, 134, 1);
  --utlitybarcolor: rgba(9, 83, 134, 0.9);
  --bgimage: url("https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2014_-_10_replacement_-_iss039e021507.jpg?itok=4y_yxHSD");
}

@font-face {
  font-family: "bankGothicRegular";
  src: url('~/../../assets/fonts/bankgothic/bankgothic-regular.ttf') format('truetype');
  font-style: normal;
}

p {
  margin: 0;
  text-align: justify;
}

h3,
h2,
h4,
h5 {
  color: white;
  font-weight: 1;
}

h2,
h4 {
  margin: 0px 0px 0px -10px;
  padding: 10px 10px 0px 10px;
}

h5 {
  margin: 5px;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
}

.body {
  font-family: 'bankGothicRegular', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-image: var(--bgimage);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: var(--bgcolor);
  color: var(--fontcolor);
  width: 100%;
  height: 100%;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
}



.componentContainer {
  margin: 15px;

}

.componentContainerInner {
  margin: 10px;
  width: 100%;
  background-color: var(--innercolor);
  border-radius: 7px;
  padding: 0px 10px 0px 10px;
  border: 1px solid var(--highlightcolor2);
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
  justify-content: space-around
}

.pageSpacer {
  margin: 100px 0px 100px 0px
}

.infoHeaderContainer {
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px -10px;
  padding: 15px 15px 5px 15px;
  min-width: 120px;
  background-color: var(--utlitybarcolor);
  border-radius: 5px;
}

//ANIMATIONS

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  transition: transform 1s;
}
</style>


