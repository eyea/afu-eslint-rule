// Basic: Eslint/Vue2 Version: 1.0.0

module.exports = {
  env: {
   browser: true,
   commonjs: true,
   es6: true,
   node: true,
   es2021: true,
  },
  globals: {
    AHAPP: 'readonly',
    AHJavascriptBridge: 'readonly',
    trackPageView: 'readonly',
    trackCustomEvent: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // 继承的规则 [扩展]
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
   ecmaVersion: 2021,
   sourceType: 'module'
 },
 plugins: ['eslint-plugin-vue'],
 rules: {
 },
}
