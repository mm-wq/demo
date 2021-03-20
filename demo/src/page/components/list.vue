<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="年龄" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column label="性别" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      tableData: [],
    };
  },
  computed: {},
  methods: {
    //编辑
    handleEdit(index, row) {
      this.$emit("update", index,row);
      // console.log(index, row);
    },
    handleDelete(index, row) {
       this.$store.dispatch("removeList",index).then(() => {
        });
      console.log(index, row);
    },
  },
  mounted() {
    console.log(this.$store);
    this.tableData = this.$store.getters.list;
  },
};
</script>
<style scoped>
</style>