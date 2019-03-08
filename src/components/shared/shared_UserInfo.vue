<template>
<div class="fixed">
<v-layout align-center justify-center row>
    <v-flex class="darkmodeSwitch">
        <v-switch :label="`Dark Mode`" v-on:change="changeDarkmode()" v-bind:value="darkmode" dark></v-switch>
    </v-flex>
    <v-layout align-center justify-center row fill-height>
        <img class="avatar" v-bind:src="this.$store.state.userInfo.photoURL" />
        <v-flex>
            Logged In: {{this.$store.state.userInfo.displayName}}
        </v-flex>
        <v-btn small v-on:click="logout()"> Logout </v-btn>
    </v-layout>
</v-layout>
</div>
</template>

<script>
import firebase from "firebase/app";
export default {
    name: "shared_userInfo",
    data() {
        return {}
    },
    components: {},
    methods: {
        changeDarkmode() {
            this.$store.dispatch('changeDarkmode')
        },
        logout() {
            this.$emit('logoutClicked')
        }
    },
    computed: {
        darkmode() {
            return !this.$store.state.darkMode
        }
    },
    mounted() {
        this.darkMode = this.$store.state.darkmode
    }
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
    margin: auto auto auto 10px
}

.userInfo{
    display: flex;
    flex-flow: row;
    align-items: center
}
.utilityBar{
    background-color:var(--utlitybarcolor);

}
.avatar{
    border-radius: 25px;
    margin: 5px;
    height: 40px;
    width: 40px;
}
</style>



