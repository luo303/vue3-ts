<template>
  <div>
    <el-card class="container">
      <template #header>
        <div class="header">
          <span>更换头像</span>
        </div>
      </template>
      <el-row>
        <el-col :span="12">
          <el-upload
            ref="uploadRef"
            class="avatar-uploader"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="onuploadfile"
          >
            <img v-if="imgUrl" :src="imgUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
          <br />
          <el-button
            type="primary"
            :icon="Plus"
            size="large"
            @click="uploadRef.$el.querySelector('input').click()"
          >
            选择图片
          </el-button>
          <el-button type="success" size="large" @click="onUpdateAvatar">
            上传头像
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { ref } from 'vue'
import { changeavatar } from '@/api/user'
import { ElMessage } from 'element-plus'
const userstore = useUserStore()
const uploadRef = ref()
const imgUrl = ref(userstore.user_pic)
const onuploadfile = (file: any) => {
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = () => {
    imgUrl.value = reader.result as string
  }
}
const onUpdateAvatar = async () => {
  const res = await changeavatar(imgUrl.value)
  if ((res as any).code === 0) {
    ElMessage.success('更改成功')
  }
  userstore.getuser()
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
  .avatar-uploader {
    :deep() {
      .avatar {
        width: 278px;
        height: 278px;
        display: block;
      }
      .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
      }
      .el-upload:hover {
        border-color: var(--el-color-primary);
      }
      .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 278px;
        height: 278px;
        text-align: center;
      }
    }
  }
}
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
