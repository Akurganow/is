export default function isInt32Array(value: unknown): value is Int32Array {
	return value instanceof Int32Array
}
