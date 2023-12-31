/**
 * Checks if a given array contains only elements of the same type.
 *
 * This function uses the `detect` function to determine the type of each element in the array.
 * If all elements are of the same type, the function returns true. Otherwise, it returns false.
 * An empty array will return false.
 *
 * @param {unknown[]} value - The array to check.
 * @returns {boolean} True if all elements in the array are of the same type, false otherwise.
 */
export default function isArrayOfSame(value: unknown[]): boolean {
	if (value.length === 0) return false
	if (value.length === 1) return true

	const firstElement = value[0]
	const firstElementType = typeof firstElement

	if (firstElementType === 'object') {
		const firstElementConstructor = firstElement?.constructor

		return value.every(item => item?.constructor === firstElementConstructor)
	}

	return value.every(item => typeof item === firstElementType)
}
