<template>
  <div id="app">
    <!-- <index/> -->
    <router-view />
  </div>
</template>
<script>
import Index from "components/content/index/Index";

export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
