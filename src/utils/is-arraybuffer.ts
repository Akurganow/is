export default function isArrayBuffer(value: unknown): value is ArrayBuffer {
	return value instanceof ArrayBuffer
}
