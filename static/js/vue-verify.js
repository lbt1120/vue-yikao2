const isIdCard = function(code) {
  var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
  var msg = "";
  var pass = true;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    msg = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    msg = "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        msg = "请输入正确身份号";
        pass = false;
      }
    }
  }
  var cardHint = { msg, pass }
  return cardHint;
}
const isPhoneNum = function(num) {
  // var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  var myreg = /^1[0-9]{10}$/;
  var msg = "",
    pass = true;
  if (!myreg.test(num)) {
    msg = "请输入正确的手机号"
    pass = false;
  } else if (num.length != 11) {
    msg = "请输入11位手机号"
    pass = false;
  } else if (num == null || num == undefined) {
    msg = "请输入手机号"
    pass = false;
  }
  var phoneHint = { msg, pass };
  return phoneHint;
}
const modal = function(cont) {
  wx.showModal({
    title: '提示',
    content: cont,
    showCancel: false
  })
}
const isLogin = function() {
  // let user = localStorage.getItem('user');
  // if (user != "" && user != null) {
  //   return true
  // } else {
  //   return false
  // }
  // 测试关闭验证登陆
  return true
}
const userInfoAll = function(type, obj, changeType) {
  var msg = "",
    pass = true;
  if (type == 1) {
    if (obj.name == "") {
      msg = "请填写您的姓名"
      pass = false
    } else if (obj.age == "") {
      msg = "请填写您的年龄"
      pass = false
    } else if (obj.s_province == "") {
      msg = "请选择您所在地区"
      pass = false
    } else if (obj.curriculum == "") {
      msg = "请选择艺考方向"
      pass = false
    } else if (obj.m_school == "") {
      msg = "请选择目标院校"
      pass = false
    }
  } else {
    if (obj.cover == "") {
      msg = "请上传机构封面"
      pass = false
    } else if (obj.avatar == "") {
      msg = "请上传机构头像"
      pass = false
    } else if (obj.name == "") {
      msg = "请填写机构名称"
      pass = false
    } else if (obj.phone == "") {
      msg = "请填写机构电话"
      pass = false
    } else if (obj.name == "") {
      msg = "请填写机构名称"
      pass = false
    } else if (obj.s_province == "" || obj.s_county == "" || obj.s_city == "") {
      msg = "请选择机构所在地区"
      pass = false
    } else if (obj.address == "") {
      msg = "请填写机构详细地址"
      pass = false
    } else if (obj.curriculum == "") {
      msg = "请选择教授课程"
      pass = false
    } else if (changeType=='adduser') {
      if (obj.qualifications.length == 0) {
        msg = "请上传机构资质"
        pass = false
      }
    }
  }
  var userInfoHint = { msg, pass }
  return userInfoHint;
}
module.exports = {
  isIdCard: isIdCard,
  isPhoneNum: isPhoneNum,
  modal: modal,
  isLogin: isLogin,
  userInfoAll: userInfoAll
};
