export default function isClass(value: unknown): boolean {
	return typeof value === 'function' && /^\s*class\s+/.test(value.toString())
}
