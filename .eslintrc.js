module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': [1, { 'args': 'all', 'argsIgnorePattern': '^_' }]
  }
}
