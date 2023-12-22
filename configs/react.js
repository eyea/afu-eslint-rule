// Basic: Eslint/React Version: 1.0.0
const BaseOptions = require('./base.js');

module.exports = {
  ...BaseOptions,
  extends: [
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:react/jsx-runtime', // react 17+, 目前共2条
    'plugin:jsx-a11y/recommended',  // jsx-a11y 此规则建议和Recommended同步，因此这部分的规则同Recommended的a11y的rules
  ],
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Basic react-hookes rules 2条
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'warn',

    // Basic jsx-runtime 2条
    // 'react/jsx-uses-react': 0,
    // 'react/react-in-jsx-scope': 1,

    // Basic react.js 35条，
    // 涉及到jsx-runtime的放在上面了 走默认
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
    'jsx-a11y/no-static-element-interactions': 'off',
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
  },
}
