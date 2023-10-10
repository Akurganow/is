import { isClass } from '../src'

describe('isClass', () => {
	test('returns true for class', () => {
		expect(isClass(class {})).toBe(true)
	})

	test('returns false for class instance', () => {
		const instance = new (class {})()
		expect(isClass(instance)).toBe(false)
	})

	test('returns false for function', () => {
		expect(isClass(function () {})).toBe(false)
	})
})
