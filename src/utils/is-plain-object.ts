import isObject from './is-object'
import isNull from './is-null'

/**
 * Checks if a given value is a plain object.
 *
 * A plain object is an object created by either `{}`, `new Object()` or `Object.create(null)`.
 * This function checks if the value is not null, if it is an object, and if its prototype is either `null`,
 * `Object.prototype`, or an object with a null prototype. It also checks if the `Symbol.toStringTag` and
 * `Symbol.iterator` properties are not in the object.
 *
 * @param {unknown} obj - The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export default function isPlainObject<V = unknown>(obj: unknown): obj is Record<string | number | symbol, V> {
	if (isNull(obj) || !isObject(obj)) {
		return false
	}
	
	const prototype = Object.getPrototypeOf(obj)

	const nonEnumerableProperties = Object.getOwnPropertyNames(obj).filter(
		(prop) => !Object.prototype.propertyIsEnumerable.call(obj, prop)
	)

	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null)
		&& !(Symbol.toStringTag in obj)
		&& !(Symbol.iterator in obj)
		&& nonEnumerableProperties.length === 0
}
