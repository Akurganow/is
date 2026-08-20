import getTag from './get-tag'

function hasConstructorNamed(fn: unknown, name: string): boolean {
	const ctor = (fn as { constructor?: unknown }).constructor

	return typeof ctor === 'function' && ctor.name === name
}

export default function isAsyncFunction(
	fn: unknown,
): fn is (...args: unknown[]) => Promise<unknown> | AsyncGenerator<unknown> {
	if (typeof fn !== 'function') return false

	const tag = getTag(fn)

	// The tag alone can be spoofed by defining Symbol.toStringTag on a plain
	// function, so require the constructor name to match the tag as well.
	if (tag === '[object AsyncFunction]') {
		return hasConstructorNamed(fn, 'AsyncFunction')
	}

	if (tag === '[object AsyncGeneratorFunction]') {
		return hasConstructorNamed(fn, 'AsyncGeneratorFunction')
	}

	return false
}
