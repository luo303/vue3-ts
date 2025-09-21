<template>
  <div>
    <el-drawer
      v-model="visible"
      title="I have a nested form inside!"
      direction="rtl"
      class="demo-drawer"
    >
      <div class="demo-drawer__content">
        <el-form>
          <el-form-item label="文章标题">
            <el-input autocomplete="off" />
          </el-form-item>
          <el-form-item label="文章分类">
            <el-select></el-select>
          </el-form-item>
          <el-form-item label="Area">
            <el-select placeholder="Please select activity area">
              <el-option label="Area1" value="shanghai" />
              <el-option label="Area2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button>Cancel</el-button>
          <el-button type="primary"> Submit </el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(true)
</script>

<style scoped></style>
