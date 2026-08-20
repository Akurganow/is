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
	// function, so require the constructor name to match the tag as well.
	if (tag === '[object GeneratorFunction]') {
		return hasConstructorNamed(value, 'GeneratorFunction')
	}

	if (tag === '[object AsyncGeneratorFunction]') {
		return hasConstructorNamed(value, 'AsyncGeneratorFunction')
	}

	return false
}
