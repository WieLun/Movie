<template>
  <div class="navbar">
    <hamburger class="hamburger"/>
    <breadcrumb class="breadcrumb" />
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
import Hamburger from "./hamburger/Hamburger"
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
  overflow: hidden;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

</style>
