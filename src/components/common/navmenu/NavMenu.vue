<template>
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF"
    :collapse="isCollapse"
    :collapse-transition="false"
    router
  >
    <el-submenu
      :index="index + ''"
      v-for="(item, index) in routes"
      :key="index"
    >
      <template slot="title">
        <svg-icon :icon-class="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
        :index="item.path + '/' + subItem.path"
        v-for="(subItem, index) in item.children"
        :key="index"
        @click="saveNavState(item.path + '/' + subItem.path)"
      >
        <template slot="title">
          <svg-icon :icon-class="subItem.meta.icon" />
          <span>{{ subItem.meta.title }}</span>
        </template></el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
    routes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activePath: " ",
    };
  },
  created() {
    this.activePath = sessionStorage.getItem("activePath");
  },
  methods: {
    saveNavState(activePath) {
      sessionStorage.setItem("activePath", activePath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$router.options);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}

.svg-icon {
  margin-right: 10px;
}
</style>
