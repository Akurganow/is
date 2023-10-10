export default function isDataView(value: unknown): value is DataView {
	return value instanceof DataView
}
