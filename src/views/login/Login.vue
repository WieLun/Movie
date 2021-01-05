<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="0px"
      class="demo-loginForm"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input v-model.number="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-checkbox style="width:100%;" v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item>
        <el-button
          style="width:100%;"
          type="primary"
          @click="submitForm('loginForm')"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "please enter username", trigger: "blur" },
        ],
        password: [
          { required: true, message: "please enter password", trigger: "blur" },
        ],
      },
      checked: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.demo-loginForm {
  /* 兼容 chrome 或 safari */
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  text-align: center;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: center;
} 

</style>
