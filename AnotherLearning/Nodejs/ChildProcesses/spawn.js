var http = require('http');
// On Windows Only...
// child_process.spawn(command[, params][, options])

const { spawn } = require('child_process');
const bat = spawn('cmd.exe');

bat.stdout.on('data', (data) => {
  console.log(123, data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(123456, data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000);
a