import isObject from './is-object'

export default function isEmptyObject(value: unknown) {
	return isObject(value) && Object.keys(value).length === 0
}
