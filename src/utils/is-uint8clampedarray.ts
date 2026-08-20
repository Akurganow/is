import getTypedArrayTag from './get-typed-array-tag'

export default function isUint8ClampedArray(
	value: unknown,
): value is Uint8ClampedArray {
	return getTypedArrayTag(value) === 'Uint8ClampedArray'
}
