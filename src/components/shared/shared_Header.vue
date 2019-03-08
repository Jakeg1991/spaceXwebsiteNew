<template>
<v-parallax dark src="https://www.spacex.com/sites/spacex/files/crew_dragon_iss_resized.jpg">
    <v-layout align-center column justify-center>
        <img src="~/../../assets/SpaceX-Logo.svg" alt="SpaceXlogo" class="logo">
        <h4 class="subheading">technical information resource</h4>
        <div class="countdownContainer">
        <h3 class="countdownMargin">Next Launch:</h3>
        <h3 class="countdownMargin" id="countdown"></h3>
        </div>
    </v-layout>
</v-parallax>
</template>

<script>
export default {
    name: "shared_Header",
    components: {},
    data(){
        return{
            nextLaunchDate: new Date()
        }
    },
    methods: {
        createCountdownClock() {
            var countDownDate = new Date(this.nextLaunchDateCompute).getTime();
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
    },
    computed:{
            nextLaunchDateCompute(){
            return this.$store.state.launches.filter(launches => launches.upcoming == true)[0].launch_date_utc
        }

    },
    mounted(){
        this.createCountdownClock()
    }
}
</script>

<style scoped>

.logo {
    width: 50%
}

.countdownContainer{
    margin: 0px 30px 10px 0px;
    position:absolute;
    bottom:0;
    right:0;
}

.countdownMargin{
    width: 200px
}
</style>



