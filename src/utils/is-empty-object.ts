import isMap from './is-map.js'
import isObject from './is-object.js'
import isSet from './is-set.js'

export default function isEmptyObject(value: unknown) {
	// isObject relies on the value's tag, which a Map/Set subclass can spoof
	// as 'Object' via Symbol.toStringTag — instanceof catches those, and a
	// (possibly non-empty) Map/Set must never count as an empty plain object.
	return (
		isObject(value) &&
		!isMap(value) &&
		!isSet(value) &&
		Object.keys(value).length === 0
	)
}
