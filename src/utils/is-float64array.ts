export default function isFloat64Array(value: unknown): value is Float64Array {
	return value instanceof Float64Array
}
