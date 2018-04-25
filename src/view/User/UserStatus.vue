<template>
  <div class="wapper white_bg userStatuswapper">
    <div class="userstatusbox">
      <div class="wappertitlebox">
        <div class="wapper-title font32">请选择您在艺考中的身份</div>
        <div class="title-state font28">请慎重选择，身份一旦选择后不可更改</div>
      </div>
      <div class="statusbox">
        <div class="selectbox" @click="userstatus('student')">
          <div class="statusimg status-student"></div>
          <div class="statuscontent font36">学生</div>
        </div>
        <div class="selectbox" @click="userstatus('institution')">
          <div class="statusimg status-jg"></div>
          <div class="statuscontent font36">机构</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userstatus',
  data() {
    return {

    }
  },
  methods: {
    userstatus: function(status) {
      let usersign = this.$store.state.usersign
      var userstatus
      if (status=='student') {
        userstatus=1
      }else{
        userstatus=2
      }
      usersign.userstatus = userstatus;
      this.$router.push({ name: 'userinfo',params:{changetype:'adduser',type:userstatus}})
      this.$store.commit('usersign', usersign)
    }
  },
}

</script>
<style lang="less" scoped>
/*用户身份选择*/
.userStatuswapper {
  height: 100%;
  overflow: hidden;
  .wappertitlebox {
    text-align: center;
    >div {
      margin-bottom: 1rem;
    }
  }
  .statusimg {
    width: 10.45rem;
    height: 10.45rem;
  }
  .statusbox {
    overflow: hidden;
    margin-top: 7.35rem;
    .selectbox {
      width: 10.45rem;
      margin: 0 auto;
      margin-bottom: 7.35rem;
      text-align: center;
    }
  }
  .statuscontent {
    margin-top: 1.4rem;
  }
}
.userstatusbox {
  margin: 2rem 6.85rem;
}

.status-student {
  background: url('/static/image/icon/status-student.png') no-repeat;
  background-size: 100%;
}

.status-jg {
  background: url('/static/image/icon/status-jg.png') no-repeat;
  background-size: 100%;
}
</style>
