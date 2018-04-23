<template>
<div class="contentvideowapper">
  <div v-if="pageShow==true">
    <div class="content-top" ref="videotop">
      <!-- <v-video :dataObj="videoData" v-if="canWatch==true"></v-video> -->
      <video controls preload :poster="videoData.cover" v-if="canWatch==true" id="video">
          <source :src="videoData.src" type="video/mp4">
          </object>
        </video>
      <div v-if="canWatch==false" class="videoZz">
        <div class="videoHint" v-if="userlogin==true">
          <p>获得积分{{power}}+以上可播放此视频</p>
          <p class="underLine">
            <router-link :to="{name:'signin'}">去赚积分</router-link>
          </p>
        </div>
        <div class="videoHint" v-if="userlogin==false">
          <p>此课程非免费，请先登录</p>
          <p class="underLine">
            <!-- <router-link :to="{name:'login'}">去登陆</router-link> -->
          </p>
        </div>
      </div>
      <div class="contentnav-tab b-cutline">
        <ul>
          <li :class="{active:pagename=='intro'}" @click="changetab('intro')">
            <a href="javascript:;">简介</a>
          </li>
          <li :class="{active:pagename=='catalogue'}" @click="changetab('catalogue')">
            <a href="javascript:;">目录</a>
          </li>
          <li :class="{active:pagename=='appraise'}" @click="changetab('appraise')">
            <a href="javascript:;">评价</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-bottom">
      <div class="content-scroll">
        <div class="introwapper" v-if="pagename=='intro'">
          <div class="contenttitle-box  white_bg">
            <div class="datatag">
              <div class="content-title">
                <span v-for="(item,index) in datalist.verb.classid" v-if="index<datalist.verb.classid.length-1">{{item|classify}}、</span>
                <span v-for="(item,index) in datalist.verb.classid" v-if="index==datalist.verb.classid.length-1">{{item|classify}}</span>
                <span>|</span>
                <span>{{datalist.verb.title}}</span>
              </div>
              <div class="video-number">课时：
                <span>{{datalist.verb.ophourNum}}</span>
              </div>
            </div>
          </div>
          <div class="contentoverview  white_bg ">
            <div class="title-box b-cutline">
              <div class="datatag">
                <div class="title-text font32">课程概述</div>
              </div>
            </div>
            <div class="content-box datatag">
              <div class="content font28">
                {{datalist.verb.introduction}}
              </div>
            </div>
          </div>
          <div class="contentspeaker  white_bg ">
            <div class="title-box b-cutline">
              <div class="datatag">
                <div class="title-text font32">主讲</div>
              </div>
            </div>
            <div class="content-box datatag">
              <div class="speaker">
                <div class="speakerimg">
                  <img :src="datalist.verb.avatar" alt="">
                </div>
                <div class="speakername">
                  {{datalist.verb.author}}
                </div>
              </div>
              <div class="content font28">
                {{datalist.verb.sitd}}
              </div>
            </div>
          </div>
        </div>
        <!-- <v-intro v-if="pagename=='intro'"></v-intro> -->
        <div class=" catalogwapper white_bg" v-if="pagename=='catalogue'">
          <div class="catalogbox">
            <ul>
              <li :class="{active:index==Index,firstLi:index==0}" v-for="(item,index) in datalist.ophour" @click="choice(item,index)">
                <div class="catalogtag tag"></div>
                <div class="title ">{{item.catalog}}</div>
                <div class="time">1分30秒</div>
                <div class="b-cutline"></div>
              </li>
            </ul>
          </div>
        </div>
        <v-appraise v-if="pagename=='appraise'&&datalist.comment.length!==0" :datalist="datalist.comment" :canRoute="canRoute"></v-appraise>
        <notfound v-if="pagename=='appraise'&&datalist.comment.length===0" :style="{height:bottomHeight+'px'}">还没有人评论</notfound>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import appraise from '@/components/ModuleDataView/Module-Appraise';
