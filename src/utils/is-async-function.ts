import getTag from './get-tag'

export default function isAsyncFunction(fn: unknown): fn is () => Promise<void> {
	return typeof fn === 'function' && getTag(fn) === '[object AsyncFunction]' && fn.constructor.name === 'AsyncFunction'
}
