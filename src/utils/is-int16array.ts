import getTypedArrayTag from './get-typed-array-tag.js'

export default function isInt16Array(value: unknown): value is Int16Array {
	return getTypedArrayTag(value) === 'Int16Array'
}
