import { defineStore } from 'pinia'
import { ref } from 'vue'

const settingstore = defineStore('setting', () => {
  const fold = ref(false)
  const isCollapse = ref(false)
  return {
    fold,
    isCollapse
  }
})
export default settingstore
