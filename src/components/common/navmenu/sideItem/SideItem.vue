<template>
  <div v-if="!item.hidden">
    <template v-if="item.children.length === 1">
      <el-menu-item
        :index="item.path + '/' + subItem.path"
        v-for="(subItem, index) in item.children"
        :key="index"
        @click="saveNavState(item.path + '/' + subItem.path)"
      >
        <svg-icon :icon-class="subItem.meta.icon" />
        <span slot="title">{{ subItem.meta.title }}</span>
      </el-menu-item>
    </template>

    <el-submenu v-else :index="index">
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
  </div>
</template>

<script>
export default {
  name: "SideItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: String,
      default: "",
    },
  },

  methods: {
    saveNavState(activePath) {
      sessionStorage.setItem("activePath", activePath);
    },
  },
};
</script>

<style>
.svg-icon {
  margin-right: 10px;
}
.el-menu--collapse .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-icon-arrow-right{
  display: none;
}
</style>
