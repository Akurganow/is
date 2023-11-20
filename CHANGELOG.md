

## [1.6.0](https://github.com/Akurganow/is/compare/v1.5.0...v1.6.0) (2023-11-20)


### Features

* **detect:** use getTag function to simplify type detection ([d66e6a6](https://github.com/Akurganow/is/commit/d66e6a6459f7c9b3c37b04174cefecbb955a1d4d))

## [1.5.0](https://github.com/Akurganow/is/compare/v1.4.0...v1.5.0) (2023-11-20)


### Features

* **is-plain-object:** Check if the object has any non-enumerable properties ([ce5ec38](https://github.com/Akurganow/is/commit/ce5ec38613afd8c10ef5b6e2a80b24d99d288215))


### Bug Fixes

* add isArrayOfSame to index.ts ([1ffc18e](https://github.com/Akurganow/is/commit/1ffc18ef99e95bf79e70fcdd3ea5721380e3c8cb))
* **detect:** export types ([aa0d0d5](https://github.com/Akurganow/is/commit/aa0d0d58d72149b448ac2e0c0516ae1f91f9a924))
* **isArrayOf:** use .some instead of .every ([b88500d](https://github.com/Akurganow/is/commit/b88500dda72e9428ac5bc22951f956d99faad95c))
* **isGeneratorFunction:** remove console.log ([45a0d72](https://github.com/Akurganow/is/commit/45a0d72a90d74f9438a10e6777eef141dbe829ff))

## [1.4.0](https://github.com/Akurganow/is/compare/v1.3.0...v1.4.0) (2023-10-10)


### Features

* Add detect ([fa84637](https://github.com/Akurganow/is/commit/fa846372f1b69ba0de6f20dd18642216ac0c110a))
* Add getTag ([9356d8b](https://github.com/Akurganow/is/commit/9356d8be4d5d9672f75261915851b84c006992b8))
* Add isArguments ([ad1c0fb](https://github.com/Akurganow/is/commit/ad1c0fb06276ecbe2791a09da6c7cc2c16d748d0))
* Add isArray ([c7b043f](https://github.com/Akurganow/is/commit/c7b043f4cfa7506908be6880fcb7672471302385))
* Add isArrayOf ([7963d71](https://github.com/Akurganow/is/commit/7963d719653ce6bfafbf5173e1988a23095ad4db))
* Add isBigInt ([ba98ab2](https://github.com/Akurganow/is/commit/ba98ab247d894c3c90ff6eae042423f75481c5cf))
* Add isBoolean ([4b350d0](https://github.com/Akurganow/is/commit/4b350d0587098ac6564f8c3100623507af23972d))
* Add isClass ([e6a55b2](https://github.com/Akurganow/is/commit/e6a55b2afa677b8d9291662ba97d7ca6939f29fd))
* Add isDataView ([d3d44b4](https://github.com/Akurganow/is/commit/d3d44b498d4fc561dd73be72a9e9240809041a88))
* Add isDate ([6dc824d](https://github.com/Akurganow/is/commit/6dc824de332baddf525111ad6713b3fc144f0a9e))
* Add isEmpty, isEmptyString, isEmptyArray, isEmptyObject, isEmptySet, isEmptyMap ([da47627](https://github.com/Akurganow/is/commit/da47627f62ccfa9fc682abf9223e59ebac68f569))
* Add isError ([3fc90cc](https://github.com/Akurganow/is/commit/3fc90ccacaf39128aa46e225e21d1d41abc5caf6))
* Add isGeneratorFunction ([381b81b](https://github.com/Akurganow/is/commit/381b81b9f5827ea2dc393629b67d7992eeb594bb))
* Add isInt8array, isUint8array, isUint8clampedarray, isInt16array, isUint16array, isInt32array, isUint32array, isFloat32array, isFloat64array, isArraybuffer ([933ca23](https://github.com/Akurganow/is/commit/933ca231b523ab78713d56c9e33c54455c9286c3))
* Add isIterable and isAsyncIterable ([93add7d](https://github.com/Akurganow/is/commit/93add7da656a8c158a3e905b29c323065d11c954))
* Add isNaN ([6561446](https://github.com/Akurganow/is/commit/656144689936ea0b1785f3837adddc4c5b2d2f56))
* Add isNull ([7f917da](https://github.com/Akurganow/is/commit/7f917da83e7709c95bab969e50750f941a6334fb))
* Add isNumber ([c3f07ac](https://github.com/Akurganow/is/commit/c3f07acd71e567cd5414ddfa987667b740800922))
* Add isObjectLike ([cee68fe](https://github.com/Akurganow/is/commit/cee68fe947ef8dabb08edd851156c3d2b79cc188))
* Add isPlainObject ([c84fc11](https://github.com/Akurganow/is/commit/c84fc118456ccf4c89fc74e8a63bb78c2f574ff4))
* Add isPrimitive ([55d376f](https://github.com/Akurganow/is/commit/55d376fe4073ba0aae0d0d17d56b926d2e3b7e56))
* Add isPromiseLike ([c8adc0f](https://github.com/Akurganow/is/commit/c8adc0f39cd2fcfff928fb579601cfd8d2f1ba35))
* Add isRegExp ([3df94b1](https://github.com/Akurganow/is/commit/3df94b1d99bc8d43f8fda2efd0857e4cb5946a68))
* Add isSet and isMap ([9c89282](https://github.com/Akurganow/is/commit/9c89282fc77a134abd493b7bf2d8d00cf442e95b))
* Add isString ([8893043](https://github.com/Akurganow/is/commit/889304365c4eea9710ab06e047d31190a8f6d6d8))
* Add isSymbol ([fde88e7](https://github.com/Akurganow/is/commit/fde88e74a54d92a7bf36b6c8db173180c4d4fed8))
* Add isUndefined ([23efafb](https://github.com/Akurganow/is/commit/23efafbb7e325f7d9a00f5a9b2cbc0eae0d58fdb))
* Add isWeakmap and isWeakset ([9ed1785](https://github.com/Akurganow/is/commit/9ed17858c1bfc3ba1ba423fb7033a21e7ad333fa))

## [1.3.0](https://github.com/Akurganow/is/compare/v1.2.0...v1.3.0) (2023-10-09)


### Features

* Add isObject ([ec2966a](https://github.com/Akurganow/is/commit/ec2966a1655a7dfee8a0ff79367954110080f7a8))

## [1.2.0](https://github.com/Akurganow/is/compare/v1.0.1...v1.2.0) (2023-10-09)


### Features

* Add isAsyncFunction ([ff7073c](https://github.com/Akurganow/is/commit/ff7073c7d6e2dfdca383cdb5d7ea0ddbff4139e6))
