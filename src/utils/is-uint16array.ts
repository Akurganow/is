export default function isUint16Array(value: unknown): value is Uint16Array {
	return value instanceof Uint16Array
}
