# @afuteam/eslint-plugin-fe

## 安装

安装 [ESLint](https://eslint.org/) 和 `@afuteam/eslint-plugin-fe`:

```sh
npm i eslint @afuteam/eslint-plugin-fe --save-dev
```

## .eslintrc 文件使用

在 `.eslintrc` 配置文件中, 引入 `@afuteam/eslint-plugin-fe` 插件

```json
{
  "plugins": ["@afuteam/fe"]
}
```

然后根据项目类型, 配置对应规则

```json
// js + react
{
  "extends": [
    "plugin:@afuteam/fe/react-js"
  ],
  "plugins": ["@afuteam/fe"]
}
```

```json
// js + vue2
{
  "extends": ["plugin:@afuteam/fe/vue2-js"],
  "plugins": ["@afuteam/fe"]
}
```

```json
// js + vue3
{
  "extends": ["plugin:@afuteam/fe/vue3-js"],
  "plugins": ["@afuteam/fe"]
}
```

```json
// ts + react 包含js规则
{
  "extends": [
    "plugin:@afuteam/fe/react-ts"
  ],
  "plugins": ["@afuteam/fe"]
}
```

```json
// ts + vue2 包含js规则
{
  "plugins": ["@afuteam/fe"],
  "extends": ["plugin:@afuteam/fe/vue2-ts"]
}
```

```json
// ts + vue3 包含js规则
{
  "plugins": ["@afuteam/fe"],
  "extends": ["plugin:@afuteam/fe/vue3-ts"]
}
```
## npx方式使用
查看当前支持的类型，列出清单
```sh
npx @afuteam/eslint-plugin-fe@latest --help=type
```

使用
```sh
npx @afuteam/eslint-plugin-fe@latest --type=react-ts --path=src/
```

## Tips

2.0.7
1. 关闭默认的 `complexity`;
2. 基于 `complexity` 新增规则 `complexity-without-switchcase`，需要配合 `@afuteam/fe`的 `plugin`使用

2.0.1
1. 默认禁止lint 的行内disable注释；但支持npx方式来打开 **--allowInlineConfig=true**
2. 忽略 min.js iconfont.js 结尾的js文件
