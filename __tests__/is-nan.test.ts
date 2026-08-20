// biome-ignore lint/suspicious/noShadowRestrictedNames: isNaN is the package's published export name; the test must import the public API as-is
import { isNaN } from '../src'

describe('isNaN', () => {
	test('should return true if value is NaN', () => {
		expect(isNaN(NaN)).toBe(true)
	})
	test('should return false if value is not NaN', () => {
		expect(isNaN(1)).toBe(false)
		expect(isNaN('1')).toBe(false)
		expect(isNaN(false)).toBe(false)
		expect(isNaN(undefined)).toBe(false)
		expect(isNaN(null)).toBe(false)
	})
})
