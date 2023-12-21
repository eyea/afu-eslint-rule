/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
  extends: ["./configs/js"],
  configs: {
    // js: require("./configs/js"), // 作为基本的，必选项
    "typescript4": require("./configs/ts4"),
    "typescript5": require("./configs/ts5"),
    "vue2": require("./configs/vue2"),
    "vue3": require("./configs/vue3"),
    "react": require("./configs/react"),
    "react16": require("./configs/react16"), // react 17以下
  }
}
