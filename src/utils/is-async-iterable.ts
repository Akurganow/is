import isNull from './is-null'
import isFunction from './is-function'

export default function isAsyncIterable(value: unknown): value is AsyncIterable<unknown> {
	return !isNull(value) && isFunction((value as AsyncIterable<unknown>)[Symbol.asyncIterator])
}
