export default function isUint8Array(value: unknown): value is Uint8Array {
	return value instanceof Uint8Array
}
