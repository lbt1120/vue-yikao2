<template>
<div class="institutionwapper">
  <userbanner v-if="user!=''">
    <img slot="user-avatar" :src="user.avatar" alt="">
    <div slot="user-name">{{user.name}}</div>
    <span slot="user-city">  {{user.s_province|city}}</span>
    <span slot="user-classify" v-for="item in user.classid">{{item|classify}}</span>
  </userbanner>
  <router-view @insInfo="insInfo" />
</div>
</template>
<script>
import userbanner from '@/components/ModuleDataView/Module-UserBanner'
export default {
  name: 'institution',
  data() {
    return {
      user: ""
    }
  },
  components: {
    userbanner
  },
  mounted() {},
  methods: {
    insInfo(obj) {
      if (obj === '') {
        this.getlocalStorage();
      } else {
        this.user = obj
      }
    },
    getlocalStorage() {
      var checkInfo = localStorage.getItem('checkInfo');
      if (checkInfo != null && checkInfo != "") {
        checkInfo = JSON.parse(localStorage.getItem('checkInfo'));
        this.user = checkInfo
      }
    }
  }
}
</script>
<style lang="less">
.institutionwapper {
    .databox {
        padding: 0;
    }
    li {
        position: relative;
    }
}
</style>
