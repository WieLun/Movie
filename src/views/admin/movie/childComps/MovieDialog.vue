<template>
  <el-dialog
    title="修改电影"
    :visible.sync="$store.state.dialogMovieVisible"
    width="60%"
    top="5vh"
    class="movie-dialog"
  >
    <slot></slot>
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
    // dialogMovieClick() {},
  },
};
</script>

<style scoped></style>
