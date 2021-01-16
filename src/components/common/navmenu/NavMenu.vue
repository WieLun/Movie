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
    <side-item
      v-for="(route, index) in routes"
      :key="route.path"
      :item="route"
      :index="index + ''"
    />
  </el-menu>
</template>

<script>
import SideItem from "./sideItem/SideItem";

export default {
  name: "NavMenu",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SideItem,
  },
  data() {
    return {
      activePath: "",
    };
  },
  methods: {
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
  created() {
    this.activePath = sessionStorage.getItem("activePath");
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
