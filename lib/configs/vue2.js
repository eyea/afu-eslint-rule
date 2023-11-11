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
    'plugin:vue/essential'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
   ecmaVersion: 2021,
   sourceType: 'module'
 },
 plugins: ['eslint-plugin-vue'],
 rules: {
    // JavaScript Basic rules, 35条 使用afu的rules，和eslint/recommended搭配
    'no-multi-spaces': 2,
    'no-unused-vars': 0, // 非TS项目，此项需设为1
    'no-undef': 0,
    'no-empty-function': 2,
    'no-shadow': 2,
    'curly': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'default-case': 2,
    'complexity': ['error', { 'max': 20 }],
    'no-console': 0,
    'no-await-in-loop': 2,
    'no-mixed-spaces-and-tabs': 0,
    'no-prototype-builtins': 0,
    'no-useless-escape': 0,
    'no-self-assign': 0,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-floating-decimal': 2,
    'no-new-wrappers': 2,
    'no-return-assign': 2,
    'no-unmodified-loop-condition': 2,
    'require-await': 2,
    'wrap-iife': 1,
    'require-atomic-updates': 2,
    'no-empty': 2,
    'no-case-declarations': 2,
    // 追加的几条规则
    'no-use-before-define': 0, // 未定义前不能使用
    'no-new': 0,
    'new-cap': 0,
    'global-require': 0,
    'consistent-return': 0, // return 后面是否允许省略
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾；如果使用react的规则的话，我们有这个规则
    'no-unused-expressions': 1, // 禁止无用的表达式
 },
}
