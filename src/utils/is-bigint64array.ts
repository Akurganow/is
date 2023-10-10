import getTag from './get-tag'

export default function isBigint64Array(value: unknown): value is BigInt64Array {
	return getTag(value) === '[object BigInt64Array]'
}
