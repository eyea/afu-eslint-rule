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

## TODO

### 增加测试用例

### 组合方式：

1. [ ] vue2 + ts
2. [ ] vue3 + ts
3. [ ] react + ts
4. [ ] react
5. [ ] vue2
6. [ ] vue3
7. [ ] ts
8. [ ] js
