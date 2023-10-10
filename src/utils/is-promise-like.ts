import isNull from './is-null'

export default function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
	return !isNull(value) && typeof (value as PromiseLike<unknown>)?.then === 'function'
}
