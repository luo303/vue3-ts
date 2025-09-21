<template>
  <div class="dialog">
    <el-dialog
      v-model="settingStore.dialogFormVisible"
      title="添加分类"
      width="500"
    >
      <el-form :form="formdata">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="formdata.cate_name" />
        </el-form-item>
        <el-form-item label="分类别名" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="formdata.cate_alias" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="out">取消</el-button>
          <el-button type="primary" @click="onsubmit"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addchannel, eidtchannel } from '@/api/user'
import settingstore from '@/stores/modules/setting'
import { ElMessage } from 'element-plus'
const settingStore = settingstore()
const emit = defineEmits<{
  (e: 'refresh'): void
}>()
const open = (row: any) => {
  settingStore.dialogFormVisible = true
  formdata.value = { ...row }
}
defineExpose({
  open
})
const formLabelWidth = '140px'
const formdata = ref({
  id: '',
  cate_name: '',
  cate_alias: ''
})
const reset = () => {
  formdata.value.cate_alias = ''
  formdata.value.cate_name = ''
}
const out = () => {
  settingStore.dialogFormVisible = false
  reset()
}
const onsubmit = async () => {
  const res = formdata.value.id
    ? await eidtchannel(formdata.value)
    : await addchannel(formdata.value)
  if (res.code === 0) {
    emit('refresh')
    ElMessage({
      message: `${res.message}`,
      type: 'success'
    })
  } else if (res.code === 1) {
    ElMessage({
      message: `${res.message}`,
      type: 'error'
    })
  } else {
    ElMessage({
      message: '哎哟，哪里出错了呢',
      type: 'error'
    })
  }
  reset()
  settingStore.dialogFormVisible = false
}
</script>

<style scoped></style>
