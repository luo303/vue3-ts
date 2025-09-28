<template>
  <div>
    <el-card class="container">
      <template #header>
        <div class="header">
          <span>基本资料</span>
        </div>
      </template>
      <el-form
        ref="formRef"
        style="max-width: 600px"
        label-width="auto"
        :model="formdata"
        :rules="rules"
        :label-position="position"
      >
        <el-form-item label="登录名称">
          <el-input v-model="formdata.username" disabled />
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="formdata.nickname" />
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="formdata.email" />
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="onSubmit"> 提交 </el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { reqchangeprofile, reqUserInfo } from '@/api/user'
import { ElMessage } from 'element-plus'
const userstore = useUserStore()
const formRef = ref()
const formdata = ref({
  id: userstore.id,
  username: userstore.username,
  nickname: '',
  email: ''
})

const position = ref('right')

const onSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    const res = await reqchangeprofile(formdata.value)
    if ((res as any).code === 0) {
      ElMessage.success('更改成功')
      onReset()
      const result = await reqUserInfo()
      console.log(result)

      if (result.code === 0) {
        userstore.username = result.data.username
        userstore.avatar = result.data.user_pic
        userstore.id = result.data.id
        userstore.nickname = result.data.nickname
        userstore.email = result.data.email
      } else {
        ElMessage({
          message: '获取用户信息失败',
          type: 'error'
        })
      }
    } else {
      ElMessage.error('更改失败')
      onReset()
    }
  }
}
const onReset = () => {
  formRef.value.resetFields()
}
const rules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称必须是2-10位的非空字符串',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ]
}
</script>

<style scoped lang="scss">
.container {
  //思考一下：为啥这里用100%没用
  min-height: calc(100vh - $base_nav_top - 60px);
  overflow-y: auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button {
    margin-left: 78px;
  }
}
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
