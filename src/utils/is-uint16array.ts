import getTypedArrayTag from './get-typed-array-tag'

export default function isUint16Array(value: unknown): value is Uint16Array {
	return getTypedArrayTag(value) === 'Uint16Array'
}
