// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
// 微信jssdk
import wx from 'weixin-js-sdk'
import wxTitle from 'vue-wechat-title'
// 自定义工具
import verify from '../static/js/vue-verify'
import screen from '../static/js/vue-screen'
import _$ from '../static/js/vue-tools'

// 模板全局调用
import notfound from '@/view/NotFound/View-NotFound'
import pagescroll from '@/components/ModuleTools/Module-PageScroll'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// vux中心
import {
  //指令
  TransferDom,
  // 插件
  AlertPlugin,
  LoadingPlugin,
  Picker,
  PopupPicker,
  Scroller,
  ToastPlugin,
  XTextarea
} from 'vux'

// Vue.component('picker', Picker)
// Vue.component('popup-picker', PopupPicker)
// Vue.component('scroller', Scroller)
// Vue.component('x-textarea', XTextarea)
Vue.component('notfound', notfound)
Vue.component('pagescroll', pagescroll)

Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

// 请求打包
import api from '../static/js/api'
import axios from '../static/js/vue-ajax'

// 插件全局引用
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vuex)
Vue.use(wxTitle)

// 工具全局引用
window.wx = wx;
window._$ = _$;
window._api = api

// 默认分享
wx.ready(function() {
  let title = '艺考'
  let url = window.location.href
  let cover = 'https://yikao.baolanbb.com/attachment/images/6/2018/01/SU30u4Fx40DSfPUx5r08WR8kw504O3.png'
  let introduction = '点缀你的演艺梦想'
  let obj = {
    title,
    url,
    cover,
    introduction
  }
  _api.share(obj)
})

// 分类过滤
Vue.filter('classify', function(value) {
  var data
  if (typeof(value) == 'number') {
    data = screen.classify(value)
  } else {
    data = value
  }
  return data;
})
// 性别过滤
Vue.filter('sex', function(value) {
  var data
  if (typeof(value) == 'number') {
    data = screen.sex(value)
  } else {
    data = value
  }
  return data;
})
// 学校过滤器
Vue.filter('school', function(value) {
  var data
  if (typeof(value) == 'number') {
    data = screen.school(value)
  } else {
    data = value;
  }
  return data;
})
// 省市过滤
Vue.filter('city', function(value) {
  var data
  if (typeof(value) == 'number') {
    data = screen.cityData(value)
  } else {
    data = value;
  }
  return data
})
// 全局引入js
Vue.prototype.axios = axios;
Vue.prototype.verify = verify;
Vue.prototype.screen = screen;
Vue.prototype.mint = MintUI;
// vuex配置
const store = new Vuex.Store({
  // 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
  state: {
    // user: '',
    user: {
      "type": 1,
      "name": "太",
      "avatar": "https:\/\/yikao.baolanbb.com\/attachment\/mavatar_thumb\/20180403170808yhMmuEdW.jpg",
      "id": "164",
      "uid": 198,
      "s_province": 3,
      "s_city": 76,
      "s_county": 1173,
      "address": "你好",
      "charge": null,
      "curriculum": [3,4,5],
      "propaganda": null,
      "introduce": "链接",
      "cover": "https:\/\/yikao.baolanbb.com\/attachment\/mposter_thumb\/20180403170802ZQLUvCgM.jpg",
      "qualifications": [],
      "sex": 1,
      "age": "0",
      "school": "",
      "m_school": "0",
      "c_points": 0,
      "integral": 3,
      "tel": "464646",
      "tco": "1",
      "slide": ["https:\/\/yikao.baolanbb.com\/attachment\/slide_thumb\/20180403170832VLsJMhys.jpg"]
    },
    usersign: {
      userstatus: "",
      userinfoData: "",
    },
    // 路由地址
    routename: 'home',
    // 文章搜索关键字
    search: {
      keyword: '',
      classify: 0
    },
    // 当前内容页id
    contentid: '',
    // 回复后数据
    contentText: '',
    // 向上滑框显示
    popupshow: false,
    // 向下话框显示
    popdownshow: false,
    popupwapper: {
      type: "comment",
      data: []
    },
    // 查看别人信息
    checkInfo: ''
  },
  // 即是定义提交触发更改信息的描述,常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态
  actions: {},
  // 调用 mutations 是唯一允许更新应用状态的地方
  mutations: {
    // 存储用户登陆数据
    user: function(state, user) {
      state.user = user;
    },
    //存储用户注册时数据
    usersign: function(state, usersign) {
      state.usersign = usersign;
    },
    routename: function(state, routename) {
      state.routename = routename;
    },
    // 修改对象
    search: function(state, search) {
      state.search = search;
    },
    // 修改分类
    classify: function(state, classify) {
      state.search.classify = classify
    },
    // 修改关键字
    keyword: function(state, keyword) {
      state.search.keyword = keyword
    },
    popupshow: function(state, popupshow) {
      state.popupshow = popupshow;
    },
    popdownshow: function(state, popdownshow) {
      state.popdownshow = popdownshow;
    },
    contentid: function(state, contentid) {
      state.contentid = contentid;
    },
    contentText: function(state, contentText) {
      state.contentText = contentText;
    },
    popupwapper: function(state, popupwapper) {
      state.popupwapper = popupwapper;
    },
    checkInfo: function(state, checkInfo) {
      state.checkInfo = checkInfo;
    }
  },
  // 允许组件从 Store 中获取数据
  getters: {},
  // 对象允许将单一的 Store 拆分为多个 Store 的同时保存在单一的状态树中
  modules: {}
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
// 路由校验
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) { // 对路由进行验证
    if (store.state.user != '') { // 已经登陆
      next() // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；    　　　　　　
      next({
        path: '/login',
        query: {
          Rurl: to.fullPath
        }
      })　　　　　
    }　　　　
  } else {　　　　　　
    next()　　
  }
})
