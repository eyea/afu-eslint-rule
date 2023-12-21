# @afuteam/eslint-plugin-fe

[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/ci/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/ci.yml)[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/rulesCoverage/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/rulesCoverage.yml)[![npm package](https://img.shields.io/npm/v/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)[![npm downloads](https://img.shields.io/npm/dm/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)

AfuTeam eslint rules

## 简介

AfuTeam eslint rules 是一个基于 eslint 的 __前端代码规范集合__。

目前包含 JavaScript、react(16.x、17.x+)、vue(2.x、3.x+)、Typescript(4.x、5.x)的rules。

其中：

1. JavaScript 的 extends 为 __eslint:recommended__
2. react(16.x、17.x+) 的 extends 为 __plugin:react/recommended__、__plugin:jsx-a11y/recommended__
3. vue2 的 extends 为 __plugin:vue/essential__
3. vue3 的 extends 为 __plugin:vue/vue3-essential__
4. Typescript(4.x、5.x) 的 extends 为 __plugin:@typescript-eslint/eslint-recommended__


## 安装

<em> 默认最新；对于使用最新版本各个依赖如果运行依赖有问题的，可尝试下面首行参考说明的版本；
同时也欢迎提到issues，方便大家快速接入 :smile </em>

```bash

pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest -D
```

## 配置

在 `.eslintrc.js` 添加下面配置：

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe'
  ]
}
```

<hr >

然后根据项目包含的类型，在配置文件中自行搭配，如:


###  React(16.x、17.x+)

#### 1. React16.x
<em>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</em>

<em>参考：
 *   eslint ^7.11.0
 *   eslint-plugin-react ^7.21.4
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest eslint-plugin-react -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/react16'
  ]
}
```

#### 2. React17.x+

<em>参考：
 *   eslint ^8.45.0
 *   @babel/core ^7.22.9
 *   @babel/eslint-parser ^7.22.9
 *   @babel/preset-react ^7.22.5
 *   eslint-plugin-react ^7.33.0
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest eslint-plugin-react @babel/preset-react -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/react'
  ]
}
```

###  Vue(2.x、3.x+)

#### 1. Vue2.x

<em>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</em>

<em>参考：
 *   eslint ^7.11.0
 *   vue-eslint-parser ^7.1.1
 *   eslint-plugin-vue ^6.2.2
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest vue-eslint-parser eslint-plugin-vue -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/vue2'
  ]
}
```

#### 2. Vue3.x

<em>参考：
 *   eslint ^8.45.0
 *   @babel/core ^7.22.9
 *   @babel/eslint-parser ^7.22.9
 *   vue-eslint-parser ^9.3.1
 *   eslint-plugin-vue ^9.15.1
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest vue-eslint-parser eslint-plugin-vue -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/vue3'
  ]
}
```

### typescript(4.x、5.x)

#### 1. typescript4.x

<em>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</em>

<em>参考：
 *   eslint ^7.11.0
 *   @typescript-eslint/parser ^4.4.1
 *   @typescript-eslint/eslint-plugin ^4.4.1
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest @typescript-eslint/parser@4.x @typescript-eslint/eslint-plugin@4.x -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/typescript4'
  ]
}
```


#### 2. typescript5.x+
<em>参考：
 *   eslint ^8.45.0
 *   @babel/core ^7.22.9
 *   @babel/eslint-parser ^7.22.9
 *   @typescript-eslint/parser ^6.2.0
 *   @typescript-eslint/eslint-plugin ^6.2.0
</em>

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/typescript5'
  ]
}
```

### 组合示例

1. vue2.x + typescipt4.x

```bash
# 组合
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest vue-eslint-parser eslint-plugin-vue  @typescript-eslint/parser@4.x @typescript-eslint/eslint-plugin@4.x -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/vue2',
    '@afuteam/fe/typescript4'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
}

```

2. react17.x + typescript5.x

```bash
# 组合
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest eslint-plugin-react @babel/preset-react  @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

```js
module.exports = {
  // 省略其他配置
  extends: [
    '@afuteam/fe',
    '@afuteam/fe/react',
    '@afuteam/fe/typescript5'
  ]
}
```


## Q & A

### 为什么只维护rules？
围绕核心 __规则定制化__，不想重复造轮子。

## 使用问题

请前往 [issues](https://github.com/eyea/afu-eslint-rule/issues) 进行反馈，我会及时跟进处理。