/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.test.ts'],
	transform: {
		'^.+\\.ts$': ['ts-jest', { tsconfig: '__tests__/tsconfig.json' }],
	},
	clearMocks: true,
	collectCoverage: false,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
}

export default config
