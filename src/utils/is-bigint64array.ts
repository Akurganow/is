import getTypedArrayTag from './get-typed-array-tag.js'

export default function isBigint64Array(
	value: unknown,
): value is BigInt64Array {
	return getTypedArrayTag(value) === 'BigInt64Array'
}
