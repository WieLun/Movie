<template>
  <div class="discovery">
    <swipper :banners="banners" />
    <music :songs-list="songsList"/>
  </div>

</template>

<script>
import Swipper from "components/common/swipper/Swipper";
import Music from "components/content/music/Music";

import { getBanners,getMusicList } from "network/discovery";

export default {
  name: "Discovery",
  components: {
    Swipper,
    Music
  },
  data() {
    return {
      banners: [],
      songsList: []
    };
  },

  created() {
    getBanners().then(res => {
      this.banners = res.banners;
    });
    getMusicList().then(res => {
      // console.log(res.result);
      this.songsList = res.result
    })
  },
};
</script>

<style scoped>
.discovery {
  overflow: hidden;
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 220px;
  right: 30px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
