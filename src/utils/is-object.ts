import getTag from './get-tag'

/**
 * Checks if a given value is an object.
 *
 * This function checks if the value is truthy and if its internal `[[Class]]` property is `[object Object]`.
 *
 * @param {unknown} obj - The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export default function isObject(obj: unknown): obj is Record<string, unknown> {
	return Boolean(obj) && getTag(obj) === '[object Object]'
}
