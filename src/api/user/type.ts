export interface loginFormData {
  username: string
  password: string
}

interface dataType {
  token: string
  message?: string
}

export interface loginResponseData {
  code: number
  data: dataType
}

interface userinfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userinfo
}
export interface userResponseData {
  code: number
  data: user
}
