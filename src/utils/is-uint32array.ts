import getTypedArrayTag from './get-typed-array-tag'

export default function isUint32Array(value: unknown): value is Uint32Array {
	return getTypedArrayTag(value) === 'Uint32Array'
}
