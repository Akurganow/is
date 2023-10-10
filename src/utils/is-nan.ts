import isNumber from './is-number'

export default function isNan(value: unknown): value is number {
	return isNumber(value) && Number.isNaN(value)
}
