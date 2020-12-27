var http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  try {
    assert.fail(new TypeError('Not Equal'))
    assert.strictEqual(1, 2);
    console.log('123')
  } catch (err) {
    const { name, message } = err;
    console.log('123', {name, message});
  }
  // Catch 2
  try {
    assert.strictEqual(1, 2);
  } catch (err) {
    const { name, message } = err;
    console.log('123', {name, message});
  }
}).listen(3000);