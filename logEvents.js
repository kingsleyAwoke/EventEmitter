const logEvents = require('./index.js');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };


const myEmitter = new MyEmitter();

myEmitter.on('log', msg => logEvents(msg));


setTimeout(() => {
    myEmitter.emit('log', 'log events emitted!');
}, 2000);