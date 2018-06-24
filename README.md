# var-defined

Tired of doing this?

```js
if (a && a.b && a.b.c && a.b.c.d && a.b.c.d.e) {
  // do something
}
```

## Usage
Pass a variable to either of the 3 utility functions. Optionally pass a deep test for arrays and objects. See example below.
 - defined - returns boolean for whether a variable is defined
 - truthy - returns boolean for whether a variable is truthy
 - isset - returns boolean for whether a variable is defined and not null (much like PHP isset)

```js
import { defined, truthy, isset } from 'var-defined';
/*
   or ES5:
   var defined = require('var-defined').defined;
   ...
*/

const test = {
  a: true,
  b: '',
  c: {
    d: [
      undefined,
      { e: 'hello' },
      false
    ]
  },
  f: null
};

defined(test); // true
truthy(test); // true
isset(test); // true

defined(test, '.f'); // true
truthy(test, '.f'); // false
isset(test, '.f'); // false

defined(test, '.x.y.z'); // false
truthy(test, '.x.y.z'); // false
isset(test, '.x.y.z'); // false

defined(test, '.c.d[0]'); // false
truthy(test, '.c.d[1].e'); // true
isset(test, '.c.d[2]'); // true
```

### Installation

NPM
```sh
$ npm install var-defined
```

YARN
```sh
$ yarn add var-defined
```

### License

MIT