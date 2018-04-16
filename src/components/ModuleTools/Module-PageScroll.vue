<template>
<div class="scrollpage">
  <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore" use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh" lock-x ref="scrollerBottom" height="-140">
    <slot>
    </slot>
  </scroller>
</div>
</template>
<script>
import {
  Scroller,
} from 'vux'

const pulldownDefaultConfig = {
  content: '下拉刷新',
  height: 40,
  autoRefresh: false,
  downContent: '下拉刷新',
  upContent: '释放后刷新',
  loadingContent: '正在刷新...',
  clsPrefix: 'xs-plugin-pulldown-'
}
const pullupDefaultConfig = {
  content: '上拉加载更多',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: '释放后加载',
  upContent: '上拉加载更多',
  loadingContent: '加载中...',
  clsPrefix: 'xs-plugin-pullup-'
}
export default {
  components: {
    Scroller
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({
        top: 0
      })
    })
  },
  data() {
    return {
      list: [],
      pullupDefaultConfig: pullupDefaultConfig,
      pulldownDefaultConfig: pulldownDefaultConfig
    }
  },
  methods: {
    refresh() {
      this.$emit('getData')
    },
    loadMore() {
      this.$emit('moreData')
    },
    refreshRestore() {
      this.$refs.scrollerBottom.enablePullup()
      this.$refs.scrollerBottom.donePulldown()
    },
    loadMoreRestore(num) {
      if (num < 5) {
        this.$refs.scrollerBottom.disablePullup()
      }
      this.$refs.scrollerBottom.donePullup()
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
    .datatag{
      padding-bottom: 2.5rem;
    }
}
</style>
