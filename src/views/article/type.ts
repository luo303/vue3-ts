export interface catogory {
  id: string
  cate_name: string
  cate_alias: string
}
export interface formdata {
  state: string
  content: string
  title: string
  cate_id: string
  cover_img: File | string
  id?: number
  nickname?: string
  pub_date?: string
  username?: string
  [key: string]: any
}
