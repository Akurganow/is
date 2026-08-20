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

	test('returns true for class without space before body', () => {
		expect(isClass(class {})).toBe(true)
	})

	test('returns true for named class', () => {
		expect(isClass(class A {})).toBe(true)
	})

	test('returns true for class with heritage', () => {
		expect(isClass(class extends Object {})).toBe(true)
	})

	test('returns false for arrow function', () => {
		expect(isClass(() => {})).toBe(false)
	})
})
