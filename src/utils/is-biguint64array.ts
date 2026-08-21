import getTypedArrayTag from './get-typed-array-tag.js'

export default function isBigUint64Array(
	value: unknown,
): value is BigUint64Array {
	return getTypedArrayTag(value) === 'BigUint64Array'
}
