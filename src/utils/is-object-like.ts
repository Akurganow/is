/**
 * Checks if a given value is object-like.
 *
 * A value is considered object-like if its type is 'object' and it is not null.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is object-like, false otherwise.
 */
export default function isObjectLike(value: unknown): value is object {
	return typeof value === 'object' && value !== null
}
