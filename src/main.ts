import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloablComponent from '@/index'
import '@/styles/index.scss'

import App from '@/App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)

app.use(gloablComponent)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
