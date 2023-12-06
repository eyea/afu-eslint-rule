// Basic: Eslint/React Version: 1.0.0

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
    'plugin:@typescript-eslint/eslint-recommended', // TS
  ],
  parser: '@typescript-eslint/parser', // TS 解析器
  parserOptions: {
   ecmaFeatures: {
     jsx: true,
   },
   ecmaVersion: 2021,
   sourceType: 'module',
   // project: ['tsconfig.json'], // https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation
 },
 plugins: ['@typescript-eslint'],
 ignorePatterns: ['*.min.*'],
 rules: {
  // https://github.com/AlloyTeam/eslint-config-alloy/issues/241
  'no-undef': 'off',
  'react/sort-comp': 'off',

  'dot-notation': 'off',

  // Basic TS  extends: plugin:@typescript-eslint/eslint-recommended', 但基于Basic规则的普适性以及整体lint规则的考虑，更新规则如下
  // 此 extends 仅保留 @typescript-eslint/no-unused-vars 为 error, 其余 off
  // 注意@typescript-eslint/no-unsafe-member-access、@typescript-eslint/no-unsafe-call、@typescript-eslint/no-unsafe-assignment是为了区分别的标准补充的。
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',

   '@typescript-eslint/adjacent-overload-signatures': 'off', // error -> off
   '@typescript-eslint/ban-ts-comment': 'off', // error -> off
   '@typescript-eslint/ban-types': 'off', // error -> off
   'no-array-constructor': 'off', // keep off
   '@typescript-eslint/no-array-constructor': 'off', // error -> off
   'no-empty-function': 'off', // keep off, JavaScript 不用重复
   '@typescript-eslint/no-empty-function': 'off', // error -> off
   '@typescript-eslint/no-empty-interface': 'off', // error -> off
   '@typescript-eslint/no-explicit-any': 'off', // warn -> off
   '@typescript-eslint/no-extra-non-null-assertion': 'off', // error -> off
   '@typescript-eslint/no-extra-semi': 'off', // error -> off
   '@typescript-eslint/no-inferrable-types': 'off', // error -> off
   'no-loss-of-precision': 'off', // keep off
   '@typescript-eslint/no-loss-of-precision': 'off', // error -> off
   '@typescript-eslint/no-misused-new': 'off', // error -> off
   '@typescript-eslint/no-namespace': 'off', // error -> off
   '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // error -> off
   '@typescript-eslint/no-non-null-assertion': 'off', // warn -> off
   '@typescript-eslint/no-this-alias': 'off', // error -> off
   '@typescript-eslint/no-unnecessary-type-constraint': 'off', // error -> off
   'no-unused-vars': 'off', // keep off，JavaScript 不用重复
   '@typescript-eslint/no-unused-vars': 'error', // warn => error
   '@typescript-eslint/no-var-requires': 'off', // error -> off
   '@typescript-eslint/prefer-as-const': 'off', // error -> off
   '@typescript-eslint/prefer-namespace-keyword': 'off', // error -> off
   '@typescript-eslint/triple-slash-reference': 'off', // error -> off
 },
}
