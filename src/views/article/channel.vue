<template>
  <div class="card">
    <el-card class="card">
      <template #header>
        <div class="header">
          <span>文章分类</span>
          <el-button type="primary" @click="add">添加分类</el-button>
        </div>
      </template>
      <el-table :data="tableData" class="table">
        <el-table-column prop="id" label="序号" />
        <el-table-column prop="cate_name" label="分类名称" />
        <el-table-column prop="cate_alias" label="分类别名" />
        <el-table-column fixed="right" label="操作">
          <template #default="{ row }">
            <el-button type="danger" @click="Delchannel(row)"> 删除 </el-button>
            <el-button type="primary" @click="Editchannel(row)">编辑</el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="没有数据" />
        </template>
      </el-table>
    </el-card>
    <ChannelEdit @refresh="getchannellist" ref="dialog"></ChannelEdit>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getchannel, delchannel } from '@/api/user'
import { onMounted } from 'vue'
import ChannelEdit from '@/components/ChannelEdit.vue'
import settingstore from '@/stores/modules/setting'
import { ElMessage, ElMessageBox } from 'element-plus'
const dialog = ref()
const settingStore = settingstore()
const tableData = ref([])
onMounted(() => {
  getchannellist()
})
const getchannellist = async () => {
  const res = await getchannel()
  if (res.code === 0) {
    tableData.value = res.data
  }
}

const add = () => {
  settingStore.dialogFormVisible = true
}
const Delchannel = async (row: any) => {
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  const res = await delchannel(row.id)
  if (res.code === 0) {
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
  getchannellist()
}
const Editchannel = (row: any) => {
  dialog.value.open(row)
}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .table {
    display: flex;
    width: 100%;
  }
}
</style>
