import isUndefined from './is-undefined.js'
import isNull from './is-null.js'
import isEmptyString from './is-empty-string.js'
import isEmptyObject from './is-empty-object.js'
import isEmptyArray from './is-empty-array.js'
import isEmptySet from './is-empty-set.js'
import isEmptyMap from './is-empty-map.js'
// biome-ignore lint/suspicious/noShadowRestrictedNames: isNaN is the published export name of ./is-nan; the public API must not change
import isNaN from './is-nan.js'

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
 * - an empty Set
 * - an empty Map
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export default function isEmpty(value: unknown): boolean {
	return (
		isUndefined(value) ||
		isNull(value) ||
		isNaN(value) ||
		isEmptyString(value) ||
		isEmptyObject(value) ||
		isEmptyArray(value) ||
		isEmptySet(value) ||
		isEmptyMap(value)
	)
}
