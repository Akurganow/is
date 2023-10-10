import { isArrayOf } from '../src'

describe('isArrayOf', () => {
	test('returns false for an empty array', () => {
		expect(isArrayOf([], 'array')).toBe(false)
	})
	test('returns true for an array of strings', () => {
		expect(isArrayOf(['a', 'b', 'c'], 'string')).toBe(true)
	})
	test('returns true for an array of numbers', () => {
		expect(isArrayOf([1, 2, 3], 'number')).toBe(true)
	})
	test('returns true for an array of booleans', () => {
		expect(isArrayOf([true, false, true], 'boolean')).toBe(true)
	})
	test('returns true for an array of functions', () => {
		expect(isArrayOf([() => {}, () => {}], 'function')).toBe(true)
	})
	test('returns true for an array of objects', () => {
		expect(isArrayOf([{ a: 1 }, { b: 2 }], 'object')).toBe(true)
	})
	test('returns true for an array of arrays', () => {
		expect(isArrayOf([[1], [2]], 'array')).toBe(true)
	})
	test('returns true for an array of symbols', () => {
		expect(isArrayOf([Symbol(), Symbol()], 'symbol')).toBe(true)
	})
	test('returns true for an array of bigints', () => {
		expect(isArrayOf([BigInt(1), BigInt(2)], 'bigint')).toBe(true)
	})
	test('returns true for an array of regexps', () => {
		expect(isArrayOf([/a/, /b/], 'regexp')).toBe(true)
	})
	test('returns true for an array of dates', () => {
		expect(isArrayOf([new Date(), new Date()], 'date')).toBe(true)
	})
	test('returns true for an array of errors', () => {
		expect(isArrayOf([new Error(), new Error()], 'error')).toBe(true)
	})
	test('returns true for an array of promises', () => {
		expect(isArrayOf([Promise.resolve(), Promise.resolve()], 'promise')).toBe(true)
	})
	test('returns true for an array of nulls', () => {
		expect(isArrayOf([null, null], 'null')).toBe(true)
	})
	test('returns true for an array of undefineds', () => {
		expect(isArrayOf([undefined, undefined], 'undefined')).toBe(true)
	})
})
