import { detect } from '../src'

describe('detect', () => {
	describe('string',() => tests('string'))
	describe('number',() => tests('number'))
	describe('function',() => tests('function'))
	describe('generatorFunction',() => tests('generatorfunction'))
	describe('asyncFunction',() => tests('asyncFunction'))
	describe('object',() => tests('object'))
	describe('boolean',() => tests('boolean'))
	describe('undefined',() => tests('undefined'))
	describe('null',() => tests('null'))
	describe('array',() => tests('array'))
	describe('symbol',() => tests('symbol'))
	describe('bigint',() => tests('bigint'))
	describe('regexp',() => tests('regexp'))
	describe('date',() => tests('date'))
	describe('error',() => tests('error'))
	describe('map',() => tests('map'))
	describe('set',() => tests('set'))
	describe('weakmap',() => tests('weakmap'))
	describe('weakset',() => tests('weakset'))
	describe('int8array',() => tests('int8array'))
	describe('uint8array',() => tests('uint8array'))
	describe('uint8clampedarray',() => tests('uint8clampedarray'))
	describe('int16array',() => tests('int16array'))
	describe('uint16array',() => tests('uint16array'))
	describe('int32array',() => tests('int32array'))
	describe('uint32array',() => tests('uint32array'))
	describe('float32array',() => tests('float32array'))
	describe('float64array',() => tests('float64array'))
	describe('bigint64array',() => tests('bigint64array'))
	describe('biguint64array',() => tests('biguint64array'))
	describe('arraybuffer',() => tests('arraybuffer'))
	describe('dataView',() => tests('dataView'))
	describe('promise',() => tests('promise'))
})

