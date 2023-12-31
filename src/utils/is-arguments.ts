import getTag from './get-tag'
import isObjectLike from './is-object-like'

/**
 * Checks if a given value is an arguments object.
 *
 * An arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
 * This function checks if the value is an object-like and if its internal `[[Class]]` property is `[object Arguments]`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is an arguments object, false otherwise.
 */
export default function isArguments(value: unknown): value is IArguments {
	return isObjectLike(value) && getTag(value) == '[object Arguments]'
}
