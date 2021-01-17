<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加标签</span>
      </div>
      <el-input placeholder="请输入标签内容" v-model="tagName" clearable>
      </el-input>
      <el-button type="primary" @click="tagAddClick">确定</el-button>
    </el-card>
  </div>
</template>

<script>
import { tagAdd } from "network/tag";

export default {
  name: "TagAdd",
  data() {
    return {
      tagName: "",
    };
  },
  methods: {
    tagAddClick() {
      tagAdd({ name: this.tagName }).then((res) => {
        if (res.status === 0) {
          this.$message({
            message: res.data,
            type: "success",
          });
          this.tagName = "";
        } else {
          this.$message({
            message: res.data,
            type: "error",
          });
        }
      });
    },
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

.el-button {
  margin-top: 10px;
}
</style>
