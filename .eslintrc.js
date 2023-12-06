// "use strict";

// module.exports = {
//   root: true,
//   extends: [
//     "eslint:recommended",
//   ],
//   env: {
//     node: true,
//   },
// };

module.exports = {
  extends: ['./index.js', './react.js', './typescript.js'],
  globals: {
    Prism: false,
  },
};
