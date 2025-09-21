<template>
  <div>
    <el-drawer
      v-model="visible"
      title="I have a nested form inside!"
      direction="rtl"
      size="50%"
    >
      <div>
        <el-form :mode="formdata" label-width="100px">
          <el-form-item label="文章标题">
            <el-input v-model="formdata.title" autocomplete="off" />
          </el-form-item>
          <el-form-item label="文章分类">
            <ChannelList v-model="formdata.cate_id" width="100%"></ChannelList>
          </el-form-item>
          <el-form-item label="文章封面">
            <el-upload
              class="avatar-uploader"
              :auto-upload="false"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="文章内容">
            <el-input v-model="formdata.content" type="textarea" :rows="5" />
          </el-form-item>
          <el-form-item>
            <el-button>草稿</el-button>
            <el-button type="primary" @click="submit"> 发布 </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChannelList from './ChannelList.vue'

const formdata = ref({
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: ''
})
const imageUrl = ref('')
const visible = ref(false)
const submit = () => {
  console.log(formdata.value)
}
const open = () => {
  visible.value = true
}
defineExpose({
  open
})
</script>

<style scoped lang="scss">
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
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
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
</style>
