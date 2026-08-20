import getTag from './get-tag'

export default function isInt16Array(value: unknown): value is Int16Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Int16Array]'
}
