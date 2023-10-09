export default function isAsyncFunction(fn: unknown): fn is () => Promise<void> {
	return typeof fn === 'function' && fn.constructor.name === 'AsyncFunction'
}
