import isObject from './is-object'
import isSet from './is-set'
import isMap from './is-map'

export default function isEmptyObject(value: object) {
	return isObject(value) && !isMap(value) && !isSet(value) && Object.keys(value).length === 0
}
