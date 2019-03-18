<template>
      <v-toolbar color="rgba(9, 83, 134, 1)" flat>
    <v-toolbar-items>
      <v-btn flat color=white to="/">Home</v-btn>
      <v-btn flat color=white to="/launches">Launches</v-btn>
      <v-btn flat color=white to="/rockets">Rockets</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import shared_userInfo from '@/components/shared/shared_userInfo.vue';
export default {
  name: "shared_navBar",
  components: {
    shared_userInfo,
  },}

</script>

<style>

</style>
