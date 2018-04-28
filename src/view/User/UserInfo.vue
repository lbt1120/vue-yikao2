<template>
<section class="infowapper">
  <!-- 用户信息填写 -->
  <div class="wapper userinfowapper" v-if="usertype==1" :class="{'pb5':changetype=='addstudent'}">
    <section class="usertag">
      <mt-cell title="姓名">
        <input type="text" placeholder="请输入姓名" :value="userinfo.name">
      </mt-cell>
      <mt-cell title="年龄">
        <input type="text" placeholder="请输入年龄" :value="userinfo.age">
      </mt-cell>
      <mt-cell title="性别" :value="userinfo.sex" @click.native="show('sex')"></mt-cell>
    </section>
    <section class="usertag">
      <mt-cell title="省份" :value="{{userinfo.s_province|city}}" @click.native="show('place')"></mt-cell>
    </section>
  </div>
  <mt-popup v-model="popupshow" position="bottom" :modal="true">
    <mt-picker :slots="slots" :value-key="valueKey" @change="onValuesChange" :showToolbar="true">
      <div class="topbar">
        <mt-button size="small" class="cancle" @click.native="cancle">取消</mt-button>
        选择性别
        <mt-button size="small" type="primary" class="sure" @click.native="sure">确定</mt-button>
      </div>
    </mt-picker>
  </mt-popup>
</section>
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
      popupshow: false,
      usertype: 1,
      changetype: 'addstudent',
      slots: [{
        flex: 1,
        values: [{
          num: 1,
          value: '男'
        }, {
          num: 2,
          value: '女'
        }],
        className: 'slot1',
        textAlign: 'center'
      }],
      valueKey: 'value',
      //用户初始状态
      userinfo: {
        name: "",
        age: "",
        sex: '请选择',
        s_province: 1,
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
    }
  },
  components: {},
  computed: {},
  methods: {
    // 下拉框隐藏
    cancle() {
      this.popupshow = false;
    },
    // 确定数据，并隐藏下拉框
    sure() {
      let name = this.chooseName;
      this.userinfo[name] = this.chooseValue;
      this.cancle();
    },
    //下拉框显示
    show(name) {
      this.chooseName = name;
      this.popupshow = true;
    },
    // 改变数据
    onValuesChange(picker, values) {
      this.chooseValue = values[0].value
    }
  },
}
</script>
<style scoped lang="less">
.topbar {
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
    border-bottom: 0.05rem solid #afd7ff;
    background-color: #fff;
    position: absolute;
    top: 0;
    z-index: 201;
    font-size: 1.4rem;
    > button {
        margin-top: 1rem;
    }
    .cancle {
        float: left;
        margin-left: 2rem;
    }
    .sure {
        float: right;
        margin-right: 2rem;
    }
}
.mint-popup {
    width: 100%;
}
.usertag {
    background-color: #fff;
    margin-bottom: 1rem;
    input {
        text-align: right;
    }
    .mint-cell {
        border-bottom: 0.05rem solid #e0e0e0;
    }
}
</style>
