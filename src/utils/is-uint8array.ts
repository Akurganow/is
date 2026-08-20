import getTypedArrayTag from './get-typed-array-tag'

export default function isUint8Array(value: unknown): value is Uint8Array {
	return getTypedArrayTag(value) === 'Uint8Array'
}
