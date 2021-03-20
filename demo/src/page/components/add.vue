<template>
  <el-dialog :title="info.isAdd?'添加':'编辑'" :visible.sync="info.isShow">
    <el-form :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submit" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>编 辑</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        name: "",
        age: "",
        sex: "",
      },
      id:""
    };
  },
  computed: {},
  methods: {
    empty() {
      this.form = {
        name: "",
        age: "",
        sex: "",
      };
    },
    //点击取消
    cancel() {
      this.info.isShow = false;
    },
    //点击确定
    submit() {
        console.log(this.form);
        console.log(this.$store);
        this.$store.dispatch("addList", this.form).then(() => {
          (this.info.isShow = false), this.empty();
        });
    },
    getone(index, row) {
      // console.log(index, row);
      this.form.name = row.name;
      this.form.age = row.age;
      this.form.sex = row.sex;
      this.id=index
    },
      //编辑
      update(){
        console.log(this.id,this.form);
        console.log(this.$store.getters.list[this.id]);
         this.$store.getters.list[this.id].name=this.form.name;
         this.$store.getters.list[this.id].age=this.form.age;
         this.$store.getters.list[this.id].sex=this.form.sex;
         this.info.isShow=false;
      },
  },

  mounted() {},
};
</script>
<style scoped>
</style>