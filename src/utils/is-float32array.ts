import getTag from './get-tag'

export default function isFloat32Array(value: unknown): value is Float32Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Float32Array]'
}
