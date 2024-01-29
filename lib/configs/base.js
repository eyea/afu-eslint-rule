// Base

module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
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
  ignorePatterns: ['*.min.js', 'iconfont.js'],
  noInlineConfig: true
}
