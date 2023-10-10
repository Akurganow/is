export default function isInt16Array(value: unknown): value is Int16Array {
	return value instanceof Int16Array
}
