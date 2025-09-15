import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          //scss已经废弃·@import，所以改用@use
          additionalData: '@use "@/styles/variable.scss" as *;\n'
        }
      }
    },
    compilerOptions: {
      // 禁用对 any 类型的隐式检查
      noImplicitAny: false,
      // 可选：关闭严格模式（会同时影响其他严格检查）
      strict: false
    }
  }
})
