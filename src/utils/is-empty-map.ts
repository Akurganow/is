import isMap from './is-map.js'

export default function isEmptyMap(value: unknown): value is Map<never, never> {
	return isMap(value) && value.size === 0
}
