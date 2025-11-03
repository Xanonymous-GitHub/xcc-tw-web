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
  ignores: [
    // Exclude all files by default
    '**/*',
    // Then explicitly include source files
    '!**/*.ts',
    '!**/*.js',
    '!**/*.vue',
    '!**/*.scss',
    '!**/*.css',
    '!**/*.mjs',
    // Explicitly exclude common directories and files
    '**/node_modules/**',
    '**/dist/**',
    '**/.output/**',
    '**/.nuxt/**',
    '*.md',
    '*.json',
    '*.yaml',
    '*.yml',
    '*.txt',
  ],
})
