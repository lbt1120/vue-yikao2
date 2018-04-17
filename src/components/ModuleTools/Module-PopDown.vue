<template>
<section class="popdownwapper" :class="{'popdownhidden':popdownbox==false}">
  <div class="zz transition-5s"></div>
  <div class="popdownwapper-content white_bg transition-5s">
    <slot>
    </slot>
  </div>
</section>
</template>
<script>
export default {
  name: 'popdown',
  data() {
    return {
      popdownbox: false,
    }
  },
  computed: {
    // 实时监测vuex里显示状态的数据变化
    popdownboxStatus: function() {
      return this.$store.state.popdownshow;
    }
  },
  watch: {
    // 如果发生改变则赋值
    popdownboxStatus: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.popdownbox = newVal;
      }
    }
  },
}
</script>
