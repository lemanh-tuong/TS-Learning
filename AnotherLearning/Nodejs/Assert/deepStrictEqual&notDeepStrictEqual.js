var http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  const case1 = assert.deepStrictEqual(new String('foo'), Object('foo')); // OK because the object and the string are identical when unwrapped.

  const case2 = assert.deepStrictEqual(0, -0);
  // AssertionError: Expected inputs to be strictly deep-equal:
  // + actual - expected
  //
  // + 0
  // - -0

  const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap([[{}, {}]]);
const weakMap3 = new WeakMap();
// @ts-ignore
weakMap3.unequal = true;

const case3 = assert.deepStrictEqual(weakMap1, weakMap2);
// OK, because it is impossible to compare the entries

// Fails because weakMap3 has a property that weakMap1 does not contain:
const case4 = assert.deepStrictEqual(weakMap1, weakMap3);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
//   WeakMap {
// +   [items unknown]
// -   [items unknown],
// -   unequal: true
//   }
  
// try {
//   const a = assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);
//   console.log("Equal");
// } catch (err) {
//   console.log("Loi", err.message);
// }

}).listen(3000);