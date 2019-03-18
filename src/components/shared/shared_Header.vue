<template>
<!-- <v-parallax dark src="https://www.spacex.com/sites/spacex/files/crew_dragon_iss_resized.jpg"> -->
<!-- <div class="header">
    <v-layout align-center column justify-center>
        <img src="~/../../assets/SpaceX-Logo.svg" alt="SpaceX" class="logo">
        <h2>Technical Information Resource</h2>
        <shared_countdown ref="countdown"/>
    </v-layout>
    </div> -->
<!-- </v-parallax> -->
</template>

<script>
import shared_countdown from '@/components/shared/shared_countdown.vue'

export default {
    name: "shared_header",
    components: {
        shared_countdown
    },
    data() {
        return {
        }
    },
    methods: {
    },

}
</script>

<style scoped>

.logo {
    width: 850px
}
.header{
    height: 350px;
    background-color: var(--innercolor);
    display: flex
}
</style>



