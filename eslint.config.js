import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Configure the rule for Three.js properties
      'react/no-unknown-property': [
        'error',
        {
          ignore: [
            'args', 'attach', 'position', 'rotation', 'scale', 
            'geometry', 'material', 'uniforms', 'vertexShader',
            'fragmentShader', 'transparent', 'opacity'
          ]
        }
      ]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
