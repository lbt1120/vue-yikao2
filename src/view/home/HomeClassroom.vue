<template>
<section id="classroom" v-if='pageShow'>
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
</section>
</template>
<script>
import swiper from '@/components/ModuleSwiper/Swiper-home'
import pagescroll from '@/components/ModuleTools/Module-PageScroll'
const tag = "classroom_list"
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
        this.updata('updata',this.datalist.length)
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
