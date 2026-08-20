import isString from './is-string'

export default function isEmptyString(value: unknown) {
	return isString(value) && value.trim().length === 0
}
