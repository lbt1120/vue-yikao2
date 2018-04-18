<template>
<section class="h-schoolwarpper warpper">
  <div class="content-warpper" :style="{height:windowHeight+'px'}">
    <section class="content-left">
      <scroll class="nav-warpper" :pulldown="pulldown">
        <ul class="content">
          <li v-for="(item,index) in navArr" :class="{navActive:navindex==index}" @click="navSearch(item,index)" :data-index="index">{{item.value}}</li>
        </ul>
      </scroll>
    </section>
    <section class="content-right">
      <div class="top t-cutline">
        <div class="filtratenavbox white_bg b-cutline">
          <ul>
            <li :class="{active:tabnav=='profession'}" @click="tabchange('profession')">
              <div>{{classifyVal}}</div>
              <div class="institutionarrow">
                <div class="arrow transition-5s"></div>
              </div>
            </li>
            <li :class="{active:tabnav=='grade'}" @click="tabchange('grade')">
              <div>{{gradeVal}}</div>
              <div class="institutionarrow">
                <div class="arrow transition-5s"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="selectBox transition-5s" ref="selectBox">
          <scroll class="wrapper" :pulldown="pulldown">
            <ul class="content">
              <li v-for="(item,index) in dataArr" @click="changeSelect(item)">{{item.value}}</li>
            </ul>
          </scroll>
        </div>
      </div>
      <div class="bottom schoolContent">
        <scroll class="school-warpper" :pulldown="pulldown" :style="{height:windowHeight-80+'px'}">
          <ul>
            <li class="b-cutline" v-for="(item,index) in defaultDataArr.school" v-if="datalist.school.length ==0" @click="routerTo(item.id)">
              <div class="school-logo">
                <img :src="defaultDataArr.src+item.logo" alt="">
              </div>
              <div class="title">{{item.name}}</div>
            </li>
            <li class="b-cutline" v-for="(item,index) in datalist.school" v-if="datalist.school.length !=0" @click="routerTo(item.id)">
              <div class="school-logo">
                <img :src="datalist.src+item.logo" alt="">
              </div>
              <div class="title">{{item.name}}</div>
            </li>
          </ul>
        </scroll>
      </div>
      <div class="selectBoxzz" v-if="showzz" @click='zzhidden'></div>
    </section>
  </div>
