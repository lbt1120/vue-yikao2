<template>
  <div class="infowapper">
    <!-- 用户信息填写 -->
    <div class="wapper userinfowapper" v-if="usertype==1" :class="{'pb5':changetype=='addstudent'}">
      <div class="usertag" v-if="changetype=='adduser'||changetype=='changeuser'">
        <div class="usertag-list userphoto-tag">
          <div class="tag-title f-left">头像</div>
          <div class="tag-content f-right">
            <div class="userportrait" @click="chooseImage('uavatar','avatar',1)">
              <div class="userphoto" v-if="userinfo.avatar==''"></div>
              <img :src="userinfo.avatar" alt="" v-else>
            </div>
            <!-- <div class="userportrait"></div> -->
          </div>
        </div>
      </div>
      <div class="usertag li-tag">
        <ul>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">姓名</div>
              <div class="tag-content f-right">
                <input type="text" placeholder="请输入用户姓名" class="t-right" v-model="userinfo.name">
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">性别</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left usersex" :class="{active:userinfo.sex==1}" @click="usersex(1)">
                  <div class="tag2img f-left"></div>
                  <div class="f-left">男</div>
                </div>
                <div class="tag-val f-left usersex" :class="{active:userinfo.sex==2}" @click="usersex(2)">
                  <div class="tag2img f-left"></div>
                  <div class="f-left">女</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">年龄</div>
              <div class="tag-content f-right">
                <div class="tag-content f-right">
                  <input type="number" placeholder="请输入用户年龄" class="t-right" v-model="userinfo.age">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="usertag li-tag">
        <ul>
          <li>
            <div class="usertag-list" @click="popupboxshow('checklist',false,'radio','s_province','s_province')">
              <div class="tag-title f-left">省份</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left" v-if="userinfo.s_province==''">请选择所在地区</div>
                <div class="tag-val f-left">{{userinfo.s_province|city}}</div>
                <div class="tag-arrow f-left"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">目前就读学校</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left">
                  <input type="text" placeholder="请输入您就读学校" class="t-right" v-model="userinfo.school">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="usertag li-tag">
        <ul>
          <li>
            <div class="usertag-list" @click="popupboxshow('checklist',false,'multiple','curriculum')">
              <div class="tag-title f-left">艺考方向</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left">
                  <span v-if="userinfo.curriculum==''">
                    请选择
                  </span>
                  <span v-for="(item,index) in userinfo.curriculum" v-else>
                    {{item|classify}}
                  </span>
                </div>
                <div class="tag-arrow f-left"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list" @click="popupboxshow('checklist',true,'radio','m_school','college')">
              <div class="tag-title f-left">目标院校</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left" v-if="userinfo.m_school==''">请选择</div>
                <div class="tag-val f-left" v-else>{{userinfo.m_school|school}}</div>
                <div class="tag-arrow f-left"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">文化分</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left">
                  <input type="number" placeholder="请输入文化分" class="t-right" v-model="userinfo.c_points">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="usertag li-tag" v-if="changetype=='addstudent'||changetype=='changestudent'">
        <div class="tag-title font32" style="padding:1.4rem 1rem;border-bottom:.05rem solid #e4e4e4">添加购买课程</div>
        <scroll class="wrapper" :pulldown="pulldown">
          <ul class="content">
            <li v-for="(item,index) in classlist" @click="check(item)" :class="{active:classarray.indexOf(item.id)!=-1}">
              <div class="tag-title f-left">
                <div class="tag2img"></div>
              </div>
              <div class="tag-content f-left">
                {{item.name}}
              </div>
            </li>
          </ul>
        </scroll>
      </div>
      <div class="submit btn" @click="submitData">提交</div>
      <v-popup :popupwapper="popupwapper"></v-popup>
    </div>
    <!-- 机构信息填写 -->
    <div class="wapper jginfowapper" v-else>
      <div class="usertag">
        <div class="usertag-list userphoto-tag">
          <div class="tag-title f-left">机构封面</div>
          <div class="tag-content f-right">
            <div class="usercoverbox" @click="chooseImage('mposter','cover',1)">
              <div class="usercover" v-if="userinfo.cover==''"></div>
              <img :src="userinfo.cover" alt="" v-else>
            </div>
            <!-- <div class="userportrait"></div> -->
          </div>
        </div>
      </div>
      <div class="usertag li-tag">
        <ul>
          <li>
            <div class="usertag-list userphoto-tag">
              <div class="tag-title f-left">头像</div>
              <div class="tag-content f-right">
                <div class="userportrait" @click="chooseImage('mavatar','avatar',1)">
                  <div class="userphoto" v-if="userinfo.avatar==''"></div>
                  <img :src="userinfo.avatar" alt="" v-else>
                </div>
                <!-- <div class="userportrait"></div> -->
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">机构名称</div>
              <div class="tag-content f-right">
                <input type="text" placeholder="请输入机构名称" value="" class="t-right" v-model="userinfo.name">
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list">
              <div class="tag-title f-left">机构电话</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left">
                  <input type="number" placeholder="请输入机构电话" class="t-right" v-model="userinfo.tel">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="usertag-list" @click="popupboxshow('checklist',false,'multiple','curriculum')">
              <div class="tag-title f-left">教授课程</div>
              <div class="tag-content f-right">
                <div class="tag-val f-left">
                  <span v-if="userinfo.curriculum==''">
                    请选择
                  </span>
                  <span v-for="(item,index) in userinfo.curriculum" v-else>
                    {{item|classify}}
                  </span>
                </div>
                <div class="tag-arrow f-left"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="usertag li-tag userplace">
        <div class="usertag-top b-cutline">
          <div class="usertag-list">
            <div class="tag-title">
              <span>地区</span>
              <div class="f-right">
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_province')" v-if="userinfo.s_province==''">--省--</div>
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_province')" v-if="userinfo.s_province!=''">{{userinfo.s_province|city}}</div>
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_city')" v-if="userinfo.s_city==''">--市--</div>
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_city')" v-if="userinfo.s_city!=''">{{userinfo.s_city|city}}</div>
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_county')" v-if="userinfo.s_county==''">--区--</div>
                <div class="f-left" @click="popupboxshow('checklist',false,'radio','s_county')" v-if="userinfo.s_county!=''">{{userinfo.s_county|city}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="usertag-bottom">
          <div class="usertag-list addressbox">
            <input name="" id="address" class="font28" :placeholder="addresshint" @focus="addressfocus()" @blur="addressblur()" v-model="userinfo.address"></input>
          </div>
        </div>
      </div>
      <div class="usertag">
        <div class="usertag-top b-cutline">
          <div class="usertag-list">
            <div class="tag-title">简介</div>
          </div>
        </div>
        <div class="usertag-bottom">
          <div class="usertag-list jgbox">
            <textarea name="" id="jginfo" class="font28" cols="30" rows="2" :placeholder="jghint" @focus="jgfocus()" @blur="jgblur()" v-model="userinfo.introduce"></textarea>
          </div>
        </div>
      </div>
      <div class="usertag picturebox">
        <div class="usertag-top b-cutline">
          <div class="usertag-list">
            <div class="tag-title">相册</div>
          </div>
        </div>
        <div class="usertag-bottom">
          <div class="usertag-list aptitudebox">
            <div class="aptitude uploadpicture f-left" v-if="userinfo.slide.length!=0" v-for="(item,index) in userinfo.slide" @click="deleteImg(index)">
              <img :src="item" alt="">
            </div>
            <div class="aptitude uploadpicture f-left" v-if="userinfo.slide.length<4" @click="chooseImage('slide','slide',4)">
            </div>
          </div>
        </div>
      </div>
      <div class="usertag">
        <div class="usertag-top b-cutline">
          <div class="usertag-list">
            <div class="tag-title">资质</div>
          </div>
        </div>
        <div class="usertag-bottom">
          <div class="usertag-list aptitudebox">
            <div class="aptitude uploadimg f-left" v-if="userinfo.qualifications.length==0">
            </div>
            <div class="aptitude uploadimg f-left" v-if="userinfo.qualifications.length!=0">
              <img :src="userinfo.qualifications[0]" alt="">
            </div>
            <div class="uploadbtn btn f-left" @click="chooseImage('mprove','qualifications',2)">
              上传
            </div>
          </div>
        </div>
      </div>
      <v-popup :popupwapper="popupwapper"></v-popup>
      <div class="submit btn" @click="submitData">提交</div>
    </div>
  </div>
</template>
<script>
/*
adduser:添加用户（显示头像添加标签,不显示购买课程列表）
changeuser:修改用户信息（显示头像添加标签，不显示购买课程列表））
addstudent:添加学生（不显示头像添加标签，显示购买课程列表））
*/
// import popup from '../moduleTools/Module-popup'
// import scroll from '../moduleTools/scroll'
export default {
  name: 'userinfo',
  data() {
    return {
      // 向上滑窗口显示状态
      popupbox: false,
      //向上滑窗口初始值
      popupwapper: {
        //内容（checklist-选择，comment-评论）
        type: "checklist",
        //是否有查询框
        search: false,
        //multiple-多选 radio-单选
        select: "radio",
        //传递数组对象
        datalist: "",
        selectname: ""
      },
      changetype: 'adduser',
      usertype: 1,
      // 课程列表
      classlist: [],
      //课程选择列表
      classarray: [],
      addresshint: "请填写详细地址，不少于5个字",
      jghint: "不超过300字",
      //用户初始状态
      userinfo: {
        name: "",
        age: "",
        sex: 1,
        s_province: '',
        s_city: '',
        s_county: '',
        school: '',
        curriculum: '',
        m_school: '',
        c_points: '',
        avatar: "",
        cover: "",
        address: "",
        introduce: "",
        tel: "",
        slide: [],
        qualifications: []
      },
      serverIdArray: [],
      pulldown: false
    }
  },
  components: {
    // "v-popup": popup,
    // scroll,
  },
  methods: {
    popupboxshow: function(type, search, select, name, op) {
      this.popupwapper.type = type;
      this.popupwapper.search = search;
      this.popupwapper.select = select;
      this.popupwapper.selectname = name;
      // 判断name给列表赋值
      if (name == 'curriculum') {
        this.popupwapper.datalist = _$.classify();
        this.$store.commit('popupshow', true);
      } else if (name == 's_province') {
        this.popupwapper.datalist = _$.cityData('', '', '', name);
        this.$store.commit('popupshow', true);
      } else if (name == 'm_school') {
        this.popupwapper.datalist = _$.school();
        this.$store.commit('popupshow', true);
      } else if (name == 's_city') {
        if (this.userinfo.s_province == '') {
          this.mint.Toast('您还没选择省份');
        } else {
          this.popupwapper.datalist = _$.cityData(this.userinfo.s_province, '', '', name);
          this.$store.commit('popupshow', true);
        }
      } else if (name == 's_county') {
        if (this.userinfo.s_city == '') {
          this.mint.Toast('您还没选择市');
        } else {
          this.popupwapper.datalist = _$.cityData(this.userinfo.s_province, this.userinfo.s_city, '', name);
          this.$store.commit('popupshow', true);
        }
      }
    },
    getLesson: async function() {
      let params = {}
      let res = await _api.myStudentTcourse(params)
      this.classlist = res.data.data;
    },
    changeType: function() {
      let _this = this;
      var addtype = _this.$route.params.changetype,
        usertype = _this.$route.params.type;
      _this.usertype = usertype
      if (addtype != "" && addtype != undefined) {
        _this.changetype = addtype;
        if (_this.changetype == 'addstudent') {
          _this.getLesson();
        } else if (_this.changetype == 'changeuser') {
          let userinfo = _this.$store.state.user;
          _this.userinfo = userinfo;
        }
      }
      var userinfoDataObj = _this.userinfo,
        usersign = _this.$store.state.usersign;
      usersign.userinfoData = userinfoDataObj;
      usersign.userstatus = usertype;
      _this.$store.commit('usersign', usersign);

    },
    addressfocus: function() {
      this.addresshint = "";
    },
    addressblur: function() {
      if (this.addresshint == "") {
        this.addresshint = "请填写详细地址，不少于5个字";
      }
    },
    jgfocus: function() {
      this.jghint = "";
    },
    jgblur: function() {
      if (this.jghint == "") {
        this.jghint = "不超过300字";
      }
    },
    // 选择购买课程
    check: function(a) {
      let valindex = this.classarray.indexOf(a.id)
      if (valindex != -1) {
        this.classarray.splice(valindex, 1);
      } else {
        this.classarray.push(a.id)
      }
    },
    // 用户性别
    usersex(sexnum) {
      this.userinfo.sex = sexnum;
    },
    // 选择图片
    chooseImage: function(fromname, name, num) {
      let _this = this;
      this.serverIdArray = [];
      if (name == 'slide') {
        let slidearr = _this.userinfo.slide.length;
        num = 4 - slidearr
      }
      wx.chooseImage({
        count: num, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          _this.uploadWx(res, 0, fromname, name)
        }
      });
    },
    uploadWx: function(item, index, fromname, name) {
      let _this = this;
      let imglength = item.localIds.length;
      wx.uploadImage({
        localId: item.localIds[index], // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: imglength, // 默认为1，显示进度提示
        success: function(res) {
          _this.serverIdArray.push(res.serverId)
          if (_this.serverIdArray.length < imglength) {
            index++
            _this.uploadWx(item, index, fromname, name)
          } else {
            _this.upload(fromname, name);
          }
        }
      });
    },
    upload: async function(fromname, name) {
      this.mint.Indicator.open('上传中...');
      let _this = this;
      let serverId = _this.serverIdArray
      let from = fromname;
      let params = { serverId, from }
      const res = await _api.upload(params)
      if (name == 'qualifications') {
        _this.userinfo.qualifications = []
      }
      if (res.data.status == 200) {
        if (name == 'qualifications') {
          let picArr = res.data.data
          for (let i = 0; i < picArr.length; i++) {
            _this.userinfo['qualifications'].push(picArr[i].src)
          }
        } else if (name == 'slide') {
          let slidepicArr = res.data.data
          let userslideArr = _this.userinfo.slide;
          for (let i = 0; i < slidepicArr.length; i++) {
            userslideArr.push(slidepicArr[i].src)
          }
        } else {
          _this.userinfo[name] = res.data.data[0].src;
        }
        this.mint.Indicator.close();
        this.mint.Toast('上传成功');
      } else {
        this.mint.Indicator.close();
        this.mint.Toast('上传失败');
      }
    },
    // 提交数据
    submitData: function() {
      if (this.changetype == 'adduser') {
        this.addUser();
      } else if (this.changetype == 'addstudent') {
        this.addStudent();
      } else if (this.changetype == 'changeuser') {
        this.changeuser();
      }
    },
    addUser: async function() {
      let verify = this.verify.userInfoAll(this.usertype, this.userinfo, this.changetype)
      if (verify.pass) {
        if (this.userinfo.introduce == "") {
          this.userinfo.introduce = "这是一个神秘的机构，没有留下任何介绍！"
        }
        let usersignDataObj = this.userinfo;
        let usersign = this.$store.state.usersign;
        usersign.userinfoData = usersignDataObj
        let params = { usersign }
        const res = await _api.user_message(params)
        if (res.data.status == 200) {
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
          this.$store.commit('user', res.data.data.user);
          this.$router.push({ name: 'home_index' })
        }
      } else {
        this.mint.Toast(verify.msg);
      }
    },
    deleteImg: function(index) {
      this.mint.MessageBox.confirm('确定删除该图片?')
        .then(action => {
          this.userinfo.slide.splice(index, 1)
        })
    },
    addStudent: async function() {
      let verify = this.verify.userInfoAll(this.usertype, this.userinfo, this.changetype)
      if (verify.pass) {
        let phone = localStorage.getItem('studentPhone');
        let user = this.userinfo
        let tcourse = this.classarray
        let userdata = { user, tcourse, phone }
        let params = { userdata }
        const res = await _api.myStudentAdd(params)
        if (res.data.status == 200) {
          this.$router.push({ name: 'studentlist' })
          if (res.data.msg != '') {
            this.mint.Toast(res.data.msg);
          }
        }
      } else {
        this.mint.Toast(verify.msg);
      }
    },
    changeuser: async function() {
      let verify = this.verify.userInfoAll(this.usertype, this.userinfo, this.changetype)
      if (verify.pass) {
        let usersign = this.$store.state.usersign;
        let usersignDataObj = this.userinfo;
        usersign.userinfoData = usersignDataObj;
        let params = { usersign }
        const res = await _api.user_message(params)
        if (res.data.status == 200) {
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
          this.$store.commit('user', res.data.data.user);
          this.$router.push({ name: 'home_index' })
        }
      } else {
        this.mint.Toast(verify.msg);
      }
    }
  },
  computed: {
    // 实时监测vuex里显示状态的数据变化
    popupboxStatus: function() {
      return this.$store.state.popupshow;
    },
    province: function() {
      return this.$store.state.usersign.userinfoData.s_province;
    },
    city: function() {
      return this.$store.state.usersign.userinfoData.s_city;
    },
    county: function() {
      return this.$store.state.usersign.userinfoData.s_county;
    }
  },
  mounted() {
    this.changeType();
  },
  watch: {
    // 如果发生改变则赋值
    popupboxStatus: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.popupbox = newVal;
      }
    },
    province: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.userinfo.s_province = newVal;
        if (oldVal != undefined) {
          this.userinfo.s_city = ''
          this.userinfo.s_county = ''
        }
      }
    },
    city: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.userinfo.s_city = newVal
        if (oldVal != undefined) {
          this.userinfo.s_county = ''
        }
      }
    },
    county: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.userinfo.s_county = newVal
      }
    },
  }
}

</script>
<style scoped>
.userplace .usertag-list .tag-title>div>div {
  margin-right: .5rem;
}

.wrapper {
  /*height: 25rem;*/
  overflow: hidden;
}

.wrapper ul li {
  padding: 1.5rem 1rem;
}

.infowapper .tag2img {
  margin-right: .5rem;
}

.pb5 {
  padding-bottom: 5rem;
}

.uploadpicture {
  width: 9rem;
  height: 9rem;
  margin: 1.8rem 1.5rem 0 0;
}

.uploadpicture img {
  width: 100%;
  height: 100%;
}

.picturebox .aptitudebox {
  height: auto;
  padding-bottom: 1.8rem;
}

.aptitudebox .aptitude img {
  width: 100%;
  height: 100%;
}

</style>
