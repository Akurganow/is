/**
 * Returns the internal `[[Class]]` property of the given value.
 *
 * The `[[Class]]` property is a string that describes the type of the object.
 * It can be accessed indirectly using `Object.prototype.toString.call(value)`,
 * which returns a string in the format `"[object Type]"`, where `Type` is the type of the object.
 *
 * For example, calling `getTag([])` returns `"[object Array]"` because `[]` is an array.
 * Calling `getTag(new Date())` returns `"[object Date]"` because `new Date()` creates a `Date` object.
 *
 * This function can be useful when you want to determine a more specific type of object
 * than what the `typeof` operator in JavaScript can offer.
 *
 * @param {unknown} value - The value to check.
 * @returns {string} The `[[Class]]` property of the value.
 */
export default function getTag(value: unknown): string {
	return Object.prototype.toString.call(value)
}
