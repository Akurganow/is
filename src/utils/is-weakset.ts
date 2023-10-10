export default function isWeakSet(value: unknown): value is WeakSet<object> {
	return value instanceof WeakSet
}
