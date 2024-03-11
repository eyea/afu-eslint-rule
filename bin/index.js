#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execSync = require('child_process').execSync;
const { ESLint } = require("eslint");
const LibRulesAndConfigs = require("../lib/index"); // lib定义的规则名称集
const supportFileExtNames = require("../lib/execConfigs/supportFileExtNames"); // 支持的文件类型名后缀集合
const BlackFilesList = require("../lib/execConfigs/BlackFilesList"); // 排除的路径集合
const FileIgnoredList = require("../lib/execConfigs/FileIgnoredList"); // 排除的文件集合

let targetPath = "";
let type = "";
let allowInlineConfig = false

const filesToLint = [];

const eslintInstances = {};

//指定cloc在的路径
const clocPath = path.join(__dirname, 'cloc');

function generateEslintInstances() {
  const lintnames = Object.keys(LibRulesAndConfigs.configsFilePaths);

  for (const name of lintnames) {
    const pathToConfigFile = require.resolve(`@afuteam/eslint-plugin-fe/lib/configs/${name}.js`);

    // 禁止行内配置 allowInlineConfig
    eslintInstances[name] = new ESLint({ overrideConfigFile: pathToConfigFile, useEslintrc: false,  ignore: false, allowInlineConfig: allowInlineConfig, });
  }

}

const fileGroups = {};
function generateFileGroups() {
  for (let name of supportFileExtNames) {
    fileGroups[name] = [];
  }
}

// 根据文件类型，命令行的type，eslintInstances字典，类确定具体某个文件使用的规则；type优先级最高
function handleSelectWhichEslintInstances(type, eslintInstances) {
  return eslintInstances[type] || "";
}

// 判断文件名后缀是否在黑名单
function isFileIgnored(filePath) {
  const fileName = path.basename(filePath);
  return FileIgnoredList.some(blackName => fileName.endsWith(blackName));
}

// TODO lintType 暂不支持 多个，比如 Astro 类型的项目

async function lintFiles(filePaths) {

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalBlankLines = 0; // 空行
  let totalCommentLines = 0; // 注释行数
  let totalCodeLines = 0; // 代码行数
  let complexityData = []; // 复杂度统计

  for (const filePath of filePaths) {
    const curFileIsIgnored = isFileIgnored(filePath);

    const extName = path.extname(filePath).slice(1);
    if (!curFileIsIgnored && fileGroups[extName]) {
      fileGroups[extName].push(filePath);
    }
  }

  // 针对每种文件类型执行 Lint 操作
  for (const fileType in fileGroups) {
    if (fileGroups[fileType].length > 0) {
      const whichEslintInstances = handleSelectWhichEslintInstances(
        type,
        eslintInstances
      );

      if (!whichEslintInstances && !whichEslintInstances.lintFiles) {
        console.error(
          `获取eslint规则实例异常，指令type为${type};文件类型为${fileType}`
        );

        return
      }

      const results = await whichEslintInstances.lintFiles(
        fileGroups[fileType]
      );
      const formatter = await whichEslintInstances.loadFormatter("stylish");
      const resultText = formatter.format(results);

      if (resultText) {
        results.forEach(result => {
          totalErrors += result.errorCount;
          totalWarnings += result.warningCount;
        });
        // 这个是给开发者看的，方便结合编辑器直接定位到问题处
        console.error(resultText);
      }

      // 复杂度
      if(results?.length > 0) {
        results.forEach(result => {
          const messageWhichRuleId = 'complexity'
          const complexityMsg = result?.messages?.filter(item => item.ruleId === messageWhichRuleId)
          complexityData.push(...complexityMsg)
        })
      }

      // 统计进行lint的代码行数
      try {
        // 对于文件名包含空格的需要 添加 引号 否则无法 cloc read，没有的话不用
        const dealNameHasBlank = fileGroups[fileType].map((item) => {
          // 如果字符串中有空格（即 /\s/ 的正则表达式有匹配结果），那么返回被引号包围的字符串
          if (/\s/.test(item)) {
            return `"${item}"`;
          }
          // 否则返回原始字符串
          return item;
        });
        let filePathsStr = dealNameHasBlank.join(' ');

        let stdout = execSync(`${clocPath} --json ${filePathsStr}`).toString();
        totalBlankLines += JSON.parse(stdout)['SUM']?.blank || 0
        totalCommentLines += JSON.parse(stdout)['SUM']?.comment || 0
        totalCodeLines += JSON.parse(stdout)['SUM']?.code || 0
      } catch (error) {
        console.warn('统计代码行数异常:\n', error);
      }


    }
  }

  // console.log('排除目录列表:\n', JSON.stringify(BlackFilesList));
  // console.log('排除文件名:', FileIgnoredList);
  console.log('支持文件类型:', supportFileExtNames);
  console.log('\n')

  // WARN 这三行不可以省略和更改，npx 统计结果用
  console.log('Total errors:', totalErrors);
  console.log('Total warnings:', totalWarnings);
  console.log('Total totalBlankLines:', totalBlankLines);
  console.log('Total totalCommentLines:', totalCommentLines);
  console.log('Total totalCodeLines:', totalCodeLines);
  console.log('Total complexityDataLength:', complexityData.length);
  console.log('Total complexityData:', JSON.stringify(complexityData));

  console.log('\n')


}

