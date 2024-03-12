"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// 旧版本配置文件路径，将要废弃
const ABANDON_configsFilePaths = {
  "ts4": "./configs/ts/index",
  "ts5": "./configs/ts/index",
  "vue2": "./configs/vue2-js",
  "vue3": "./configs/vue3-js",
  "react": "./configs/react-js",
  "react16": "./configs/react-js",
}

// 配置文件路径
const configsFilePaths = {
  "js": "./configs/js",
  "ts": "./configs/ts/index",
  "vue2-js": "./configs/vue2-js",
  "vue3-js": "./configs/vue3-js",
  "react-js": "./configs/react-js",
  "vue2-ts": "./configs/vue2-ts/index",
  "vue3-ts": "./configs/vue3-ts/index",
  "react-ts": "./configs/react-ts/index",

  // 将要废弃
  ...ABANDON_configsFilePaths,

};

module.exports.ABANDON_configsFilePaths = ABANDON_configsFilePaths;
module.exports.configsFilePaths = configsFilePaths;

// import all "rules, configs" in lib/
module.exports.rules = {
  "complexity-without-switchcase": require("./rules/complexity-without-switchcase")
};

module.exports.configs = {
  "js": require(configsFilePaths['js']),
  "ts": require(configsFilePaths['ts']),
  "vue2-js": require(configsFilePaths['vue2-js']),
  "vue3-js": require(configsFilePaths['vue3-js']),
  "react-js": require(configsFilePaths['react-js']),
  "vue2-ts": require(configsFilePaths['vue2-ts']),
  "vue3-ts": require(configsFilePaths['vue3-ts']),
  "react-ts": require(configsFilePaths['react-ts']),

  // 将要废弃， 📢📢📢 v1.0.1之前使用的注意
  "ts4": require(configsFilePaths['ts']),
  "ts5": require(configsFilePaths['ts']),
  "vue2": require(configsFilePaths['vue2']),
  "vue3": require(configsFilePaths['vue3']),
  "react": require(configsFilePaths['react']),
  "react16": require(configsFilePaths['react']),
};
