export default function isUint8ClampedArray(value: unknown): value is Uint8ClampedArray {
	return value instanceof Uint8ClampedArray
}
