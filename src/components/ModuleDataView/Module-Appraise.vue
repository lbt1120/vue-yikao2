<template>
<div id="appraisewapper">
  <div class="appraisebox">
    <ul>
      <!-- 如果需要知道有几个数据，需要传listtitleIs为true -->
      <li class="appraiseboxtitle" v-if="listtitleIs==true">
        <div class="tag-title f-left font32" v-if="titleType==undefined">共
          <span>{{total}}</span> 条心得
        </div>
        <div class="tag-title f-left font32" v-if="titleType!=''">
          {{titleType}}
        </div>
      </li>
      <li class="b-cutline white_bg" v-for="(item,index) in datalistArr">
        <div class="datatag" @click="routerTo(item)">
          <div class="appraise-top">
            <div class="user-headimg f-left">
              <img :src="item.avatar" alt="">
            </div>
            <div class="userinfo f-left">
              <div class="username font28">
                <div class="f-left">{{item.author}}</div>
                <!-- 如果发布用户为机构时显示 -->
                <div class="f-right font24" v-if="item.isMechanism==true" style="margin-left:.5rem">
                  <span class="userlable">机构</span>
                </div>
              </div>
              <div class="appraisetime font28">
                <div class="data f-left">{{item.date}}</div>
                <!-- <div class="time f-left">{{item.time}}</div> -->
              </div>
            </div>
            <!-- 当deletebtnIs为true时分类位置为右上角 -->
            <div class="f-right" v-if="deletebtnIs">
              分类：
              <span>{{item.classid|classify}}</span>
            </div>
          </div>
          <div class="appraise-bottom">
            <div class="appraise-content">
              {{item.intro}}
            </div>
            <div class="appraise-pic" v-if="item.pics!=null">
              <div :class="{'pic-1':item.pics.length==1,'pic-2':item.pics.length>=2&&item.pics.length<4,'pic-4':item.pics.length>=4}">
                <div class="picbox" v-for="(picsrc,index) in item.pics" @click="previewImage(picsrc)">
                  <img :src="picsrc.thumb" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要有赞的按钮，需要传likebtn为true，likebtn与deletebtnIs不能同时为ture -->
        <div class="appraise-other datatag" v-if="likebtnIs">
          <div class="f-left">
            分类：
            <span>{{item.classid|classify}}</span>
            <!-- <span v-for="(classname,index) in item.classid" v-if="index<item.classid.length-1">{{classname|classify}}、</span>
              <span v-for="(classname,index) in item.classid" v-else>{{classname|classify}}</span> -->
          </div>
          <div class="f-right" @click="routerTo(item)">
            <div class="dialogbox f-left"></div>
            <div class="f-left num">{{item.comment_num}}</div>
          </div>
          <div class="f-right" :class="{active:item.zan.end==true}" @click="zan(item.id,index)">
            <div class="goodimg f-left"></div>
            <div class="f-left num">{{item.zan.num}}</div>
          </div>
        </div>
        <!-- 可编辑删除状态，需要传deletebtnIs为true，likebtn与deletebtnIs不能同时为ture-->
        <div class="appraise-other datatag" v-if="deletebtnIs">
          <div class="f-left" @click="deleteDataverify(item)">
            删除
          </div>
          <div class="f-right" @click="routerTo(item)">
            <div class="dialogbox f-left"></div>
            <div class="f-left num">{{item.comment_num}}</div>
          </div>
          <div class="f-right" :class="{active:item.zan.end==true}" @click="zan(item.id,index)">
            <div class="goodimg f-left"></div>
            <div class="f-left num">{{item.zan.num}}</div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="appraise-reply datatag" v-if="replyIs==true">
          <div class="replybox" v-for="(reply,index) in item.comment" @click="replyid(item,reply)" v-if="item.comment!=null">
            <span class="replyname">{{reply.user}}</span>
            <span v-if="reply.reply_name!=null">回复</span>
            <span class="replyname" v-if="reply.reply_name!=undefined">{{reply.reply_name}}</span>
            <span>：</span>
            <span>{{reply.intro}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
// import popup from '../moduleTools/Module-popup'
export default {
  name: 'contentlist',
  data() {
    return {
      likebtnIs: true,
      listtitleIs: false,
      deletebtnIs: false,
      titleType: '',
      replyIs: false,
      canRouteTo: true,
      datalistArr:[],
      //向上滑窗口初始值
      popupwapper: {
        //内容（checklist-选择，comment-评论）
        type: "comment",
        data: []
      },
    }
  },
  props: ['likebtn', 'listtitle', 'deletebtn', 'titletype', 'datalist', 'reply', 'total', 'canRoute'],
  mounted() {
    this.defaultData();
  },
  watch: {
    likebtn(newVal, oldVal) {
      if (newVal != oldVal) {
        this.likebtnIs = newVal
      }
    },
    listtitle(newVal, oldVal) {
      if (newVal != oldVal) {
        this.listtitleIs = newVal
      }
    },
    deletebtn(newVal, oldVal) {
      if (newVal != oldVal) {
        this.deletebtnIs = newVal
      }
    },
    titletype(newVal, oldVal) {
      if (newVal != oldVal) {
        this.titleType = newVal
      }
    },
    reply(newVal, oldVal) {
      if (newVal != oldVal) {
        this.replyIs = newVal
      }
    },
  },
  methods: {
    defaultData() {
      this.likebtnIs = this.likebtn;
      this.listtitleIs = this.listtitle;
      this.deletebtnIs = this.deletebtn;
      this.titleType = this.titletype;
      this.replyIs = this.reply;
      this.datalistArr = this.datalist
      if (this.canRoute != undefined) {
        this.canRouteTo = this.canRoute;
      }
    },
    routerTo(item) {
      if (this.canRouteTo) {
        let data = item
        let docid = item.id
        this.$router.push({
          name: 'contenttext',
          params: {
            docid
          }
        })
      }
    },
    replyid(item, reply) {
      console.log(item, reply)
      if (reply.self) {
        this.deleteReplyify(item.id, reply.id);
      } else {
        let uid = reply.uid;
        let cid = reply.id
        let user = reply.user;
        let params = {
          uid,
          user,
          cid
        };
        this.$emit('commentuser',params)
      }
    },
    userIndex(item) {
      this.$router.push({
        name: 'contenttext',
        params: {
          data
        }
      })
    },
    // 删除回复
    deleteReplyify(itemid, replyid) {
      let _this = this;
      this.mint.MessageBox.confirm('确定删除该回复?')
        .then(action => {
          _this.deleteReply(itemid, replyid);
        })
        .catch(rejected => {
          console.log(rejected)
        })
    },
    async deleteReply(itemid, replyid) {
      let cid = replyid;
      let mid = itemid;
      let act = 'del_comment';
      let params = {
        act,
        cid,
        mid
      };
      const res = await _api.mood(params);
      if (res.data.status == 200) {
        this.mint.Toast('删除成功')
        this.$store.commit('contentText', res.data.data);
      }
    },
    popupboxshow() {
      let verify = this.verify.isLogin()
      if (verify) {
        this.$store.commit('popupshow', true);
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    },
    async zan(id, index) {
      let verify = this.verify.isLogin();
      if (verify) {
        let mid = id;
        let act = 'agree';
        let params = {
          act,
          mid
        };
        const res = await _api.mood(params)
        if (res.data.status == 200) {
          this.$store.commit('contentText', res.data.data);
          console.log(this.datalist[index].zan.end)
          if (this.datalist[index].zan.end == true) {
            this.datalist[index].zan.end = false
            this.datalist[index].zan.num = this.datalist[index].zan.num - 1
          } else {
            this.datalist[index].zan.end = true
            this.datalist[index].zan.num = this.datalist[index].zan.num + 1
          }
        }
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    },
    previewImage(src) {
      var picArry = new Array;
      var pic = this.datalist[0].pics
      for (let i = 0; i < pic.length; i++) {
        picArry.push(pic[i].picture)
      }
      if (this.$route.name == 'contenttext') {
        wx.previewImage({
          current: src, // 当前显示图片的http链接
          urls: picArry // 需要预览的图片http链接列表
        });
      }
    },
    deleteDataverify(item) {
      console.log(item)
      let _this = this;
      this.mint.MessageBox.confirm('确定删除该心得?')
        .then(action => {
          _this.deleteData(item);
        })
        .catch(rejected => {
          console.log(rejected)
        })
    },
    async deleteData(item) {
      let mid = item.id;
      let params = {
        mid
      };
      let datalist = this.datalist
      let res = await _api.mood(params);
      if (res.data.status == 200) {
        this.mint.Toast(res.data.msg);
        for (var i = 0; i < datalist.length; i++) {
          if (datalist[i].id == mid) {
            datalist.splice(i, 1)
          }
        }
      } else {
        this.mint.Toast("删除失败，请稍后再试！");
      }
    }
  }
}
</script>
<style scoped lang="less">
#appraisewapper {
    .appraise-top {
        overflow: hidden;
        height: 4rem;
        margin-top: 1.5rem;
        margin-bottom: 0.6rem;
        position: relative;
    }
    .appraisebox {
        .user-headimg {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;

        }
        .userinfo {
            .appraisetime {
                .data {
                    margin-right: 0.6rem;
                }
            }
        }
        ul li {
            overflow: hidden;
        }
        .appraise-content {
            line-height: 2.15rem;
            text-indent: 1.2rem;
            padding-bottom: 1.2rem;
        }
    }
}

.appraise-pic {
    margin-bottom: 1rem;
}

.pic-1 .picbox {
    width: 100%;
    height: 15rem;
    overflow: hidden;
}

.pic-1 .picbox img {
    height: 100%;
    width: auto;
}

.pic-2 .picbox {
    width: 32%;
    display: inline-block;
    margin-right: 1%;
}

.pic-2 .picbox:last-child {
    margin-right: 0;
}

.pic-4 .picbox {
    width: 49%;
    margin-right: 2%;
    margin-bottom: 2%;
    display: inline-block;
}

.pic-4 .picbox:nth-child(2n) {
    margin-right: 0;
}

.pic-4 .picbox:nth-child(3),
.pic-4 .picbox:nth-child(3) {
    margin-bottom: 0;
}

.appraise-reply {
    background-color: #f3f4f5;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
    .replybox {
        padding: 0.5rem 0;
    }
}

.replyname {
    color: #67c5f8;
}

.num {
    width: 1.5rem;
    text-align: center;
}
</style>
