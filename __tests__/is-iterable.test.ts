import { isIterable, isAsyncIterable } from '../src'

describe('iterable', () => {
	describe('isIterable', () => {
		test('array', () => {
			expect(isIterable([])).toBe(true)
		})
		test('generator function', () => {
			expect(isIterable(function* () {})).toBe(false)
		})
		test('generator', () => {
			expect(isIterable((function* () {})())).toBe(true)
		})
		test('async generator', () => {
			expect(isIterable((async function* () {})())).toBe(false)
		})
		test('async iterator function', () => {
			expect(isIterable(async function* () {})).toBe(false)
		})
		test('object with only Symbol.asyncIterator is not sync-iterable', () => {
			expect(isIterable({ async *[Symbol.asyncIterator]() {} })).toBe(false)
		})
		test('object', () => {
			expect(isIterable({})).toBe(false)
		})
		test('null', () => {
			expect(isIterable(null)).toBe(false)
		})
		test('undefined', () => {
			expect(isIterable(undefined)).toBe(false)
		})
		test('function', () => {
			expect(isIterable(() => {})).toBe(false)
		})
		test('class', () => {
			expect(isIterable(class {})).toBe(false)
		})
		test('string', () => {
			expect(isIterable('abc')).toBe(true)
			expect(isIterable('')).toBe(true)
		})
		test('object with a generator method as Symbol.iterator', () => {
			expect(isIterable({ *[Symbol.iterator]() {} })).toBe(true)
		})
	})
	describe('isAsyncIterable', () => {
		test('array', () => {
			expect(isAsyncIterable([])).toBe(false)
		})
		test('function', () => {
			expect(isAsyncIterable(() => {})).toBe(false)
		})
		test('class', () => {
			expect(isAsyncIterable(class {})).toBe(false)
		})
		test('promise', () => {
			expect(isAsyncIterable(Promise.resolve())).toBe(false)
		})
		test('generator function', () => {
			expect(isAsyncIterable(function* () {})).toBe(false)
		})
		test('generator', () => {
			expect(isAsyncIterable((function* () {})())).toBe(false)
		})
		test('async generator', () => {
			expect(isAsyncIterable((async function* () {})())).toBe(true)
		})
		test('async iterator function', () => {
			expect(isAsyncIterable(async function* () {})).toBe(false)
		})
		test('string', () => {
			expect(isAsyncIterable('abc')).toBe(false)
		})
		test('object with an async generator method as Symbol.asyncIterator', () => {
			expect(isAsyncIterable({ async *[Symbol.asyncIterator]() {} })).toBe(true)
		})
		test('undefined', () => {
			expect(() => isAsyncIterable(undefined)).not.toThrow()
			expect(isAsyncIterable(undefined)).toBe(false)
		})
		test('null', () => {
			expect(() => isAsyncIterable(null)).not.toThrow()
			expect(isAsyncIterable(null)).toBe(false)
		})
	})
})
