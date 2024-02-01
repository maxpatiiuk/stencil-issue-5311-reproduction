module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  extends: ['plugin:@typescript-eslint/base'],
  rules: {
    '@typescript-eslint/no-unsafe-return': 'warn',
  },
};
