import detect, { types } from './detect'
import isEmptyArray from './is-empty-array'
export default function isArrayOf(value: unknown[], type: keyof typeof types) {
	if (isEmptyArray(value)) return false
	
	return value.every(item => detect(item) === type)
}
