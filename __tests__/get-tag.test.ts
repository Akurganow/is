import { getTag } from '../src'

describe('getTag', () => {
	test('returns the correct tag for an array', () => {
		expect(getTag([])).toBe('[object Array]')
	})
	test('returns the correct tag for a boolean', () => {
		expect(getTag(true)).toBe('[object Boolean]')
	})
	test('returns the correct tag for a date', () => {
		expect(getTag(new Date())).toBe('[object Date]')
	})
	test('returns the correct tag for an error', () => {
		expect(getTag(new Error())).toBe('[object Error]')
	})
	test('returns the correct tag for a function', () => {
		expect(getTag(function() {})).toBe('[object Function]')
	})
	test('returns the correct tag for a map', () => {
		expect(getTag(new Map())).toBe('[object Map]')
	})
	test('returns the correct tag for a null', () => {
		expect(getTag(null)).toBe('[object Null]')
	})
	test('returns the correct tag for a number', () => {
		expect(getTag(1)).toBe('[object Number]')
	})
	test('returns the correct tag for an object', () => {
		expect(getTag({})).toBe('[object Object]')
	})
	test('returns the correct tag for a promise', () => {
		expect(getTag(Promise.resolve())).toBe('[object Promise]')
	})
	test('returns the correct tag for a regexp', () => {
		expect(getTag(/a/)).toBe('[object RegExp]')
	})
	test('returns the correct tag for a set', () => {
		expect(getTag(new Set())).toBe('[object Set]')
	})
	test('returns the correct tag for a string', () => {
		expect(getTag('a')).toBe('[object String]')
	})
	test('returns the correct tag for a symbol', () => {
		expect(getTag(Symbol())).toBe('[object Symbol]')
	})
	test('returns the correct tag for an undefined', () => {
		expect(getTag(undefined)).toBe('[object Undefined]')
	})
	test('returns the correct tag for a weakmap', () => {
		expect(getTag(new WeakMap())).toBe('[object WeakMap]')
	})
	test('returns the correct tag for a weakset', () => {
		expect(getTag(new WeakSet())).toBe('[object WeakSet]')
	})
})
