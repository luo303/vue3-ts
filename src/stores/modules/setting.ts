//用于存储左侧导航栏折叠所需属性
import { defineStore } from 'pinia'
import { ref } from 'vue'

const settingstore = defineStore('setting', () => {
  const fold = ref(false)
  const isCollapse = ref(false)
  const refrsh = ref(false)
  const dialogFormVisible = ref(false)
  return {
    fold,
    isCollapse,
    refrsh,
    dialogFormVisible
  }
})
export default settingstore
