import isNumber from './is-number.js'

export default function isNan(value: unknown): value is number {
	return isNumber(value) && Number.isNaN(value)
}
