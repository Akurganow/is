import getTag from './get-tag'

export default function isInt8Array(value: unknown): value is Int8Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Int8Array]'
}
