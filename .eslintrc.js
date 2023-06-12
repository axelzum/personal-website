module.exports = {
  extends: 'get-off-my-lawn',
  ignorePatterns: ['/node_modules/', '/.next/', '/.idea/'],
  rules: {
    // enable additional rules, override rule options, or disable rules
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
