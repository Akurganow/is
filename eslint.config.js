import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
	eslint.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				...globals.node,
				...globals.es2021
			}
		},
		plugins: {
			'@typescript-eslint': tseslint
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'no-tabs': 'off',
			'block-spacing': ['error', 'always'],
			'object-curly-spacing': ['error', 'always'],
			'semi': ['error', 'never'],
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab'],
			'@typescript-eslint/ban-types': 'off'
		}
	},
	{
		files: ['**/*.test.ts', '**/__tests__/**/*.ts'],
		languageOptions: {
			globals: {
				...globals.jest
			}
		}
	}
]