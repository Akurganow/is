export default function isFloat32Array(value: unknown): value is Float32Array {
	return value instanceof Float32Array
}
