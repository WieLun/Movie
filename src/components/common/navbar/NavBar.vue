<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />
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
import Breadcrumb from "components/common/breadcrumb/Breadcrumb";

export default {
  name: "NavBar",
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped>
/* .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
} */

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

  .breadcrumb-container {
    float: left;
  }
</style>
