import getTag from './get-tag'

export default function isFloat64Array(value: unknown): value is Float64Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Float64Array]'
}
