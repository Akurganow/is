import {
	isFunction,
	isPromise,
	isAsyncFunction,
} from '../src'

describe('isFunction', () => { tests('function', isFunction) })
describe('isAsyncFunction', () => { tests('asyncfunction', isAsyncFunction) })
describe('isPromise', () => { tests('promise', isPromise) })

function tests (truthy: string, fn: (value: unknown) => boolean) {
	test('function', () => {
		expect(fn(() => {})).toBe(truthy === 'function')
	})
	test('object', () => {
		expect(fn({})).toBe(truthy === 'object')
	})
	test('string', () => {
		expect(fn('')).toBe(truthy === 'string')
	})
	test('number', () => {
		expect(fn(0)).toBe(truthy === 'number')
	})
	test('boolean', () => {
		expect(fn(true)).toBe(truthy === 'boolean')
	})
	test('undefined', () => {
		expect(fn(undefined)).toBe(truthy === 'undefined')
	})
	test('null', () => {
		expect(fn(null)).toBe(truthy === 'null')
	})
	test('array', () => {
		expect(fn([])).toBe(truthy === 'array')
	})
	test('symbol', () => {
		expect(fn(Symbol())).toBe(truthy === 'symbol')
	})
	test('bigint', () => {
		expect(fn(1n)).toBe(truthy === 'bigint')
	})
	test('regexp', () => {
		expect(fn(/a/)).toBe(truthy === 'regexp')
	})
	test('date', () => {
		expect(fn(new Date())).toBe(truthy === 'date')
	})
	test('error', () => {
		expect(fn(new Error())).toBe(truthy === 'error')
	})
	test('map', () => {
		expect(fn(new Map())).toBe(truthy === 'map')
	})
	test('set', () => {
		expect(fn(new Set())).toBe(truthy === 'set')
	})
	test('weakmap', () => {
		expect(fn(new WeakMap())).toBe(truthy === 'weakmap')
	})
	test('weakset', () => {
		expect(fn(new WeakSet())).toBe(truthy === 'weakset')
	})
	test('int8array', () => {
		expect(fn(new Int8Array())).toBe(truthy === 'int8array')
	})
	test('uint8array', () => {
		expect(fn(new Uint8Array())).toBe(truthy === 'uint8array')
	})
	test('uint8clampedarray', () => {
		expect(fn(new Uint8ClampedArray())).toBe(truthy === 'uint8clampedarray')
	})
	test('int16array', () => {
		expect(fn(new Int16Array())).toBe(truthy === 'int16array')
	})
	test('uint16array', () => {
		expect(fn(new Uint16Array())).toBe(truthy === 'uint16array')
	})
	test('int32array', () => {
		expect(fn(new Int32Array())).toBe(truthy === 'int32array')
	})
	test('uint32array', () => {
		expect(fn(new Uint32Array())).toBe(truthy === 'uint32array')
	})
	test('float32array', () => {
		expect(fn(new Float32Array())).toBe(truthy === 'float32array')
	})
	test('float64array', () => {
		expect(fn(new Float64Array())).toBe(truthy === 'float64array')
	})
	test('bigint64array', () => {
		expect(fn(new BigInt64Array())).toBe(truthy === 'bigint64array')
	})
	test('biguint64array', () => {
		expect(fn(new BigUint64Array())).toBe(truthy === 'biguint64array')
	})
	test('arraybuffer', () => {
		expect(fn(new ArrayBuffer(2))).toBe(truthy === 'arraybuffer')
	})
	test('dataview', () => {
		expect(fn(new DataView(new ArrayBuffer(2)))).toBe(truthy === 'dataview')
	})
	test('promise', () => {
		expect(fn(Promise.resolve())).toBe(truthy === 'promise')
	})
	test('generator', () => {
		expect(fn(function * () {})).toBe(truthy === 'generator')
	})
	test('generatorfunction', () => {
		expect(fn(function * () {})).toBe(truthy === 'generatorfunction')
	})
	test('asyncfunction', () => {
		expect(fn(async () => {})).toBe(truthy === 'asyncfunction')
	})
}
