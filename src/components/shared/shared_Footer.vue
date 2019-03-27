<template>
  <v-footer class="pa-3 footer" color="rgba(9, 83, 134, 0.9)">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
  export default {
        name: "shared_footer",
    components: {},
  }
</script>


<style>

.footer{
 position: absolute;
 bottom: 0;
 width: 100%;}

</style>