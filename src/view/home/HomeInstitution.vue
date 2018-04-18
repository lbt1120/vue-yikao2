<template>
<section class="h-institutionwapper wapper">
  <div class="p-fixed">
    <div class="filtratenavbox white_bg b-cutline">
      <ul>
        <li :class="{active:tabnav=='profession'}" @click="tabchange('profession')">
          <div>{{classifyVal}}</div>
          <div class="institutionarrow">
            <div class="arrow transition-5s"></div>
          </div>
        </li>
        <li :class="{active:tabnav=='location'}" @click="tabchange('location')">
          <div>{{cityVal}}</div>
          <div class="institutionarrow">
            <div class="arrow transition-5s"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="selectBox transition-5s" ref="selectBox">
      <scroll class="wrapper" :pulldown="pulldown">
        <ul class="content">
          <li v-for="(item,index) in dataArr" @click="changeSelect(item)">{{item.value}}</li>
        </ul>
      </scroll>
    </div>
  </div>
  <div v-if="pageShow==true">
    <pagescroll @getData="getData" @moreData="moreData" ref="scroller">
      <div class="institution-datalist" v-if="datalist.length!==0">
        <div class="big-datalist">
          <div class="datatag">
            <div class="list-box">
              <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li class="b-cutline" v-for="(item,index) in datalist" @click="routerTo(item.id)">
                  <div class="f-left dataimg">
                    <img :src="item.cover" alt="">
                  </div>
                  <div class="f-left datacontent">
                    <div class="list-title font32 row1 text-overflow">{{item.name}}</div>
                    <div class="list-intro font28 row1 text-overflow">
                      <span style="margin-right:.5rem;">{{item.areaid|city}}</span>
                      <span v-for="(classname,index) in item.classid" v-if="index<item.classid.length-1">{{classname|classify}}、</span>
                      <span v-for="(classname,index) in item.classid" v-if="index==item.classid.length-1">{{classname|classify}}</span>
                    </div>
                    <div class="list-profession font28 text-overflow row1">
                      <span>{{item.intro}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </pagescroll>
    <notfound v-if="datalist==''">未找到符合条件的机构</notfound>
  </div>
</section>
</template>
<script>
import pagescroll from '@/components/ModuleTools/Module-PageScroll'
import scroll from '@/components/ModuleTools/Module-Yscroll'
const tag = "mechanism_list"
export default {
  name: 'institution',
  data() {
    return {
      filter: {
        keyword: '',
        class: 0
      },
      tabnav: '',
      datalist: [],
      classifyVal: '默认',
      cityVal: '全国',
      pulldown: false,
      dataArr: "",
      cityId: 0,
      noData: false,
      pageShow: false
    }
  },
  components: {
    pagescroll,
    scroll
  },
  mounted() {
    this.getData('', 0)
  },
  methods: {
    changeSelect(item) {
      if (this.tabnav == 'profession') {
        this.classifyVal = item.value
        this.$store.commit('classify', item.id)
      } else {
        this.cityVal = item.value
        this.cityId = item.id
      }
      let keyword = this.$store.state.search.keyword;
      let classifyId = this.$store.state.search.classify;
      this.$refs.selectBox.style.height = 0
      this.tabnav = '';
      this.getData(keyword, classifyId)
    },
    tabchange(tabname) {
      if (this.tabnav == tabname) {
        this.tabnav = '';
        this.$refs.selectBox.style.height = 0
      } else {
        this.tabnav = tabname
        this.$refs.selectBox.style.height = 25 + 'rem'
      }
      if (tabname == 'profession') {
        let id = 0;
        let value = '默认'
        this.dataArr = _$.classify();
        this.dataArr.unshift({
          id,
          value
        })
      } else {
        let id = 0;
        let value = '全国'
        this.dataArr = _$.cityData('', '', '', 's_province');
        this.dataArr.unshift({
          id,
          value
        })
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
      this.$store.commit("checkInfo", '')
      let keyword = this.filter.keyword;
      let cnum = this.filter.cnum;
      let number = 0;
      let s_province = this.cityId
      let params = {
        tag,
        keyword,
        cnum,
        number,
        s_province
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
    routerTo: function(id) {
      this.$router.push({
        name: 'insdetails',
        params: {
          id
        }
      })
    },
    async moreData() {
      let number = this.datalist.length;
      let last_id = this.datalist[number - 1].id;
      let tag = 'mechanism_list'
      let params = {
        number,
        last_id,
        tag
      }
      let res = await _api.search(params)
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
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.more();
      }, 2500);
    },
  },
  computed: {  
    keyword: function() {
      return this.$store.state.search.keyword;
    },
    classify: function() {
      return this.$store.state.search.classify;
    }
  },
  watch: {
    classify: function(newVal, oldVal) {
      let _this = this;
      if (newVal != oldVal) {
        this.filter.keyword = _this.$store.state.search.keyword;
        this.filter.cnum = newVal
        this.getData()
        this.mint.Indicator.open('加载中...');
      }
    },
    keyword: function(newVal, oldVal) {
      let _this = this;
      if (newVal != oldVal) {
        this.filter.keyword = newVal
        this.filter.cnum = _this.$store.state.search.classify
        this.getData()
        this.mint.Indicator.open('加载中...');
      }
    }
  }
}
</script>

<style scoped lang="less">
.selectBox {
    position: absolute;
    z-index: 996;
    background-color: #fff;
    width: 100%;
    /*border-bottom: .05rem solid #e4e4e4;*/
    box-shadow: 0.25rem 0.25rem 1rem #e4e4e4;
    height: 0;
    overflow: hidden;
    .wrapper {
        height: 25rem;
        overflow: hidden;
    }
    li {
        padding: 1.5rem 2rem;
        border-bottom: 0.05rem solid #e4e4e4;
        font-size: 1.3rem;
    }
}
.h-institutionwapper {
    .p-fixed {
        top: 5rem;
    }
    .institutionarrow {
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        right: 30%;
        top: 50%;
        transform: translateY(-50%);
    }
    .arrow {
        width: 100%;
        height: 100%;
        transform-origin: 50% 50%;
    }
    .active {
        .arrow {
            transform: rotate(-180deg);
            -ms-transform: rotate(-180deg);
            /* IE 9 */
            -webkit-transform: rotate(-180deg);
            /* Safari and Chrome */
            -o-transform: rotate(-180deg);
            /* Opera */
            -moz-transform: rotate(-180deg);
            /* Firefox */
        }
        > div {
            color: #818181;
            font-size: 1.33rem;
        }
    }
    .filtratenavbox {
        height: 5rem;
        line-height: 5rem;
        overflow: hidden;

        li {
            width: 50%;
            float: left;
            text-align: center;
            font-size: 1.33rem;
            position: relative;
            color: #818181;
        }
    }
}
.institution-datalist .big-datalist {
    .content-scroll {
        top: 10.1rem;
        padding-bottom: 5rem;
    }

    .list-title {
        margin-bottom: 1rem;
        padding-bottom: 0;
    }
}

.usercollect-datalist .big-datalist .list-title {
    margin-bottom: 1rem;
    padding-bottom: 0;
}
</style>
