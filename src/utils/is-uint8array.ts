import getTag from './get-tag'

export default function isUint8Array(value: unknown): value is Uint8Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Uint8Array]'
}
