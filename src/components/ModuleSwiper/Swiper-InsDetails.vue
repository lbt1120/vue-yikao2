<template>
<div class="picbox">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in datalist" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

export default {
  name: 'swiper_home',
  data() {
    return {
      bannerdata: "",
      swiperOption: {
        paginationClickable: true,
        pagination: '.swiper-pagination',
        grabCursor: true,
        autoplay: 4000,
        loop: true,
        initialSlide: 1, //从0开始
      },
    }
  },
  //定义这个sweiper对象
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ['datalist'],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper-container {
    height: 15.6rem;
}

.swiper-container img {
    height: 100%;
}
</style>
