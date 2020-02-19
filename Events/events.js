var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create a handler
var customEventHandler = function() {
    console.log('Custom event was emitted');
}

//Assign the event to the handler
eventEmitter.on('customEvent', customEventHandler);

eventEmitter.emit('customEvent');