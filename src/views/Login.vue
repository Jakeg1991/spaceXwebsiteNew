<template>
<div class="componentContainer">
<login_LoginQuery @loginClicked="runLogin()"/>
<!-- <img src="@/../../../assets/SpaceX-Logo.svg" alt="SpaceXlogo" class="logo"> -->
</div>
</template>

<script>
import login_LoginQuery from '@/components/login/login_LoginQuery.vue'
export default {
  name: 'login',
  components: {
    login_LoginQuery,
  },
  methods: {
    runLogin(){
      this.$emit('loginRunFunc')
    }
  }
}
</script>

<style>

</style>
