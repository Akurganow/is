export default function isInt8Array(value: unknown): value is Int8Array {
	return value instanceof Int8Array
}
