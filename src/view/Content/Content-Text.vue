<template>
  <section class="contenttextwapper">
    <div class="content-top">
      <v-appraise :datalist="contentData" :reply="true"></v-appraise>
    </div>
  </section>
</template>
<script>
import appraise from '@/components/ModuleDataView/Module-Appraise';
export default {
  name: 'appraise',
  data() {
    return {
      likebtn: true,
      contentData:[],
    }
  },
  components: {
    "v-appraise":appraise
  },
  mounted() {
    this.routechange();
  },
  methods: {
    async routechange() {
      let mid = this.$route.params.id;
      let params={mid}
      let res = await _api.text_detail(params)
      this.contentData.push(res.data[0]);
      console.log()
    },
  },
}

</script>
