<template>
<v-parallax dark src="https://www.spacex.com/sites/spacex/files/crew_dragon_iss_resized.jpg">
    <v-layout align-center column justify-center>
        <img src="~/../../assets/SpaceX-Logo.svg" alt="SpaceXlogo" class="logo">
        <h4 class="subheading">technical information resource</h4>
        <div class="countdownContainer">
        <h3>Next Launch:</h3>
        <h3 id="countdown"></h3>
        </div>
        <v-btn :click="this.getNextLaunchDate">test</v-btn>
    </v-layout>
</v-parallax>
</template>

<script>
export default {
    name: "shared_Header",
    components: {},
    data(){
        return{
            nextLaunchDate: "2019-09-30T20:00:00-04:00"
        }
    },
    methods: {
        createCountdownClock() {
            var countDownDate = new Date(this.nextLaunchDate).getTime();
            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }, 1000);
        },
        getNextLaunchDate(){
            console.log("test")
            // this.$store.state.launches.rocket.rocket_name.filter((oneMission) => {
            //     oneRocket.rocket_name == launch.upcoming})
        },
    },
    mounted(){
        this.createCountdownClock()
        this.getNextLaunchDate()
    }
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

.countdownContainer{
    margin: 0px 30px 10px 0px;
    position:absolute;
    bottom:0;
    right:0;
}

.countdown{
    position:fixed
}
</style>



