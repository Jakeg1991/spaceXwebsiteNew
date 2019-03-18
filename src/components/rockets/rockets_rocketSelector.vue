<template>
    <div class="componentContainer">
        <H2>SELECT ROCKET:</H2>
        <div class="componentContainerSelector">
            <div class="rocketSelector">
        <v-select :items="allRockets" solo flat v-model="currentSelectedRocket" v-on:input="changeSelectedRocket()" class="rocketSelector"></v-select>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rockets_rocketSelector",
    props: ['rocketsData'],
    data() {
        return {
            currentSelectedRocket: "Falcon 1",
            allRockets: ["Falcon 1", "Falcon 9", "Falcon Heavy", "Big Falcon Rocket"]
        }
    },
    components: {},
    methods: {
        changeSelectedRocket() {
            this.$parent.filterRockets(this.currentSelectedRocket)
        }
    },
    mounted() {
        this.changeSelectedRocket()
    },
}
</script>

<style>
.rocketSelector{
    margin: 25px 25px 0px 25px;
    width: 300px
}
.componentContainerSelector{
    margin: 10px;
    width: 380px;
    background-color: var(--highlightcolor2);
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    border: 1px;
    border-style: solid;
    display: flex;
}
</style>


