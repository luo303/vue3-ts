import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqUserInfo } from '@/api/user'
import { ElMessage } from 'element-plus'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const removetoken = () => {
      token.value = ''
    }
    const id = ref(0)
    const username = ref('')
    const avatar = ref('')
    const nickname = ref('')
    const email = ref('')
    const user_pic = ref('')
    const clearAll = () => {
      token.value = ''
      id.value = 0
      username.value = ''
      avatar.value = ''
      nickname.value = ''
      email.value = ''
      user_pic.value = ''
    }
    const getuser = async () => {
      const result = await reqUserInfo()
      console.log(result)

      if (result.code === 0) {
        username.value = result.data.username
        avatar.value = result.data.user_pic
        id.value = result.data.id
        nickname.value = result.data.nickname
        email.value = result.data.email
        user_pic.value = result.data.user_pic
      } else {
        ElMessage({
          message: '获取用户信息失败',
          type: 'error'
        })
      }
    }
    return {
      clearAll,
      token,
      removetoken,
      username,
      avatar,
      id,
      nickname,
      email,
      user_pic,
      getuser
    }
  },
  {
    persist: {
      key: 'zxuserinfo'
    }
  }
)
