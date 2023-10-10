import isString from './is-string'

export default function isEmptyString(value: string) {
	return isString(value) && value.trim().length === 0
}
