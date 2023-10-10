export default function getTag(value: unknown): string {
	return Object.prototype.toString.call(value)
}
