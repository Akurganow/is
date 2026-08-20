import getTag from './get-tag'

export default function isUint16Array(value: unknown): value is Uint16Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Uint16Array]'
}
