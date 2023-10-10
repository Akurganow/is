import isString from './is-string'
import isNumber from './is-number'
import isBigint from './is-bigint'
import isBoolean from './is-boolean'
import isSymbol from './is-symbol'
import isUndefined from './is-undefined'
import isNull from './is-null'

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
