import getTag from './get-tag'

export default function isPromise<T = unknown> (value: unknown): value is Promise<T> {
	return getTag(value) === '[object Promise]' &&
		typeof (value as Promise<unknown>).then === 'function'
}
