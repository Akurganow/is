import { isArrayOfSame } from '../src'

// jest tests for isArrayOfSame
describe('isArrayOfSame', () => {
	test('returns false for an empty array', () => {
		expect(isArrayOfSame([])).toBe(false)
	})
	test('returns true for an array of strings', () => {
		expect(isArrayOfSame(['a', 'b', 'c'])).toBe(true)
	})
	test('returns true for an array of numbers', () => {
		expect(isArrayOfSame([1, 2, 3])).toBe(true)
	})
	test('returns true for an array of booleans', () => {
		expect(isArrayOfSame([true, false, true])).toBe(true)
	})
	test('returns true for an array of functions', () => {
		expect(isArrayOfSame([() => {
		}, () => {
		}])).toBe(true)
	})
	test('returns true for an array of objects', () => {
		expect(isArrayOfSame([{ a: 1 }, { b: 2 }])).toBe(true)
	})
	test('returns true for an array of arrays', () => {
		expect(isArrayOfSame([[1], [2]])).toBe(true)
	})
	test('returns true for an array of symbols', () => {
		expect(isArrayOfSame([Symbol(), Symbol()])).toBe(true)
	})
	test('returns true for an array of bigints', () => {
		expect(isArrayOfSame([BigInt(1), BigInt(2)])).toBe(true)
	})
	test('returns true for an array of regexps', () => {
		expect(isArrayOfSame([/a/, /b/])).toBe(true)
	})
	test('returns true for an array of dates', () => {
		expect(isArrayOfSame([new Date(), new Date()])).toBe(true)
	})
	test('returns true for an array of errors', () => {
		expect(isArrayOfSame([new Error(), new Error()])).toBe(true)
	})
	test('returns true for an array of promises', () => {
		expect(isArrayOfSame([Promise.resolve(), Promise.resolve()])).toBe(true)
	})
	test('returns true for an array of nulls', () => {
		expect(isArrayOfSame([null, null])).toBe(true)
	})
	test('returns true for an array of undefineds', () => {
		expect(isArrayOfSame([undefined, undefined])).toBe(true)
	})
	test('returns false for an array of mixed types', () => {
		expect(isArrayOfSame([1, 'a', true])).toBe(false)
	})
})
