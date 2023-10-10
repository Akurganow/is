import isObject from './is-object'
import isNull from './is-null'

export default function isPlainObject<V = unknown>(obj: unknown): obj is Record<string | number | symbol, V> {
	if (isNull(obj) || !isObject(obj)) {
		return false
	}
	
	const prototype = Object.getPrototypeOf(obj)

	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null)
		&& !(Symbol.toStringTag in obj)
		&& !(Symbol.iterator in obj)
}
