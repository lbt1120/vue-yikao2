<template>
<div class="commentwapper">
  <div class="comment-content white_bg transition-5s">
    <div class="comment-top b-cutline">
      <div class="datatag">
        <div class="title-box ">
          <div class="title-text font32 f-left">发表评论</div>
          <div class="title-submit font32 f-right">
            <div class="unsubmit b-cutline" v-if="content==''">提交</div>
            <div class="submit b-cutline" v-else @click="submit">提交</div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-middle datatag">
      <textarea name="" id="" cols="30" rows="2" :placeholder="placeholder" v-model="content"></textarea>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {
      usercid: 0,
      content: "",
      placeholder: "请输入评论",
    }
  },
  props: ['option'],
  mounted() {
    this.routerChange();
  },
  methods: {
    submit: async function() {
      var params
      if (this.pagename == 'contenttext') {
        let mid = this.$store.state.contentid;
        let content = this.content;
        let act = 'comment'
        let reply_uid = this.usercid
        let reply_cid = this.cid;
        params = {
          content,
          mid,
          act,
          reply_uid,
          reply_cid
        }
      } else {
        let mid = this.$store.state.contentid;
        let content = this.content;
        params = {
          content,
          mid
        }
      }
      const res = await this.axios.post(this.url, params)
      if (res.data.status == 200) {
        let type = 4
        let params = {
          type
        }
        let task = await _api.intNonu(params)
        this.mint.Toast('评论成功')
        this.mint.Indicator.close()
        this.$store.commit('contentText', res.data.data);
        this.dataDefault();
        this.popuphidden();
      }
    },
    popuphidden: function() {
      this.$store.commit('popupshow', false);
      this.dataDefault();
    },
    dataDefault: function() {
      this.content = "";
    },
    routerChange: function() {
      let name = this.$route.name;
      this.pagename = name
      if (name == 'contenttext') {
        this.url = 'do=circle&op=mood'
      } else {
        this.url = 'do=opclass&op=comment'
      }
    }
  },
  watch: {
    option: function(newVal, oldVal) {
      console.log(newVal)
      let _this = this;
      this.usercid = newVal[0].uid;
      this.cid = newVal[0].cid
      if (this.usercid != 0) {
        this.placeholder = '回复：' + newVal[0].user
      } else {
        this.placeholder = '评论：'
      }
      // if (this.usercid ==0&&newVal[0].uid != oldVal[0].uid) {
      //    this.placeholder = '评论：'
      // }
      if (oldVal != '') {
        if (newVal[0].uid != oldVal[0].uid) {
          _this.dataDefault();
        }
      }
    },
  }
}
</script>
<style scoped lang="less">
.submit {
    background-color: #fff;
    color: #3c99f7;
}
.unsubmit {
    color: #e4e4e4;
}
.commentwapper {
    .comment-content {
        padding-bottom: 4.3rem;
    }
    .title-box {
        height: 5rem;
        line-height: 5rem;
    }
    textarea {
        margin: 1.8rem 0;
        width: 100%;
        height: 8.5rem;
    }
}
</style>
