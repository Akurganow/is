import { isPromiseLike } from '../src'

describe('isPromiseLike', () => {
	test('Promise', () => {
		expect(isPromiseLike(Promise.resolve())).toBe(true)
	})
	test('Async function', () => {
		expect(isPromiseLike(async () => {})).toBe(false)
	})
	test('not PromiseLike', () => {
		expect(isPromiseLike(() => {})).toBe(false)
	})
})
