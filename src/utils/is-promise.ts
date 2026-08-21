import getTag from './get-tag'

export default function isPromise<T = unknown>(
	value: unknown,
): value is Promise<T> {
	if (getTag(value) !== '[object Promise]') return false

	// The predicate narrows to the full Promise interface, so demand the
	// complete method surface, not just `then` — a tag-spoofed object that
	// only has `then` must not be typed as having `catch`/`finally`.
	const candidate = value as Promise<unknown>

	return (
		typeof candidate.then === 'function' &&
		typeof candidate.catch === 'function' &&
		typeof candidate.finally === 'function'
	)
}
