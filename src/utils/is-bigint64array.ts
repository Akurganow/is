import getTag from './get-tag'

export default function isBigint64Array(value: unknown): value is BigInt64Array {
	return ArrayBuffer.isView(value) && getTag(value) === '[object BigInt64Array]'
}
