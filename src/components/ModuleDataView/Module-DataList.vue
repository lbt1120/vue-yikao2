<template>
<div class="list-box">
  <ul v-if="showMany=='all'">
    <li class="b-cutline" v-for="(item,index) in datalist" :data-id="item.id">
      <div class="f-left dataimg">
        <img :src="item.cover" alt="">
      </div>
      <div class="f-left topinfo">
        <div class="list-title font32" @click="routeTo(item)">{{item.title}}</div>
        <div class="list-intro font28">
          <span class="f-left author">{{item.author}}</span>
          <span class="f-left">{{item.time}}</span>
          <div class="f-right collectbtn" @click="collect(item.id,2)" :class="item.collect==true?'icon-collect':'icon-uncollect'">
            <span>收藏</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <ul v-else>
    <li class="b-cutline" v-for="(item,index) in datalist" v-if="index<showMany" :data-id="item.id">
      <div class="f-left dataimg">
        <img :src="item.poster" alt="">
      </div>
      <div class="f-left topinfo">
        <div class="list-title font32" @click="routeTo(item)">{{item.title}}</div>
        <div class="list-intro font28">
          <span class="f-left author">{{item.author}}</span>
          <span class="f-left addtime">{{item.time}}</span>
          <div class="f-right  collectbtn" :class="item.collect==true?'icon-collect':'icon-uncollect'" @click="collect(item.id,2)">
            <span>收藏</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "newslist",
  data() {
    return {
      showMany: 'all'
    }
  },
  props: ['datalist', 'showmany'],
  methods: {
    routeTo: function(item) {
      let docid = item.id
      let title = item.title
      this.$router.push({
        name: 'contentrichtext',
        params: {
          docid
        }
      })
    },
    show: function() {
      if (this.showmany != undefined) {
        this.showMany = this.showmany;
      }
    },
    collect: async function(aid, type) {
      let verify = this.verify.isLogin();
      if (verify) {
        let params = {
          aid,
          type
        };
        let dataArr = this.datalist
        const res = await _api.collect(params);
        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i].id == aid) {
            if (dataArr[i].collect) {
              dataArr[i].collect = false
            } else {
              dataArr[i].collect = true
            }
          }
        }
      } else {
        this.$router.push({
          name: 'login'
        })
      }

    },
  },
  mounted() {
    this.show();
  }
}
</script>
<style scoped lang="less">
.author {
    margin-right: 1rem;
}

.list-box {
    .dataimg {
        width: 26%;
        height: 7rem;
        margin-right: 1.2rem;
    }
}
</style>
