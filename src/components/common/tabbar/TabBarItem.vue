<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#dd6d60",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.path && this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  font-size: var(--font-size);
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  padding-left: 30px;
  text-decoration: none;
}
.tab-bar-item div {
  float: left;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-bottom:-3px
}
</style>
