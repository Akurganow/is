import getTag from './get-tag'

/**
 * Detects the type of the given value.
 *
 * @param {unknown} value - The value to check.
 * @returns {string} The type of the value.
 */
export default function detect(value: unknown): string {
	const tag = getTag(value)
	return tag.slice(8, -1).toLowerCase()
}
