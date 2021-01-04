<template>
  <div class="music-item">
    <div class="desc-wrap">
      <!-- <span>{{ musicItem.copywriter }}</span> -->
    </div>
    <img class="music-img" :src="musicItem.picUrl" alt="" />
    <!-- <p class="name">{{ musicItem.name }}</p> -->
  </div>
</template>

<script>
export default {
  name: "MusicItem",
  props: {
    musicItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.music-item {
  width: 200px;
  height: 222px;
}
.music-img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.desc-wrap {
  width: 182px;
  font-size: 14px;
  word-break:break-all;
}

.muisc-play {
  width: 40px;
  height: 40px;
}
.name {
  width: 200px;
  height: 19px;
  font-size: 14px;

  text-overflow: ellipsis; /* 超出部分变为... */
  overflow: hidden;
  white-space: nowrap;
}
</style>
