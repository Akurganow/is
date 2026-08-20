import getTag from './get-tag'

export default function isUint8ClampedArray(value: unknown): value is Uint8ClampedArray {
	return ArrayBuffer.isView(value) && getTag(value) === '[object Uint8ClampedArray]'
}
