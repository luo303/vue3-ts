import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const removetoken = () => {
      localStorage.removeItem('token')
    }
    return {
      token,
      removetoken
    }
  },
  {
    persist: {
      key: 'token'
    }
  }
)
