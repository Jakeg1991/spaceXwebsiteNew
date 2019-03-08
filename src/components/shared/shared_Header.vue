<template>
<v-parallax dark src="https://www.spacex.com/sites/spacex/files/crew_dragon_iss_resized.jpg">
    <v-layout align-center column justify-center>
        <img src="~/../../assets/SpaceX-Logo.svg" alt="SpaceXlogo" class="logo">
        <h4 class="subheading">technical information resource</h4>
        <shared_countdown ref="countdown"/>
    </v-layout>
</v-parallax>
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
</style>



