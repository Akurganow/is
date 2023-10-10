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
			expect(isIterable((function* () {
			})())).toBe(true)
		})
		test('async generator', () => {
			expect(isIterable((async function* () {
			})())).toBe(false)
		})
		test('async iterator function', () => {
			expect(isIterable(async function* () {
			})).toBe(false)
		})
		test('async iterable function', () => {
			expect(isIterable(async function* () {
			})).toBe(false)
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
			expect(isIterable(() => {
			})).toBe(false)
		})
		test('class', () => {
			expect(isIterable(class {
			})).toBe(false)
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
			expect(isAsyncIterable(function* () {
			})).toBe(false)
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
	})
})
