module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "globals": { "fetch": false },
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "indent": ["error", 4],
    'no-underscore-dangle': [2, { 'allowAfterThis': true }]
  }
};
