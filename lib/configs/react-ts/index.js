const BaseOptions = require("../base.js");

const JSRules = require("../js.js");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "react-app",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/typescript",
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", '@typescript-eslint', '@afuteam/fe'],
  rules: {
    ...JSRules.rules,

    'no-undef': 'off',
    'react/sort-comp': 'off',
    'dot-notation': 'off',

    // Basic TS  extends: plugin:@typescript-eslint/eslint-recommended', 但基于Basic规则的普适性以及整体lint规则的考虑，更新规则如下
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
    // 不直接写'error'是由于在eslint-plugin-react-app也有同样的设置 值为 [Array]；实际发现无法覆盖；参考 https://github.com/airbnb/javascript/blob/51a37d0fa5f334fdfae9fea39711402fb6eb3b34/packages/eslint-config-airbnb-base/rules/variables.js#L54
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // warn => error
    '@typescript-eslint/no-var-requires': 'off', // error -> off
    '@typescript-eslint/prefer-as-const': 'off', // error -> off
    '@typescript-eslint/prefer-namespace-keyword': 'off', // error -> off
    '@typescript-eslint/triple-slash-reference': 'off', // error -> off
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
  },
  ignorePatterns: BaseOptions.ignorePatterns,
  noInlineConfig: BaseOptions.noInlineConfig,
};
