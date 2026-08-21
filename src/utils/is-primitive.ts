import isString from './is-string.js'
import isNumber from './is-number.js'
import isBigint from './is-bigint.js'
import isBoolean from './is-boolean.js'
import isSymbol from './is-symbol.js'
import isUndefined from './is-undefined.js'
import isNull from './is-null.js'

export default function isPrimitive(value: unknown) {
	return (
		isString(value) ||
		isNumber(value) ||
		isBigint(value) ||
		isBoolean(value) ||
		isSymbol(value) ||
		isUndefined(value) ||
		isNull(value)
	)
}
