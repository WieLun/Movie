<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
.tab-bar {
  background-color: #ededed;

  height: 100%;
  width: 200px;
  bottom: 0;
  position: absolute;
  top: 60px;
}
</style>
