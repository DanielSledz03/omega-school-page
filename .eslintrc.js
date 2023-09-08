const fs = require('fs');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  root: true,
  ignorePatterns: [
    'package.js',
    'package-lock.json',
    '.eslintrc.js',
    'tsconfig.json',
    'next.config.js',
    'next-i18next.config.js',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // Interface
    '@typescript-eslint/consistent-type-exports': 'warn',
    // No console logs
    'no-console': 'warn',
    // Enum duplicates
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    // Dynamic delete from object
    '@typescript-eslint/no-dynamic-delete': 'warn',
    // Empty interfaces
    '@typescript-eslint/no-empty-interface': 'error',
    // Type ANY
    '@typescript-eslint/no-explicit-any': 'off',
    // Promises
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    // Unsafe returns
    '@typescript-eslint/no-unsafe-return': 'off',
    // Empty export
    '@typescript-eslint/no-useless-empty-export': 'warn',
    // No vars allowed
    '@typescript-eslint/no-var-requires': 'error',
    // Enum always with value
    '@typescript-eslint/prefer-enum-initializers': 'error',
    // For...of in array
    '@typescript-eslint/prefer-for-of': 'warn',
    // Requests function type
    '@typescript-eslint/prefer-function-type': 'error',
    // Includes in array
    '@typescript-eslint/prefer-includes': 'warn',
    // Require await in promises
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    // Unused imports and vars
    'no-unused-vars': 'off',
    // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    // Template expressions
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Unsafe assignments
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    // Restrict plus operands
    '@typescript-eslint/restrict-plus-operands': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'tailwindcss/classnames-order': 'off',
    'import/order': [
      1,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal',
          })),
          {
            pattern: 'env',
            group: 'internal',
          },
          {
            pattern: 'theme',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [
    '.git',
    '.next',
    '.vscode',
    'node_modules',
  ];
  return getDirectories(process.cwd()).filter(
    (f) => !ignoredSortingDirectories.includes(f),
  );
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}
