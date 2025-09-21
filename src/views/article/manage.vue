<template>
  <div class="card">
    <el-card class="card">
      <template #header>
        <div class="header">
          <span>文章管理</span>
          <el-button type="primary">发布文章</el-button>
        </div>
      </template>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="文章分类">
          <ChannelList v-model="params.cate_id"></ChannelList>
          <button @click="a">点击</button>
        </el-form-item>
        <el-form-item label="发布状态">
          <el-select v-model="params.state" placeholder="请点击选择" clearable>
            <el-option label="已发布" value="已发布" />
            <el-option label="草稿" value="草稿" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="articlelist" class="table">
        <el-table-column prop="id" label="序号" />
        <el-table-column prop="title" label="分类名称" />
        <el-table-column prop="pub_date" label="发表时间">
          <template #default="{ row }">
            {{ formatTime(row.pub_date) }}
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" />
        <el-table-column fixed="right" label="操作">
          <template #default="{ row }">
            <el-button type="danger" @click="del(row.id)"> 删除 </el-button>
            <el-button type="primary">编辑</el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="没有数据" />
        </template>
      </el-table>
    </el-card>
    <ArticleEdit></ArticleEdit>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

import { GetArticleList, DelArticle } from '@/api/user'
import { formatTime } from '@/utils/formate'
import { ElMessageBox, ElMessage } from 'element-plus'
import ArticleEdit from '@/components/ArticleEdit.vue'
import ChannelList from '@/components/ChannelList.vue'

onMounted(async () => {
  search()
  console.log(articlelist.value)
})
const params = ref({
  pagenum: 1,
  pagesize: '5',
  cate_id: '',
  state: ''
})
const articlelist = ref([])
//搜索按钮
const search = async () => {
  const res = await GetArticleList(params.value)
  articlelist.value = res.data
  console.log(articlelist.value)
}
//重置按钮
const reset = () => {
  params.value.pagenum = 1
  params.value.pagesize = '5'
  params.value.cate_id = ''
  params.value.state = ''
  search()
}
//删除按钮
const del = async (id: string) => {
  await ElMessageBox.confirm('你确认删除该文章信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await DelArticle(id)
  ElMessage({
    message: '删除成功',
    type: 'success'
  })
  search()
}
const a = () => {
  console.log(params.value)
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
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
