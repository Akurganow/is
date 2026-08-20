import getTag from './get-tag'

export default function isInt32Array(value: unknown): value is Int32Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Int32Array]'
}
