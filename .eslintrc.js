const heavy = process.env.HEAVY ? 2 : 0
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    "react-hooks"
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'array-callback-return': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': 0,
    'react/no-children-prop': 0,
    'max-params': ['error', 4],
    'react/jsx-key': 0,
    'import/namespace': 0,
    'import/named': 0,
    'import/no-named-as-default': 0,
    'prettier/prettier': heavy,
    'import/no-unresolved': heavy,
    'import/default': 0,
    'import/no-duplicates': heavy,
    'import/no-named-as-default-member': heavy,
    'react/no-deprecated': heavy,
    'react/display-name': 0,
    'react/no-string-refs': heavy,
    'react/no-direct-mutation-state': heavy,
    'react/require-render-return': heavy,
    'react/no-unescaped-entities': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "(useRecoilCallback|useRecoilTransaction_UNSTABLE)"
      }
    ]
  },
};
