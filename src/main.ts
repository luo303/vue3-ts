import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloablComponent from '@/index'
import '@/styles/index.scss'

import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(gloablComponent)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
