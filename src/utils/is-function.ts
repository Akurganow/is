import getTag from './get-tag'

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function isFunction (value: unknown): value is Function {
	return Boolean(value) && getTag(value) === '[object Function]'
}
