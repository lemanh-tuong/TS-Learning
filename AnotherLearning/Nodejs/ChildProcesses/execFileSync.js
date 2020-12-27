var http = require('http');
// On Windows Only...
const { execFileSync } = require('child_process');

const a = execFileSync('node', ['-v'], {})

console.log(a.toString())

console.log('end');