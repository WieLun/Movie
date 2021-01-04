<template>
  <div>
    <h3 class="title">推荐歌单</h3>
    <div class="music">
      <music-item
        v-for="(item, index) in songsList"
        :key="index"
        :music-item="item"
      />
    </div>
  </div>
</template>

<script>
import MusicItem from "./MusicItem";

export default {
  name: "Music",
  components: {
    MusicItem,
  },
  props: {
    songsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.music {
  width: 1100px;
  height: 486px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.title {
  font-weight: 400;
  margin-bottom: 20px;
  padding-left: 8px;
}
</style>
