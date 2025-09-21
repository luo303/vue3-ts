<template>
  <div>
    <el-select
      :modelValue="modelValue"
      placeholder="请点击选择"
      @update:modelValue="emit('update:modelValue', $event)"
      clearable
    >
      <el-option
        v-for="item in catogory"
        :key="item.id"
        :label="item.cate_name"
        :value="item.id"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { catogory } from '@/views/article/type'
import { getchannel } from '@/api/user'
defineProps({
  modelValue: {
    type: [String, Number]
  }
})
const emit = defineEmits(['update:modelValue'])
const catogory = ref<catogory[]>([])
const GetChannelList = async () => {
  const res1 = await getchannel()
  catogory.value = res1.data
  console.log(catogory.value)
}
GetChannelList()
</script>

<style scoped lang="scss">
.el-form-item__content .el-select {
  --el-select-width: 220px;
}
</style>
