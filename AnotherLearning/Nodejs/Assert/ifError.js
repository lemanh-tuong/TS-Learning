// Throws value if value is not undefined or null. This is useful when testing the error argument in callbacks. The stack trace contains all frames from the error passed to ifError() including the potential new frames for ifError() itself.

// https://nodejs.org/dist/latest-v15.x/docs/api/assert.html#assert_assert_iferror_value

var http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  try {
    const a = assert.strictEqual(1, 2);
    console.log("Equal");
  } catch (err) {
    const isError = assert.ifError(err);
    console.log("Loi", isError);
  }
}).listen(3000);