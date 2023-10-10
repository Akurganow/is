import isNull from './is-null'
import isFunction from './is-function'

export default function isIterable(value: unknown): value is Iterable<unknown> {
	return !isNull(value) && isFunction((value as Iterable<unknown>)?.[Symbol.iterator])
}
