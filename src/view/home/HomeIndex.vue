<template>
<div class="wapper homewapper">
  <section class="banner">
  </section>
  <section class="databox white_bg user" :class="userLogin==false?'unLogin':'isLogin'">
    <div class="datatag">
      <div class="title-box" v-if="userLogin==false">
        <div class="user-headimg" @click="routeTo(0)"></div>
        <div class="title-text font32">
          <div>未登录</div>
          <div>点击头像登陆</div>
        </div>
        <div class="title-more font28">
          <div class="tag-arrow f-left"></div>
        </div>
      </div>
      <div class="title-box" @click="routeTo(6)" v-else>
        <div class="user-headimg">
          <img :src="user.avatar" alt="">
        </div>
        <div class="title-text font32">
          <div>{{user.name}}</div>
        </div>
        <div class="title-more font28">
          <div class="tag-arrow f-left"></div>
        </div>
      </div>
    </div>
  </section>
  <section v-for="(item,index) in tagdata" class="databox white_bg" :class="item.datatable?'':'entrance'">
    <div class="datatag" v-if='item.datatable'>
      <div class="title-box">
        <div class="index_titleTag"></div>
        <div class="title-text font32">{{item.title}}</div>
        <div class="title-more font28" @click="routeTo(item.num)">
          <div class="f-left">更多</div>
          <div class="tag-arrow f-left"></div>
        </div>
      </div>
      <v-datalist :datalist="topDatalist" :showmany="showmany" v-if="item.datatablename=='topDatalist'"></v-datalist>
      <!-- <v-datatable :dataType="'video'" :videodata="classDatalist" v-if="item.dataType=='video'"></v-datatable> -->
      <!-- <v-datatable :dataType="'text'" :textdata="institutionDatalist" v-if="item.dataType=='text'"></v-datatable> -->
    </div>
    <img :src="know_banner" alt="" v-else  @click="routeTo(item.num)">
  </section>
</div>
</template>
<script>
// import swiper from '../swiper/Swiper-home'
import datalist from '@/components/ModuleDataView/Module-DataList'
// import datatable from '../moduleList/Data-table'
export default {
  name: 'HomeIndex',
  data() {
    return {
      tagdata: [{
          title: "艺考头条",
          num: 1,
          template: true,
          datatable: true,
          datatablename: 'topDatalist'
        },
        {
          title: "功能模块",
          num: 5,
          template: false,
          datatable: false,
        },
        {
          title: "推荐公开课",
          num: 2,
          template: true,
          dataType: 'video',
          datatable: true,
          datatablename: 'classDatalist'
        },
        {
          title: "推荐机构",
          num: 3,
          template: true,
          dataType: 'text',
          datatable: true,
          datatablename: 'institutionDatalist',
        }
      ],
      bannerlist: "",
      topDatalist: "",
      classDatalist: "",
      institutionDatalist: "",
      showmany: 3,
      userLogin: false,
      know_banner:'https://yikao.baolanbb.com/attachment/knowledge_category/banner.png',
      user: {
        name: '',
        avatar: ''
      }
    }
  },
  components: {
    // "v-swiper": swiper,
    "v-datalist": datalist,
    // "v-datatable": datatable,
  },
  methods: {
    routeTo(type) {
      var data = null,
        pathname = 'home_index';
      pathname = this.apiArr(type).pathname;
      if (type == 1) {
        data = this.topDatalist;
      }
      this.$router.push({
        name: pathname,
        params: {
          data
        }
      })
    },
    apiArr(type) {
      let api = [{
          num: 0,
          name: 'login'
        },
        {
          num: 1,
          name: 'moreDataList'
        },
        {
          num: 2,
          name: 'home_classroom'
        },
        {
          num: 3,
          name: 'home_institution'
        },
        {
          num: 4,
          name: 'moreDataList'
        },
        {
          num: 5,
          name: 'repository-home'
        },
        {
          num: 6,
          name: 'home_user'
        },
      ]
      var pathname;
      for (let i = 0; i < api.length; i++) {
        if (api[i].num == type) {
          pathname = api[i].name
        }
      }
      let data = {
        pathname
      }
      return data;
    },
    getData() {
      let imgsrc = 'https://yikao.baolanbb.com/attachment/images/6/2018/01/SU30u4Fx40DSfPUx5r08WR8kw504O3.png'
      this.topDatalist = DEFAULT_DATA.topDatalist;
      this.bannerlist = DEFAULT_DATA.bannerlist;
      this.classDatalist = DEFAULT_DATA.classDatalist;
      this.institutionDatalist = DEFAULT_DATA.institutionDatalist;
      this.know_banner = DEFAULT_DATA.know_banner
      console.log(DEFAULT_DATA)
    },
    userInfo() {
      var user = this.$store.state.user;
      if (user == '') {
        this.userLogin = false;
      } else {
        this.userLogin = true;
        this.user = user
      }
    },
  },
  mounted() {
    this.getData();
    this.userInfo();
  }
}
</script>
<style scoped lang="scss">
.homewapper {
    padding-bottom: 5rem;
    .user {
        .user-headimg {
            width: 3.4rem;
            height: 3.4rem;
            border-radius: 50%;
            overflow: hidden;
            background: url("/static/image/icon/default-user.png") no-repeat;
            background-size: 100%;
        }
        .title-box {
            .title-text {
                font-size: 1.4rem;
                color: #666666;
                div {
                    &:nth-child(2) {
                        color: #999999;
                        font-size: 1.2rem;
                        margin-top: 0.6rem;
                    }
                }
            }
            .title-more {
                margin-top: 1rem;
            }
        }
    }
    .isLogin {
        .title-text {
            line-height: 3.4rem;
            font-size: 1.4rem;
            font-weight: 800;
        }
    }
    .tag-arrow {
        margin-top: 0;
    }
    .index_titleTag {
        width: 0.25rem;
        height: 1.2rem;
        margin-top: 0.3rem;
    }
    .entrance {
        padding:0;
        img {
            width: 100%;
            height: 12rem;
        }
    }
}
</style>
