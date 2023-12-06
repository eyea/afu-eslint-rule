// Basic: Eslint/React Version: 1.0.0

module.exports = {
  env: {
   browser: true,
   commonjs: true,
   es6: true,
   node: true,
   es2021: true,
  },
  globals: {
    AHAPP: 'readonly',
    AHJavascriptBridge: 'readonly',
    trackPageView: 'readonly',
    trackCustomEvent: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // 继承的规则 [扩展]
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:react/jsx-runtime', // react 17+, 目前共2条
    'plugin:@typescript-eslint/eslint-recommended', // TS
    'plugin:jsx-a11y/recommended',  // jsx-a11y 此规则建议和Recommended同步，因此这部分的规则同Recommended的a11y的rules
  ],
  parser: '@typescript-eslint/parser', // TS 解析器
  parserOptions: {
   ecmaFeatures: {
     jsx: true,
   },
   ecmaVersion: 2021,
   sourceType: 'module',
   // project: ['tsconfig.json'], // https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation
 },
 plugins: ['@typescript-eslint','react', 'react-hooks', 'jsx-a11y'],
 settings: {
   react: {
     version: 'detect',
   },
 },
 ignorePatterns: ['*.min.*'],
 rules: {
  // Basic react-hookes rules 2条
  'react-hooks/rules-of-hooks': 'off',
  'react-hooks/exhaustive-deps': 'warn',

  // Basic jsx-runtime 2条
  // 'react/jsx-uses-react': 0,
  // 'react/react-in-jsx-scope': 1,

  // Basic TS  extends: plugin:@typescript-eslint/eslint-recommended', 但基于Basic规则的普适性以及整体lint规则的考虑，更新规则如下
  // 此 extends 仅保留 @typescript-eslint/no-unused-vars 为 error, 其余 off
  // 注意@typescript-eslint/no-unsafe-member-access、@typescript-eslint/no-unsafe-call、@typescript-eslint/no-unsafe-assignment是为了区分别的标准补充的。
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',

   '@typescript-eslint/adjacent-overload-signatures': 'off', // error -> off
   '@typescript-eslint/ban-ts-comment': 'off', // error -> off
   '@typescript-eslint/ban-types': 'off', // error -> off
   'no-array-constructor': 'off', // keep off
   '@typescript-eslint/no-array-constructor': 'off', // error -> off
  //  'no-empty-function': 'off', // keep off, JavaScript 不用重复
   '@typescript-eslint/no-empty-function': 'off', // error -> off
   '@typescript-eslint/no-empty-interface': 'off', // error -> off
   '@typescript-eslint/no-explicit-any': 'off', // warn -> off
   '@typescript-eslint/no-extra-non-null-assertion': 'off', // error -> off
   '@typescript-eslint/no-extra-semi': 'off', // error -> off
   '@typescript-eslint/no-inferrable-types': 'off', // error -> off
   'no-loss-of-precision': 'off', // keep off
   '@typescript-eslint/no-loss-of-precision': 'off', // error -> off
   '@typescript-eslint/no-misused-new': 'off', // error -> off
   '@typescript-eslint/no-namespace': 'off', // error -> off
   '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // error -> off
   '@typescript-eslint/no-non-null-assertion': 'off', // warn -> off
   '@typescript-eslint/no-this-alias': 'off', // error -> off
   '@typescript-eslint/no-unnecessary-type-constraint': 'off', // error -> off
  //  'no-unused-vars': 'off', // keep off，JavaScript 不用重复
   '@typescript-eslint/no-unused-vars': 'error', // warn => error
   '@typescript-eslint/no-var-requires': 'off', // error -> off
   '@typescript-eslint/prefer-as-const': 'off', // error -> off
   '@typescript-eslint/prefer-namespace-keyword': 'off', // error -> off
   '@typescript-eslint/triple-slash-reference': 'off', // error -> off

  // Basic react.js 35条，
  // 涉及到jsx-runtime的放在上面了
  // 结合使用的是Recommended，将其中22条: 1. 和Basic重合的且不同的，取Basic(error => off); 2. error的改为warn，1条0的维持
  // 相交且不同清单，取Basic off: react/display-name react/jsx-no-target-blank  react/no-danger-with-children react/prop-types
  // react/jsx-uses-vars 取Basic error, react/no-children-prop 取warn
   'react/jsx-key': 1,
   'react/jsx-no-comment-textnodes': 1,
   'react/jsx-no-duplicate-props': 1,
   'react/jsx-no-undef': 1,
   'react/no-children-prop': 1,
   'react/no-deprecated': 1,
   'react/no-direct-mutation-state': 1,
   'react/no-find-dom-node': 1,
   'react/no-is-mounted': 1,
   'react/no-render-return-value': 1,
   'react/no-string-refs': 1,
   'react/no-unescaped-entities': 1,
   'react/no-unknown-property': 1,
   'react/no-unsafe': 0,
   'react/require-render-return': 1,

  'react/button-has-type': 0,
  'react/prop-types': 0,
  'react/no-array-index-key': 2,
  'react/display-name': 0,
  'react/no-danger-with-children': 0,
  'react/jsx-no-bind': 0,
  'react/destructuring-assignment': 0,
  'react/require-default-props': 0,
  'react/require-extension': 0,
  'react/self-closing-comp': 0,
  'react/sort-comp': 0,
  'react/forbid-prop-types': 0,
  'react/jsx-closing-tag-location': 0,
  'react/jsx-first-prop-new-line': [2, 'multiline'],
  'react/jsx-filename-extension': 0,
  'react/jsx-props-no-spreading': 0,
  'react/jsx-no-target-blank': 0,
  'react/jsx-uses-vars': 2,


  // Basic jsx-a11y 37条
  // rules 'jsx-a11y/heading-has-content': 'off',
   'jsx-a11y/accessible-emoji': 'off',
   'jsx-a11y/alt-text': ['error', {
     elements: ['img', 'object', 'area', 'input[type="image"]'],
     img: [],
     object: [],
     area: [],
     'input[type="image"]': [],
   }],
   'jsx-a11y/anchor-ambiguous-text': 'off',
   'jsx-a11y/anchor-has-content': ['error', { components: [] }],
   'jsx-a11y/anchor-is-valid': ['error', {
     components: ['Link'],
     specialLink: ['to'],
     aspects: ['noHref', 'invalidHref', 'preferButton'],
   }],
   'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
   'jsx-a11y/aria-props': 'error',
   'jsx-a11y/aria-proptypes': 'error',
   'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
   'jsx-a11y/aria-unsupported-elements': 'error',
   'jsx-a11y/autocomplete-valid': ['off', {
     inputComponents: [],
   }],
   'jsx-a11y/click-events-have-key-events': 'off', // error => off
   'jsx-a11y/control-has-associated-label': ['error', {
     labelAttributes: ['label'],
     controlComponents: [],
     ignoreElements: [
       'audio',
       'canvas',
       'embed',
       'input',
       'textarea',
       'tr',
       'video',
     ],
     ignoreRoles: [
       'grid',
       'listbox',
       'menu',
       'menubar',
       'radiogroup',
       'row',
       'tablist',
       'toolbar',
       'tree',
       'treegrid',
     ],
     depth: 5,
   }],
   'jsx-a11y/heading-has-content': 'off',
   'jsx-a11y/html-has-lang': 'error',
   'jsx-a11y/iframe-has-title': 'error',
   'jsx-a11y/img-redundant-alt': 'error',
   'jsx-a11y/interactive-supports-focus': 'error',
   'jsx-a11y/label-has-associated-control': ['error', {
     labelComponents: [],
     labelAttributes: [],
     controlComponents: [],
     assert: 'both',
     depth: 25
   }],
   'jsx-a11y/lang': 'error',
   'jsx-a11y/media-has-caption': ['error', {
     audio: [],
     video: [],
     track: [],
   }],
   'jsx-a11y/mouse-events-have-key-events': 'error',
   'jsx-a11y/no-access-key': 'error',
   'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
   'jsx-a11y/no-distracting-elements': ['error', {
     elements: ['marquee', 'blink'],
   }],
   'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
     tr: ['none', 'presentation'],
   }],
   'jsx-a11y/no-noninteractive-element-interactions': ['error', {
     handlers: [
       'onClick',
       'onMouseDown',
       'onMouseUp',
       'onKeyPress',
       'onKeyDown',
       'onKeyUp',
     ]
   }],
   'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
     ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
     ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
     li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
     table: ['grid'],
     td: ['gridcell'],
   }],
   'jsx-a11y/no-noninteractive-tabindex': ['error', {
     tags: [],
     roles: ['tabpanel'],
   }],
   'jsx-a11y/no-onchange': 'off',
   'jsx-a11y/no-redundant-roles': 'error',
   'jsx-a11y/no-static-element-interactions': 'off', // error => off
   'jsx-a11y/role-has-required-aria-props': 'error',
   'jsx-a11y/role-supports-aria-props': 'error',
   'jsx-a11y/scope': 'error',
   'jsx-a11y/tabindex-no-positive': 'error',
   'jsx-a11y/label-has-for': ['off', {
     components: [],
     required: {
       every: ['nesting', 'id'],
     },
     allowChildren: false,
   }],

  // 如果不想和Recommended的这部分规则，那就使用这部分规则，使用前，1. 将extends的jsx/a11y去掉; 2. 将rules上面关于jsx-a11y的去掉
   'no-unused-vars': 0, // 非TS项目，此项需设为1
   'no-undef': 0,
   'no-empty-function': 2,
   'no-shadow': 2,
   'curly': 2,
   'array-callback-return': 2,
   'block-scoped-var': 2,
   'default-case': 2,
   'complexity': ['error', { 'max': 20 }],
   'no-console': 0,
   'no-await-in-loop': 2,
   'no-prototype-builtins': 0,
   'no-useless-escape': 0,
   'no-self-assign': 0,
   'no-caller': 2,
   'no-div-regex': 2,
   'no-new-wrappers': 2,
   'no-return-assign': 2,
   'no-unmodified-loop-condition': 2,
   'require-await': 2,
   'require-atomic-updates': 2,
   'no-empty': 2,
   'no-case-declarations': 2,
   // 追加的几条规则
   'no-use-before-define': 0, // 未定义前不能使用
   'no-new': 0,
   'new-cap': 0,
   'global-require': 0,
   'consistent-return': 0, // return 后面是否允许省略
   'no-underscore-dangle': 0, // 标识符不能以_开头或结尾；如果使用react的规则的话，我们有这个规则
   'no-unused-expressions': 1, // 禁止无用的表达式


   // 8.53.0废弃的样式相关规则
   "array-bracket-newline": 0,
   "array-bracket-spacing": 0,
   "array-element-newline": 0,
   "arrow-parens": 0,
   "arrow-spacing": 0,
   "block-spacing": 0,
   "brace-style": 0,
   "comma-dangle": 0,
   "comma-spacing": 0,
   "comma-style": 0,
   "computed-property-spacing": 0,
   "dot-location": 0,
   "eol-last": 0,
   "func-call-spacing": 0,
   "function-call-argument-newline": 0,
   "function-paren-newline": 0,
   "generator-star-spacing": 0,
   "implicit-arrow-linebreak": 0,
   "indent": 0,
   "jsx-quotes": 0,
   "key-spacing": 0,
   "keyword-spacing": 0,
   "linebreak-style": 0,
   "lines-between-class-members": 0,
   "lines-around-comment": 0,
   "max-len": 0,
   "max-statements-per-line": 0,
   "multiline-ternary": 0,
   "new-parens": 0,
   "newline-per-chained-call": 0,
   "no-confusing-arrow": 0,
   "no-extra-parens": 0,
   "no-extra-semi": 0,
   "no-floating-decimal": 0,
   "no-mixed-operators": 0,
   "no-mixed-spaces-and-tabs": 0,
   "no-multi-spaces": 0,
   "no-multiple-empty-lines": 0,
   "no-tabs": 0,
   "no-trailing-spaces": 0,
   "no-whitespace-before-property": 0,
   "nonblock-statement-body-position": 0,
   "object-curly-newline": 0,
   "object-curly-spacing": 0,
   "object-property-newline": 0,
   "one-var-declaration-per-line": 0,
   "operator-linebreak": 0,
   "padded-blocks": 0,
   "padding-line-between-statements": 0,
   "quote-props": 0,
   "quotes": 0,
   "rest-spread-spacing": 0,
   "semi": 0,
   "semi-spacing": 0,
   "semi-style": 0,
   "space-before-blocks": 0,
   "space-before-function-paren": 0,
   "space-in-parens": 0,
   "space-infix-ops": 0,
   "space-unary-ops": 0,
   "spaced-comment": 0,
   "switch-colon-spacing": 0,
   "template-curly-spacing": 0,
   "template-tag-spacing": 0,
   "wrap-iife": 0,
   "wrap-regex": 0,
   "yield-star-spacing": 0
 },
}
