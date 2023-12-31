import isEmptyArray from './is-empty-array'
import detect from './detect'

/**
 * Checks if a given array contains only elements of a specific type.
 *
 * This function uses the `detect` function to determine the type of each element in the array.
 * If all elements are of the specified type, the function returns true. Otherwise, it returns false.
 * An empty array will return false.
 *
 * @param {unknown[]} value - The array to check.
 * @param {string} type - The type to check against. This should be one of the types that the `detect` function can recognize.
 * @returns {boolean} True if all elements in the array are of the specified type, false otherwise.
 */
export default function isArrayOf(value: unknown[], type: string): boolean {
	if (isEmptyArray(value)) return false

	return !value.some(item => detect(item) !== type)
}
