<template>
    <div>
      <MHeader :title="name"
               :back="true"
      ></MHeader>
      <div class="scroll">
        <Swiper :data="sliders"></Swiper>
        <h3>水果开会</h3>
      </div>
    </div>
</template>
<script>
  import MHeader from '../../base/MHeader/MHeader.vue';
  import Swiper from '../../base/Swiper/Swiper.vue'
  import 'swiper/dist/css/swiper.css'
  import axios from 'axios';

    export default {
        data() {
            return {
              name:'首页',
              sliders:[],
            }
        },
        created() {
          axios.get('/api/sliders').then((res)=>{
            this.sliders=res.data;
          })
        },
        methods: {},
        computed: {},
        mounted() {
        },
        components: {
          MHeader,
          Swiper,
        },
    }
</script>
<style>
</style>
