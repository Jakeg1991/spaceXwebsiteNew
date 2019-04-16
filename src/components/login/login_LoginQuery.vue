<template>
<div class=fixedContainer>
    <v-card class="componentContainerLogin" elevation-50  color="rgba(9, 83, 134, 0.9)" v-if="this.$store.state.loggedInSuccessfulMsg == false">
        <div class="componentContainerLogin">
        <h5>Please Login with a Google account to continue.</h5>
        <v-btn flat color="success" v-on:click="login()"> Login </v-btn>
        </div>
    </v-card>
        <v-card v-else class="componentContainerLogin" elevation-50 color="rgba(9, 83, 134, 0.9)">
            <div class="componentContainerLogin">
            <h5>Login Successful. Redirecting...</h5>
            <img src="./../../assets/spinner.svg" alt="spinner" class="spinner">
            </div>
        </v-card>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
    name: "login_LoginQuery",
    components: {},
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
.componentContainerLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 125px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    padding: 0px 10px 0px 10px;
}
.spinner {
    height: 50px;
    margin: 10px
}
.fixedContainer {
    position: fixed;
    height: 100vh;
    width: 100vw;
}
</style>


