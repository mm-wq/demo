<template>
  <div class="app-container">
    <!-- :http-request="UploadImage" :on-change="fileChange" :before-upload="onBeforeUploadImage" -->
    <div class="uploadImg">
      <el-upload
        :limit="uploadImgNumber"
        multiple
        action="string"
        :http-request="UploadImage"
        :file-list="toUrl"
        list-type="picture-card"
        :class="[hasImg ? 'img-hd' : '']"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button @click="uploadEmit">确认上传</el-button>
    </div>

    <el-dialog class="dialog" append-to-body :visible.sync="dialogVisible">
      <img class="image" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "hotProductList",
  props: {
    uploadObj: {},
    // 上传的图片限制
    uploadImgNumber: {
      type: Number,
      default: 1,
    },

    // 多图上传
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imgList: [],
    };
  },

  computed: {
    hasImg() {
      if (this.imgList.length || this.fileList.length) {
        return true;
      }
      return false;
    },
    toUrl() {
      if (this.fileList instanceof Array) {
        return this.fileList
      } else {
        const url = {
          url: this.imgSrc + this.fileList,
        };
        let arr=[]
        arr.push(url)
        return arr
      }
    },
  },
  methods: {
    handleRemove(file) {
      let that = this;
      that.imgList.forEach((item, index) => {
        if (item.uid == file.raw.uid) {
          that.imgList.splice(index, 1);
        }
      });
      this.$emit("removeImg");
    },
    handlePictureCardPreview(file) {
      // console.log(file, '上传')
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传图片
    UploadImage(file) {
      this.imgList.push(file.file);
    },
    // 上传
    uploadEmit() {
      if (this.imgList.length < 1) {
        this.$message({
          message: "请先确认上传图片",
          type: "error",
        });
      } else {
        if (this.uploadObj != 1) {
          this.$emit("fileChange", this.imgList[0], this.uploadObj);
        } else if (this.uploadObj == 1) {
          this.$emit("fileChange", this.imgList[0]);
        }
      }
    },
    // onBeforeUploadImage() {
    //     console.log("11111111")
    // },
    // fileChange() {
    //     console.log("3333333333")
    // },
  },
};
</script>

<style>
.el-upload-list--picture-card .el-upload-list__item {
  width: 80px;
  height: 80px;
}

.el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 90px;
}

.img-hd .el-upload {
  display: none;
}
</style><style scoped>
.uploadImg {
  display: flex;
  max-height: 150px;
}

.dialog {
  width: 50%;
  height: 100%;
  margin: 0 auto;
}

.image {
  width: 100%;
  height: 100%;
}

.el-button {
  height: 40px;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
