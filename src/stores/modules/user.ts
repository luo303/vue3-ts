import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const removetoken = () => {
      token.value = ''
    }
    const username = ref('')
    const avatar = ref('')
    const clearAll = () => {
      // 重置为初始状态
      token.value = ''
      username.value = ''
      avatar.value = ''
    }
    return {
      token,
      removetoken,
      username,
      avatar,
      clearAll
    }
  },
  {
    persist: {
      key: 'zxuserinfo'
    }
  }
)
