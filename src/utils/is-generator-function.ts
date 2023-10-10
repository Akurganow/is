import getTag from './get-tag'

export default function isGeneratorFunction(value: unknown): value is GeneratorFunction {
	console.log('isGeneratorFunction', value, getTag(value))
	return getTag(value) === '[object GeneratorFunction]'
}
