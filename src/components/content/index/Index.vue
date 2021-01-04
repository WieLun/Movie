<template>
  <tab-bar>
    <tab-bar-item path="/discovery">
      <img slot="item-icon" src="~assets/img/tabbar/discovery.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/discovery_active.svg"
        alt=""
      />
      <div slot="item-text">发现音乐</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/musiclist.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/musiclist_active.svg"
        alt=""
      />
      <div slot="item-text">推荐歌单</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/songs.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/songs_active.svg"
        alt=""
      />
      <div slot="item-text">最新音乐</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/mv.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/mv_active.svg"
        alt=""
      />
      <div slot="item-text">最新MV</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "Index",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>
