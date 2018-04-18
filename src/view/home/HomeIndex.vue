<template>
<div class="wapper homewapper">
  <!-- 轮播图 -->
  <section class="banner">
    <v-swiper :datalist="bannerlist"></v-swiper>
  </section>
  <!-- 用户信息 -->
  <section class="databox white_bg user" :class="userLogin==false?'unLogin':'isLogin'">
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
  </section>
  <!-- 循环标签列表 -->
  <section v-for="(item,index) in tagdata" class="databox white_bg" :class="item.datatable?'':'entrance'">
    <div v-if='item.datatable'>
      <div class="title-box">
        <div class="index_titleTag"></div>
        <div class="title-text font32">{{item.title}}</div>
        <div class="title-more font28" @click="routeTo(item.num)">
          <div class="f-left">更多</div>
          <div class="tag-arrow f-left"></div>
        </div>
      </div>
      <v-datalist :datalist="topDatalist" :showmany="showmany" v-if="item.datatable=='list'"></v-datalist>
      <div class="table-box" v-if="item.datatable=='table'">
        <ul>
          <!-- 视频循环这个LI -->
          <li class="f-left" v-if="item.dataType=='video'" v-for="(classData,index) in classDatalist" @click="routerTo(item.id)">
            <div class="f-left dataimg">
              <img :src="classData.poster" alt="">
              <div class="integral" v-if="classData.integral==0">免费</div>
              <div class="integral" v-else>{{classData.integral}} 积分</div>
            </div>
            <div class="f-left detailsbox">
              <div class="table-title font32 text-overflow row2">{{classData.title}}</div>
            </div>
          </li>
          <!-- 机构循环这个LI -->
          <li class="f-left" v-if="item.dataType=='text'" v-for="(ins,index) in institutionDatalist" @click="routerTo(item.id)">
            <div class="f-left dataimg">
              <img :src="ins.poster" alt="">
            </div>
            <div class="f-left detailsbox">
              <div class="table-title font32">
                <p class="text-overflow row1">{{ins.title}}</p>
              </div>
              <div class="table-tag font28">
                <div class="table-city f-left">{{ins.city}}</div>
              </div>
              <div class="table-explain text-overflow row1 font24">
                <p class="text-overflow row1">{{ins.introduce}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <img :src="know_banner" alt="" v-if="item.template==false" @click="routeTo(item.num)">
  </section>
</div>
</template>
<script>
import datalist from '@/components/ModuleDataView/Module-DataList'
import swiper from '@/components/ModuleSwiper/Swiper-home'
export default {
  name: 'HomeIndex',
  data() {
    return {
      tagdata: [{
          title: "艺考头条",
          num: 1,
          template: true, //是否需要模板
          datatable: 'list', //模板类型（list-列表  table-表格）
          dataType: 'list', //数据类型
          datatablename: 'topDatalist'
        },
        {
          title: "功能模块",
          num: 4,
          template: false,
          datatable: false,
        },
        {
          title: "推荐公开课",
          num: 2,
          template: true,
          dataType: 'video',
          datatable: 'table',
          datatablename: 'classDatalist'
        },
        {
          title: "推荐机构",
          num: 3,
          template: true,
          dataType: 'text',
          datatable: 'table',
          datatablename: 'institutionDatalist',
        }
      ],
      bannerlist: "",
      topDatalist: "",
      classDatalist: "",
      institutionDatalist: "",
      showmany: 3,
      userLogin: false,
      know_banner: 'https://yikao.baolanbb.com/attachment/knowledge_category/banner.png',
      user: {
        name: '',
        avatar: ''
      }
    }
  },
  components: {
    "v-swiper": swiper,
    "v-datalist": datalist,
  },
  methods: {
    routeTo(type) {
      console.log(type)
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
          name: 'moreData'
        },
        {
          num: 2,
          name: 'HomeClassroom'
        },
        {
          num: 3,
          name: 'HomeInstitution'
        },
        {
          num: 4,
          name: 'repository-home'
        },
        {
          num: 5,
          name: 'HomeUser'
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
<style scoped lang="less">
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
        padding: 0;
        img {
            width: 100%;
            height: 12rem;
        }
    }
}
.table-box {
    ul li {
        width: 48%;
        margin-bottom: 1rem;
        &:nth-child(even) {
            margin-left: 1rem;
        }
    }
    .dataimg {
        position: relative;
        height: 10.75rem;
    }
    .integral {
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;
        background-color: #3c99f7;
        padding: 0.25rem 1rem;
        font-size: 1rem;
        border-top-left-radius: 0.6rem;
    }
    .detailsbox {
        width: 100%;
        margin: 0.8rem 0;
    }
    .table-tag {
        margin: 0.6rem 0 1rem;
        overflow: hidden;
    }
    .table-explain {
        color: #999999;
    }
}
</style>
