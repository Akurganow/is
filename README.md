# is

[![CI](https://github.com/Akurganow/is/actions/workflows/main.yml/badge.svg)](https://github.com/Akurganow/is/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/%40plq%2Fis.svg)](https://www.npmjs.com/package/@plq/is)

Small utility package that provides a set of functions to check if a given argument is of a certain type

## Functions

### `detect`

Returns the type of given value.

```javascript
import { detect } from '@plq/is'

console.log(detect('')) // Output: 'string'
console.log(detect(1)) // Output: 'number'
console.log(detect(true)) // Output: 'boolean'
console.log(detect({})) // Output: 'object'
console.log(detect([])) // Output: 'array'
```

`detect` returns an all-lowercase type name derived from the value's tag: `'string'`, `'number'`, `'boolean'`, `'object'`, `'array'`, `'null'`, `'undefined'`, `'symbol'`, `'bigint'`, `'regexp'`, `'date'`, `'error'`, `'map'`, `'set'`, `'weakmap'`, `'weakset'`, `'promise'`, `'function'`, `'asyncfunction'`, `'generatorfunction'`, `'asyncgeneratorfunction'`, `'arraybuffer'`, `'dataview'`, `'int8array'`, `'uint8array'`, `'uint8clampedarray'`, `'int16array'`, `'uint16array'`, `'int32array'`, `'uint32array'`, `'float32array'`, `'float64array'`, `'bigint64array'`, `'biguint64array'` and so on.
`isArrayOf` and `isArrayOfSame` use this vocabulary.

> Note: `detect`, `getTag` and other tag-based checks rely on `Object.prototype.toString`, which can be spoofed via `Symbol.toStringTag` unless the check adds an extra guard.

### `getTag`

Returns the tag of given value.

```javascript
import { getTag } from '@plq/is'

console.log(getTag('')) // Output: '[object String]'
console.log(getTag(1)) // Output: '[object Number]'
console.log(getTag(true)) // Output: '[object Boolean]'
console.log(getTag({})) // Output: '[object Object]'
console.log(getTag([])) // Output: '[object Array]'
```

### `isFunction`

Checks if a given value is a function.

```javascript
import { isFunction } from '@plq/is'

console.log(isFunction(() => {})) // Output: true
console.log(isFunction({})) // Output: false
console.log(isFunction(async () => {})) // Output: false
```

### `isAsyncFunction`

Checks if a given value is an asynchronous function.

```javascript
import { isAsyncFunction } from '@plq/is'

console.log(isAsyncFunction(async () => {})) // Output: true
console.log(isAsyncFunction(async function* () {})) // Output: true
console.log(isAsyncFunction(() => {})) // Output: false
```

### `isGeneratorFunction`

Checks if a given value is a generator function.

```javascript
import { isGeneratorFunction } from '@plq/is'

console.log(isGeneratorFunction(function* () {})) // Output: true
console.log(isGeneratorFunction(async function* () {})) // Output: true
console.log(isGeneratorFunction(() => {})) // Output: false
```

### `isPromise`

Checks if a given value is a Promise.

```javascript
import { isPromise } from '@plq/is'

console.log(isPromise(Promise.resolve())) // Output: true
console.log(isPromise(async () => {})) // Output: false
```

### `isPromiseLike`

Checks if a given value is a Promise-like.

```javascript
import { isPromiseLike } from '@plq/is'

console.log(isPromiseLike(Promise.resolve())) // Output: true
console.log(isPromiseLike({ then: () => {} })) // Output: true
console.log(isPromiseLike(async () => {})) // Output: false
```

### `isArray`

Checks if a given value is an array.

```javascript
import { isArray } from '@plq/is'

console.log(isArray([])) // Output: true
console.log(isArray({})) // Output: false
```

### `isArrayOf`

Checks if a given value is an array of a given type.

```javascript
import { isArrayOf } from '@plq/is'

console.log(isArrayOf([], 'string')) // Output: false
console.log(isArrayOf(['a', 'b', 'c'], 'string')) // Output: true
console.log(isArrayOf(['a', 'b', 'c'], 'number')) // Output: false
console.log(isArrayOf(['a', 'b', 3], 'string')) // Output: false
```

The `type` argument is one of the all-lowercase type names returned by `detect`.

### `isArrayOfSame`

Checks if a given array contains only elements of the same type.
Each element's type is determined with `detect`, so all elements must share the same detected type.
A non-array value or an empty array returns false.

```javascript
import { isArrayOfSame } from '@plq/is'

console.log(isArrayOfSame([1, 2, 3])) // Output: true
console.log(isArrayOfSame([{}, {}])) // Output: true
console.log(isArrayOfSame([1, 'a'])) // Output: false
console.log(isArrayOfSame([() => {}, async () => {}])) // Output: false
console.log(isArrayOfSame([])) // Output: false
```

### `isObject`

Checks if a given value is an object.

```javascript
import { isObject } from '@plq/is'

console.log(isObject({})) // Output: true
console.log(isObject(() => {})) // Output: false
```

### isObjectLike

Checks if a given value is an object-like.

```javascript
import { isObjectLike } from '@plq/is'

console.log(isObjectLike({})) // Output: true
console.log(isObjectLike([])) // Output: true
console.log(isObjectLike(() => {})) // Output: false
```

### `isPlainObject`

Checks if a given value is a plain object.

```javascript
import { isPlainObject } from '@plq/is'

console.log(isPlainObject({})) // Output: true
console.log(isPlainObject(Object.create(null))) // Output: true
console.log(isPlainObject(() => {})) // Output: false
```

### `isNull`

Checks if a given value is null.

```javascript
import { isNull } from '@plq/is'

console.log(isNull(null)) // Output: true
console.log(isNull(undefined)) // Output: false
```

### `isUndefined`

Checks if a given value is undefined.

```javascript
import { isUndefined } from '@plq/is'

console.log(isUndefined(undefined)) // Output: true
console.log(isUndefined(null)) // Output: false
```

### `isString`

Checks if a given value is a string.

```javascript
import { isString } from '@plq/is'

console.log(isString('')) // Output: true
console.log(isString(1)) // Output: false
```

### `isNumber`

Checks if a given value is a number.

```javascript
import { isNumber } from '@plq/is'

console.log(isNumber(1)) // Output: true
console.log(isNumber(NaN)) // Output: true
console.log(isNumber('')) // Output: false
```

### `isNaN`

Checks if a given value is NaN.

```javascript
import { isNaN } from '@plq/is'

console.log(isNaN(NaN)) // Output: true
console.log(isNaN(1)) // Output: false
```

### `isBigint`

Checks if a given value is a BigInt.

```javascript
import { isBigint } from '@plq/is'

console.log(isBigint(BigInt(1))) // Output: true
console.log(isBigint(1)) // Output: false
```

### `isBoolean`

Checks if a given value is a boolean.

```javascript
import { isBoolean } from '@plq/is'

console.log(isBoolean(true)) // Output: true
console.log(isBoolean(false)) // Output: true
console.log(isBoolean(1)) // Output: false
```

### `isSymbol`

Checks if a given value is a symbol.

```javascript
import { isSymbol } from '@plq/is'

console.log(isSymbol(Symbol())) // Output: true
console.log(isSymbol(1)) // Output: false
```

### `isDate`

Checks if a given value is a date.

```javascript
import { isDate } from '@plq/is'

console.log(isDate(new Date())) // Output: true
console.log(isDate('2021-01-01')) // Output: false
```

### `isRegexp`

Checks if a given value is a regular expression.

```javascript
import { isRegexp } from '@plq/is'

console.log(isRegexp(/test/)) // Output: true
console.log(isRegexp('test')) // Output: false
```

### `isSet`

Checks if a given value is a Set.

```javascript
import { isSet } from '@plq/is'

console.log(isSet(new Set())) // Output: true
console.log(isSet([])) // Output: false
```

### `isMap`

Checks if a given value is a Map.

```javascript
import { isMap } from '@plq/is'

console.log(isMap(new Map())) // Output: true
console.log(isMap([])) // Output: false
```

### `isWeakset`

Checks if a given value is a WeakSet.

```javascript
import { isWeakset } from '@plq/is'

console.log(isWeakset(new WeakSet())) // Output: true
console.log(isWeakset([])) // Output: false
```

### `isWeakmap`

Checks if a given value is a WeakMap.

```javascript
import { isWeakmap } from '@plq/is'

console.log(isWeakmap(new WeakMap())) // Output: true
console.log(isWeakmap([])) // Output: false
```

### `isError`

Checks if a given value is an error.

```javascript
import { isError } from '@plq/is'

console.log(isError(new Error())) // Output: true
console.log(isError('Error')) // Output: false
```

### `isArraybuffer`

Checks if a given value is an ArrayBuffer.

```javascript
import { isArraybuffer } from '@plq/is'

console.log(isArraybuffer(new ArrayBuffer(1))) // Output: true
console.log(isArraybuffer(new Uint8Array(1))) // Output: false
```

### `isDataView`

Checks if a given value is a DataView.

```javascript
import { isDataView } from '@plq/is'

console.log(isDataView(new DataView(new ArrayBuffer(1)))) // Output: true
console.log(isDataView([])) // Output: false
```

### `isInt8array`

Checks if a given value is an Int8Array.

```javascript
import { isInt8array } from '@plq/is'

console.log(isInt8array(new Int8Array())) // Output: true
console.log(isInt8array(new Uint8Array())) // Output: false
```

### `isUint8array`

Checks if a given value is a Uint8Array.

```javascript
import { isUint8array } from '@plq/is'

console.log(isUint8array(new Uint8Array())) // Output: true
console.log(isUint8array(new Int8Array())) // Output: false
```

### `isUint8clampedarray`

Checks if a given value is a Uint8ClampedArray.

```javascript
import { isUint8clampedarray } from '@plq/is'

console.log(isUint8clampedarray(new Uint8ClampedArray())) // Output: true
console.log(isUint8clampedarray(new Uint8Array())) // Output: false
```

### `isInt16array`

Checks if a given value is an Int16Array.

```javascript
import { isInt16array } from '@plq/is'

console.log(isInt16array(new Int16Array())) // Output: true
console.log(isInt16array(new Uint16Array())) // Output: false
```

### `isUint16array`

Checks if a given value is a Uint16Array.

```javascript
import { isUint16array } from '@plq/is'

console.log(isUint16array(new Uint16Array())) // Output: true
console.log(isUint16array(new Int16Array())) // Output: false
```

### `isInt32array`

Checks if a given value is an Int32Array.

```javascript
import { isInt32array } from '@plq/is'

console.log(isInt32array(new Int32Array())) // Output: true
console.log(isInt32array(new Uint32Array())) // Output: false
```

### `isUint32array`

Checks if a given value is a Uint32Array.

```javascript
import { isUint32array } from '@plq/is'

console.log(isUint32array(new Uint32Array())) // Output: true
console.log(isUint32array(new Int32Array())) // Output: false
```

### `isFloat32array`

Checks if a given value is a Float32Array.

```javascript
import { isFloat32array } from '@plq/is'

console.log(isFloat32array(new Float32Array())) // Output: true
console.log(isFloat32array(new Float64Array())) // Output: false
```

### `isFloat64array`

Checks if a given value is a Float64Array.

```javascript
import { isFloat64array } from '@plq/is'

console.log(isFloat64array(new Float64Array())) // Output: true
console.log(isFloat64array(new Float32Array())) // Output: false
```

### `isBigint64array`

Checks if a given value is a BigInt64Array.

```javascript
import { isBigint64array } from '@plq/is'

console.log(isBigint64array(new BigInt64Array())) // Output: true
console.log(isBigint64array(new BigUint64Array())) // Output: false
```

### `isBiguint64array`

Checks if a given value is a BigUint64Array.

```javascript
import { isBiguint64array } from '@plq/is'

console.log(isBiguint64array(new BigUint64Array())) // Output: true
console.log(isBiguint64array(new BigInt64Array())) // Output: false
```

> Note: the typed-array checks combine `ArrayBuffer.isView` with the value's tag, so they work across realms (e.g. `node:vm` contexts, iframes) and cannot be spoofed with `Symbol.toStringTag`.

### `isIterable`

Checks if a given value is iterable.

```javascript
import { isIterable } from '@plq/is'

console.log(isIterable([])) // Output: true
console.log(isIterable({})) // Output: false
```

### `isAsyncIterable`

Checks if a given value is an async iterable.

```javascript
import { isAsyncIterable } from '@plq/is'

console.log(isAsyncIterable((async function* () {})())) // Output: true
console.log(isAsyncIterable(async function* () {})) // Output: false
console.log(isAsyncIterable([])) // Output: false
```

> Note: an async generator function itself is not async-iterable — the async generator object returned by calling it is.

### `isPrimitive`

Checks if a given value is a primitive.

```javascript
import { isPrimitive } from '@plq/is'

console.log(isPrimitive('')) // Output: true
console.log(isPrimitive(1)) // Output: true
console.log(isPrimitive(true)) // Output: true
console.log(isPrimitive(Symbol())) // Output: true
console.log(isPrimitive(null)) // Output: true
console.log(isPrimitive(undefined)) // Output: true
console.log(isPrimitive({})) // Output: false
console.log(isPrimitive([])) // Output: false
```

### `isEmpty`

Checks if a given value is empty.

```javascript
import { isEmpty } from '@plq/is'

console.log(isEmpty('')) // Output: true
console.log(isEmpty(0)) // Output: false
console.log(isEmpty(NaN)) // Output: true
console.log(isEmpty([])) // Output: true
console.log(isEmpty({})) // Output: true
console.log(isEmpty(new Set())) // Output: true
console.log(isEmpty(new Map())) // Output: true
console.log(isEmpty(() => {})) // Output: false
```

> Note: numbers, booleans, WeakMap and WeakSet are never considered empty. NaN and whitespace-only strings count as empty.

### `isEmptyString`

Checks if a given value is an empty string.

```javascript
import { isEmptyString } from '@plq/is'

console.log(isEmptyString('')) // Output: true
console.log(isEmptyString(' ')) // Output: true
console.log(isEmptyString('test')) // Output: false
```

> Note: the string is trimmed first, so whitespace-only strings are considered empty.

### `isEmptyArray`

Checks if a given value is an empty array.

```javascript
import { isEmptyArray } from '@plq/is'

console.log(isEmptyArray([])) // Output: true
console.log(isEmptyArray([1])) // Output: false
```

### `isEmptyObject`

Checks if a given value is an empty object.

```javascript
import { isEmptyObject } from '@plq/is'

console.log(isEmptyObject({})) // Output: true
console.log(isEmptyObject({ a: 1 })) // Output: false
```

### `isEmptySet`

Checks if a given value is an empty Set.

```javascript
import { isEmptySet } from '@plq/is'

console.log(isEmptySet(new Set())) // Output: true
console.log(isEmptySet(new Set([1]))) // Output: false
```

### `isEmptyMap`

Checks if a given value is an empty Map.

```javascript
import { isEmptyMap } from '@plq/is'

console.log(isEmptyMap(new Map())) // Output: true
console.log(isEmptyMap(new Map([['a', 1]]))) // Output: false
```

### `isClass`

Checks if a given value is a class.

```javascript
import { isClass } from '@plq/is'

class Test {}

console.log(isClass(Test)) // Output: true
console.log(isClass(new Test())) // Output: false
console.log(isClass(() => {})) // Output: false
```

> Note: `isClass` inspects the function's source text, so classes transpiled to plain functions (e.g. by TypeScript or Babel targeting ES5) are not detected.

### `isArguments`

Checks if a given value is an arguments object.

```javascript
import { isArguments } from '@plq/is'

const args = (function() {
	return arguments
})()

console.log(isArguments(args)) // Output: true
console.log(isArguments([])) // Output: false
```

## Development

### Install dependencies

```bash
npm install
```

### Lint

We use [Biome](https://biomejs.dev/) to lint and format our code.
</br>
Check out [biome.json](https://github.com/Akurganow/is/blob/main/biome.json)

```bash
npm run lint
```

### Run tests

We use [Jest](https://jestjs.io/) to test our code.

```bash
npm test
```

### Build

We use [TypeScript](https://www.typescriptlang.org/) to build our code.

```bash
npm run build
```

### Dev check list

- [ ] Add new file to `src/utils` folder like `is-object.ts`
- [ ] Write a function `isObject` in `is-object.ts`
- [ ] Add new function to `src/index.ts` like `export { default as isObject } from './utils/is-object'`
- [ ] Add new test to `__tests__/type-matrix.test.ts` file like `describe('isObject', () => { tests('object', isObject) })`
- [ ] Run `npm run lint`
- [ ] Run `npm run test`
- [ ] Commit and push your changes
- [ ] Create a pull request
