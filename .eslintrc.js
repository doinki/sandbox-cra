/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const eslintConfig = {
  extends: ['sandbox', 'sandbox/jest', 'sandbox/prettier'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
  },
};

module.exports = eslintConfig;
