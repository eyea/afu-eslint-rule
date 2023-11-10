
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all "rules, configs" in lib/
module.exports.rules = {};
module.exports.configs = {
  "vue2-js": require("./configs/vue2-js"),
  "react-js": require("./configs/react-js"),
  "js": require("./configs/js"),
};
