<template>
  <v-footer class="pa-3" color="rgba(9, 83, 134, 1)">
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
