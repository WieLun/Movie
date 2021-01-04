<template>
  <div class="nav-bar">
    <div class="left-box">
      <div class="icon-wrapper">
        <img src="~assets/img/navbar/music.jpg" alt="" />
      </div>

      <div class="nav-bar-img">
        <img class="reverse-img" src="~assets/img/navbar/arrow.svg" alt="" />
        <img src="~assets/img/navbar/arrow.svg" alt="" />
      </div>
      <!-- <div class="nav-bar-input">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.nav-bar {
  padding: 0 20px;
  display: flex;
  background-color: #f9f9f9;
  height: 60px;
}

.nav-bar div {
  float: left;
}

.left-box {
  width: 224px;
  line-height: 60px;
}

/* .icon-wrapper {
  width: 84px;
} */

.icon-wrapper img {
  width: 84px;
  height: 40px;
  padding: 10px 0 10px 0;
}

.nav-bar-img {
  width: 80px;
  /* margin-right: 0; */
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.reverse-img {
  -webkit-transform: rotate(-180deg);
}

.nav-bar .nav-bar-img img {
  width: 35px;
  height: 35px;
  padding: 10px 10px 10px 15px;
}
</style>
