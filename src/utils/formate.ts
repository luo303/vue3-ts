import { dayjs } from 'element-plus'

export const formatTime = (time: any) => dayjs(time).format('YYYY年MM月DD日')
export const formattime = (time: any) =>
  dayjs(time).format('YYYY年MM月DD日 HH:mm:ss')
