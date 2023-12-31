import isNull from './is-null'
import isFunction from './is-function'

/**
 * Checks if a given value is iterable.
 *
 * An iterable is an object which defines a sequence and potentially a return value upon its termination.
 * Specifically, an iterable must be an object which has a function with the semantic of 'returns an iterator object'
 * located via the Symbol.iterator key.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is iterable, false otherwise.
 */
export default function isIterable(value: unknown): value is Iterable<unknown> {
	return !isNull(value) && isFunction((value as Iterable<unknown>)?.[Symbol.iterator])
}
