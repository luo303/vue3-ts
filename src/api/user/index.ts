import request from '@/utils/request'
//调用interface接口
import type {
  registerFormData,
  loginFormData,
  loginResponseData,
  userResponseData,
  addchannelData
} from '@/api/user/type'
//项目用户相关的请求地址
enum API {
  REGISTER_URL = '/api/reg',

  MODIFY_PWD_URL = '/my/updatepwd',

  LOGIN_URL = '/api/login',

  USERINFO_URL = '/my/userinfo',

  CHANNEL_URL = '/my/cate/list',

  ADD_CHANNEL_URL = '/my/cate/add',

  DEL_CHANNEL_URL = '/my/cate/del',

  EDIT_CHANNEL_URL = '/my/cate/info',

  GET_ARTICLE_LIST_URL = '/my/article/list',

  ARTICLE_INFO_URL = '/my/article/info',

  ADD_ARTICLE_URL = '/my/article/add',

  LOGOUT_URL = '/user/logout',

  AVATAR_URL = '/my/update/avatar'
}
//注册接口
export const reqregister = (data: registerFormData) =>
  request.post(API.REGISTER_URL, data)
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//更改密码
export const reqchangepwd = (data: any) =>
  request.patch(API.MODIFY_PWD_URL, data)
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
//更改用户基本信息
export const reqchangeprofile = (data: any) =>
  request.put(API.USERINFO_URL, data)
//更换头像
export const changeavatar = (avatar: any) =>
  request.patch(API.AVATAR_URL, { avatar })
//获取文章分类
export const getchannel = () => request.get<any, any>(API.CHANNEL_URL)
//增加文章分类
export const addchannel = (data: addchannelData) =>
  request.post<any, any>(API.ADD_CHANNEL_URL, data)
//删除文章分类
export const delchannel = (id: any) =>
  request.delete<any, any>(API.DEL_CHANNEL_URL, {
    params: {
      id
    }
  })
//更新文章分类
export const eidtchannel = (data: any) =>
  request.put<any, any>(API.EDIT_CHANNEL_URL, data)
//获取文章列表
export const GetArticleList = (params: any) =>
  request.get<any, any>(API.GET_ARTICLE_LIST_URL, {
    params
  })
//删除文章
export const DelArticle = (id: any) =>
  request.delete(API.ARTICLE_INFO_URL, {
    params: {
      id: id
    }
  })
//获取文章详情
export const GetArticleDetail = (id: string) =>
  request.get(API.ARTICLE_INFO_URL, {
    params: {
      id
    }
  })
//发布文章
export const AddArticle = (data: any) => request.post(API.ADD_ARTICLE_URL, data)
//更新文章
export const ModifyArticle = (data: any) =>
  request.put(API.ARTICLE_INFO_URL, data)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
