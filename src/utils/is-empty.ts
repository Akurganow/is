import isUndefined from './is-undefined'
import isNull from './is-null'
import isEmptyString from './is-empty-string'
import isEmptyObject from './is-empty-object'
import isEmptyArray from './is-empty-array'
import isNaN from './is-nan'

/**
 * Checks if a given value is empty.
 *
 * A value is considered empty if it is:
 * - undefined
 * - null
 * - NaN
 * - an empty string
 * - an empty object (no enumerable properties)
 * - an empty array
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export default function isEmpty(value: unknown): boolean {
	return isUndefined(value)
		|| isNull(value)
		|| isNaN(value as number)
		|| isEmptyString(value as string)
		|| isEmptyObject(value as object)
		|| isEmptyArray(value as unknown[])
}
