var http = require('http');
const async_hooks = require('async_hooks');
const fs = require('fs')

async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    // console.log(`init ${asyncId}`)
    fs.writeSync(1, `init: ${asyncId} \n`);
  },
  before(asyncId) {
    fs.writeSync(1, `before: ${asyncId} \n`);
  },
  destroy(asyncId) {
    fs.writeSync(1, `destroy: ${asyncId} \n`);
  },
}).enable();

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000);