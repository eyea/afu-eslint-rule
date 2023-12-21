### 学习

1. https://github.com/peaceiris/actions-gh-pages


2. https://github.com/AlloyTeam/eslint-config-alloy/issues/256

```md
> 1. config/rules/ 下的内容是通过脚本 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/scripts/build.ts#L192 生成的。真正维护规则的地方是 test/ 里的一个个 .eslintrc.js，正如「设计理念」里所说：「高度的自动化：先进的规则管理，测试即文档即[网站](https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN)」
> 2. 定期更新是通过 scripts/rulesCoverage.ts 来进行的。它读取的是 test/ 目录下的各个 rules，会自动更新 test 目录下的文件。
>
> 手动维护的规则就在 test/ 里


```
