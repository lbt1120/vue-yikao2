<template>
<div class="contentwapper wapper">
  <router-view @iscollect="iscollect" @commentuser="commentuser" />
  <div class="content-bottomtag white_bg t-cutline" v-if="contentpage=='contentvideo'">
    <div class="content-commenthint f-left" @click="popupboxshow(1)">我来说一说</div>
    <div class="f-right collected font32" @click="collect(1)" :class="isCollect=='收藏'?'uncollected':'havecollected'">{{isCollect}}</div>
  </div>
  <div class="content-bottomtag white_bg t-cutline" v-if="contentpage=='contenttext'" @click="popupboxshow(1)">
    <div class="content-commenthint f-left">评论楼主</div>
    <div class="havecollected  f-right collected font32">评论</div>
  </div>
  <mt-popup v-model="popupshow" position="bottom" :modal="true">
    <comment :option="option" @popupboxhidden="popupboxhidden"></comment>
  </mt-popup>
</div>
</template>
<script>
import comment from '@/view/Content/Content-Comment'
export default {
  name: 'contentbox',
  data() {
    return {
      contentpage: 'contentvideo',
      isCollect: '收藏',
      popupshow: false,
      option: "",
    }
  },
  components: {
    comment
  },
  methods: {
    popupboxshow(option) {
      let verify = this.verify.isLogin()
      if (verify) {
        if (option !== 1) {
          this.option = option
        } else {
          let uid = 0;
          let user = '楼主'
          let params = {
            uid,
            user
          }
          this.option = params
        }
        this.popupshow = true;
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    },
    popupboxhidden() {
      this.popupshow = false;
    },
    commentuser(option) {
      this.popupboxshow(option)
    },
    routechange() {
      console.log(this.$route.name)
      this.contentpage = this.$route.name;
    },
    async collect(type) {
      let verify = this.verify.isLogin();
      if (verify) {
        let aid = this.$store.state.contentid;
        let params = {
          aid,
          type
        };
        const res = await _api.collect(params);
        this.mint.Toast(res.msg);
        if (res.status == 200) {
          if (res.msg == '收藏成功') {
            this.isCollect = '取消收藏'
          } else {
            this.isCollect = '收藏'
          }
        }
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    },
    iscollect(e) {
      if (e == true) {
        this.isCollect = '取消收藏'
      } else {
        this.isCollect = '收藏'
      }
    }
  },
  mounted() {
    this.routechange();
  },
  watch: {
    $route() {
      this.routechange();
    },
  }
}
</script>
<style lang='less'>
.mint-popup-bottom {
    width: 100%;
}
.content-bottomtag {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    overflow: hidden;
    .content-commenthint {
        width: 60%;
        height: 3.6rem;
        margin: 0.7rem 1.4rem;
        line-height: 3.6rem;
        background-color: #f1f1f1;
        color: #939393;
        border-radius: 0.3rem;
        text-indent: 1em;
    }
    .uncollected {
        border: 0.05rem solid #e0e0e0;
        color: #666666;
    }
    .havecollected {
        background-color: #3c99f7;
        border: 0.05rem solid #3c99f7;
        color: #fff;
    }
    .collected {
        width: 6.95rem;
        height: 3.5rem;
        margin-top: 0.75rem;
        margin-right: 1.4rem;
        line-height: 3.5rem;
        text-align: center;
    }
}
</style>
