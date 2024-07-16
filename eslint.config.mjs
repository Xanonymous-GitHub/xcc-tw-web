import config from '@antfu/eslint-config'

export default config({
  formatters: {
    html: true,
  },
  rules: {
    'ts/ban-ts-comment': 'off',
  },
  javascript: {
    overrides: {
      'no-undef': 'off',
    },
  },
})
