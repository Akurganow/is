/**
 * Checks if a given value is an array.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is an array, false otherwise.
 */
export default function isArray(value: unknown): value is Array<unknown> {
	return Array.isArray(value)
}
