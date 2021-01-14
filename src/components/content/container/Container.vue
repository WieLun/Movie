<template>
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <!-- <nav-menu/> -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#409EFF"
        :collapse="isCollapse"
        :collapse-transition="false"
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
            :index="index + ''"
            v-for="(subItem, index) in item.children"
            :key="index"
          >
            <template slot="title">
              <svg-icon :icon-class="subItem.meta.icon" />
              <span>{{ subItem.meta.title }}</span>
            </template></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header> 
        <span v-if="isCollapse" class="toggle-button" @click="toggleClick">&lt;&lt;</span>
        <span v-else class="toggle-button" @click="toggleClick">&gt;&gt;</span>
      </el-header>

      <el-main>
        <!-- <router-view /> -->
        main
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "components/common/navmenu/NavMenu";
export default {
  name: "Container",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$router.options.routes[0].children);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleClick() {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
}
.el-footer {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #304156;
}
.el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
}
.toggle-button {
  /* background-color: #4A5064; */
  text-align: center;
}

/* 
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
