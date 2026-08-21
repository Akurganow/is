import getTypedArrayTag from './get-typed-array-tag.js'

export default function isInt32Array(value: unknown): value is Int32Array {
	return getTypedArrayTag(value) === 'Int32Array'
}
