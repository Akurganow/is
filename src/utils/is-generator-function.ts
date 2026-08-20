import getTag from './get-tag'

export default function isGeneratorFunction(
	value: unknown,
): value is GeneratorFunction {
	if (typeof value !== 'function') return false

	const tag = getTag(value)

	return (
		tag === '[object GeneratorFunction]' ||
		tag === '[object AsyncGeneratorFunction]'
	)
}
