import detect from './detect'

/**
 * Checks if a given array contains only elements of the same type.
 *
 * This function uses the `detect` function to determine the type of each element in the array.
 * If all elements have the same detected type, the function returns true. Otherwise, it returns false.
 * A non-array value or an empty array will return false.
 *
 * @param {unknown} value - The array to check.
 * @returns {boolean} True if all elements in the array are of the same detected type, false otherwise.
 */
export default function isArrayOfSame(value: unknown): boolean {
	if (!Array.isArray(value)) return false
	if (value.length === 0) return false
	if (value.length === 1) return true

	const firstElementType = detect(value[0])

	return value.every((item) => detect(item) === firstElementType)
}
