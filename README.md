# @afuteam/eslint-plugin-fe

[![Build Status](https://github.com/afu-fe/afu-eslint-rule/workflows/ci/badge.svg)](https://github.com/afu-fe/afu-eslint-rule/actions/workflows/ci.yml)[![Build Status](https://github.com/afu-fe/afu-eslint-rule/workflows/rulesCoverage/badge.svg)](https://github.com/afu-fe/afu-eslint-rule/actions/workflows/rulesCoverage.yml)[![npm package](https://img.shields.io/npm/v/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)[![npm downloads](https://img.shields.io/npm/dm/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)

AfuTeam eslint plugin

## 安装
```bash
npm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest -D
```

## 配置

在  `.eslintrc.js` 文件引入 ```@afuteam/eslint-plugin-fe``` 插件

```
  plugins: ["@afuteam/fe"],
```

<hr >

然后根据项目类型，在配置文件中自行搭配，如:

###  js
```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js"
  ],
}
```

###  js + typescript4

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin  @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/typescript4",
  ],
}
```

###  js + vue2

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue  @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/vue2"
  ],
}
```

### js + react

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @babel/preset-react@latest eslint-plugin-react @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/react"
  ],
}
```

### js + vue3

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue  @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/vue3"
  ],
}
```

### js + typescript4 + vue2

```bash
npm install --save-dev @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/vue2",
    "plugin:@afuteam/fe/typescript4",
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": {
      "js": "@babel/eslint-parser",
      "jsx": "@babel/eslint-parser",
      "ts": "@typescript-eslint/parser",
      "tsx": "@typescript-eslint/parser",
    },
  },
}
```

### typescript4 + vue3

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/vue3",
    "plugin:@afuteam/fe/typescript4",
  ],
}
```

### js + typescript4 + react

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react  @afuteam/eslint-plugin-fe@latest
```

```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    "plugin:@afuteam/fe/react",
    "plugin:@afuteam/fe/typescript4",
  ],
}
```

## 使用问题

请前往 [issues](https://github.com/afu-fe/afu-eslint-rule/issues) 进行反馈，我会及时跟进处理。