import getTypedArrayTag from './get-typed-array-tag.js'

export default function isInt8Array(value: unknown): value is Int8Array {
	return getTypedArrayTag(value) === 'Int8Array'
}
