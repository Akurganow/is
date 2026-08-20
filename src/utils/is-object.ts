import getTag from './get-tag'

/**
 * Checks if a given value is an object.
 *
 * This function checks if the value's internal `[[Class]]` property is `[object Object]`.
 *
 * @param {unknown} obj - The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export default function isObject(obj: unknown): obj is Record<string, unknown> {
	return getTag(obj) === '[object Object]'
}
