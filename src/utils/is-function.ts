export default function isFunction (value: unknown): value is Function {
	return Boolean(value) && Object.prototype.toString.call(value) === '[object Function]'
}
