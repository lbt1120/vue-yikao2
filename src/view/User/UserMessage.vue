<template>
<div class="usermessagewapper wapper">
  <div class="contentnav-tab b-cutline  p-fixed tab3">
    <ul>
      <li :class="{active:pagename=='notify'}" @click="changetab('notify')">
        <a href="javascript:;">通知</a>
        <div class="newNum" v-if="datalist.notify_num!=0">{{datalist.notify_num}}</div>
      </li>
      <li :class="{active:pagename=='circle'}" @click="changetab('circle')">
        <a href="javascript:;">评论</a>
        <div class="newNum" v-if="datalist.circle_num!=0">{{datalist.circle_num}}</div>
      </li>
      <li :class="{active:pagename=='order'}" @click="changetab('order')">
        <a href="javascript:;">订单消息</a>
        <div class="newNum ordernum" v-if="datalist.order_num!=0">{{datalist.order_num}}</div>
      </li>
    </ul>
  </div>
  <div class="Messagebox">
    <div class="messagewapper">
      <!-- 如果有数据则显示此内容 -->
      <div v-if="messagelist.length>0" class="content-scroll">
        <ul>
          <li :class="{editstate:compile==true}" v-for="(item,index) in messagelist" @click="check(item)" v-if="compile==true">
            <div class="redtag" v-if="item.status==true"></div>
            <div class="messagebox">
              <div class="f-left delete-active" :class="{active:messageArray.indexOf(item.id)!=-1||messageArray.indexOf(item.mid)!=-1}">
                <div class="tag2img"></div>
              </div>
              <div class="f-left" v-if="pagename=='notify'">
                <div class="messagecontent row2 text-overflow">
                  {{item.title}}
                </div>
                <div class="messagecontent row2 text-overflow">
                  {{item.intro}}
                </div>
                <div class="date">
                  {{item.time}}
                </div>
              </div>
              <div class="f-left" v-if="pagename=='circle'">
                <div class="messagecontent row2 text-overflow">
                  {{item.name}}
                </div>
                <div class="messagecontent row2 text-overflow">
                  {{item.do}}
                </div>
                <div class="date">
                  {{item.time}}
                </div>
              </div>
              <div class="f-left" v-if="pagename=='order'">
                <div class="messagecontent row2 text-overflow">
                  订单消息：您的订单{{item.orderStatus}}
                </div>
                <div class="messagecontent row2 text-overflow">
                  {{item.text}}
                </div>
                <div class="date">
                  {{item.createtime}}
                </div>
              </div>
            </div>
          </li>
          <li v-for="(item,index) in messagelist" @click="changeStatus(item)" v-if="compile==false">
            <router-link :to="{name:'contentrichtext', params: { docid:item.id } }" v-if="item.link==''&&pagename=='notify'">
              <div class="redtag" v-if="item.status==true"></div>
              <div class="messagebox">
                <div class="f-left delete-active">
                  <div class="tag2img"></div>
                </div>
                <div class="f-left">
                  <div class="messagecontent row2 text-overflow">
                    {{item.title}}
                  </div>
                  <div class="messagecontent row2 text-overflow">
                    {{item.intro}}
                  </div>
                  <div class="date">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </router-link>
            <a :href="item.link" v-if="item.link!=''&&pagename=='notify'">
              <div class="redtag" v-if="item.status==true"></div>
              <div class="messagebox">
                <div class="f-left delete-active">
                  <div class="tag2img"></div>
                </div>
                <div class="f-left">
                  <div class="messagecontent row2 text-overflow">
                    {{item.title}}
                  </div>
                  <div class="messagecontent row2 text-overflow">
                    {{item.intro}}
                  </div>
                  <div class="date">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </a>
            <router-link :to="{name:'contenttext', params: { id:item.mood[0].id} }" v-if="pagename=='circle'">
              <div class="redtag" v-if="item.status==true"></div>
              <div class="messagebox">
                <div class="f-left delete-active">
                  <div class="tag2img"></div>
                </div>
                <div class="f-left">
                  <div class="messagecontent row2 text-overflow">
                    {{item.name}}
                  </div>
                  <div class="messagecontent row2 text-overflow">
                    {{item.do}}
                  </div>
                  <div class="date">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </router-link>
            <router-link :to="{name:'order', params: { data:item.id } }" v-if="pagename=='order'">
              <div class="redtag" v-if="item.status==true"></div>
              <div class="messagebox">
                <div class="f-left delete-active">
                  <div class="tag2img"></div>
                </div>
                <div class="f-left">
                  <div class="messagecontent row2 text-overflow">
                    订单消息：您的订单{{item.orderStatus}}
                  </div>
                  <div class="messagecontent row2 text-overflow">
                    {{item.text}}
                  </div>
                  <div class="date">
                    {{item.createtime}}
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 如果没数据则显示此内容 -->
      <notfound v-if="datalist==''">您未收到任何消息</notfound>
    </div>
  </div>
  <!-- 底部编辑 -->
  <div class="compilebox white_bg t-cutline" v-if="messagelist.length!=0">
    <div class="compile" v-if='compile==false'>
      <div class="f-right font32" @click="compileto">
        <span>编辑</span>
      </div>
    </div>
    <div class="compile" v-if='compile==true'>
      <div class="f-left font32" @click="checkall">
        <span v-if="checkallIs==false">全选</span>
        <span v-if="checkallIs==true">取消全选</span>
      </div>
      <div class="f-left font32" @click="deleteDataverify" v-if="messageArray.length!=0">
        <span>删除</span>
      </div>
      <div class="f-right font32" @click="compileto">
        <span>取消</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'usermessage',
  data() {
    return {
      pagename: 'notify',
      compile: false,
      checkallIs: false,
      messagelist: [],
      messageArray: [],
      datalist: {
        notify_num: 0,
        circle_num: 0,
        order_num: 0
      },
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    changetab(tab) {
      this.pagename = tab;
      this.messagelist = this.datalist[tab];
      this.compile = false;
      this.checkallIs = false;
      this.messageArray = [];
    },
    compileto() {
      this.compile != this.compile
      if (this.compile) {
        this.compile = false
      } else {
        this.compile = true
      }
    },
    checkall() {
      if (this.checkallIs) {
        this.checkallIs = false;
        this.messageArray = []
      } else {
        this.checkallIs = true
        this.messageArray = []
        for (let i = 0; i < this.messagelist.length; i++) {
          var id;
          if (this.pagename == 'notify') {
            id = this.messagelist[i].id
          } else if (this.pagename == 'circle') {
            id = this.messagelist[i].mid
          } else if (this.pagename == 'order') {
            id = this.messagelist[i].id
          }
          this.messageArray.push(id)
        }
      }
    },
    async getData() {
      DEFAULT_DATA.notifyNum = false;
      let params = {}
      const res = await _api.notify(params)
      this.datalist = res.data;
      this.messagelist = res.data.notify;
    },
    check(a) {
      var id;
      if (this.pagename == 'notify') {
        id = a.id
      } else if (this.pagename == 'circle') {
        id = a.mid
      } else if (this.pagename == 'order') {
        id = a.id
      }
      let valindex = this.messageArray.indexOf(id);
      if (valindex != -1) {
        this.messageArray.splice(valindex, 1);
      } else {
        this.messageArray.push(id)
      }
      if (this.messageArray.length == this.messagelist.length) {
        this.checkallIs = true;
      }
    },
    changeStatus(item) {
      if (this.pagename == 'notify' && item.status == true) {
        let id = item.id;
        this.getStatus(id)
      } else if (this.pagename == 'circle' && item.status == true) {
        let id = item.mid
        this.getStatus(id)
      } else if (this.pagename == 'order' && item.status == true) {
        let id = item.id;
        this.getStatus(id)
      }
    },
    // 信息已读接口
    async getStatus(id) {
      let type = this.pagename;
      let params = {
        id,
        type
      }
      const res = await _api.hasRead(params)
    },
    // 删除信息接口
    deleteDataverify() {
      let _this = this;
      this.mint.MessageBox.confirm('确定删除该心得?')
        .then(action => {
          _this.deleteMessage();
        })
        .catch(rejected => {
          console.log(rejected)
        })
    },
    async deleteMessage() {
      let type = this.pagename;
      let ids = this.messageArray;
      let params = {
        type,
        ids
      }
      var id;
      if (type == 'notify') {
        id = 'id'
      } else if (type == 'circle') {
        id = 'mid'
      } else if (type == 'order') {
        id = 'id'
      }
      const res = await _api.notify_delete(params)
      if (res.status == 200) {
        let Num = this.pagename + '_num';
        this.datalist[Num] = 0;
        for (let i = 0; i < this.messagelist.length;) {
          if (ids.indexOf(this.messagelist[i][id]) != -1) {
            this.messagelist.splice(i, 1);
            continue;
          }
          i++;
        }
      }
    }
  },
}
</script>
<style scope lang="less">
.newNum {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 25%;
    line-height: normal;
    background: #f70404;
    color: #fff!important;
    font-size: 1.2rem;
    border-radius: 50%;
}

.datanotfound {
    position: absolute;
    height: 100%;
    top: 0;
}

.ordernum {
    position: absolute;
    top: 1rem;
    right: 10%;
}

.messagewapper .content-scroll {
    padding-bottom: 5rem;
}
</style>
