import { isArguments } from '../src'

describe('isArguments', () => {
	const args = (function () {
		// biome-ignore lint/complexity/noArguments: a real `arguments` object is exactly what the public isArguments API is tested against
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
