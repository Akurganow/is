import isString from './is-string.js'

export default function isEmptyString(value: unknown) {
	return isString(value) && value.trim().length === 0
}
