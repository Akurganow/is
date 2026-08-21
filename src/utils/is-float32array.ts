import getTypedArrayTag from './get-typed-array-tag.js'

export default function isFloat32Array(value: unknown): value is Float32Array {
	return getTypedArrayTag(value) === 'Float32Array'
}
