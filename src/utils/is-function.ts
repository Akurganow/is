import getTag from './get-tag.js'

// biome-ignore lint/complexity/noBannedTypes: the broad `Function` type predicate is the published public API of isFunction and must not change
export default function isFunction(value: unknown): value is Function {
	return getTag(value) === '[object Function]'
}
