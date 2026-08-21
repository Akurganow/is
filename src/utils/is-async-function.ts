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
	// function, so also require the constructor name to match the tag. This
	// raises the bar (plain objects and casual tag spoofs are rejected) but is
	// not a brand check: a forger who also fakes `constructor` still passes.
	// True brand checks need engine internals (cf. Node's util.types).
	if (tag === '[object AsyncFunction]') {
		return hasConstructorNamed(fn, 'AsyncFunction')
	}

	if (tag === '[object AsyncGeneratorFunction]') {
		return hasConstructorNamed(fn, 'AsyncGeneratorFunction')
	}

	return false
}
