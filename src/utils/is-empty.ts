import isUndefined from './is-undefined'
import isNull from './is-null'
import isEmptyString from './is-empty-string'
import isEmptyObject from './is-empty-object'
import isEmptyArray from './is-empty-array'
import isNaN from './is-nan'

export default function isEmpty(value: unknown): boolean {
	return isUndefined(value)
		|| isNull(value)
		|| isNaN(value as number)
		|| isEmptyString(value as string)
		|| isEmptyObject(value as object)
		|| isEmptyArray(value as unknown[])
}
