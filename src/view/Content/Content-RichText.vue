<template>
<section class="richtextwapper white_bg">
  <div class="richtextbox">
    <div class="richtext-top">
      <div class="richtext-title font36">{{richtextData.title}}</div>
      <div class="appraise-top">
        <div class="userinfo f-left">
          <div class="username font28 f-left">{{richtextData.author}}</div>
          <div class="appraisetime font28">
            <div class="data f-left">{{richtextData.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="richtext-bottom" v-html="richtextData.content">
      {{richtextData.content}}
    </div>
  </div>
</section>
</template>
<script>
export default {
  name: "richtext",
  data() {
    return {
      richtextData: ""
    }
  },
  methods: {
    routechange() {
      let _this = this;
      let docId = this.$route.params.docid;
      if (docId != '') {
        _this.getData(docId)
      }
    },
    async getData(id) {
      let params = {
        id
      }
      let res = await _api.richtext_detail(params)
      console.log(res)
      document.title = res.data.title
      this.richtextData = res.data;
    }
  },
  mounted() {
    this.routechange()
  }
}
</script>
<style lang="less">
#app{
    background-color: #fff;
}
.richtextbox {
    margin: 0 1.4rem 5rem;
    overflow: hidden;
    .richtext-title {
        margin: 1.2rem 0;
    }
    .appraise-top {
        margin: 0 0 1.2rem;
        height: auto;
        overflow: hidden;
    }
}
</style>
