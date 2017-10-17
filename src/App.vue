<template>
  <div id="app">
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import './commonStyle/common.less'
  import Navbar from './base/Navbar/Navbar.vue'

  export default {
    name: 'app',
    components:{
      Navbar,
    }
  }
</script>

<style>

</style>
