<template>
<div class="signinwapper wapper">
  <div class="signintop">
    <div class="signinbanner">
      <div class="integralboxout">
        <div class="integralboxin">
          <div class="integralbox">
            <div class="integral">{{signinInfo.integral}}</div>
            <div>当前积分</div>
          </div>
        </div>
      </div>
    </div>
    <div class="signinset white_bg">
      <div>
        当前称号：
        <span v-if="signinInfo.integral<200&&signinInfo.integral>=0">艺考新人</span>
        <span v-if="signinInfo.integral<500&&signinInfo.integral>=200">艺考达人</span>
        <span v-if="signinInfo.integral>=500">艺考大咖</span>
      </div>
    </div>
    <div class="databox li-tag rule">
      <ul>
        <li>
          <div class="tag-title f-left font32">积分规则：</div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">1、</div>
            <div class="tag-content f-left">
              每日签到可获得积分
              <span>+1</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">2、</div>
            <div class="tag-content f-left">
              观看公开课可获得积分
              <span>+1</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">3、</div>
            <div class="tag-content f-left">
              分享到微信、朋友圈可获得积分
              <span>+1</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">4、</div>
            <div class="tag-content f-left">
              发布心得、评论楼主，可获得积分
              <span>+1</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">5、</div>
            <div class="tag-content f-left">
              每日最多可获得
              <span>5</span>积分
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">6、</div>
            <div class="tag-content f-left">
              达到
              <span>200</span>积分为艺考达人，达到
              <span>500</span>积分为艺考大咖。不同积分等级可以观看课程不同。
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 签到 -->
    <div class="databox signinbox white_bg">
      <div class="signintitle font32">
        您已连续签到
        <span>{{signinInfo.num}}</span>天，当月获得积分
        <span>+{{jf}}</span>
      </div>
      <div class="signinValbox">
        <div class="signinDateBox" v-for="(item,index) in signinArray">
          <div class="signinDate" ref="signinDate" :class="signinArray[index]==true?'signinbg':'unsigninbg'">+1</div>
          <div class="signinDateText" v-if="showDay.indexOf(index+1)!=-1">第{{index+1}}天</div>
        </div>
      </div>
    </div>
    <div class="databox li-tag completion">
      <ul>
        <li>
          <div class="tag-title f-left font28">今日积分奖励</div>
          <div class="tag-title f-right font28">
            已赚<span>{{scoredHave}}</span>积分 ，可再赚
            <span>{{scoredCan}}</span>积分
          </div>
        </li>
        <li>
          <div class="taglist" style="overflow: initial;">
            <div class="tag-title f-left">每日签到</div>
            <div class="tag-content f-left">
              <div class="goldimg f-left"></div>
              +1（{{signinInfo.signNum}}/1）
            </div>
            <div class="f-right">
              <span class="completionbtn completed">已完成</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist" style="overflow: initial;">
            <div class="tag-title f-left">
              看课程涨姿势
            </div>
            <div class="tag-content f-left">
              <div class="goldimg f-left"></div>
              +1（{{signinInfo.opclassNum}}/1）
            </div>
            <div class="f-right">
              <span class="completionbtn unfinished" v-if="signinInfo.opclassNum==0" @click="routerTo('home_classroom')">去完成</span>
              <span class="completionbtn completed" v-if="signinInfo.opclassNum==1">已完成</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">
              <div>分享</div>
              <div class="remark">分享到朋友圈、好友</div>
            </div>
            <div class="tag-content f-left">
              <div class="goldimg f-left"></div>
              +1（{{signinInfo.verbNum}}/1）
            </div>
            <div class="f-right">
              <span class="completionbtn unfinished" v-if="signinInfo.verbNum==0">未完成</span>
              <span class="completionbtn completed" v-if="signinInfo.verbNum==1">已完成</span>
            </div>
          </div>
        </li>
        <li>
          <div class="taglist">
            <div class="tag-title f-left">
              <div>发布心得</div>
              <div class="remark">发布心得、评论楼主</div>
            </div>
            <div class="tag-content f-left">
              <div class="goldimg f-left"></div>
              +1（{{signinInfo.experienceNum}}/2）
            </div>
            <div class="f-right">
              <span class="completionbtn unfinished" v-if="signinInfo.experienceNum<2" @click="routerTo('home_sinayikao')">去完成</span>
              <span class="completionbtn completed" v-if="signinInfo.experienceNum==2">已完成</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'signin',
  data() {
    return {
      signinInfo: {
        integral: 0, //积分
        signNum: 0, //签到
        opclassNum: 0, //观看公开课次数
        verbNum: 0, //分享
        experienceNum: 0, //发布心得
        num: 0
      },
      showDay: [7, 14, 21, 28, 29, 30],
      scoredHave: "",
      scoredCan: "",
      day: 30,
      signinArray: [],
      jf: 0
    }
  },
  created() {
    this.dataDefault()
  },
  mounted() {
    this.signinDateStyle();
    // this.getData();
  },
  methods: {
    // 动态变化高度
    signinDateStyle: function() {
      let refList = this.$refs.signinDate;
      console.log(refList)
      let heightVal = this.$refs.signinDate[0].clientWidth;
      for (var i = 0; i < this.day; i++) {
        refList[i].style.height = heightVal + 'px'
        refList[i].style.lineHeight = heightVal + 'px'
      }
    },
    dataDefault: function() {
      let nowDate = new Date();
      let month = nowDate.getMonth() + 1;
      let year = nowDate.getFullYear();
      let month1 = [1, 3, 5, 7, 8, 10, 11]
      let month2 = [4, 6, 9, 10, 12]
      if (month1.indexOf(month) != -1) {
        this.day = 31
        this.showDay = [7, 14, 21, 28, 29, 30, 31]
      } else if (month2.indexOf(month) != -1) {
        this.day = 30
        this.showDay = [7, 14, 21, 28, 29, 30]
      } else if (month == 2) {
        if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
          this.day = 29
          this.showDay = [7, 14, 21, 28]
        } else {
          this.day = 28
          this.showDay = [7, 14, 21, 29]
        }
      }
      for (let i = 0; i < this.day; i++) {
        this.signinArray.push(false)
      }
    },
    getData: async function() {
      let params = {}
      const res = await _api.myIntegral(params)
      console.log(res)
      let data = res.data
      this.signinInfo = data
      let scored = data.signNum + data.opclassNum + data.verbNum + data.experienceNum;
      this.scoredHave = scored;
      this.scoredCan = 5 - scored;
      this.signinArray = data.sj;
      var jf = 0
      for (let i = 0; i < this.signinArray.length; i++) {
        if (this.signinArray[i]) {
          jf++
        }
      }
      this.jf = jf
    },
    routerTo: function(name) {
      this.$router.push({
        name: name
      })
    }
  },
  watch: {},
}
</script>
<style scoped lang="less">
.signinValbox {
    padding-bottom: 3rem;
}

