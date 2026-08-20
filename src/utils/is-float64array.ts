import getTypedArrayTag from './get-typed-array-tag'

export default function isFloat64Array(value: unknown): value is Float64Array {
	return getTypedArrayTag(value) === 'Float64Array'
}
