<template>
  <div>
    <el-card class="container">
      <template #header>
        <div class="header">
          <span>更改密码</span>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

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
}
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
