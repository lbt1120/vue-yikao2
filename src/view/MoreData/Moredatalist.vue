<!-- 备注：后端需要往前传6条数据，加载更多功能才能使用 -->
<template>
<section class="wapper morewapper white_bg" ref="morewapper">
  <search></search>
  <pagescroll @getData="getData" @moreData="moreData" ref="scroller" v-if="pageShow==true">
    <div class="datatag">
      <notfound v-if="datalist==''">未找到更多内容</notfound>
      <v-datalist class="morecontent" :datalist="datalist" v-else></v-datalist>
    </div>
  </pagescroll>
</section>
</template>
<script>
import datalist from '@/components/ModuleDataView/Module-DataList'
import search from '@/components/ModuleTools/Module-Searchinput'

const tag = 'home_top_news';
export default {
  name: 'moreDataList',
  data() {
    return {
      searchkey: "",
      searchfocusIs: false,
      datalist: [],
      pageShow: false,
      keyword: ""
    }
  },
  components: {
    "v-datalist": datalist,
    search
  },
  methods: {
    searchfocus: function(type) {
      this.searchfocusIs = type
      if (type) {
        // this.styleChange();
      } else {
        this.$refs.morewapper.style.height = 'auto'
      }
    },
    //更新数据
    updata(type, num) {
      // 第一次无法执行，dom未渲染完成，也无需进行数据更新，为了避免因报错导致函数无法执行，故需要进行判断是否为undefined
      let scroller = this.$refs.scroller;
      if (scroller != undefined) {
        if (type == 'updata') {
          setTimeout(function() {
            scroller.loadTopRestore(num);
          }, 1000)
        } else {
          setTimeout(function() {
            scroller.loadBtoomRestore(num);
          }, 1000)
        }
      }
    },
    async getData() {
      this.mint.Indicator.open('加载中...');
      let number = 0;
      let keyword = this.keyword;
      let params = {
        tag,
        number,
        keyword
      };
      let res = await _api.search(params);
      this.pageShow = true;
      this.mint.Indicator.close();
      if (res.status == 200) {
        this.datalist = res.data;
        this.updata('updata', this.datalist.length)
      } else {
        this.datalist = ""
        // this.styleChange();
      }
    },
    async moreData() {
      var params = {}
      let number = this.datalist.length;
      let last_id = this.datalist[number - 1].id;
      let keyword = this.$store.state.search.keyword;
      let cnum = this.$store.state.search.classify;
      if (keyword == '') {
        params = {
          number,
          last_id,
          tag,
          cnum
        }
      } else {
        params = {
          number,
          last_id,
          tag,
          cnum,
          keyword
        }
      }
      let res = await _api.search(params);
      let moreData = res.data;
      if (res.status == 200) {
        this.updata('more', moreData.length)
        for (var i = 0; i < moreData.length; i++) {
          this.datalist.push(moreData[i])
        }
      } else {
        this.updata('more', 0)
      }
    },
    // styleChange: function() {
    //   let screenHeight = document.body.clientHeight
    //   if (this.$refs.morewapper.clientHeight < screenHeight) {
    //     this.$refs.morewapper.style.height = screenHeight + 'px'
    //   }
    // }
  },
  mounted() {
    this.getData()
  },
  computed: {
    vuexchange() {
      return this.$store.state.search.keyword;
    }
  },
  // 监听vuex数据变化
  watch: {
    vuexchange: function(newval, oldval) {
      this.searchkey = newval
      this.loading = false
      this.allLoaded = false;
      this.keyword = newval;
      this.getData()
    },
  },
}
</script>
<style scoped lang="less">
.morewapper {
    position: relative;
    .scrollpage {
        top: 5.1rem;
    }
    .search-box {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
    }
    .datanotfound {
        margin-left: -1.4rem;
    }
}

.morewapper .content-scroll {
    position: absolute;
    top: 5.5rem;
}

.databox {
    margin-top: 0;
    margin-bottom: 0;
}
</style>
