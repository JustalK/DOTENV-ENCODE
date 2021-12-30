module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src']
        ],
        extensions: ['.js']
      }
    }
  },
  rules: {
  },
};
