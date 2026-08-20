import getTypedArrayTag from './get-typed-array-tag'

export default function isInt8Array(value: unknown): value is Int8Array {
	return getTypedArrayTag(value) === 'Int8Array'
}