</section>
</template>
<script>
import scroll from '@/components/ModuleTools/Module-Yscroll'
export default {
  name: 'home-school',
  data() {
    return {
      tabnav: '',
      datalist: {
        school: [],
        scr: ''
      },
      defaultDataArr: {},
      dataArr: [],
      navArr: [],
      pulldown: false,
      classifyVal: '默认',
      gradeVal: '分数',
      windowHeight: 0,
      val: '',
      pageShow: false,
      navindex: 7,
      condition: {
        area_id: '',
        direction: '',
        leftMenu: 7,
        name: '',
        max: '',
        min: '',
      },
      showzz: false
    }
  },
  methods: {
    // 窗口大小
    widowSize() {
      let _this = this,
        windowHeight = window.screen.availHeight;
      _this.windowHeight = windowHeight - 120;
    },
    // 标签切换
    tabchange(tabname) {
      if (this.tabnav == tabname) {
        this.tabnav = '';
        this.$refs.selectBox.style.height = 0;
        this.showzz = false;
      } else if (this.tabnav == '' && tabname == 'grade') {
        this.tabnav = tabname
        this.$refs.selectBox.style.height = 17.5 + 'rem'
        this.showzz = true;
      } else {
        this.tabnav = tabname
        this.$refs.selectBox.style.height = 25 + 'rem'
        this.showzz = true;
      }
      if (tabname == 'profession') {
        let id = 0;
        let value = '默认'
        this.dataArr = _$.classify();
        this.dataArr.unshift({
          id,
          value
        })
      } else {
        this.dataArr = [{
            min: 0,
            max: 299,
            value: '300以下'
          },
          {
            min: 300,
            max: 399,
            value: '300-400分'
          },
          {
            min: 400,
            max: 499,
            value: '400-500分'
          },
          {
            min: 500,
            max: 999,
            value: '500以上'
          }
        ]
      }
    },
    zzhidden() {
      this.tabnav = '';
      this.$refs.selectBox.style.height = 0;
      this.showzz = false;
    },
    // 默认数据
    defaultData() {
      // var defaultdata = DEFAULT_DATA.schoolMenu.left;
      var defaultdata = ["8大传媒", "9大美院", "11大音乐", "30所独立", "15所参照", "2018简章", "已出成绩", "全部地区"];
      this.navArr = _$.cityData('', '', '', 's_province');
      for (let i = defaultdata.length - 1; i > -1; i--) {
        var id = i,
          value = defaultdata[i],
          type = 'school';
        this.navArr.unshift({
          id,
          value,
          type
        })
      }
    },
    // 请求数据
    async getData() {
      let params = {};
      let res = await _api.school(params)
      this.pageShow = true;
      this.mint.Indicator.close();
      console.log(res)
      if (res.status == 200) {
        this.mint.Indicator.close();
        this.defaultDataArr = res.data
        this.datalist.src = res.data.src
        this.searchSchool();
      } else {
        this.mint.Indicator.close();
        this.datalist = ""
      }
    },
    // 查找学校
    searchSchool() {
      let _this = this,
        defaultArr = _this.defaultDataArr.school,
        condition = _this.condition,
        area = condition.area_id,
        direction = condition.direction,
        leftMenu = condition.leftMenu,
        max = condition.max,
        min = condition.min,
        name = condition.name;
      if (area === '' && leftMenu === 7 && name == "") {
        var schoolArr = [];
      } else if (area !== '' && leftMenu === 7) {
        var schoolArr = [];
        for (let i = 0; i < defaultArr.length; i++) {
          if (defaultArr[i].area_id == area) {
            schoolArr.push(defaultArr[i])
          }
        }
        if (direction != '') {
          schoolArr = this.defaultArrSx(schoolArr, direction)
        }
        if (max !== '' || min !== '') {
          schoolArr = this.gradeValSx(schoolArr, max, min)
        }
        if (name != '') {
          schoolArr = this.searchSchoolName(schoolArr, name)
        }
      } else if (leftMenu !== 7 && area === '') {
        var schoolArr = [];
        for (let i = 0; i < defaultArr.length; i++) {
          if (defaultArr[i].leftMenu[leftMenu] == 1) {
            schoolArr.push(defaultArr[i])
          }
        }
        if (direction != '') {
          schoolArr = this.defaultArrSx(schoolArr, direction)
        }
        if (max != '' || min != '') {
          schoolArr = this.gradeValSx(schoolArr, max, min)
        }
        if (name != '') {
          schoolArr = this.searchSchoolName(schoolArr, name)
        }
      } else if (area == '' && direction != '') {
        var schoolArr = []
        for (let i = 0; i < defaultArr.length; i++) {
          if (defaultArr[i].direction.indexOf(direction) != -1) {
            schoolArr.push(defaultArr[i])
          }
        }
        if (max !== '' || min !== '') {
          schoolArr = this.gradeValSx(defaultArr, schoolArr, max, min)
        }
      } else if (area == '' && max !== '' || min !== '') {
        var schoolArr = [];
        for (let i = 0; i < defaultArr.length; i++) {
          if (defaultArr[i].max < max || defaultArr[i].min >= min) {
            schoolArr.push(defaultArr[i])
          }
        }
        if (direction != '') {
          schoolArr = this.defaultArrSx(schoolArr, direction)
        }
      } else if (area === '' && leftMenu === 7 && name != "") {
        var schoolArr = [];
        for (let i = 0; i < defaultArr.length; i++) {
          if (defaultArr[i].name.indexOf(name) != -1) {
            schoolArr.push(defaultArr[i])
          }
        }
        if (direction != '') {
          schoolArr = this.defaultArrSx(schoolArr, direction)
        }
        if (max != '' || min != '') {
          schoolArr = this.gradeValSx(schoolArr, max, min)
        }
      }
      _this.datalist.school = schoolArr
    },
    // 按学校名查找
    searchSchoolName(schoolArr, val) {
      for (let i = 0; i < schoolArr.length; i++) {
        if (schoolArr[i].name.indexOf(val) == -1) {
          var a = schoolArr.splice(i--, 1)
        }
      }
      return schoolArr;
    },
    // 按分类查找
    defaultArrSx(schoolArr, val) {
      let changeArr = schoolArr;
      for (let i = 0; i < changeArr.length; i++) {
        if (changeArr[i].direction.indexOf(val) == -1) {
          changeArr.splice(i, 1)
        }
      }
      if (changeArr.length == 0) {
        return schoolArr;
        _this.mint.MessageBox.alert('未找到匹配学校', '提示')
      } else {
        return changeArr;
      }
    },
    // 按分数查找
    gradeValSx(schoolArr, max, min) {
      let changeArr = schoolArr;
      for (let i = 0; i < changeArr.length; i++) {
        if (changeArr[i].max >= max || changeArr[i].min < min) {
          changeArr.splice(i--, 1)
        }
      }
      if (changeArr.length == 0) {
        _this.mint.MessageBox.alert('未找到匹配学校', '提示')
        return schoolArr;
      } else {
        return changeArr;
      }
    },
    // 改变选项
    changeSelect(item) {
      if (this.tabnav == 'profession') {
        this.classifyVal = item.value
        this.condition.direction = item.id
      } else {
        this.gradeVal = item.value;
        this.condition.max = item.max;
        this.condition.min = item.min;
      }
      this.$refs.selectBox.style.height = 0
      this.tabnav = ''
      this.showzz = false
      this.searchSchool()
    },
    // 左边菜单栏选择
    navSearch(item, index) {
      let _this = this,
        type = item.type,
        id = item.id;
      if (type != undefined) {
        _this.condition.leftMenu = id;
        _this.condition.area_id = "";
      } else {
        _this.condition.leftMenu = 7;
        _this.condition.area_id = id;
      }
      this.navindex = index;
      this.searchSchool()
    },
    // 跳转院校详情
    routerTo(id) {
      this.$router.push({
        name: 'school',
        params: {
          id
        }
      })
    }
  },
  computed: {  
    keyword() {
      return this.$store.state.search.keyword;
    }
  },
  components: {
    scroll,
    // "v-404": notfond,
  },
  mounted() {
    this.widowSize();
    this.getData();
    this.defaultData()
  },
  watch: {
    classify(newVal, oldVal) {
      let _this = this;
      if (newVal != oldVal) {
        let keyword = _this.$store.state.search.keyword;
        let classify = newVal;
        _this.condition.name = keyword;
        _this.condition.direction = classify;
        _this.searchSchool()
      }
    },
    keyword(newVal, oldVal) {
      let _this = this;
      if (newVal != oldVal) {
        let keyword = newVal
        _this.condition.name = keyword;
        _this.condition.area_id = '';
        _this.condition.leftMenu = 7;
        _this.navindex = 7;
        _this.searchSchool()
      }
    }
  }
}
</script>
<style scoped>
@import"./less/HomeSchool.less"
</style>
