<template>
<div class="componentContainerLogin">
        <p class="chatWelcomeText">Please Login with a Google account to continue.</p>
        <div class="buttonWrapper">
          <v-btn flat color="success" v-on:click="login()"> Login </v-btn>
      </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "login_LoginQuery",
      components: {
      },
      data() {
          return {};
      },
      methods: {
          login() {
              this.$emit("loginClicked")
          },
      }
      }
</script>

<style>
componentContainerLogin{
    position: absolute;
    top: 300px
}
</style>


