import {
	isEmpty,
	isEmptyString,
	isEmptyArray,
	isEmptyObject,
	isEmptySet,
	isEmptyMap,
} from '../src'

describe('empty', () => {
	test('isEmpty', () => {
		expect(isEmpty(undefined)).toBe(true)
		expect(isEmpty(null)).toBe(true)
		expect(isEmpty(NaN)).toBe(true)
		expect(isEmpty('')).toBe(true)
		expect(isEmpty({})).toBe(true)
		expect(isEmpty([])).toBe(true)
		expect(isEmpty(0)).toBe(false)
		expect(isEmpty('0')).toBe(false)
		expect(isEmpty({ a: 0 })).toBe(false)
		expect(isEmpty([0])).toBe(false)
	})
	test('isEmptyString', () => {
		expect(isEmptyString('')).toBe(true)
		expect(isEmptyString(' ')).toBe(true)
		expect(isEmptyString('0')).toBe(false)
	})
	test('isEmptyArray', () => {
		expect(isEmptyArray([])).toBe(true)
		expect(isEmptyArray([0])).toBe(false)
	})
	test('isEmptyObject', () => {
		expect(isEmptyObject({})).toBe(true)
		expect(isEmptyObject({ a: 0 })).toBe(false)
	})
	test('isEmtySet', () => {
		expect(isEmptySet(new Set())).toBe(true)
		expect(isEmptySet(new Set([0]))).toBe(false)
	})
	test('isEmptyMap', () => {
		expect(isEmptyMap(new Map())).toBe(true)
		expect(isEmptyMap(new Map([['a', 0]]))).toBe(false)
	})
})
