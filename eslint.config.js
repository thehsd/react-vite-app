import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-use-before-define': 0,
      'no-alert': 0,
      'no-console': 0,
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'no-nested-ternary': 0,
      'no-param-reassign': 0,
      'no-underscore-dangle': 0,
      'no-restricted-exports': 0,
      'no-promise-executor-return': 0,
      'import/prefer-default-export': 0,
      'prefer-destructuring': [1, { object: true, array: false }],
      // react
      'arrow-body-style': 0,
      'react/prop-types': 0,
      'react/no-children-prop': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-array-index-key': 0,
      'react/require-default-props': 0,
      'react/jsx-props-no-spreading': 0,
      'react/function-component-definition': 0,
      'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
      'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
      'react/no-unstable-nested-components': [1, { allowAsProps: true }],
      // jsx-a11y
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/control-has-associated-label': 0,
      // unused imports
      'unused-imports/no-unused-imports': 0,
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'unused-imports/no-unused-vars': [
        0,
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      // perfectionist
      'perfectionist/sort-exports': [1, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-named-imports': [1, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-named-exports': [1, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-imports': [
        2,
        {
          order: 'asc',
          type: 'line-length',
          'newlines-between': 'always',
          groups: [
            'style',
            'type',
            ['builtin', 'external'],
            'custom-mui',
            'custom-routes',
            'custom-hooks',
            'custom-utils',
            'internal',
            'custom-components',
            'custom-sections',
            'custom-auth',
            'custom-types',
            ['parent', 'sibling', 'index'],
            ['parent-type', 'sibling-type', 'index-type'],
            'object',
            'unknown',
          ],
          'custom-groups': {
            value: {
              ['custom-mui']: '@mui/**',
              ['custom-auth']: 'src/auth/**',
              ['custom-hooks']: 'src/hooks/**',
              ['custom-utils']: 'src/utils/**',
              ['custom-types']: 'src/types/**',
              ['custom-routes']: 'src/routes/**',
              ['custom-sections']: 'src/sections/**',
              ['custom-components']: 'src/components/**',
            },
          },
          'internal-pattern': ['src/**'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: false, optionalDependencies: false, peerDependencies: false },
      ],
    },
  },
]
