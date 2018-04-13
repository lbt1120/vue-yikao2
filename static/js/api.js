import _ajax from './vue-ajax.js'
export default {
  search(obj) {
    let res = _ajax.get('do=index&op=search', obj)
    return res;
  },
  // 收藏接口
  collect(obj) {
    let res = _ajax.get('do=index&op=collect', obj)
    return res;
  },
  // 我的收藏
  my_collect(obj) {
    let res = _ajax.get('do=index&op=my_collect', obj)
    return res;
  },
  // 删除收藏
  del_collect(obj) {
    let res = _ajax.get('do=index&op=del_collect', obj)
    return res;
  },
  //学校
  school(obj) {
    let res = _ajax.get('do=school&op=index', obj)
    return res;
  },
  //学校详情
  schoolinfo(obj) {
    let res = _ajax.get('do=school&op=details', obj)
    return res;
  },
  // 艺考知识库
  knowledgeList(obj) {
    let res = _ajax.get('do=school&op=knowledgeList', obj)
    return res;
  },
  // 知识库内容
  knowledgeDetails(obj) {
    let res = _ajax.get('do=school&op=knowledgeDetails', obj)
    return res;
  },
  // 富文本内容
  richtext_detail(obj) {
    let res = _ajax.get('do=circle&op=detail', obj)
    return res;
  },
  // 院校富文本内容
  richtext_school(obj) {
    let res = _ajax.get('do=school&op=richText', obj)
    return res;
  },
  // 文本内容
  text_detail(obj) {
    let res = _ajax.get('do=circle&op=circle_detail', obj)
    return res;
  },
  orderDetail(obj) {
    let res = _ajax.get('do=circle&op=orderDetail', obj)
    return res;
  },
  //消息已读
  hasRead(obj) {
    let res = _ajax.get('do=circle&op=hasRead', obj)
    return res;
  },
  // 删除自己回复
  mood(obj) {
    let res = _ajax.get('do=circle&op=mood', obj)
    return res;
  },
  // 上传图片
  upload(obj) {
    let res = _ajax.post('do=circle&op=upload', obj)
    return res;
  },
  // 发布心得
  publish(obj) {
    let res = _ajax.post('do=circle&op=publish', obj)
    return res;
  },
  // 获取积分
  intNonu(obj) {
    let res = _ajax.post('do=opclass&op=intNonu', obj)
    return res;
  },
  // 公开课详情
  lesson_details(obj) {
    let res = _ajax.get('do=opclass&op=details', obj)
    return res;
  },
  // 订单详情
  tcourseDetails(obj) {
    let res = _ajax.get('do=mech&op=tcourseDetails', obj)
    return res;
  },
  // 课程详情
  tcourse(obj) {
    let res = _ajax.get('do=mech&op=tcourse', obj)
    return res;
  },
  // 机构详情
  ins_details(obj) {
    let res = _ajax.get('do=mech&op=details', obj)
    return res;
  },
  // 删除订单
  del_order(obj) {
    let res = _ajax.post('do=repay&op=del_order', obj)
    return res;
  },
  myStudentPhone(obj) {
    let res = _ajax.get('do=login&op=myStudentPhone', obj)
    return res;
  },
  myStudent(obj) {
    let res = _ajax.get('do=login&op=myStudent', obj)
    return res;
  },
  // 获取验证码
  code(obj) {
    let res = _ajax.get('do=login&op=send', obj)
    return res;
  },
  // 登陆
  login(obj) {
    let res = _ajax.get('do=login&op=login', obj)
    return res;
  },
  user_message(obj) {
    let res = _ajax.post('do=login&op=user_message', obj)
    return res;
  },
  myIntegral(obj) {
    let res = _ajax.get('do=login&op=myIntegral', obj)
    return res;
  },
  myStudentTcourse(obj) {
    let res = _ajax.get('do=login&op=myStudentTcourse', obj)
    return res;
  },
  myStudentAdd(obj) {
    let res = _ajax.post('do=login&op=myStudentAdd', obj)
    return res;
  },
  // 消息
  notify(obj) {
    let res = _ajax.get('do=circle&op=notify', obj)
    return res;
  },
  // 消息删除
  notify_delete(obj) {
    let res = _ajax.get('do=circle&op=notify_delete', obj)
    return res;
  },
    // 用户删除（测试用）
  user_delete(obj) {
    let res = _ajax.get('do=login&op=ceshi', obj)
    return res;
  },
  share(obj) {
    let _this = this
    let type = 3;
    let params = { type }
    wx.onMenuShareTimeline({
      title: obj.title,
      link: obj.url,
      imgUrl: obj.cover,
      success: function() {
        _this.intNonu(params)
      }
    });
    wx.onMenuShareAppMessage({
      title: obj.title,
      link: obj.url,
      imgUrl: obj.cover,
      desc: obj.introduction,
      success: function() {
        _this.intNonu(params)
      },
    });
    wx.onMenuShareQQ({
      title: obj.title,
      link: obj.url,
      imgUrl: obj.cover,
      desc: obj.introduction,
      success: function() {
        _this.intNonu(params)
      },
    });
    wx.onMenuShareQZone({
      title: obj.title,
      link: obj.url,
      imgUrl: obj.cover,
      desc: obj.introduction,
      success: function() {
        _this.intNonu(params)
      },
    });
  }
}
