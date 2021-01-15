<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1106"
      width="200"
      height="200"
    >
      <path
        d="M850.688 830.72a28.416 28.416 0 0 1-22.016-8.704l-352-315.84a31.552 31.552 0 0 1 0-47.936l352-315.776a32 32 0 0 1 46.208 2.176 31.36 31.36 0 0 1-2.176 45.76l-325.824 291.84 325.824 291.84a31.36 31.36 0 0 1 2.176 45.76 35.52 35.52 0 0 1-24.192 10.88z m-341.248 0a28.416 28.416 0 0 1-22.016-8.704l-352-315.84a31.552 31.552 0 0 1 0-47.936l352-315.776a32 32 0 0 1 46.208 2.176 31.36 31.36 0 0 1-2.176 45.76l-325.824 291.84 325.824 291.84a31.424 31.424 0 0 1 2.176 45.76 35.52 35.52 0 0 1-24.128 10.88z"
        p-id="1107"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClick() {
      this.$store.commit("toggle");
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
