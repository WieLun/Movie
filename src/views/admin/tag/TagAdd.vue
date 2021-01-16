<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加标签</span>
      </div>
      <el-input  placeholder="请输入内容" v-model="input" clearable> </el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TagAdd",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
