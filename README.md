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

<details>
  <summary>默认的一些配置</summary>

  ```js
    module.exports = {
      // 以当前目录为根目录，不再向上查找 .eslintrc.js
      root: true,
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          // 不允许 return 语句出现在 global 环境下
          globalReturn: false,
          // 开启全局 script 模式
          impliedStrict: true,
          jsx: true,
        },
        // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
      },
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
      ignorePatterns: ['*.min.*'],
    }
  ```

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
  "plugins": [
    "@afuteam/fe"
  ]
}
```


<em>然后根据项目包含的类型，在配置文件中自行搭配，如:</em>

### JavaScript

```bash
pnpm i eslint @afuteam/eslint-plugin-fe@latest -D
```

```js
module.exports = {
  // 省略其他配置
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js"
  ]
}
```

###  React(16.x、17.x+)

#### React16.x

```bash
pnpm i eslint @babel/core @babel/eslint-parser @afuteam/eslint-plugin-fe@latest eslint-plugin-react -D
```

```js
module.exports = {
  // 省略其他配置
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/react16"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/react"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/vue2"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/vue3"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/ts4"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/ts5"
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/vue2",
    "plugin:@afuteam/fe/ts4"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      js: "@babel/eslint-parser",
      jsx: "@babel/eslint-parser",
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",
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
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/react",
    "plugin:@afuteam/fe/ts5"
  ]
}
```


## Q & A

### 为什么只维护rules？
围绕核心 __规则定制化__，不想重复造轮子。

### 按上面的配置了，项目的js文件没有进行lint检测
请注意，纯js项目现在很少，但也存在；需要在 __extends__ 进行配置的，通常在组合项目中，位于第一行，如下，这个很容易遗忘。

```js
module.exports = {
  // 省略其他配置
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/js",
    ...
  ]
}
```

### 使用这套规则，在我的项目里还需要做一些额外的处理

非常欢迎这类经验，请前往 [Issues](https://github.com/eyea/afu-eslint-rule/issues) 进行留言，或者 [Pull request](https://github.com/eyea/afu-eslint-rule/pulls) 共建
我会及时跟进处理，并适时更新到文档中，便于大家快速使用。
