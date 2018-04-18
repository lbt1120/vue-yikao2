<template>
<div class="userbanner">
  <div class="user-headimg" @click="routerTo(1)">
    <slot name="user-avatar"></slot>
    <!-- <img :src="userlogin.avatar" alt=""> -->
  </div>
  <div class="user-name font32" @click="routerTo(1)">
    <slot name="user-name"></slot>
    <!-- {{userlogin.name}} -->
  </div>
  <div class="user-tag">
    <slot name="user-city"></slot>/
    <slot name="user-classify"></slot>
    <!-- <span>{{userlogin.s_province|city}}</span>/
    <span v-for="item in userlogin.curriculum" v-if="pageName=='home_user'">{{item|classify}}</span>
    <span v-for="item in userlogin.classid" v-if="pageName=='ins'">{{item|classify}}</span> -->
  </div>
  <slot name="userlogin">
  </slot>
</div>
</template>
<script>
export default {
  name: "userbanner",
  data() {
    return {}
  },
  methods: {
    routerTo(routetype) {
      if (this.$route.name === 'HomeUser') {
        let routeName = this.$route.name;
        let type = this.$store.state.user.type;
        this.$router.push({
          name: 'UserInfo',
          params: {
            changetype: 'changeuser',
            type
          }
        })
      }
    }
  },
  computed: {},
  watch: {},
}
</script>
<style scope>
.userbanner a {
  color: #fff;
  font-size: 1.333rem;
}
</style>
