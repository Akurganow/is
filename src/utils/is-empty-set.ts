import isSet from './is-set'

export default function isEmptySet(value: unknown): value is Set<never> {
	return isSet(value) && value.size === 0
}
