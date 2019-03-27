<template>
    <div class="componentContainerCountdown">
        <div class="countdownItemContainer">
            <h3>Mission Name:</h3>
            <h2>
                {{this.$store.state.launchesData.filter(launches => launches.upcoming == true)[0].mission_name}}
            </h2>
        </div>
        <div class="countdownItemContainer">
            <h3>Launch Date:</h3>
            <h2>
                {{this.convertUnix(this.$store.state.launchesData.filter(launches => launches.upcoming == true)[0].launch_date_unix)}}
            </h2>
        </div>
        <div class="countdownItemContainerClock">
            <h3>T-</h3>
            <h2 id="countdown"></h2>
        </div>
        <div class="countdownItemContainer">
            <h3>Location:</h3>
            <h2>
                {{this.$store.state.launchesData.filter(launches => launches.upcoming == true)[0].launch_site.site_name_long}}
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "countdown",
    props: ["nextLaunchDate"],
    data() {
        return {
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined,
        };
    },
    methods: {
        getLaunchDate() {
            return this.$store.state.launchesData.filter(launches => launches.upcoming == true)[0].launch_date_utc
        },
        createCountdownClock() {
            let countDownDate = new Date(this.getLaunchDate()).getTime();
            let x = setInterval(function () {
                let now = new Date().getTime();
                let distance = countDownDate - now;
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown").innerHTML = "EXPIRED";
                }
            }, 1000);
        },
        convertUnix(unix) {
            var a = new Date(unix * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ';
            return time;
        }
    },
    mounted() {
        // this.createCountdownClock()
    }
}
</script>

<style>
.countdownItemContainer{
    margin: 15px;
    word-wrap: unset
}
.countdownItemContainerClock{
    margin: 15px;
    word-wrap: unset;
    width: 200px
}
.componentContainerCountdown {
    margin: 10px;
    width: 100%;
    background-color: var(--utlitybarcolor);
    border-radius: 7px;
    padding: 0px 10px 0px 10px;
    border: 1px;
    border-style: solid;
    display: flex;
    justify-content:space-around
}
</style>

