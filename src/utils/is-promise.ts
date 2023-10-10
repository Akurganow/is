import getTag from './get-tag'

export default function isPromise<T = unknown> (value: unknown): value is PromiseLike<T> {
	return Boolean(value) &&
		getTag(value) === '[object Promise]' &&
		typeof (value as PromiseLike<unknown>).then === 'function'
}
