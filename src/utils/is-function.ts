import getTag from './get-tag'

export default function isFunction (value: unknown): value is Function {
	return Boolean(value) && getTag(value) === '[object Function]'
}
