import { isArguments } from '../src'

describe('isArguments', () => {
	const args = (function() {
		// eslint-disable-next-line prefer-rest-params
		return arguments
	})()

	test('should return `true` for `arguments` objects', () => {
		expect(isArguments(args)).toBe(true)
	})

	test('should return `false` for non `arguments` objects', () => {
		expect(isArguments([1, 2, 3])).toBe(false)
		expect(isArguments({ a: 1 })).toBe(false)
	})
})
