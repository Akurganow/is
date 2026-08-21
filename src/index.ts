// Import-then-export (instead of `export { default as X } from ...`) so tsc
// emits `get: function () { return x_1.default; }` getters that
// cjs-module-lexer can statically parse — this keeps every named export
// available to Node.js ESM consumers (`import { isString } from '@plq/is'`).
import detect from './utils/detect.js'
import getTag from './utils/get-tag.js'
import isArguments from './utils/is-arguments.js'
import isArray from './utils/is-array.js'
import isArrayOf from './utils/is-array-of.js'
import isArrayOfSame from './utils/is-array-of-same.js'
import isArraybuffer from './utils/is-arraybuffer.js'
import isAsyncFunction from './utils/is-async-function.js'
import isAsyncIterable from './utils/is-async-iterable.js'
import isBigint from './utils/is-bigint.js'
import isBigint64array from './utils/is-bigint64array.js'
import isBiguint64array from './utils/is-biguint64array.js'
import isBoolean from './utils/is-boolean.js'
import isClass from './utils/is-class.js'
import isDataView from './utils/is-data-view.js'
import isDate from './utils/is-date.js'
import isEmpty from './utils/is-empty.js'
import isEmptyArray from './utils/is-empty-array.js'
import isEmptyMap from './utils/is-empty-map.js'
import isEmptyObject from './utils/is-empty-object.js'
import isEmptySet from './utils/is-empty-set.js'
import isEmptyString from './utils/is-empty-string.js'
import isError from './utils/is-error.js'
import isFloat32array from './utils/is-float32array.js'
import isFloat64array from './utils/is-float64array.js'
import isFunction from './utils/is-function.js'
import isGeneratorFunction from './utils/is-generator-function.js'
import isInt8array from './utils/is-int8array.js'
import isInt16array from './utils/is-int16array.js'
import isInt32array from './utils/is-int32array.js'
import isIterable from './utils/is-iterable.js'
import isMap from './utils/is-map.js'
// biome-ignore lint/suspicious/noShadowRestrictedNames: isNaN is the published export name of ./utils/is-nan; the public API must not change
import isNaN from './utils/is-nan.js'
import isNull from './utils/is-null.js'
import isNumber from './utils/is-number.js'
import isObject from './utils/is-object.js'
import isObjectLike from './utils/is-object-like.js'
import isPlainObject from './utils/is-plain-object.js'
import isPrimitive from './utils/is-primitive.js'
import isPromise from './utils/is-promise.js'
import isPromiseLike from './utils/is-promise-like.js'
import isRegexp from './utils/is-regexp.js'
import isSet from './utils/is-set.js'
import isString from './utils/is-string.js'
import isSymbol from './utils/is-symbol.js'
import isUint8array from './utils/is-uint8array.js'
import isUint8clampedarray from './utils/is-uint8clampedarray.js'
import isUint16array from './utils/is-uint16array.js'
import isUint32array from './utils/is-uint32array.js'
import isUndefined from './utils/is-undefined.js'
import isWeakmap from './utils/is-weakmap.js'
import isWeakset from './utils/is-weakset.js'

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
