/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.test.ts'],
	transform: {
		'^.+\\.ts$': [
			'@swc/jest',
			{
				jsc: {
					parser: { syntax: 'typescript' },
					target: 'es2022',
				},
				module: { type: 'commonjs' },
			},
		],
	},
	clearMocks: true,
	collectCoverage: false,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
}
