const BaseOptions = require("./base.js");
const JSRules = require("./js.js");

module.exports = {
  ...BaseOptions,
  extends: ["plugin:vue/essential"],
  parser: "vue-eslint-parser",
  plugins: ['@afuteam/fe'],
  rules: {
    ...JSRules.rules,
  },
};
