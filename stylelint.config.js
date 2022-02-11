module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-empty-source': null,
    'length-zero-no-unit': null,
    'rule-empty-line-before': null,
  },
}
