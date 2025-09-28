<template>
  <div>
    <el-card class="container">
      <template #header>
        <div class="header">
          <span>更改密码</span>
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
        <el-form-item label="原密码" prop="old_pwd">
          <el-input v-model="formdata.old_pwd" />
        </el-form-item>
        <el-form-item label="新密码" prop="new_pwd">
          <el-input v-model="formdata.new_pwd" />
        </el-form-item>
        <el-form-item label="请确认新密码" prop="re_pwd">
          <el-input v-model="formdata.re_pwd" />
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
import { reqchangepwd } from '@/api/user'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const formRef = ref()
const formdata = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})
const checkOldSame = (rule: any, value: any, cb: any) => {
  if (value === formdata.value.old_pwd) {
    cb(new Error('原密码和新密码不能一样!'))
  } else {
    cb()
  }
}

const checkNewSame = (rule: any, value: any, cb: any) => {
  if (value !== formdata.value.new_pwd) {
    cb(new Error('新密码和确认再次输入的新密码不一样!'))
  } else {
    cb()
  }
}
const rules = {
  // 原密码
  old_pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    }
  ],
  // 新密码
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkOldSame, trigger: 'blur' }
  ],
  // 确认新密码
  re_pwd: [
    { required: true, message: '请再次确认新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkNewSame, trigger: 'blur' }
  ]
}
const position = ref('right')

const onSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    const res = await reqchangepwd(formdata.value)
    if ((res as any).code === 0) {
      ElMessage.success('更改成功')
      onReset()
    } else {
      ElMessage.error('更改失败')
      onReset()
    }
  }
}
const onReset = () => {
  formRef.value.resetFields()
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
    margin-left: 107px;
  }
}
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