function walkDir(dir, callback) {
  // 黑名单目录排除
  if(curPathIsBlackDirectory(dir)) return;

  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function handleProcessArgv() {
  // 把 process.argv 转为一个键值对对象
  let argv = {};
  for (let i = 2; i < process.argv.length; i++) {
    let match = process.argv[i].match(/^--([^=]+)=(.+)/);
    if (match) {
      argv[match[1]] = match[2];
    }
  }

  // 检查是否有 --help 参数
  if (argv.help === 'type') {

    console.log('当前支持的type类型: \n', Object.keys(LibRulesAndConfigs.configsFilePaths), '\n');
    console.log('将要废弃、不建议使用: \n', Object.keys(LibRulesAndConfigs.ABANDON_configsFilePaths), '\n');

    process.exit(0);   // 结束程序
  }

  if(argv.allowInlineConfig === 'true') {
    allowInlineConfig = true;
  }

  if (argv.path) {
    targetPath = argv.path;
  }
  // TODO type 考虑是否支持组合，默认支持一种
  if (argv.type) {
    if(argv.type.startsWith('error-')) {
      type = 'js'
    }
    type = argv.type;
  }
}

// 检测文件类型是否支持，供后面的lint规则用
function handleValidPathExtName(supportFileExtNames, targetPath) {
  const extname = path.extname(targetPath).slice(1);
  return !!supportFileExtNames.includes(extname);
}

// 路径是 黑名单
function curPathIsBlackDirectory(targetPath) {
  const basename = path.basename(targetPath);

  let isBlackFile = BlackFilesList.includes(basename) || basename.startsWith('.')
  return isBlackFile
}

// 遍历、执行lint逻辑
function handleExecLintRules() {
  if (fs.lstatSync(targetPath).isDirectory()) {
    // 遍历目录下的所有文件
    walkDir(targetPath, function (filePath) {
      if (handleValidPathExtName(supportFileExtNames, filePath)) {
        filesToLint.push(filePath);
      }
    });
  } else if (handleValidPathExtName(supportFileExtNames, targetPath)) {
    filesToLint.push(targetPath);
  }

  lintFiles(filesToLint).catch((error) => {
    process.exitCode = 1;
    console.error(error);
  });
}

//  main 函数
function main() {

  // process argv参数处理  从命令行参数获取目录路径和 lint 类型
  handleProcessArgv();

  // 生成 ESLint 实例字典
  generateEslintInstances();

  // 生成 fileGroups，根据当前配置支持的 lint类型做的一个集合，后面的单个类型文件放到这里
  generateFileGroups();

  // 遍历、执行 lint 逻辑 输出到控制台
  handleExecLintRules();
}

main();
