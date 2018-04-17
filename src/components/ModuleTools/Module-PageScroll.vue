<template>
<div class="scrollpage">
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" ref="loadmore" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'pull' }">下拉刷新</span>
      <span v-show="topStatus === 'drop'" :class="{ 'rotate': topStatus === 'drop' }">释放刷新</span>
      <span v-show="topStatus === 'loading'">正在加载...</span>
    </div>
    <slot></slot>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="datanum !== 0">正在加载...</span>
      <span v-show="datanum === 0">没有更多数据了</span>
    </div>
  </mt-loadmore>
</div>
</template>
<script>
import {
  Loadmore,
  InfiniteScroll
} from 'mint-ui';
export default {
  components: {
    Loadmore
  },
  mounted() {},
  data() {
    return {
      topStatus: '',
      datanum: 0
    }
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      this.$emit('getData')
    },
    loadMore() {
      this.loading = true;
      this.$emit('moreData')
    },
    loadBottom() {
      console.log(2)
    },
    isLoading(num) {
      if (num < 5) {
        this.loading = true;
        this.datanum = 0
      } else {
        this.loading = false;
        this.datanum = Number(num)
      }
      console.log(this.datanum)
    },
    loadTopRestore(num) {
      this.isLoading(num);
      this.$refs.loadmore.onTopLoaded();
    },
    loadBtoomRestore(num) {
      this.isLoading(num);
    }
  }
}
</script>
<style lang="less">
.scrollpage {
    position: absolute;
    top: 10rem;
    width: 100%;
    background-color: #fff;
    .mint-loadmore-bottom,
    .mint-loadmore-top {
        color: #3c99f7;
        font-size: 1.4rem;
    }
    .mint-loadmore-bottom {
        margin-bottom: 1rem;
    }
}
</style>