.signinValbox .signinDateBox {
    display: inline-block;
    width: 12%;
    text-align: center;
    margin: 1.5rem 1%;
    position: relative;
}

.signinDateText {
    position: absolute;
    left: 50%;
    bottom: -2rem;

    transform: translateX(-50%);
    width: 100%;
}

.signinValbox .signinDateBox:nth-child(7n) {
    margin-right: 0;
}

/*签到*/

.signinwapper {
    .databox {
        padding: 0;
    }
    .signinbanner {
        width: 100%;
        height: 16rem;
        background: url("/static/image/banner/signinbanner.jpg") no-repeat;
        background-size: 100%;
        overflow: hidden;
    }
    .integralboxin,
    .integralboxout {
        border-radius: 50%;

    }
    .integralboxout {
        width: 10.9rem;
        height: 10.9rem;
        background-color: #ffffff80;
        position: relative;
        margin-left: 50%;
        margin-top: 2.4rem;
        transform: translateX(-50%);
    }
    .integralboxin {
        width: 8.8rem;
        height: 8.8rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}
.integralbox {
    text-align: center;
    margin-top: 50%;
    transform: translateY(-50%);
    .integral {
        margin-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 600;
        color: #3c99f7;
    }
}

.signinset {
    height: 5rem;
    line-height: 5rem;
    padding: 0 1.4rem;
}

.signinwapper {
    .signinbox .signintitle {
        text-align: center;
        padding: 1.8rem 0 0;
    }

    .goldimg {
        width: 2rem;
        height: 2rem;
    }
    .rule {
        .taglist {
            line-height: 2.4rem;
        }
        .tag-content {
            width: 90%;
        }
    }
    .completion {
        .taglist {
            padding: 0;
            > div {
                width: 26%;
                line-height: 2rem;
                padding: 2.2rem 0;
                &:nth-child(3) {
                    text-align: center;
                }
                &:first-child {
                    width: 45%;
                    padding: 1.4rem 0;
                }
            }
        }
        .remark {
            color: #999999;
        }
    }
    .completionbtn {
        padding: 0.6rem 1.2rem;
        border-radius: 1.2rem;
    }
    .completed {
        background-color: #f7f7f7;
        color: #a7a7a7;
    }
    .unfinished {
        background-color: #daecff;
        color: #3c99f7;
    }

}

.signinwapper .completion .tag-title span,
.signinwapper .rule span,
.signinwapper .signinbox .signintitle span {
    color: #3c99f7;
}

.signinwapper .completion li:nth-child(2),
.signinwapper .completion li:nth-child(3) {
    padding: 1.4rem 0;
}

.signinwapper .completion li:nth-child(2) .taglist > div,
.signinwapper .completion li:nth-child(3) .taglist > div {
    padding: 0;
}
</style>
