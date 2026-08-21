import getTag from './get-tag'

function hasConstructorNamed(value: unknown, name: string): boolean {
	const ctor = (value as { constructor?: unknown }).constructor

	return typeof ctor === 'function' && ctor.name === name
}

export default function isGeneratorFunction(
	value: unknown,
): value is (
	...args: unknown[]
) => Generator<unknown> | AsyncGenerator<unknown> {
	if (typeof value !== 'function') return false

	const tag = getTag(value)

	// The tag alone can be spoofed by defining Symbol.toStringTag on a plain
	// function, so also require the constructor name to match the tag. This
	// raises the bar (plain objects and casual tag spoofs are rejected) but is
	// not a brand check: a forger who also fakes `constructor` still passes.
	// True brand checks need engine internals (cf. Node's util.types).
	if (tag === '[object GeneratorFunction]') {
		return hasConstructorNamed(value, 'GeneratorFunction')
	}

	if (tag === '[object AsyncGeneratorFunction]') {
		return hasConstructorNamed(value, 'AsyncGeneratorFunction')
	}

	return false
}
