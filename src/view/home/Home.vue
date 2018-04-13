<template>
<div class="body" id="homewarpper">
  <router-view/>
  <div id="bottomList">
    <ul>
      <li :class="{active:activename=='HomeIndex'}" @click="routerTo('HomeIndex')">
        <div class="navlist home">
        </div>
        <div class="navtitle">首页</div>
      </li>
      <li :class="{active:activename=='HomeClassroom'}" @click="routerTo('HomeClassroom')">
        <div class="navlist classroom">
        </div>
        <div class="navtitle">课堂</div>
      </li>
      <li :class="{active:activename=='HomeSinayikao'}" @click="routerTo('HomeSinayikao')">
        <div class="navlist message">
        </div>
        <div class="navtitle">艺考圈</div>
      </li>
      <li :class="{active:activename=='HomeSchool'}" @click="routerTo('HomeSchool')">
        <div class="navlist school">
        </div>
        <div class="navtitle">院校</div>
      </li>
      <li :class="{active:activename=='HomeInstitution'}" @click="routerTo('HomeInstitution')">
        <div class="navlist jg">
        </div>
        <div class="navtitle">机构</div>
      </li>
      <!-- <li :class="{active:activename=='home_user'}" @click="routerTo('home_user')">
        <div class="redtag" v-if="newMessage==true"></div>
        <div class="navlist userimg">
        </div>
        <div class="navtitle">我的</div>
      </li> -->
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      newMessage: false
    }
  },
  methods: {
    routechange() {
      let route = this.$route.name
      if (typeof(route) != 'string') {
        route = "home"
      }
      if (route != 'HomeIndex') {
        this.mint.Indicator.open('加载中...');
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
    routerTo(name) {
      this.$router.push({
        name
      })
    }
  },
  mounted() {
    this.routechange();
    // this.newMessage = DEFAULT_DATA.notifyNum;
  },
  watch: {
    $route() {
      this.routechange();
    }
  },
  computed: {
    activename: function() {
      return this.$store.state.routename;
    }
  }
}
</script>
<style scoped lang="less">
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
</style>
