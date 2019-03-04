<template>
    <div class=header v-bind:style="headerImgCompute">
    </div>
</template>

<script>
export default {
    name: "shared_Header",
    components: {},
    data() {
        return {
            header: "~@/assets/headerIMG.jpg",
            lightHeader: "~@/assets/headerIMG.jpg",
            darkHeader: "~@/assets/headerIMG.jpg",
        }
    },
    computed: {
        darkModeCompute() {
            return !this.$store.state.darkMode
        },
        headerImgCompute() {
            return {
                'background-image': `url("~@/assets/headerIMG.jpg")`
            }
        }
    },

    watch: {
        darkModeCompute(newCompute, oldCompute) {
            if (newCompute == true) {
                this.header = this.darkHeader
            } else {
                this.header = this.lightHeader
            }
        }
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 400px;
    padding-top: 25%;
    background-position: center;
    background-size:auto;
    /* background-image: url("~@/assets/headerIMG.jpg"); */
    -webkit-transition: background-image 200ms ease-in-out;
    -moz-transition: background-image 200ms ease-in-out;
    -o-transition: background-image 200ms ease-in-out;
    transition: background-image 200ms ease-in-out;
    text-align: center;
    vertical-align: middle;
}
</style>



