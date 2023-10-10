# is
Small utility package that provides a set of functions to check if a given argument is of a certain type

## Functions

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
javascript
import { isAsyncFunction } from '@plq/is'

console.log(isAsyncFunction(async () => {})) // Output: true
console.log(isAsyncFunction(() => {})) // Output: false
```

### `isPromise`

Checks if a given value is a Promise.

```javascript
import { isPromise } from '@plq/is'

console.log(isPromise(Promise.resolve())) // Output: true
console.log(isPromise(async () => {})) // Output: false
```

### `isArray`

Checks if a given value is an array.

```javascript
import { isArray } from '@plq/is'

console.log(isArray([])) // Output: true
console.log(isArray({})) // Output: false
```

### `isObject`

Checks if a given value is an object.

```javascript
import { isObject } from '@plq/is'

console.log(isObject({})) // Output: true
console.log(isObject(() => {})) // Output: false
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

### `isBigInt`

Checks if a given value is a BigInt.

```javascript
import { isBigInt } from '@plq/is'

console.log(isBigInt(BigInt(1))) // Output: true
console.log(isBigInt(1)) // Output: false
```

### `isBoolean`

Checks if a given value is a boolean.

```javascript
import { isBoolean } from '@plq/is'

console.log(isBoolean(true)) // Output: true
console.log(isBoolean(false)) // Output: true
console.log(isBoolean(1)) // Output: false
```

### `isDate`

Checks if a given value is a date.

```javascript
import { isDate } from '@plq/is'

console.log(isDate(new Date())) // Output: true
console.log(isDate('2021-01-01')) // Output: false
```

### `isRegExp`

Checks if a given value is a regular expression.

```javascript
import { isRegExp } from '@plq/is'

console.log(isRegExp(/test/)) // Output: true
console.log(isRegExp('test')) // Output: false
```

## Development

### Install dependencies

```bash
npm install
```

### Lint

We use [ESLint](https://eslint.org/) and [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to lint our code.
</br>
Check out [.eslintrc.json](https://github.com/Akurganow/is/blob/main/.eslintrc.json)

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

- [ ] Add new file to `src/ulils` folder like `is-object.ts`
- [ ] Write a function `isObject` in `is-object.ts`
- [ ] Add new function to `src/index.ts` like `export { default as isObject } from './utils/is-object'`
- [ ] Add new test to `__tests__/tests.ts` file like `describe('isObject', () => { tests('object', isObject) })`
- [ ] Run `npm run lint`
- [ ] Run `npm run test`
- [ ] Commit and push your changes
- [ ] Create a pull request
