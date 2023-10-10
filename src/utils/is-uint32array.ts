import getTag from './get-tag'

export default function isUint32Array(value: unknown): value is Uint32Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Uint32Array]'
}
