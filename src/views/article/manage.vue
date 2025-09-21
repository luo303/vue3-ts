<template>
  <div class="card">
    <el-card class="card">
      <template #header>
        <div class="header">
          <span>文章管理</span>
          <el-button type="primary">发布文章</el-button>
        </div>
      </template>
      <el-table class="table">
        <el-table-column prop="id" label="序号" />
        <el-table-column prop="cate_name" label="分类名称" />
        <el-table-column prop="cate_alias" label="分类别名" />
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button type="danger"> 删除 </el-button>
            <el-button type="primary">编辑</el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="没有数据" />
        </template>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

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
