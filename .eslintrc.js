module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // You can use 'vue3-strongly-recommended' or 'vue3-recommended'
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-mixed-spaces-and-tabs': 'error',
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}