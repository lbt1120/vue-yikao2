<template>
  <!-- <div id="bottomList" class="white_bg" style="display:none"> -->
  <div id="bottomList" class="white_bg font20">
    <!-- <ul>
      <li :class="{active:activename=='home'||activename=='home_index'}" @click="routerTo('home_index')">
        <div class="navlist home">
        </div>
        <div class="navtitle">首页</div>
      </li>
      <li :class="{active:activename=='home_classroom'}" @click="routerTo('home_classroom')">
        <div class="navlist classroom">
        </div>
        <div class="navtitle">课堂</div>
      </li>
      <li :class="{active:activename=='home_sinayikao'}" @click="routerTo('home_sinayikao')">
        <div class="navlist message">
        </div>
        <div class="navtitle">艺考圈</div>
      </li>
      <li :class="{active:activename=='home_school'}" @click="routerTo('home_school')">
        <div class="navlist school">
        </div>
        <div class="navtitle">院校</div>
      </li>
      <li :class="{active:activename=='home_institution'}" @click="routerTo('home_institution')">
        <div class="navlist jg">
        </div>
        <div class="navtitle">机构</div>
      </li>
      <li :class="{active:activename=='home_user'}" @click="routerTo('home_user')">
        <div class="redtag" v-if="newMessage==true"></div>
        <div class="navlist userimg">
        </div>
        <div class="navtitle">我的</div>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: 'bottomList',
  data() {
    return {
      newMessage: false
    }
  },
  methods: {
    routerTo: function(name) {
      this.$router.push({ name })
    }
  },
  mounted() {
    // this.newMessage = DEFAULT_DATA.notifyNum;
  },
  computed: {
    // activename: function() {
    //   return this.$store.state.routename;
    // }
  }
}

</script>
<style scoped>
.redtag {
  position: absolute;
  left: 4rem;
  top: .5rem;
}

</style>
