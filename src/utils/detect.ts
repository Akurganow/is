import isString from './is-string'
import isNumber from './is-number'
import isBoolean from './is-boolean'
import isFunction from './is-function'
import isAsyncFunction from './is-async-function'
import isPromise from './is-promise'
import isObject from './is-object'
import isUndefined from './is-undefined'
import isNull from './is-null'
import isArray from './is-array'
import isSymbol from './is-symbol'
import isBigint from './is-bigint'
import isRegexp from './is-regexp'
import isDate from './is-date'
import isError from './is-error'
import isMap from './is-map'
import isSet from './is-set'
import isWeakmap from './is-weakmap'
import isWeakset from './is-weakset'
import isInt8array from './is-int8array'
import isUint8array from './is-uint8array'
import isUint8clampedarray from './is-uint8clampedarray'
import isInt16array from './is-int16array'
import isUint16array from './is-uint16array'
import isInt32array from './is-int32array'
import isUint32array from './is-uint32array'
import isFloat32array from './is-float32array'
import isFloat64array from './is-float64array'
import isBigint64array from './is-bigint64array'
import isBiguint64array from './is-biguint64array'
import isArraybuffer from './is-arraybuffer'
import isDataView from './is-data-view'
import isGeneratorFunction from './is-generator-function'
import isArguments from './is-arguments'
import isClass from './is-class'

export const types = new Map([
	['string', isString],
	['number', isNumber],
	['function', isFunction],
	['object', isObject],
	['boolean', isBoolean],
	['undefined', isUndefined],
	['null', isNull],
	['array', isArray],
	['symbol', isSymbol],
	['bigint', isBigint],
	['regexp', isRegexp],
	['date', isDate],
	['error', isError],
	['map', isMap],
	['set', isSet],
	['weakmap', isWeakmap],
	['weakset', isWeakset],
	['int8array', isInt8array],
	['uint8array', isUint8array],
	['uint8clampedarray', isUint8clampedarray],
	['int16array', isInt16array],
	['uint16array', isUint16array],
	['int32array', isInt32array],
	['uint32array', isUint32array],
	['float32array', isFloat32array],
	['float64array', isFloat64array],
	['bigint64array', isBigint64array],
	['biguint64array', isBiguint64array],
	['arraybuffer', isArraybuffer],
	['dataView', isDataView],
	['promise', isPromise],
	['asyncFunction', isAsyncFunction],
	['generatorFunction', isGeneratorFunction],
	['arguments', isArguments],
	['class', isClass],
])

/**
 * Detects the type of the given value.
 *
 * @param {unknown} value - The value to check.
 * @returns {string | undefined} The type of the value, or undefined if the type could not be determined.
 */
export default function detect(value: unknown): string | undefined {
	for (const [type, check] of types) {
		if (check(value)) {
			return type
		}
	}

	return undefined
}
