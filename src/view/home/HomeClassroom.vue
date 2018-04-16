<template>
<div id="classroom" v-if='pageShow'>
  <v-pagescroll @getData="getData" @moreData="moreData" ref="scroller">
    <div class="big-datalist">
      <div class="banner">
        <v-swiper :datalist="bannerlist"></v-swiper>
      </div>
      <div class="datatag">
        <div class="list-box">
          <ul>
            <li class="b-cutline" v-for="(item,index) in datalist" @click="routerTo(item.id)">
              <div class="f-left dataimg">
                <img :src="item.cover" alt="">
              </div>
              <div class="f-left datacontent">
                <div class="list-title font32 text-overflow row1">{{item.title}}</div>
                <div class="list-intro font28">
                  <div class="user-name">{{item.author}}</div>
                </div>
                <div class="list-tag">
                  <span v-if="item.integral==0">免费</span>
                  <span v-if="item.integral!=0">需要</span>
                  <span v-if="item.integral!=0">{{item.integral}}</span>
                  <span v-if="item.integral!=0">积分</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-pagescroll>
</div>
</template>
<script>
import swiper from '@/components/ModuleSwiper/Swiper-home'
import pagescroll from '@/components/ModuleTools/Module-PageScroll'
export default {
  data() {
    return {
      datalist: "",
      bannerlist: "",
      pageShow: false,
    }
  },
  components: {
    "v-swiper": swiper,
    "v-pagescroll": pagescroll,
  },
  methods: {
    defaultData() {
      this.bannerlist = DEFAULT_DATA.classroom_swiper
    },
    updata(type, num) {
      let scroller = this.$refs.scroller;
      if (type == 'updata') {
        setTimeout(function() {
          scroller.refreshRestore();
        }, 1000)
      } else {
        setTimeout(function() {
          scroller.loadMoreRestore(num);
        }, 1000)
      }

    },
    async getData() {
      let tag = 'classroom_list'
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
        this.updata('updata')
      } else {
        this.mint.Indicator.close();
        this.datalist = ""
        this.scrollData.noFlag = true;
      }
    },
    async moreData() {
      var params = {}
      let number = this.datalist.length;
      let last_id = this.datalist[number - 1].id;
      let tag = 'classroom_list';
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
    this.defaultData();
  }
}
</script>
<style lang="less">
.pagecontent {
    position: relative;
}
#classroom {
    .big-datalist {
        .datacontent {
            margin-top: 0.85rem;
        }
        .list-title {
            width: 100%;
            padding: 0;
        }
        .list-intro {
            overflow: hidden;
            margin-bottom: 1.2rem;
            padding: 0;
            > div {
                float: left;
            }
        }
        .user-name {
            padding-right: 1.2rem;
        }
    }
}
</style>
