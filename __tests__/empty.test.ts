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
		expect(isEmpty(new Set())).toBe(true)
		expect(isEmpty(new Map())).toBe(true)
		expect(isEmpty(0)).toBe(false)
		expect(isEmpty('0')).toBe(false)
		expect(isEmpty({ a: 0 })).toBe(false)
		expect(isEmpty([0])).toBe(false)
		expect(isEmpty(new Set([1]))).toBe(false)
		expect(isEmpty(new Map([[1, 1]]))).toBe(false)
	})
	test('isEmpty quirks', () => {
		expect(isEmpty(NaN)).toBe(true)
		expect(isEmpty('  ')).toBe(true)
		expect(isEmpty(0)).toBe(false)
		expect(isEmpty(false)).toBe(false)
		expect(isEmpty(new WeakMap())).toBe(false)
		expect(isEmpty(new WeakSet())).toBe(false)
	})
	test('isEmptyString', () => {
		expect(isEmptyString('')).toBe(true)
		expect(isEmptyString(' ')).toBe(true)
		expect(isEmptyString('0')).toBe(false)
		expect(() => isEmptyString(123)).not.toThrow()
		expect(isEmptyString(123)).toBe(false)
		expect(isEmptyString(null)).toBe(false)
		expect(isEmptyString(undefined)).toBe(false)
	})
	test('isEmptyArray', () => {
		expect(isEmptyArray([])).toBe(true)
		expect(isEmptyArray([0])).toBe(false)
		expect(isEmptyArray('abc')).toBe(false)
		expect(isEmptyArray({})).toBe(false)
		expect(isEmptyArray(null)).toBe(false)
	})
	test('isEmptyObject', () => {
		expect(isEmptyObject({})).toBe(true)
		expect(isEmptyObject({ a: 0 })).toBe(false)
		expect(isEmptyObject([])).toBe(false)
		expect(isEmptyObject('')).toBe(false)
		expect(isEmptyObject(null)).toBe(false)
		expect(isEmptyObject(new Map())).toBe(false)
		expect(isEmptyObject(new Set())).toBe(false)
	})
	test('isEmptyObject and isEmpty reject a Map subclass spoofed as Object', () => {
		class SpoofedMap extends Map<string, number> {
			get [Symbol.toStringTag]() {
				return 'Object'
			}
		}
		const nonEmpty = new SpoofedMap([['a', 1]])
		expect(isEmptyObject(nonEmpty)).toBe(false)
		expect(isEmpty(nonEmpty)).toBe(false)

		// an empty one is still a Map, not an empty plain object
		expect(isEmptyObject(new SpoofedMap())).toBe(false)
	})
	test('isEmptyObject and isEmpty reject a Set subclass spoofed as Object', () => {
		class SpoofedSet extends Set<number> {
			get [Symbol.toStringTag]() {
				return 'Object'
			}
		}
		const nonEmpty = new SpoofedSet([1])
		expect(isEmptyObject(nonEmpty)).toBe(false)
		expect(isEmpty(nonEmpty)).toBe(false)
		expect(isEmptyObject(new SpoofedSet())).toBe(false)
	})
	test('isEmptySet', () => {
		expect(isEmptySet(new Set())).toBe(true)
		expect(isEmptySet(new Set([0]))).toBe(false)
	})
	test('isEmptyMap', () => {
		expect(isEmptyMap(new Map())).toBe(true)
		expect(isEmptyMap(new Map([['a', 0]]))).toBe(false)
	})
})