import scroll from '@/components/ModuleTools/Module-Yscroll';
export default {
  name: 'content-video',
  data() {
    return {
      pulldown: true,
      userlogin: false,
      pagename: 'intro',
      Index: 0,
      likebtn: false,
      listtitle: false,
      canRoute: false,
      bottomHeight: 0,
      datalist: {
        verb: {
          title: "",

        }
      },
      videoData: {
        src: "",
        cover: ""
      },
      canWatch: '',
      power: 0,
      pageShow: false
    }
  },
  components: {
    "v-appraise": appraise,
    scroll
  },
  mounted() {
    this.routechange();
    this.mint.Indicator.open('加载中...');
    this.widowSize()
  },
  methods: {
    // 窗口大小
    widowSize() {
      let _this = this,
        windowHeight = window.screen.availHeight;
      setTimeout(() => {
        let videotop = _this.$refs.videotop.offsetHeight;
        this.bottomHeight = windowHeight - videotop - 62
      }, 1000)
    },
    changetab(tab) {
      this.pagename = tab
    },
    routechange() {
      let contid = this.$route.params.docid
      this.$store.commit('contentid', Number(contid))
      this.getData(contid)
    },
    async listen(listentype) {
      let type = listentype;
      let params = {
        type
      }
      let res = await _api.intNonu(params)
    },
    verifyLogin() {
      let verify = this.verify.isLogin();
      if (verify == false && this.power == 0) {
        this.userlogin = true
      } else if (verify == false && this.power != 0) {
        this.userlogin = false
      } else if (verify == true) {
        this.userlogin = true
      }
    },
    async getData(contid) {
      let _this = this;
      let id = contid
      let params = {
        id
      }
      const res = await _api.lesson_details(params)
      console.log(res)
      this.mint.Indicator.close();
      if (res.status == 200) {
        this.datalist = res.data
        this.videoData.src = res.data.ophour[0].video;
        this.videoData.cover = res.data.ophour[0].cover;
        this.canWatch = res.data.ophour[0].status
        this.power = res.data.ophour[0].power
        this.$emit('iscollect', res.data.verb.collect)
        this.verifyLogin();
        document.title = res.data.verb.title
        setTimeout(() => {
          this.pageShow = true;
        }, 100);
      } else {
        this.mint.Indicator.close();
        this.mint.Toast('服务器繁忙，请稍后再试')
        this.pageShow = true;
      }
      let title = _this.datalist.verb.title
      let url = window.location.href
      let cover = _this.datalist.verb.cover
      let introduction = _this.datalist.verb.introduction
      let obj = {
        title,
        url,
        cover,
        introduction
      }
      _api.share(obj)
      if (this.$store.state.user != '') {
        setTimeout(() => {
          this.listen(2)
        }, 1000);
      }
    },
    choice(item, index) {
      this.videoData.src = item.video;
      this.videoData.cover = item.cover;
      this.canWatch = item.status;
      this.power = item.power;
      this.Index = index
      this.verifyLogin();
    }
  },
  computed: {
    // 实时监测vuex里显示状态的数据变化
    contentText() {
      return this.$store.state.contentText;
    },
  },
  watch: {
    contentText(newVal, oldVal) {
      let data = newVal[0]
      this.datalist = (data);
      this.pagename = 'appraise'
    },
  }
}
</script>
<style scoped lang="less">
.contentwapper {
    height: 100%;

}
.contentvideowapper {
    height: 100%;
    position: relative;
    .content-top {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 995;
    }
    .datanotfound {
        z-index: 0;
        .notfoundbox {
            margin: 6rem auto;
        }
    }
    .content-bottom {
        height: 100%;
    }
    .content-scroll {
        padding-bottom: 5rem;
        top: 26rem;
    }
}
.contenttitle-box {
    height: 7.55rem;
    overflow: hidden;
}
video {
    width: 100%;
    height: 21.3rem;
}
.introwapper {
    background-color: #f3f4f5;
    .title-box {
        height: 5rem;
        line-height: 5rem;
        border-bottom: 0.05rem solid #e0e0e0;
    }
    > div {
        margin-bottom: 1rem;
    }
}
.content-box .content {
    padding: 1.8rem 1.1rem 1.8rem 0;
    line-height: 2.16rem;
}
.content-title {
    margin-top: 1.8rem;
}
.content-top {
    background-color: #000;
}
.contentspeaker {
    .speaker {
        line-height: 4rem;
        margin-top: 1.8rem;
        overflow: hidden;
        > div {
            float: left;
        }
        .speakerimg {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;
            background-color: #000;
            margin-right: 0.55rem;
        }
    }
}
.videoZz {
    width: 100%;
    height: 21.3rem;
    background-color: #000;
    overflow: hidden;
    position: relative;
    p {
        text-align: center;
        color: #fff;
        padding: 1rem 0;
        a {
            a {
                color: #fff;
            }
        }
    }
}
.video-number {
    margin-top: 1.2rem;
}
.videoHint {
    margin-top: 50%;
    transform: translateY(-100%);
}

.underLine {
    text-decoration: underline;
}
.contentnav-tab {
    height: 5rem;
    line-height: 5rem;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 0.05rem solid #e0e0e0;
    ul {
        overflow: hidden;
        .active a {
            color: #3c99f7;
            padding: 1.32rem 0;
            border-bottom: 0.3rem solid #3c99f7;
        }
        li {
            font-size: 1.6rem;
            float: left;
            width: 33.3333%;
            text-align: center;
        }
    }
}
/*目录内容*/

.catalogwapper {
    overflow: hidden;

}

.catalogbox {
    .time,
    .title {
        padding-left: 1.4rem;
        margin-left: 1.4rem;
        border-left: 0.24rem solid #3c99f7;
    }
    .title {
        padding-top: 1.8rem;
        padding-bottom: 1.2rem;
    }
    .time {
        padding-bottom: 1.8rem;
    }
    .b-cutline {
        margin: 0 3.4rem;
        position: absolute;
        bottom: 0;
        width: 80%;
        z-index: 1;
        border-bottom: 0.12rem solid #e0e0e0;
    }
    ul {
        .active {
            .catalogtag {
                width: 1.6rem;
                height: 1.6rem;
                left: 0.75rem;
                position: absolute;
                top: 1.7rem;
            }
            > div {
                color: #3c99f7;
            }
            &:first-child {
                .catalogtag {
                    position: absolute;
                    top: -.2rem;
                }
            }
        }
        .firstLi .catalogtag {
            position: absolute;
            top: 0;
        }
        li {
            position: relative;
            &:first-child {
                margin-top: 1.6rem;
                .title {
                    padding-top: 0;
                }
            }
            &:last-child {
                .title {
                    padding-bottom: 0;
                    margin-bottom: 1.2rem;
                }
                .time {
                    border: none;
                }
                .b-cutline {
                    border: none;
                }
                .catalogtag {
                    top: 2.3rem;
                }
            }
        }
    }
}

.catalogbox ul .catalogtag {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 1rem;
    top: 2rem;
}
</style>
