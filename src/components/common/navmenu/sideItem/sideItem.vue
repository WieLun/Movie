<template>
  <div v-if="!item.hidden">
    <template v-if="item.children.length === 1">
      <el-menu-item :index="item.path + '/' + subItem.path" v-for="(subItem, index) in item.children" :key="index">
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
  name: "sideItem",
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
  created() {
    this.activePath = sessionStorage.getItem("activePath");
  },
  methods: {
    saveNavState(activePath) {
      sessionStorage.setItem("activePath", activePath);
    },
  },
};
</script>

<style scoped>
.svg-icon {
  margin-right: 10px;
}
</style>
