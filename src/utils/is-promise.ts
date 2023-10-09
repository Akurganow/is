export default function isPromise<T = unknown> (value: unknown): value is PromiseLike<T> {
	return Boolean(value) &&
		Object.prototype.toString.call(value) === '[object Promise]' &&
		typeof (value as PromiseLike<unknown>).then === 'function'
}
