<template>
  <div class="content">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <el-form
          class="login_form"
          :model="formdata"
          :rules="rules"
          ref="formRef"
        >
          <h1>Hello</h1>
          <h4>欢迎来到硅谷甄选</h4>
          <div class="bottom">
            <el-form-item prop="username">
              <el-input
                type="text"
                :prefix-icon="User"
                class="el_input"
                v-model="formdata.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                show-password
                :prefix-icon="Lock"
                class="el_input"
                v-model="formdata.password"
              ></el-input>
            </el-form-item>
            <el-form-item prop="repassword">
              <el-input
                type="password"
                show-password
                :prefix-icon="Lock"
                class="el_input"
                v-model="formdata.repassword"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="button" @click="register"
                >注册</el-button
              >
            </el-form-item>
            <el-form-item class="flex">
              <el-link
                type="info"
                :underline="false"
                @click="$router.push('/login')"
              >
                ← 返回
              </el-link>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import { reqregister } from '@/api/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const formRef = ref()
const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名必须为3到10个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码必须为6到10位', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      validator: (rule: any, value: any, cb: any) => {
        if (value != formdata.value.password) {
          cb('两次密码不一致')
        } else {
          cb()
        }
      },
      trigger: 'blur'
    }
  ]
})
const router = useRouter()
const formdata = ref({
  username: '',
  password: '',
  repassword: ''
})

const register = async () => {
  const res = await reqregister(formdata.value)
  console.log(res)

  if ((res as any).code === 0) {
    ElMessage.success('注册成功')
    router.push('/login')
  } else {
    ElMessage({
      message: (res as any).message || '注册失败',
      type: 'error'
    })
  }
}
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
    margin: 5px 0;
  }
  .button {
    margin: 12px 0;
    width: 80%;
  }
  .bottom {
    text-align: center;
  }
  .login_form {
    padding: 40px 40px 10px 40px;
    width: 80%;
    position: relative;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
  }
}
</style>
