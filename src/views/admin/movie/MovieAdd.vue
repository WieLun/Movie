<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加电影</span>
      </div>
      <movie-child />
    </el-card>
  </div>
</template>

<script>
import MovieChild from "./childComps/MovieChild";

export default {
  name: "MovieAdd",
  components: {
    MovieChild,
  },
};
</script>

<style scoped>
</style>
