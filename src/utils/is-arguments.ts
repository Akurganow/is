import getTag from './get-tag'
import isObjectLike from './is-object-like'

export default function isArguments(value: unknown): value is IArguments {
	return isObjectLike(value) && getTag(value) == '[object Arguments]'
}
