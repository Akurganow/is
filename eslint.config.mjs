import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default tseslint.config(
	{
		ignores: ['lib/', 'coverage/', 'node_modules/']
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'@stylistic/block-spacing': ['error', 'always'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/indent': ['error', 'tab']
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2021
			}
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
)
