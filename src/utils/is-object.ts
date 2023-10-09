export default function isObject(obj: unknown): obj is Record<string, unknown> {
	return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Object]'
}
