<template>
<section id="Sinayikao" v-if='pageShow'>
  <v-pagescroll @getData="getData" @moreData="moreData" ref="scroller">
    <appraise :likebtn="likebtn" :listtitle="listtitle" :datalist="datalist"></appraise>
  </v-pagescroll>
  <div class="newVegas home-sliderbox" @click="popdownboxshow"></div>
</section>
</template>
<script>
import pagescroll from '@/components/ModuleTools/Module-PageScroll';
import appraise from '@/components/ModuleDataView/Module-Appraise';
import popdown from '@/components/ModuleTools/Module-PopDown';
const tag = "artcircle_list"
export default {
  data() {
    return {
      likebtn: true,
      listtitle: false,
      datalist: "",
      bannerlist: "",
      pageShow: false,
      popupVisible: false
    }
  },
  components: {
    "v-pagescroll": pagescroll,
    appraise,
    popdown
  },
  methods: {
    // 更新数据
    updata(type, num) {
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
    popdownboxshow() {
      let user = this.$store.state.user
      if (user != '') {
        this.$store.commit('popdownshow', true);
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    // 请求数据
    async getData() {
      let keyword = '';
      let cnum = 0;
      let number = 0;
      let params = {
        tag,
        keyword,
        cnum,
        number
      }
      let res = await _api.search(params)
      this.pageShow = true;
      if (res.status == 200) {
        this.mint.Indicator.close();
        this.datalist = res.data;
        this.updata('updata', this.datalist.length)
      } else {
        this.mint.Indicator.close();
        this.datalist = ""
      }
    },
    // 加载更多数据
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
      let res = await _api.search(params)
      let moreData = res.data;
      this.updata('more', moreData.length)
      for (var i = 0; i < moreData.length; i++) {
        this.datalist.push(moreData[i])
      }
    },
  },
  mounted() {
    this.getData();
  },
  computed: {  
    keyword: function() {
      return this.$store.state.search.keyword;
    },
    classify: function() {
      return this.$store.state.search.classify;
    },
    popstatus: function() {
      return this.$store.state.popdownshow;
    }
  },
}
</script>
<style lang="less">

</style>
