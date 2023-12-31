module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',

  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
