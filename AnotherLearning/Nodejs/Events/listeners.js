// @ts-nocheck
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('foo', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.listeners('foo')); // [FUnction, Function]