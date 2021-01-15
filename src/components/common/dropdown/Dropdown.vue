<template>
  <div class="right-menu">
    <el-dropdown>
      <span class="el-dropdown-link">
        <svg-icon icon-class="user" />
        <span class="title">admin</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
};
</script>

<style scoped>
.right-menu {
  padding-right: 20px;
}

.title {
  color: #409EFF;
  padding-left: 3px;
}
</style>
