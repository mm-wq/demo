<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list @update="update"></v-list>
    <v-add :info="info" ref="change"></v-add>
  </div>
</template>
<script>
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  props: [],
  components: {
    vList,
    vAdd,
  },
  data() {
    return {
      info: {
        isShow: false,
        isAdd: true,
      },
    };
  },
  computed: {},
  methods: {
    //点击添加
     add() {
        this.info.isShow = true
        this.info.isAdd = true
      },
      update(index,row){
        this.info.isShow = true
        this.info.isAdd = false
        // console.log(index,row);
        this.$refs.change.getone(index,row)
      }
  },
  mounted() {},
};
</script>
<style scoped>
</style>