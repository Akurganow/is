import getTag from './get-tag'

export default function isAsyncFunction(fn: unknown): fn is (...args: unknown[]) => Promise<unknown> {
	if (typeof fn !== 'function') return false

	const tag = getTag(fn)

	return tag === '[object AsyncFunction]' || tag === '[object AsyncGeneratorFunction]'
}
