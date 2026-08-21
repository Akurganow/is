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
		// biome-ignore lint/complexity/useArrowFunction: a function expression (not an arrow) is deliberately under test
		expect(isClass(function () {})).toBe(false)
	})

	test('returns true for class without space before body', () => {
		// biome-ignore format: the space-free class literal (`class{}`) is the regression under test — do not reformat to `class {}`
		expect(isClass(class{})).toBe(true)
		// Transpilers (swc, bun) re-print the literal above as `class {}`, so
		// also build one from a string, whose source text nothing can normalize:
		// its toString() is exactly 'class{}'.
		const spaceFreeClass = new Function('return class{}')()
		expect(String(spaceFreeClass)).toBe('class{}')
		expect(isClass(spaceFreeClass)).toBe(true)
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
