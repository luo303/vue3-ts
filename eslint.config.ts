import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    // 这里只保留文件匹配等基础配置，移除rules
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  // 自定义规则移到最后，确保不会被其他配置覆盖
  {
    rules: {
      // 强制使用单引号
      'quotes': ['warn', 'single'],

      // 强制不使用分号结尾
      'semi': ['warn', 'never'],

      // Vue 规则：组件名必须为多单词
      'vue/multi-word-component-names': 'error',

      // TypeScript 规则：禁止使用 any 类型
      '@typescript-eslint/no-explicit-any': 'warn',

      // 控制空行数量，禁止多余空行
      'no-multiple-empty-lines': ['warn', {
        max: 1,           // 最多允许1个连续空行
        maxEOF: 0,        // 文件末尾不允许空行
        maxBOF: 0         // 文件开头不允许空行
      }]
    }
  }
)
