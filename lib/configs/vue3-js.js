const BaseOptions = require('./base.js');
const JSRules = require("./js.js");

module.exports = {
  ...BaseOptions,
  extends: [
    'plugin:vue/vue3-essential'
  ],
  rules: {
    ...JSRules.rules,
  },
}
