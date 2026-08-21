// The %TypedArray%.prototype[Symbol.toStringTag] getter reads the internal
// [[TypedArrayName]] slot, so calling it on a value reports the value's true
// typed-array class: it works across realms, ignores a tampered own
// Symbol.toStringTag on a genuine typed array, and returns undefined for
// anything that is not a typed array (including DataView and fakes).
// Captured once, before user code could patch the prototype.
const typedArrayTagGetter = Object.getOwnPropertyDescriptor(
	Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array())),
	Symbol.toStringTag,
)?.get

/**
 * Returns the typed-array class name (e.g. `'Uint8Array'`) read from the
 * value's internal [[TypedArrayName]] slot, or `undefined` if the value is
 * not a typed array. Internal helper — not exported from the package.
 */
export default function getTypedArrayTag(value: unknown): string | undefined {
	if (!ArrayBuffer.isView(value) || !typedArrayTagGetter) return undefined

	return typedArrayTagGetter.call(value) as string | undefined
}
