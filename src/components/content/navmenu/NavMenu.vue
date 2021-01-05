<template>

  <div id="home">
    <el-container>
      <el-aside width="auto">
        <div class="logo"></div>
        <el-menu class="el-menu-vertical-demo" collapse-transition="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一11</span>
            </template>
            <el-menu-item-group>
                <el-menu-item>
                <i class="el-icon-location"></i>
                <span slot="title">选项11111</span>
                </el-menu-item>
                <el-menu-item>
                <i class="el-icon-location"></i>
                <span slot="title">选项2111</span>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
</div>
</template>

<script>
export default {
  name: "NavMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped></style>
