<template>
  <div class="navbar">
    <hamburger />
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from "./hamburger/Hamburger";

export default {
  name: "NavBar",
  components: {
    Hamburger,
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

.right-menu {
  padding-right: 20px;
}
</style>
