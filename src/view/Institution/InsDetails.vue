<template>
<div class="insdetailswapper" v-if="pageShow==true">
  <div class="insdetailsbox">
    <div class="databox li-tag insdetails-class">
      <ul>
        <li>
          <div class="tag-title f-left font32">精品课程</div>
        </li>
        <li v-for="(item,index) in insInfo.tcourse" @click='routerTo(item)'>
          <div class="tag-content">
            <div class="list-title font32">{{item.name}}</div>
            <div class="list-profession font28 text-overflow row1">
              <span>{{item.content}}</span>
            </div>
            <div class="list-intro">
              <div class="price f-left font28">
                <span>{{item.cost}}</span>元/课程
              </div>
              <div class="list-tag f-left">
                已报名
                <span>{{item.num}}</span>人
              </div>
            </div>
          </div>
          <div class="tag-arrow"></div>
        </li>
      </ul>
    </div>
    <div class="databox li-tag font28">
      <ul>
        <li>
          <div class="tag-title f-left font32">机构简介</div>
        </li>
        <li v-if="bannerlist!=null">
          <v-swiper :datalist="bannerlist"></v-swiper>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">教授</div>
            <div class="tag-content f-left">
              <span v-for="(item,index) in insInfo.classid">{{item|classify}}</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">地址</div>
            <div class="tag-content f-left">
              {{insInfo.address}}
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">电话</div>
            <div class="tag-content f-left">
              {{insInfo.tel}}
            </div>
          </div>
        </li>
        <li>
          <div class="taglist morecontent">
            <div class="tag-title f-left">简介</div>
            <div class="tag-content  f-left">
              {{insInfo.intro}}
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">认证</div>
            <div class="tag-content f-left">
              <span>{{insInfo.addtime}}</span> 在艺考平台认证机构
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="morebtn btn" @click='insArticles'>查看机构心得</div>
</div>
</template>
<script>
import swiper from '@/components/ModuleSwiper/Swiper-home'
export default {
  name: 'institutiondetails',
  data() {
    return {
      likebtn: true,
      listtitle: true,
      insInfo: [{
        address: '',
        intro: '',
        classid: [],
        tcourse: [{
          name: '',
          content: '',
          cost: '',
          num: ''
        }]
      }],
      bannerlist: null,
      pageShow: false
    }
  },
  mounted() {
    this.routechange();
  },
  components: {
    "v-swiper": swiper,
  },
  methods: {
    routechange() {
      let data = this.$route.params.id;
      this.getData(data)
    },
    async getData(id) {
      this.mint.Indicator.open('加载中...');
      let params = {
        id
      }
      const res = await _api.ins_details(params)
      this.mint.Indicator.close();
      this.pageShow = true;
      if (res.status == 200) {
        this.bannerlist = res.data.mechanism[0].slide;
        this.insInfo = res.data.mechanism[0]
        localStorage.setItem('checkInfo', JSON.stringify(this.insInfo));
        this.$emit('insInfo', this.insInfo)
      } else {
        this.mint.Toast('服务器繁忙')
      }
    },
    routerTo(item) {
      let id = item.id;
      this.$router.push({
        name: 'classdetails',
        params: {
          id
        }
      })
    },
    insArticles() {
      let uid = this.$route.params.id;
      let historypage = 'inspage'
      this.$router.push({
        name: 'userarticles',
        params: {
          uid,
          historypage
        }
      })
    }
  },
}
</script>
<style lang="less">
/*机构详情*/
.insdetailswapper {
    .insdetails-class {
        .tag-content {
            height: auto;
            line-height: normal;
        }
    }
    .tag-arrow {
        position: absolute;
        right: 0;
        top: 50%;
    }
    .price {
        padding: 0.4rem 0.6rem 0.4rem 0;
    }
    .list-title {
        padding-bottom: 1.4rem;
    }
    .list-intro {
        padding-top: 1.4rem;
    }
    .list-tag {
        padding: 0.4rem 0.6rem;
        margin-left: 2rem;
        font-size: 1rem;
    }
    .list-profession {
        width: 80%;
    }
}
</style>
