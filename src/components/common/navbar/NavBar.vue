<template>
  <div class="navbar">
    <div class="left-menu">
      <hamburger />
      <breadcrumb />
    </div>
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Home</el-dropdown-item>
          <el-dropdown-item divided>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from "./hamburger/Hamburger";
import Breadcrumb from "./breadcrumb/Breadcrumb";

export default {
  name: "NavBar",
  components: {
    Hamburger,
    Breadcrumb,
  },
};
</script>

<style scoped>
.navbar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
