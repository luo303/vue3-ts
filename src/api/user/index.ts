import request from '@/utils/request'
//调用interface接口
import type {
  loginFormData,
  loginResponseData,
  userResponseData,
  addchannelData
} from '@/api/user/type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/api/login',

  USERINFO_URL = '/my/userinfo',

  CHANNEL_URL = '/my/cate/list',

  ADD_CHANNEL_URL = '/my/cate/add',

  DEL_CHANNEL_URL = '/my/cate/del',

  EDIT_CHANNEL_URL = '/my/cate/info',

  GET_ARTICLE_URL = '/my/article/list',

  DEL_ARTICLE_URL = '/my/article/info',

  LOGOUT_URL = '/user/logout'
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
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
  request.get<any, any>(API.GET_ARTICLE_URL, {
    params
  })
//删除文章
export const DelArticle = (id: any) =>
  request.delete(API.DEL_ARTICLE_URL, {
    params: {
      id: id
    }
  })
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
