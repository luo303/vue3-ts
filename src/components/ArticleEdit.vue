<template>
  <div>
    <el-drawer
      v-model="visible"
      :title="(formdata as any).id ? '编辑文章' : '发布文章'"
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
              :on-change="onUploadFile"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="文章内容">
            <el-input v-model="formdata.content" type="textarea" :rows="5" />
          </el-form-item>
          <el-form-item>
            <el-button @click="submit('草稿')">草稿</el-button>
            <el-button type="primary" @click="submit('已发布')">
              发布
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { baseURL } from '@/utils/request'
import { nextTick, ref } from 'vue'
import ChannelList from './ChannelList.vue'
import { GetArticleDetail, AddArticle } from '@/api/user'
import { imageUrlToFile } from '@/utils/image'
import type { formdata } from '@/views/article/type'
import { ElMessage } from 'element-plus'
const emit = defineEmits(['success'])
const defaultform = {
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: ''
}
const formdata = ref<formdata>({
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: ''
})
const imageUrl = ref('')
const onUploadFile = (uploadfile: any) => {
  imageUrl.value = URL.createObjectURL(uploadfile.raw)
  formdata.value.cover_img = uploadfile.raw
}
const visible = ref(false)
const submit = async (state: string) => {
  formdata.value.state = state
  //转换成formdata类型
  const fd = new FormData()
  // for (const key in formdata.value) {
  //   fd.append(key, formdata.value[key])
  // }
  Object.keys(formdata.value).forEach((key: string) => {
    const value = formdata.value[key]
    fd.append(key, value)
  })
  // fd.append('title', formdata.value.title)
  // fd.append('cate_id', formdata.value.cate_id)
  // fd.append('content', formdata.value.content)
  // fd.append('cover_img', formdata.value.cover_img)
  // fd.append('state', formdata.value.state)
  const res = (await AddArticle(fd)) as any
  if (res.code === 0) {
    ElMessage.success('发布成功')
    visible.value = false
    emit('success')
  }
}
const open = async (row: any) => {
  visible.value = true

  await nextTick()
  if (row.id) {
    const res = await GetArticleDetail(row.id)
    if ((res as any).code === 0) {
      formdata.value = res.data
      imageUrl.value = baseURL + formdata.value.cover_img
      formdata.value.cover_img = (await imageUrlToFile(
        imageUrl.value,
        formdata.value.cover_img
      )) as unknown as string
      console.log(formdata.value)
    }
  } else {
    formdata.value = { ...defaultform }
    imageUrl.value = ''
  }
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
