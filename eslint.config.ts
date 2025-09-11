import { globalIgnores } from 'eslint/config'
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // 引入Prettier插件（关键步骤）
  {
    plugins: {
      prettier: prettierPlugin
    }
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  // 自定义规则
  {
    rules: {
      // // 强制使用单引号
      // quotes: ['warn', 'single'],

      // // 强制不使用分号结尾
      // semi: ['warn', 'never'],

      // Vue 规则：组件名必须为多单词
      'vue/multi-word-component-names': 'error',

      // TypeScript 规则：禁止使用 any 类型
      '@typescript-eslint/no-explicit-any': 'warn',

      // // 控制空行数量，禁止多余空行
      // 'no-multiple-empty-lines': [
      //   'warn',
      //   {
      //     max: 1,
      //     maxEOF: 0,
      //     maxBOF: 0,
      //   },
      // ],

      // 启用Prettier作为ESLint规则（现在可以正常工作了）
      'prettier/prettier': 'warn'
    }
  }
)
