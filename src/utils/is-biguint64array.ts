import getTag from './get-tag'

export default function isBigUint64Array(value: unknown): value is BigUint64Array {
	return getTag(value) === '[object BigUint64Array]'
}
