<template>
<div class="body" id="homewarpper">
  <!-- 添加心得 -->
  <mt-popup v-model="popdownshow" position="top" :closeOnClickModal="ClickModal">
    <newvegas></newvegas>
  </mt-popup>
  <header>
    <search v-if="search" @click="routerTo('hotsearch')"></search>
    <section class="classifynavbox white_bg b-cutline" v-if='classifyshow'>
      <scroll class="wrapper " :scrollX="scrollX" :pulldown="pulldown" :scrollXWidth="scrollXWidth" :click="true">
        <div v-for="(item,index) in classify" class="font32 item-nav" ref="itemnav" :class="{active:thisclassify==item.value}" @click="classifyid(item)">
          <a href="javascript:;">{{item.value}}</a>
        </div>
        </ul>
      </scroll>
    </section>
  </header>
  <div id="homecontent">
    <router-view/>
  </div>
  <footer id="bottomList">
    <ul>
      <li :class="{active:activename==item.routename}" @click="routerTo(item.routename)" v-for="(item,index) in navlist">
        <!-- <div class="redtag" v-if="newMessage==true"></div> -->
        <div class="navlist" :class="'homeicon-'+item.iconnum">
        </div>
        <div class="navtitle">{{item.title}}</div>
      </li>
    </ul>
  </footer>
</div>
</template>
<script>
import scroll from '@/components/ModuleTools/Module-Xscroll'
import search from '@/components/ModuleTools/Module-Searchinput'
import newvegas from '@/components/ModuleDataView/Module-NewVegas'
export default {
  name: 'home',
  data() {
    return {
      navlist: [{
        title: '首页',
        routename: 'HomeIndex',
        iconnum: '1'
      }, {
        title: '课堂',
        routename: 'HomeClassroom',
        iconnum: '2'
      }, {
        title: '艺考圈',
        routename: 'HomeSinayikao',
        iconnum: '3'
      }, {
        title: '院校',
        routename: 'HomeSchool',
        iconnum: '4'
      }, {
        title: '机构',
        routename: 'HomeInstitution',
        iconnum: '5'
      }],
      newMessage: false,
      search: false,
      classifyshow: false,
      tabnav: '',
      scrollX: true,
      scrollXWidth: 0,
      pulldown: false,
      classify: '',
      thisclassify: '全部',
      popdownshow: false,
      ClickModal:false
    }
  },
  components: {
    scroll,
    search,
    newvegas
  },
  created() {
    let id = 0;
    let value = '全部'
    this.classify = _$.classify()
    this.classify.unshift({
      id,
      value
    })
  },
  methods: {
    routechange() {
      let route = this.$route.name
      if (typeof(route) != 'string') {
        route = "home"
      }
      if (route != 'HomeIndex') {
        this.mint.Indicator.open('加载中...');
        this.search = true;
      } else {
        this.mint.Indicator.close();
        this.search = false;
      }
      if (route == 'HomeClassroom' || route == 'HomeSinayikao') {
        this.classifyshow = true;
        setTimeout(() => {
          this._setSliderWidth();
        }, 20)
      } else {
        this.classifyshow = false;
      }
      this.$store.commit('routename', route);
      let keyword = "";
      let classify = 0;
      let search = {
        keyword,
        classify
      }
      this.$store.commit('search', search);
    },
    _setSliderWidth() {
      let item = this.$refs.itemnav;
      let width
      for (var i = 0; i < item.length; i++) {
        width = item[i].clientWidth;
      }
      this.scrollXWidth = width
    },
    classifyid(item) {
      this.thisclassify = item.value;
      this.$store.commit('classify', item.id)
    },
    routerTo(name) {
      this.$router.push({
        name
      })
    }
  },
  mounted() {
    this.routechange();
    this.newMessage = DEFAULT_DATA.notifyNum;
  },
  watch: {
    $route() {
      this.routechange();
    },
    // 如果发生改变则赋值
    popdownboxStatus: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.popdownshow = newVal;
        console.log(this.mint.Popup)
      }
    }
  },
  computed: {
    activename: function() {
      return this.$store.state.routename;
    },
    // 实时监测vuex里显示状态的数据变化
    popdownboxStatus: function() {
      return this.$store.state.popdownshow;
    },
    mintPopChange(){
      console.log(this.mint.Popup)
    }
  },
}
</script>
<style scoped lang="less">
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
#homecontent {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
#bottomList {
    position: fixed;
    bottom: 0;
    overflow: hidden;
    border-top: solid 0.12rem #e0e0e0;
    width: 100%;
    height: 5rem;
    z-index: 997;
    background-color: #fff;
    ul {
        li {
            text-align: center;
            float: left;
            padding: 0.65rem 0 0.6rem;
            width: 20%;
            position: relative;
            .navlist {
                width: 2.4rem;
                height: 2.4rem;
                margin: 0 auto 0.4rem;
            }

            .navtitle {
                font-size: 0.9rem;
            }
        }

    }
    .entrance img {
        width: 100%;
        height: 12rem;
    }
}
.redtag {
    position: absolute;
    left: 4rem;
    top: 0.5rem;
}
#homewarpper {
    .mint-search {
        height: auto;
    }
}
.classifynavbox {
    width: 100%;
    overflow: hidden;
    position: relative;
    .item-nav {
        width: 6.25rem;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
    }
    a {
        padding-bottom: 1rem;
    }
    .active a {
        border-bottom: 0.24rem solid #3c99f7;
        color: #3c99f7;
    }
}
.mint-popup-top {
    width: 100%;
    height: auto;
}
</style>
