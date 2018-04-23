<template>
<div class="classdetailswapper" v-if="pageShow==true">
  <div class="classdetailsbox font28">
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">课程内容</div>
        </li>
        <li>
          <div class="tag-content">
            {{dataInfo.content}}
          </div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">课次</div>
        </li>
        <li>
          <div class="tag-content">
            {{dataInfo.frequency}}
          </div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">课程要求</div>
        </li>
        <li>
          <div class="tag-content">
            {{dataInfo.requirement}}
          </div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">上课时间</div>
        </li>
        <li>
          <div class="tag-content">
            {{dataInfo.sj}}
          </div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">地点</div>
        </li>
        <li>
          <div class="tag-content">
            {{dataInfo.dd}}
          </div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag">
      <ul>
        <li>
          <div class="tag-title f-left font32">课程费用</div>
        </li>
        <li>
          <div class="tag-content">
            <span>{{dataInfo.cost}}</span> / 课程
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="submit btn" @click="routerTo" v-if="type!=2">课程报名</div>
</div>
</template>
<script>
export default {
  name: "classdetails",
  data() {
    return {
      dataInfo: {},
      type: 1,
      pageShow: false
    }
  },
  methods: {
    routechange() {
      let _this = this;
      let id = this.$route.params.id;
      if (id != '') {
        _this.getData(id)
      }
      this.type = this.$store.state.user.type;
    },
    async getData(id) {
      let params = {
        id
      }
      const res = await _api.tcourse(params)
      this.mint.Indicator.close();
      this.pageShow = true;
      this.$emit('insInfo', '')
      if (res.status == 200) {
        this.dataInfo = res.data.tcourse;
      } else {
        this.mint.Toast('服务器繁忙')
      }
    },
    routerTo() {
      let verify = this.verify.isLogin();
      if (verify) {
        let id = this.dataInfo.id;
        this.$router.push({
          name: 'orderapply',
          params: {
            id
          }
        })
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    }
  },
  mounted() {
    this.mint.Indicator.open('加载中...');
    this.routechange()
  }
}
</script>
