export default function isAsyncIterable(
	value: unknown,
): value is AsyncIterable<unknown> {
	return (
		typeof (value as AsyncIterable<unknown> | null | undefined)?.[
			Symbol.asyncIterator
		] === 'function'
	)
}
