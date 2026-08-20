import vm from 'node:vm'
import {
	isFunction,
	isPromise,
	isAsyncFunction,
	isObject,
	isNumber,
	isString,
	isBoolean,
	isUndefined,
	isNull,
	isArray,
	isSymbol,
	isBigint,
	isRegexp,
	isDate,
	isError,
	isWeakmap,
	isWeakset,
	isInt8array,
	isUint8array,
	isUint8clampedarray,
	isInt16array,
	isUint16array,
	isInt32array,
	isUint32array,
	isFloat32array,
	isFloat64array,
	isBigint64array,
	isBiguint64array,
	isArraybuffer,
	isDataView,
	isGeneratorFunction,
	isSet,
	isMap,
} from '../src'

describe('isSet', () => {
	tests('set', isSet)
})
describe('isMap', () => {
	tests('map', isMap)
})
describe('isArray', () => {
	tests('array', isArray)
})
describe('isSymbol', () => {
	tests('symbol', isSymbol)
})
describe('isBigint', () => {
	tests('bigint', isBigint)
})
describe('isRegexp', () => {
	tests('regexp', isRegexp)
})
describe('isDate', () => {
	tests('date', isDate)
})
describe('isError', () => {
	tests('error', isError)
})
describe('isFunction', () => {
	tests('function', isFunction)
})
describe('isAsyncFunction', () => {
	tests('asyncFunction', isAsyncFunction)
})
describe('isPromise', () => {
	tests('promise', isPromise)
})
describe('isObject', () => {
	tests('object', isObject)
})
describe('isNumber', () => {
	tests('number', isNumber)
})
describe('isString', () => {
	tests('string', isString)
})
describe('isBoolean', () => {
	tests('boolean', isBoolean)
})
describe('isUndefined', () => {
	tests('undefined', isUndefined)
})
describe('isNull', () => {
	tests('null', isNull)
})
describe('isInt8array', () => {
	tests('int8array', isInt8array)
})
describe('isUint8array', () => {
	tests('uint8array', isUint8array)
})
describe('isUint8clampedarray', () => {
	tests('uint8clampedarray', isUint8clampedarray)
})
describe('isInt16array', () => {
	tests('int16array', isInt16array)
})
describe('isUint16array', () => {
	tests('uint16array', isUint16array)
})
describe('isInt32array', () => {
	tests('int32array', isInt32array)
})
describe('isUint32array', () => {
	tests('uint32array', isUint32array)
})
describe('isFloat32array', () => {
	tests('float32array', isFloat32array)
})
describe('isFloat64array', () => {
	tests('float64array', isFloat64array)
})
describe('isBigint64array', () => {
	tests('bigint64array', isBigint64array)
})
describe('isBiguint64array', () => {
	tests('biguint64array', isBiguint64array)
})
describe('isArraybuffer', () => {
	tests('arraybuffer', isArraybuffer)
})
describe('isDataView', () => {
	tests('dataview', isDataView)
})
describe('isGeneratorFunction', () => {
	tests('generatorFunction', isGeneratorFunction)
})
describe('isWeakmap', () => {
	tests('weakmap', isWeakmap)
})
describe('isWeakset', () => {
	tests('weakset', isWeakset)
})

describe('cross-realm', () => {
	test('isUint8array returns true for a Uint8Array from another realm', () => {
		expect(isUint8array(vm.runInNewContext('new Uint8Array(2)'))).toBe(true)
	})
})

describe('spoofed Symbol.toStringTag', () => {
	test('isGeneratorFunction returns false for a spoofed object', () => {
		expect(
			isGeneratorFunction({ [Symbol.toStringTag]: 'GeneratorFunction' }),
		).toBe(false)
	})
	test('isAsyncFunction returns false for a spoofed object', () => {
		expect(isAsyncFunction({ [Symbol.toStringTag]: 'AsyncFunction' })).toBe(
			false,
		)
	})
	test('isBigint64array returns false for a spoofed object', () => {
		expect(isBigint64array({ [Symbol.toStringTag]: 'BigInt64Array' })).toBe(
			false,
		)
	})
	test('isBiguint64array returns false for a spoofed object', () => {
		expect(isBiguint64array({ [Symbol.toStringTag]: 'BigUint64Array' })).toBe(
			false,
		)
	})
	test('isUint8array returns false for a spoofed object', () => {
		expect(isUint8array({ [Symbol.toStringTag]: 'Uint8Array' })).toBe(false)
	})
	test('isInt32array returns false for a spoofed object', () => {
		expect(isInt32array({ [Symbol.toStringTag]: 'Int32Array' })).toBe(false)
	})
})

describe('async generator function', () => {
	test('satisfies isGeneratorFunction', () => {
		expect(isGeneratorFunction(async function* () {})).toBe(true)
	})
	test('satisfies isAsyncFunction', () => {
		expect(isAsyncFunction(async function* () {})).toBe(true)
	})
})

function tests(truthy: string, fn: (value: unknown) => boolean) {
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
	test('generatorFunction', () => {
		expect(fn(function* () {})).toBe(truthy === 'generatorFunction')
	})
	test('asyncFunction', () => {
		expect(fn(async () => {})).toBe(truthy === 'asyncFunction')
	})
}