function tests (truthy: string) {
	test('function', () => {
		if (truthy === 'function') {
			expect(detect(() => {
			})).toBe(truthy)
		} else {
			expect(detect(() => {
			})).not.toBe(truthy)
		}
	})
	test('object', () => {
		if (truthy === 'object') {
			expect(detect({})).toBe(truthy)
		} else {
			expect(detect({})).not.toBe(truthy)
		}
	})
	test('string', () => {
		if (truthy === 'string') {
			expect(detect('')).toBe(truthy)
		} else {
			expect(detect('')).not.toBe(truthy)
		}
	})
	test('number', () => {
		if (truthy === 'number') {
			expect(detect(0)).toBe(truthy)
		} else {
			expect(detect(0)).not.toBe(truthy)
		}
	})
	test('boolean', () => {
		if (truthy === 'boolean') {
			expect(detect(true)).toBe(truthy)
		} else {
			expect(detect(true)).not.toBe(truthy)
		}
	})
	test('undefined', () => {
		if (truthy === 'undefined') {
			expect(detect(undefined)).toBe(truthy)
		} else {
			expect(detect(undefined)).not.toBe(truthy)
		}
	})
	test('null', () => {
		if (truthy === 'null') {
			expect(detect(null)).toBe(truthy)
		} else {
			expect(detect(null)).not.toBe(truthy)
		}
	})
	test('array', () => {
		if (truthy === 'array') {
			expect(detect([])).toBe(truthy)
		} else {
			expect(detect([])).not.toBe(truthy)
		}
	})
	test('symbol', () => {
		if (truthy === 'symbol') {
			expect(detect(Symbol())).toBe(truthy)
		} else {
			expect(detect(Symbol())).not.toBe(truthy)
		}
	})
	test('bigint', () => {
		if (truthy === 'bigint') {
			expect(detect(1n)).toBe(truthy)
		} else {
			expect(detect(1n)).not.toBe(truthy)
		}
	})
	test('regexp', () => {
		if (truthy === 'regexp') {
			expect(detect(/a/)).toBe(truthy)
		} else {
			expect(detect(/a/)).not.toBe(truthy)
		}
	})
	test('date', () => {
		if (truthy === 'date') {
			expect(detect(new Date())).toBe(truthy)
		} else {
			expect(detect(new Date())).not.toBe(truthy)
		}
	})
	test('error', () => {
		if (truthy === 'error') {
			expect(detect(new Error())).toBe(truthy)
		} else {
			expect(detect(new Error())).not.toBe(truthy)
		}
	})
	test('map', () => {
		if (truthy === 'map') {
			expect(detect(new Map())).toBe(truthy)
		} else {
			expect(detect(new Map())).not.toBe(truthy)
		}
	})
	test('set', () => {
		if (truthy === 'set') {
			expect(detect(new Set())).toBe(truthy)
		} else {
			expect(detect(new Set())).not.toBe(truthy)
		}
	})
	test('weakmap', () => {
		if (truthy === 'weakmap') {
			expect(detect(new WeakMap())).toBe(truthy)
		} else {
			expect(detect(new WeakMap())).not.toBe(truthy)
		}
	})
	test('weakset', () => {
		if (truthy === 'weakset') {
			expect(detect(new WeakSet())).toBe(truthy)
		} else {
			expect(detect(new WeakSet())).not.toBe(truthy)
		}
	})
	test('int8array', () => {
		if (truthy === 'int8array') {
			expect(detect(new Int8Array())).toBe(truthy)
		} else {
			expect(detect(new Int8Array())).not.toBe(truthy)
		}
	})
	test('uint8array', () => {
		if (truthy === 'uint8array') {
			expect(detect(new Uint8Array())).toBe(truthy)
		} else {
			expect(detect(new Uint8Array())).not.toBe(truthy)
		}
	})
	test('uint8clampedarray', () => {
		if (truthy === 'uint8clampedarray') {
			expect(detect(new Uint8ClampedArray())).toBe(truthy)
		} else {
			expect(detect(new Uint8ClampedArray())).not.toBe(truthy)
		}
	})
	test('int16array', () => {
		if (truthy === 'int16array') {
			expect(detect(new Int16Array())).toBe(truthy)
		} else {
			expect(detect(new Int16Array())).not.toBe(truthy)
		}
	})
	test('uint16array', () => {
		if (truthy === 'uint16array') {
			expect(detect(new Uint16Array())).toBe(truthy)
		} else {
			expect(detect(new Uint16Array())).not.toBe(truthy)
		}
	})
	test('int32array', () => {
		if (truthy === 'int32array') {
			expect(detect(new Int32Array())).toBe(truthy)
		} else {
			expect(detect(new Int32Array())).not.toBe(truthy)
		}
	})
	test('uint32array', () => {
		if (truthy === 'uint32array') {
			expect(detect(new Uint32Array())).toBe(truthy)
		} else {
			expect(detect(new Uint32Array())).not.toBe(truthy)
		}
	})
	test('float32array', () => {
		if (truthy === 'float32array') {
			expect(detect(new Float32Array())).toBe(truthy)
		} else {
			expect(detect(new Float32Array())).not.toBe(truthy)
		}
	})
	test('float64array', () => {
		if (truthy === 'float64array') {
			expect(detect(new Float64Array())).toBe(truthy)
		} else {
			expect(detect(new Float64Array())).not.toBe(truthy)
		}
	})
	test('bigint64array', () => {
		if (truthy === 'bigint64array') {
			expect(detect(new BigInt64Array())).toBe(truthy)
		} else {
			expect(detect(new BigInt64Array())).not.toBe(truthy)
		}
	})
	test('biguint64array', () => {
		if (truthy === 'biguint64array') {
			expect(detect(new BigUint64Array())).toBe(truthy)
		} else {
			expect(detect(new BigUint64Array())).not.toBe(truthy)
		}
	})
	test('arraybuffer', () => {
		if (truthy === 'arraybuffer') {
			expect(detect(new ArrayBuffer(2))).toBe(truthy)
		} else {
			expect(detect(new ArrayBuffer(2))).not.toBe(truthy)
		}
	})
	test('dataView', () => {
		if (truthy === 'dataview') {
			expect(detect(new DataView(new ArrayBuffer(2)))).toBe(truthy)
		} else {
			expect(detect(new DataView(new ArrayBuffer(2)))).not.toBe(truthy)
		}
	})
	test('promise', () => {
		if (truthy === 'promise') {
			expect(detect(Promise.resolve())).toBe(truthy)
		} else {
			expect(detect(Promise.resolve())).not.toBe(truthy)
		}
	})
	test('generatorFunction', () => {
		if (truthy === 'generatorfunction') {
			expect(detect(function* () {
			})).toBe(truthy)
		} else {
			expect(detect(function* () {
			})).not.toBe(truthy)
		}
	})
	test('asyncFunction', () => {
		if (truthy === 'asyncfunction') {
			expect(detect(async () => {
			})).toBe(truthy)
		} else {
			expect(detect(async () => {
			})).not.toBe(truthy)
		}
	})
}
