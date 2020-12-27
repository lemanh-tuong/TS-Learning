var http = require('http');
// On Windows Only...
const { execFile } = require('child_process');

// child_process.execFile(file[, params][, options][, callback])
// command line result will be assigned stdout
execFile('node', ['-v'], (err, stdout, stderr) => {
  console.log('123', err, stdout, stderr)
})

console.log('end');