<template>
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <nav-menu :isCollapse="isCollapse" />
    </el-aside>

    <el-container>
      <el-header height="50px">
        <nav-bar>
          <div slot="left" class="navbar-left">
            <hamburger @toggleClick="toggleClick" />
            <breadcrumb />
          </div>
          <div slot="right">
            <dropdown @logoutClick="logoutClick" />
          </div>
        </nav-bar>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavMenu from "components/common/navmenu/NavMenu";

import Hamburger from "components/common/hamburger/Hamburger";
import Breadcrumb from "components/common/breadcrumb/Breadcrumb";
import Dropdown from "components/common/dropdown/Dropdown";
export default {
  name: "Container",
  components: {
    NavBar,
    NavMenu,
    Hamburger,
    Breadcrumb,
    Dropdown,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    },
    logoutClick() {
      sessionStorage.removeItem("user");
      this.$router.push("/admin/login");
    },
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #ffffff;
  padding: 0 0;
}
.el-footer {
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #304156;
}
.el-main {
  background-color: #e9eef3;
}
.toggle-button {
  /* background-color: #4A5064; */
  text-align: center;
}
.navbar-left {
  display: flex;
  align-items: center;
}
</style>
