import getTag from './get-tag'

export default function isObject(obj: unknown): obj is Record<string, unknown> {
	return Boolean(obj) && getTag(obj) === '[object Object]'
}
