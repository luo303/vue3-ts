<template>
  <div class="content">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <el-form class="login_form" v-model="formdata">
          <h1>Hello</h1>
          <h4>欢迎来到硅谷甄选</h4>
          <div class="bottom">
            <el-input
              type="text"
              :prefix-icon="User"
              class="el_input"
              v-model="formdata.username"
            ></el-input>
            <el-input
              type="password"
              show-password
              :prefix-icon="Lock"
              class="el_input"
              v-model="formdata.password"
            ></el-input>
            <el-button type="primary" class="button">登录</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
const formdata = ref({
  username: '',
  password: ''
})
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  h1 {
    font-size: 48px;
    color: white;
  }
  h4 {
    font-size: 24px;
    color: white;
    margin: 12px 0;
  }
  .el_input {
    width: 80%;
    margin: 12px 0;
  }
  .button {
    margin: 12px 0;
    width: 80%;
  }
  .bottom {
    text-align: center;
  }
  .login_form {
    padding: 40px;
    width: 80%;
    position: relative;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
  }
}
</style>
