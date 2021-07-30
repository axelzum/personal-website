module.exports = {
  extends: 'get-off-my-lawn',
  ignorePatterns: ['/node_modules/', '/.next/', '/.idea/'],
  rules: {
    // enable additional rules, override rule options, or disable rules
    'react/react-in-jsx-scope': 'off',
  },
};
