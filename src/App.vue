<template>
  <div id="app">
    <nav-bar/>
    <index />
    <router-view></router-view>
  </div>
</template>
index
<script>
import Index from "components/content/index/Index";
import NavBar from 'components/content/navbar/NavBar';

export default {
  name: "App",
  components: {
    Index,
    NavBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
