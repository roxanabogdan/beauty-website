import config from "eslint-config-standard";

export default [
  ...[].concat(config),
  {
    rules: {
      "object-curly-spacing": ["error", "always"], // or "never"
      "space-before-function-paren": ["error", "always"], // or "never"
      "no-multi-spaces": "error",
      'indent': [
        'warn',
        4,
        {
          'ignoredNodes': [
            'TemplateLiteral'
          ],
          'SwitchCase': 1
        }
      ],
    },
  }
];
