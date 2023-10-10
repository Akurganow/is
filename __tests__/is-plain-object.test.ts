import { isPlainObject } from '../src'

describe('isPlainObject', () => {
	test('returns true for a plain object', () => {
		const object = {
			name: 'John Doe',
			age: 30,
		}

		expect(isPlainObject(object)).toBe(true)
	})
	test('returns true for an object with no prototype', () => {
		const object = Object.create(null)

		expect(isPlainObject(object)).toBe(true)
	})
	test('returns false for an object that is not a plain object', () => {
		const object = new Date()

		expect(isPlainObject(object)).toBe(false)
	})
	test('returns false for an object that has a prototype defined outside of Object', () => {
		const object = Object.create({
			name: 'John Doe',
			age: 30,
		})

		expect(isPlainObject(object)).toBe(false)
	})
	test('returns false for an array', () => {
		const array = [1, 2, 3]

		expect(isPlainObject(array)).toBe(false)
	})
	test('returns false for a function', () => {
		const functionObject = function() {}

		expect(isPlainObject(functionObject)).toBe(false)
	})
})
