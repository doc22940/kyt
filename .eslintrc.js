module.exports = {
  extends: ['eslint-config-kyt'],

  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__setExecReturnValue', '__setExecuteOnFiles', '__webpack_modules__', '__esModule'],
      },
    ],
  },

  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'global-require': 0,
      },
    },
  ],
};
