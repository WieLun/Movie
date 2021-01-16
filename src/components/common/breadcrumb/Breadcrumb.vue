<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="index"
        ><a :href="item.path">{{ item.meta.title }}</a></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [{ path: "/admin", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
      console.log("111", this.levelList);
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Home".toLocaleLowerCase()
      );
    },
  },
  created() {
    this.getBreadcrumb();
  },
};
</script>

<style scoped></style>
