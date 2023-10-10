import { isObjectLike } from '../src'

describe('isObjectLike', () => {
	test('object', () => {
		expect(isObjectLike({})).toBe(true)
		expect(isObjectLike({ a: 0 })).toBe(true)
		expect(isObjectLike(new Object())).toBe(true)
	})
	test('array', () => {
		expect(isObjectLike([])).toBe(true)
		expect(isObjectLike([0])).toBe(true)
		expect(isObjectLike([])).toBe(true)
	})
	test('set', () => {
		expect(isObjectLike(new Set())).toBe(true)
		expect(isObjectLike(new Set([0]))).toBe(true)
	})
	test('map', () => {
		expect(isObjectLike(new Map())).toBe(true)
		expect(isObjectLike(new Map([['a', 0]]))).toBe(true)
	})
	test('function', () => {
		expect(isObjectLike(() => {})).toBe(false)
		expect(isObjectLike(function() {})).toBe(false)
		expect(isObjectLike(async () => {})).toBe(false)
		expect(isObjectLike(function*() {})).toBe(false)
	})
	test('class', () => {
		expect(isObjectLike(class {})).toBe(false)
	})
})
