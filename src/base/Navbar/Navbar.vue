<template>
  <div class="nav-bar">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/cart">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/mine">
      <i class="iconfont icon-gerenzhongxin"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>
<script>
  import './Navbar.less'
  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    mounted() {
    },
    components: {},
  }
</script>
<style>

</style>
