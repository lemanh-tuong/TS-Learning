var http = require('http');
const assert = require('assert').strict;

// Thay đổi message của throw AssertException => Loi asd


http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  try {
    const a = assert.fail('asd');
    console.log(a);
  } catch (err) {
    console.log("Loi", err.message);
  }
}).listen(3000);