<template>
<div class="countdownContainer">
<h2 class="countdownMargin" id="nextLaunchText"></h2>
<h2 class="countdownMargin" id="countdown"></h2>
</div>
</template>

<script>
export default {
    name: "countdown",
    props: ["nextLaunchDate"],
    methods: {
        getLaunchDate() {
            return this.$store.state.launches.filter(launches => launches.upcoming == true)[0].launch_date_utc
        },
        createCountdownClock() {
            setTimeout(() => {
                let countDownDate = new Date(this.getLaunchDate()).getTime();
                let x = setInterval(function () {
                    let now = new Date().getTime();
                    let distance = countDownDate - now;
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                        minutes + "m " + seconds + "s ";
                    document.getElementById("nextLaunchText").innerHTML = "Next Launch T-";
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("countdown").innerHTML = "EXPIRED";
                    }
                }, 1000);
            }, 1000)
        },
    },
}
</script>

<style>
.countdownContainer {
    display: flex;
    justify-content: flex-start;
    margin: 0px 80px 10px 0px;
    position: absolute;
    bottom: 0;
    right: 0;
}
@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.countdownMargin {
    width: 200px;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-delay: 1.5s;
    animation-duration: 2s;

}
</style>

