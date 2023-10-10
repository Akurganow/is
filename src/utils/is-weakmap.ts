export default function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
	return value instanceof WeakMap
}
