# @afuteam/eslint-plugin-fe
AfuTeam eslint plugin

## 安装
```bash
npm i @afuteam/eslint-plugin-fe@latest -D
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

###  js + vue2
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
pnpm i @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @afuteam/eslint-plugin-fe@latest
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
    "plugin:@afuteam/fe/typescript4",
    "plugin:@afuteam/fe/vue3"
  ],
}
```

### typescript4 + react
<!-- typescript 4 -->
```json
{
  "plugins": [
    "@afuteam/fe"
  ],
  "extends": [
    "plugin:@afuteam/fe/typescript4",
    "plugin:@afuteam/fe/react"
  ],
}
```

## 使用问题

请前往 [issues](https://github.com/afu-fe/afu-eslint-rule/issues) 进行反馈，我会及时跟进处理。