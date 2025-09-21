export interface loginFormData {
  username: string
  password: string
}

export interface loginResponseData {
  code: number
  token: string
  message?: string
}

interface user {
  id: number
  email: string
  nickname: string
  username: string
  user_pic: string
}

export interface userResponseData {
  code: number
  data: user
  message: string
}

export interface addchannelData {
  cate_name: string
  cate_alias: string
}
