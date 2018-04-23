<template>
<div class="wapper white_bg logiwapper">
  <div class="loginpage">
    <div class="logobox">
      <div class="logo-img"></div>
      <div class="logo-text font32">专为艺考生服务，为梦想加油</div>
    </div>
    <div class="loginbox">
      <div class="loginborder userinput">
        <div class="phoneicon f-left"></div>
        <input type="number" class="f-left user" :placeholder="userval" @focus="userfocus()" @blur="userblur()" v-model="userval">
      </div>
      <div class="loginborder codeinput">
        <div class="keyicon f-left"></div>
        <input type="number" class="f-left code" :placeholder="codeval" @focus="codefocus()" @blur="codeblur()" v-model="codeval">
        <div class="f-right getcode" @click="getAuthCode" v-if="getcode==1">{{codehint}}</div>
        <div class="f-right getcode" v-if="getcode==2">{{codehint}}</div>
      </div>
      <div class="loginbtn font32" @click="login">
        登陆
      </div>
    </div>
  </div>
  <div class="question font28">收不到验证码请联系QQ：2252538904</div>
</div>
</template>
<script>
export default {
  name: 'searchbox',
  data() {
    return {
      userval: "请输入手机号",
      codeval: "请输入验证码",
      code: "",
      codehint: "获取验证码",
      getcode: 1,
      second: 0
    }
  },
  methods: {
    userfocus() {
      if (this.userval == '请输入手机号') {
        this.userval = "";
      }
    },
    userblur() {
      if (this.userval == "") {
        this.userval = "请输入手机号";
      }
    },
    codefocus() {
      if (this.userval == '请输入验证码') {
        this.codeval = "";
      }
    },
    codeblur() {
      if (this.codeval == "") {
        this.codeval = "请输入验证码";
      }
    },
    keepTime() {
      let _this = this;
      let second = _this.second;
      second--
      let content = "重新发送" + second + "秒"
      _this.second = second
      _this.codehint = content
      if (second > 0) {
        setTimeout(function() {
          _this.keepTime()
        }, 1000)
      } else if (second == 0) {
        _this.second = 60
        _this.codehint = '重新获取'
        _this.getcode = 1
      }
    },
    // 获取验证码
    async getAuthCode() {
      let phone = this.userval;
      let _this = this;
      let verify = this.verify.isPhoneNum(phone);
      if (verify.pass) {
        let params = {
          phone
        };
        let res = await _api.code(params)
        if (res.data.status == 200) {
          _this.mint.Toast('验证码已发送');
          this.second = 60;
          this.getcode = 2;
          this.keepTime();
          // alert(res.data.data.code)
        } else {
          this.mint.Toast('服务器繁忙');
        }
      } else {
        this.mint.Toast(verify.msg);
      }
    },
    // 登陆
    async login() {
      let phone = this.userval;
      let code = this.codeval;
      let verify = this.verify.isPhoneNum(phone)
      let _this = this;
      if (verify.pass) {
        if (code.length == 6 && code != '请输入验证码') {
          let params = {
            phone,
            code
          };
          let res = await _api.login(params);
          if (res.data.status == 200) {
            if (res.data.data.user == "") {
              this.$router.push({
                name: 'userstatus'
              })
            } else {
              localStorage.setItem('user', JSON.stringify(res.data.data.user));
              this.$store.commit('user', res.data.data.user);
              this.$router.push({
                name: 'home_index'
              })
            }
          } else {
            _this.mint.Toast(res.data.msg)
          }
        }
      }
    }
  },
  watch: {
    // 监听input变化
    userval: function(e) {
      console.log(e)
    },
    codeval: function(e) {
      console.log(e)
    }
  },
}
</script>
<style lang="less">
/*登陆窗口*/
.logiwapper {
    height: 100%;
}

.loginpage {
    width: 30.9rem;
    overflow: hidden;
    margin: 0 auto;
}

.logobox {
    margin: 7rem auto 0;
}

.loginbox {
    margin-top: 5rem;
}

.logo-img {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    background: url("/static/image/icon/logo.png");
    background-size: 100%;
    margin-bottom: 1rem;
}

.logo-text {
    text-align: center;
    color: #3c99f7;
}

.loginborder {
    width: 100%;
    height: 5rem;
    margin-bottom: 2rem;
    background: url("/static/image/icon/loginbox.png") no-repeat;
    background-size: 100%;
}

.codeinput {
    margin-bottom: 4rem;
}

.loginbtn {
    width: 100%;
    height: 5rem;
    margin-bottom: 2rem;
    background: url("/static/image/icon/btn.png") no-repeat;
    background-size: 100%;
    text-align: center;
    color: #fff;
    line-height: 5rem;
}

.loginbox {
    .phoneicon {
        width: 1.3rem;
        height: 1.9rem;
        margin: 1.5rem 1.25rem 1.5rem 2.2rem;
    }
    .keyicon {
        width: 1.6rem;
        height: 1.7rem;
        margin: 1.65rem 1.25rem 1.65rem 2.2rem;
    }
    input {
        width: 18rem;
        height: 90%;
        margin-top: 0.25rem;
    }
    .code {
        width: 12rem;
    }
    .user {
        width: 24rem;
    }
    .getcode {
        color: #999999;
        margin: 1.9rem 1.2rem;
        padding: 0 0.8rem;
        border-left: 0.048rem solid #e0e0e0;
    }
}

.question {
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 2rem;
    color: #9a9a9a;
}
</style>
