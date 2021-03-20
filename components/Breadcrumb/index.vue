<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noredirect' || index == levelList.length - 1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect || item.path">
          {{
          item.meta.title
          }}
        </router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route(newV) {
      this.getBreadcrumb(newV);
    },
  },
  methods: {
    getBreadcrumb(newV) {
      let matched = this.$route.matched.filter((item) => item.name);
      if (matched[matched.length - 1].name == "realationshipItem") {
        let arr = [
          {
            path: "/team",
            redirect: "/team/realationship",
            meta: {
              title: "团队管理",
            },
          },
          {
            path: "/team/realationship",
            meta: {
              title: "团队关系",
            },
          },
        ];
        matched = [...matched[0], ...arr, matched[matched.length - 1]];
        console.error(matched);
        matched[matched.length - 1].meta.title = `${newV.query.name}的团队`;
      }
      const first = matched[0];
      if (first && first.name !== "home") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
