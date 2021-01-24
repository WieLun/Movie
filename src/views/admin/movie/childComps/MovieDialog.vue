<template>
  <el-dialog
    title="修改电影"
    :visible.sync="$store.state.dialogMovieVisible"
    width="70%"
    top="5vh"
    class="movie-dialog"
  >
    <span slot="footer" class="dialog-footer">
      <el-button @click="setFalse">取 消</el-button>
      <el-button type="primary" @click="dialogMovieClick">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "MovieDialog",
  methods: {
    setTrue() {
      this.$store.commit("setMovieVisibleTrue");
    },
    setFalse() {
      this.$store.commit("setMovieVisibleFalse");
    },
    dialogMovieClick() {},
  },
};
</script>

<style scoped></style>
