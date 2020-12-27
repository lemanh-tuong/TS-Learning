var http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  const case1 = assert.strictEqual(1, 1); // case1 = undefined
  const case2 = assert.strictEqual(1, 2); // Throw exception new assert.AssertionError(options)
  const case3 = assert.strictEqual([1, 2, 3], [1, 2, 3], "ERR"); // Throw Error with "ERR" message

  // try {
  //   const a = assert.strictEqual(1, 2);
  //   console.log("Equal");
  // } catch (err) {
  //   console.log("Loi", err.message);
  // }
}).listen(3000);