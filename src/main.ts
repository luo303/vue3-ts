import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloablComponent from '@/index'
import '@/styles/index.scss'

import App from '@/App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(gloablComponent)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.use(store)

app.mount('#app')
