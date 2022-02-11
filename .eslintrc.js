module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['prettier', 'vuejs-accessibility'],
  // add your custom rules here
  rules: { 'vue/multi-word-component-names': 'off' },
}
