import getTag from './get-tag'

export default function isGeneratorFunction(value: unknown): value is GeneratorFunction {
	return getTag(value) === '[object GeneratorFunction]'
}
