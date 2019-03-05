<template>
<v-parallax dark src="https://cdn-images-1.medium.com/max/2000/1*gEN0glKcBb9iY112nvadAw.jpeg">
    <v-layout align-center column justify-center>
        <!-- <h1 class="display-2 font-weight-thin mb-3">SpaceX</h1> -->
        <img src="~/../../assets/SpaceX-Logo.svg" alt="SpaceXlogo" class="logo">
        <h4 class="subheading">technical information resource</h4>
    </v-layout>
</v-parallax>
</template>

<script>
export default {
    name: "shared_Header",
    components: {},
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 400px;
    padding-top: 25%;
    background-position: center;
    background-size:auto;
    background-image: url("~@/assets/headerIMG.jpg");
    -webkit-transition: background-image 200ms ease-in-out;
    -moz-transition: background-image 200ms ease-in-out;
    -o-transition: background-image 200ms ease-in-out;
    transition: background-image 200ms ease-in-out;
    text-align: center;
    vertical-align: middle;

}
.logo {
    width: 50%
}
</style>



