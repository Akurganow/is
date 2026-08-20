// Import-then-export (instead of `export { default as X } from ...`) so tsc
// emits `get: function () { return x_1.default; }` getters that
// cjs-module-lexer can statically parse — this keeps every named export
// available to Node.js ESM consumers (`import { isString } from '@plq/is'`).
import detect from './utils/detect'
import getTag from './utils/get-tag'
import isArguments from './utils/is-arguments'
import isArray from './utils/is-array'
import isArrayOf from './utils/is-array-of'
import isArrayOfSame from './utils/is-array-of-same'
import isArraybuffer from './utils/is-arraybuffer'
import isAsyncFunction from './utils/is-async-function'
import isAsyncIterable from './utils/is-async-iterable'
import isBigint from './utils/is-bigint'
import isBigint64array from './utils/is-bigint64array'
import isBiguint64array from './utils/is-biguint64array'
import isBoolean from './utils/is-boolean'
import isClass from './utils/is-class'
import isDataView from './utils/is-data-view'
import isDate from './utils/is-date'
import isEmpty from './utils/is-empty'
import isEmptyArray from './utils/is-empty-array'
import isEmptyMap from './utils/is-empty-map'
import isEmptyObject from './utils/is-empty-object'
import isEmptySet from './utils/is-empty-set'
import isEmptyString from './utils/is-empty-string'
import isError from './utils/is-error'
import isFloat32array from './utils/is-float32array'
import isFloat64array from './utils/is-float64array'
import isFunction from './utils/is-function'
import isGeneratorFunction from './utils/is-generator-function'
import isInt8array from './utils/is-int8array'
import isInt16array from './utils/is-int16array'
import isInt32array from './utils/is-int32array'
import isIterable from './utils/is-iterable'
import isMap from './utils/is-map'
// biome-ignore lint/suspicious/noShadowRestrictedNames: isNaN is the published export name of ./utils/is-nan; the public API must not change
import isNaN from './utils/is-nan'
import isNull from './utils/is-null'
import isNumber from './utils/is-number'
import isObject from './utils/is-object'
import isObjectLike from './utils/is-object-like'
import isPlainObject from './utils/is-plain-object'
import isPrimitive from './utils/is-primitive'
import isPromise from './utils/is-promise'
import isPromiseLike from './utils/is-promise-like'
import isRegexp from './utils/is-regexp'
import isSet from './utils/is-set'
import isString from './utils/is-string'
import isSymbol from './utils/is-symbol'
import isUint8array from './utils/is-uint8array'
import isUint8clampedarray from './utils/is-uint8clampedarray'
import isUint16array from './utils/is-uint16array'
import isUint32array from './utils/is-uint32array'
import isUndefined from './utils/is-undefined'
import isWeakmap from './utils/is-weakmap'
import isWeakset from './utils/is-weakset'

export {
	detect,
	getTag,
	isArguments,
	isArray,
	isArrayOf,
	isArrayOfSame,
	isArraybuffer,
	isAsyncFunction,
	isAsyncIterable,
	isBigint,
	isBigint64array,
	isBiguint64array,
	isBoolean,
	isClass,
	isDataView,
	isDate,
	isEmpty,
	isEmptyArray,
	isEmptyMap,
	isEmptyObject,
	isEmptySet,
	isEmptyString,
	isError,
	isFloat32array,
	isFloat64array,
	isFunction,
	isGeneratorFunction,
	isInt8array,
	isInt16array,
	isInt32array,
	isIterable,
	isMap,
	isNaN,
	isNull,
	isNumber,
	isObject,
	isObjectLike,
	isPlainObject,
	isPrimitive,
	isPromise,
	isPromiseLike,
	isRegexp,
	isSet,
	isString,
	isSymbol,
	isUint8array,
	isUint8clampedarray,
	isUint16array,
	isUint32array,
	isUndefined,
	isWeakmap,
	isWeakset,
}
