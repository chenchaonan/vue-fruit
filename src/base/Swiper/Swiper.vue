<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(src,index) in data"
                    :key="index"
                    class="slide"
      >
        <img :src="src" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import './Swiper.less'
  export default {
    props:{
      data:{}
    },
    data() {
      return {
        swiperOption: {
//          autoplay: 2000,
          direction: 'horizontal',
          setWrapperSize: true,
          observeParents: true,
          pagination: '.swiper-pagination',
        }
      }
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
  .swiper-pagination-bullet-active{
    opacity:1;
    background: orangered;
  }
</style>
