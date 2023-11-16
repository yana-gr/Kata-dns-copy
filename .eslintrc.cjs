module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  settings: {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".svg"]
      },
      react: {
        "version": "detect"
      },
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "@typescript-eslint", "react-hooks", "jsx-a11y"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    "linebreak-style": "off",
    "quotes": ["error", "single"],
    "curly": ["error", "all"],
    "react/boolean-prop-naming": "off",
    "react/require-default-props": "off",
    "react/no-children-prop": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-indent": ["error", 2],
    "react/button-has-type": "off",
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-filename-extension": "off",
    "react/jsx-uses-vars": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": false}],
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "no-shadow": "off",
    "func-names": ["error", "as-needed", { "generators": "never" }],
    "no-template-curly-in-string": "warn",
    "no-else-return": ["error", { "allowElseIf": true }],

    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "func-call-spacing": ["error", "never"],
    "newline-after-var": "error",
    "no-empty-function": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": "error",
    "import/prefer-default-export": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "jsx-a11y/no-autofocus": "off",
  },
}
