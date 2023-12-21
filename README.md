# @afuteam/eslint-plugin-fe

<div align="center">

[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/ci/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/ci.yml)[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/rulesCoverage/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/rulesCoverage.yml)[![npm package](https://img.shields.io/npm/v/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)[![npm downloads](https://img.shields.io/npm/dm/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)

</div>


## 简介

AfuTeam Eslint Rules 是一个基于 eslint 的 __前端代码规范集合__。


<details>
  <summary>目前包含 JavaScript、React(16.x、17.x+)、Vue(2.x、3.x+)、Typescript(4.x、5.x)的 Rules。</summary>
  <ul>
    <li>JavaScript 的 extends 为 __eslint:recommended__</li>
    <li>react(16.x、17.x+) 的 extends 为 __plugin:react/recommended__、__plugin:jsx-a11y/recommended__</li>
    <li>vue2 的 extends 为 __plugin:vue/essential__</li>
    <li>vue3 的 extends 为 __plugin:vue/vue3-essential__</li>
    <li>Typescript(4.x、5.x) 的 extends 为 __plugin:@typescript-eslint/eslint-recommended__</li>
  </ul>
</details>


## 安装

<em> 默认依赖使用最新；对于使用默认安装依赖如果运行 __eslint__ 有问题的，可尝试下面备注提供参考的版本</em>

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


<em>然后根据项目包含的类型，在配置文件中自行搭配，如:</em>


###  React(16.x、17.x+)

#### React16.x

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

<details>
  <summary>备注</summary>
  <ul>
    <li><em>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</em></li>
    <li>eslint ^7.11.0</li>
    <li>eslint-plugin-react ^7.21.4</li>
  </ul>
</details>


#### React17.x+

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
<details>
  <summary>备注</summary>
  <ul>
    <li>eslint ^8.45.0</li>
    <li>@babel/core ^7.22.9</li>
    <li>@babel/eslint-parser ^7.22.9</li>
    <li>@babel/preset-react ^7.22.5</li>
    <li>eslint-plugin-react ^7.33.0</li>
  </ul>
</details>


###  Vue(2.x、3.x+)

#### Vue2.x

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
<details>
  <summary>备注</summary>
  <ul>
    <li>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</li>
    <li>eslint ^7.11.0</li>
    <li>vue-eslint-parser ^7.1.1</li>
    <li>eslint-plugin-vue ^6.2.2</li>
  </ul>
</details>


#### Vue3.x

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
<details>
  <summary>备注</summary>
  <ul>
    <li>eslint ^8.45.0</li>
    <li>@babel/core ^7.22.9</li>
    <li>@babel/eslint-parser ^7.22.9</li>
    <li>vue-eslint-parser ^9.3.1</li>
    <li>eslint-plugin-vue ^9.15.1</li>
  </ul>
</details>


### typescript(4.x、5.x)

#### typescript4.x

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
<details>
  <summary>备注</summary>
  <ul>
    <li>babel-eslint最新10.1.0 已废弃，建议使用 @babel/eslint-parser</li>
    <li>eslint ^7.11.0</li>
    <li> @typescript-eslint/parser ^4.4.1</li>
    <li>@typescript-eslint/eslint-plugin ^4.4.1</li>
  </ul>
</details>


#### typescript5.x+

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
<details>
  <summary>备注</summary>
  <ul>
    <li>eslint ^8.45.0</li>
    <li>@babel/core ^7.22.9</li>
    <li>@babel/eslint-parser ^7.22.9</li>
    <li>@typescript-eslint/parser ^6.2.0</li>
    <li>@typescript-eslint/eslint-plugin ^6.2.0</li>
  </ul>
</details>


### 组合示例

#### vue2.x + typescipt4.x

```bash
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

#### react17.x + typescript5.x

```bash
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

### 使用这套规则，在我的项目里需要安装这些依赖

非常欢迎这类经验，请前往 [Issues](https://github.com/eyea/afu-eslint-rule/issues) 进行留言，或者 [Pull request](https://github.com/eyea/afu-eslint-rule/pulls) 共建
我会及时跟进处理，并适时更新到文档中，便于大家快速使用。
