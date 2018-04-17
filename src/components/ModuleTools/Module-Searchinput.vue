<template>
<div class="search-box">
  <div class="search-inputbox  f-left" :class="{'search-inputbox-full':search==false}" @click="focus">
    <div class="inputbox " :class="{'nosearch':search==false}">
      <input type="text" class="font32 " :class="{'inputcenter':search==false}" :placeholder="hint" @focus="focus" @blur="blur" v-model="searchKey" v-focus="search">
      <div class="deletebtn" :class="{'search-blur':search==false}" @click="clear()"></div>
      <div class="searchbtn " :class="{'search-searchbtn-center':search==false}"></div>
    </div>
  </div>
  <div class="notsearch f-left font32" :class="{'search-blur':search==false}" @click="cancle">取消</div>
</div>
</template>
<script>
export default {
  name: 'searchbox',
  data() {
    return {
      hint: "搜索内容",
      search: false,
      searchKey: ""
    }
  },
  methods: {
    focus: function() {
      this.hint = "";
      this.search = true;
      this.$emit('searchfocus', true)
    },
    blur: function() {
      if (this.searchKey == "") {
        this.hint = "搜索内容";
        this.search = false;
      }
    },
    clear: function() {
      this.searchKey = "";
    },
    savekey: function() {
      let historySearchArray
      if (localStorage.historySearchKey == undefined) {
        historySearchArray = new Array;
        if (this.searchKey != "") {
          historySearchArray.push(this.searchKey);
          localStorage.setItem('historySearchKey', historySearchArray)
        }
      } else {
        historySearchArray = localStorage.historySearchKey.split(',');
        if (this.searchKey != "") {
          historySearchArray.push(this.searchKey);
          localStorage.setItem('historySearchKey', historySearchArray)
        }
      }
    },
    cancle: function() {
      this.$store.commit('keyword', '')
      this.search = false;
      this.hint = "搜索内容";
      this.searchKey = ""
      this.$emit('searchfocus', false)
    }
  },
  watch: {
    // 监听input变化
    searchKey: function(e) {
      this.$store.commit('keyword', e);
    }
  },
  mounted() {
    this.$on('clear', () => {
      this.clear();
    });

  },
  directives: {
    focus: {
      update: function(el, {
        value
      }) {
        if (value) {
          el.focus()
        }
      }
    }
  },
}
</script>
<style scoped lang="scss">
/*搜索框样式*/
.search-box {
    height: 5rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 0.05rem solid #e0e0e0;
}

.notsearch {
    width: 15%;
    text-align: center;
    float: left;
    line-height: 5rem;
}

.search-inputbox {
    margin: 1.1rem 0 1.1rem 1.2rem;
    background-color: #f3f3f3;
    /*width: 24.25rem;*/
    width: 80%;
    height: 2.8rem;
    border-radius: 0.6rem;
    position: relative;

    .deletebtn {
        width: 1rem;
        height: 1rem;
        position: absolute;
        bottom: 0.9rem;
        right: 0.9rem;
    }

    .searchbtn {
        width: 1.3rem;
        height: 1.35rem;
        float: left;
        margin-top: 0.85rem;
    }

    input {
        height: 100%;
    }
    .inputbox,
    .nosearch {
        height: 100%;
    }

    .inputbox {
        margin-left: 5%;

        input {
            width: 80%;
            border: none;
            outline: none;
            background-color: #f3f3f3;
            margin-left: 2%;
        }

        .inputcenter {
            width: 40%;
        }
    }

    .nosearch {
        width: 50%;
        margin-left: 50%;
        transform: translateX(-25%);
    }

    .search-blur {
        display: none;
    }
}

/*未输入时搜索框最长宽度*/

.search-inputbox-full {
    width: 92%;
}
</style>
