<template>
<div class="userwapper wapper font28">
  <userbanner>
    <img slot="user-avatar" :src="user.avatar" alt="" >
    <div slot="user-name">{{user.name}}</div>
    <span slot="user-city">  {{user.s_province|city}}</span>
    <span slot="user-classify" v-for="item in user.curriculum" >{{item|classify}}</span>
  </userbanner>
  <div class="databox usertag li-tag">
    <ul>
      <li @click="routerTo(item.routename)" v-for="(item,index) in tagdata" v-if="item.num<4">
        <div class="usertag-list">
          <div class="usernavicon" :class="'usernav-'+item.num"></div>
          <div class="tag-title f-left">{{item.title}}</div>
          <div class="tag-content f-right">
            <div class="tag-val f-left"></div>
            <div class="tag-arrow f-left"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="databox usertag li-tag">
    <ul>
      <li @click="routerTo(item.routename)" v-for="(item,index) in tagdata" v-if="item.num>3">
        <div class="usertag-list">
          <div class="usernavicon" :class="'usernav-'+item.num"></div>
          <div class="tag-title f-left">{{item.title}}</div>
          <div class="tag-content f-right">
            <div class="tag-val f-left"></div>
            <div class="tag-arrow f-left"></div>
          </div>
        </div>
      </li>
      <li v-if="user.type==2" @click="routerTo('studentlist')">
        <div class="usertag-list">
          <div class="usernavicon usernav-6"></div>
          <div class="tag-title f-left">我的学生</div>
          <div class="tag-content f-right">
            <div class="tag-val f-left"></div>
          </div>
        </div>
      </li>
      <li @click="test()">
        <div class="usertag-list">
          <div class="usernavicon usernav-6"></div>
          <div class="tag-title f-left">我的学生</div>
          <div class="tag-content f-right">
            <div class="tag-val f-left"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import userbanner from '@/components/ModuleDataView/Module-UserBanner'
export default {
  name: 'home-user',
  data() {
    return {
      user: "",
      tagdata: [{
          title: "我的积分",
          num: 1,
          routename: 'signin'
        },
        {
          title: "我的订单",
          num: 2,
          routename: 'orderlist'
        },
        {
          title: "我的心得",
          num: 3,
          routename: 'userarticles'
        },
        {
          title: "我的收藏",
          num: 4,
          routename: 'usercollect'
        },
        {
          title: "我的消息",
          num: 5,
          routename: 'usermessage'
        }
      ],
      newMessage: false
    }
  },
  components: {
    userbanner
  },
  methods: {
    userInfo: function() {
      this.user = this.$store.state.user;
      console.log(this.user)
    },
    routerTo: function(name) {
      if (name == 'userarticles') {
        let uid = this.$store.state.user.uid
        let historypage = 'homeuser'
        this.$router.push({
          name,
          params: {
            uid,
            historypage
          }
        })
      } else {
        this.$router.push({
          name
        })
      }
    },
    test: async function() {
      let params = {}
      const res = await _api.user_message(params)
    }
  },
  mounted() {
    this.userInfo();
    this.newMessage = DEFAULT_DATA.notifyNum;
  }
}
</script>
<style scoped lang="less">
.userwapper {
    .databox {
        padding: 0;
    }
}
.usernavicon .redtag {
    position: absolute;
    left: 1.9rem;
    top: 1rem;
}

.tag-arrow {
    margin-top: 0.5rem;
}
</style>
