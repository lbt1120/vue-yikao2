<template>
<div class="commentwapper newvegaswapper">
  <div class="comment-content white_bg transition-5s">
    <div class="comment-middle datatag">
      <textarea name="" id="" cols="30" rows="2" placeholder="说说想说的……" v-model="datacontent.content"></textarea>
      <div class="addimgbox">
        <div class="imgbox addcommentimg f-left" v-for="(item,index) in datacontent.contentpic" @click="deleteImg(index)">
          <img :src="item" alt="">
        </div>
        <div class="addcommentimg addpic f-left" @click="chooseImage" v-if="datacontent.contentpic.length<4"></div>
      </div>
    </div>
    <div class="comment-bottom datatag">
      <div class="selectbox f-left">
        <span>分类：</span>
        <select name="newvegas-select" id="" v-model="datacontent.classify">
            <option :value="item.value" v-for="(item,index) in newvegasArray">{{item.text}}</option>
          </select>
      </div>
      <span class="f-right submit" @click="submit">提交</span>
    </div>
  </div>
  <div class="closebtn" @click="popdownhidden"></div>
</div>
</template>
<script>
export default {
  name: 'popdown',
  data() {
    return {
      newvegasArray: [{
          text: '默认',
          value: 0
        },
        {
          text: '留学',
          value: 11
        },
        {
          text: '播音',
          value: 2
        },
        {
          text: '编导',
          value: 1
        },
        {
          text: '表演',
          value: 3
        },
        {
          text: '摄影',
          value: 4
        },
        {
          text: '美术',
          value: 5
        },
        {
          text: '舞蹈',
          value: 6
        },
        {
          text: '音乐',
          value: 7
        },
        {
          text: '服表',
          value: 8
        },
        {
          text: '书法',
          value: 9
        },
        {
          text: '空乘',
          value: 10
        }
      ],
      datacontent: {
        content: "",
        contentpic: [],
        classify: 0
      },
      defaultpic: 4,
      serverIdArray: [],
      imgbox: false,
      addpic: true,
    }
  },
  methods: {
    popdownhidden() {
      this.$store.commit('popdownshow', false);
    },
    select(item) {
      if (item == '默认') {
        this.datacontent.classify = this.$store.state.user.curriculum;
      } else {
        this.datacontent.classify = item;
      }
    },
    chooseImage() {
      let _this = this;
      wx.chooseImage({
        count: 4, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          _this.uploadWx(res, 0)

        }
      });
    },
    uploadWx(item, index) {
      let _this = this;
      let imglength = item.localIds.length;
      wx.uploadImage({
        localId: item.localIds[index], // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: imglength, // 默认为1，显示进度提示
        success: function(res) {
          _this.serverIdArray.push(res.serverId)
          if (_this.serverIdArray.length < imglength) {
            index++
            _this.uploadWx(item, index)
          } else {
            _this.upload();
          }
        }
      });
    },
    async upload() {
      this.mint.Indicator.open('上传中...');
      let _this = this;
      let serverId = _this.serverIdArray
      let from = 'circle'
      let params = {
        serverId,
        from
      }
      let res = await _api.upload(params)
      if (res.status == 200) {
        this.mint.Indicator.close();
        this.mint.Toast('上传成功');
        let picArr = res.data.data
        for (let i = 0; i < picArr.length; i++) {
          this.datacontent.contentpic.push(picArr[i].src)
        }
      } else {
        this.mint.Indicator.close();
        this.mint.Toast('上传失败');
      }
    },
    async submit() {
      let _this = this;
      let data = this.datacontent;
      let params = {
        data
      };
      let res = await _api.publish(params)
      if (res.data.status == 200) {
        let type = 4
        let params = {
          type
        }
        let task = await _api.intNonu(params)
        this.mint.Toast('发布心得成功')
        this.defaultData();
        _this.popdownhidden();
      } else {
        this.mint.Toast('提交失败，请稍后再试')
      }
    },
    defaultData() {
      this.datacontent.content = "";
      this.datacontent.contentpic = new Array;
      this.datacontent.classify = 0;
    },
    deleteImg(index) {
      this.mint.MessageBox.confirm('确定删除该图片?')
        .then(action => {
          this.datacontent.contentpic.splice(index, 1)
        })
    }
  },
  watch: {
    contentpic(newVal, oldVal) {
      if (newVal != oldVal) {
        this.imgbox = true
        alert(newVal);
      }
    }
  }
}
</script>
<style scoped lang="less">
/*心得*/

.newvegaswapper {
    .closebtn {
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        left: 50%;
        bottom: -5.3rem;
        transform: translateX(-50%);
    }
    .comment-content {
        padding-bottom: 1.7rem;

    }
    .comment-bottom {
        margin-top: 2rem;
    }
    .selectbox select {
        width: 8.6rem;
        height: 2.8rem;
        text-align: center;
    }
    span.submit {
        padding: 0 1.6rem;
        background-color: #3c99f7;
        color: #fff;
        border-radius: 0.3rem;
        line-height: 2.8rem;
    }
}

.addimgbox {
    overflow: hidden;
}

.imgbox {
    margin-right: 0.5rem;
    overflow: hidden;
}
</style>
