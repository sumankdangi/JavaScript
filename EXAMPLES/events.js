import EventEmitter from "node:events"

const emitter = new EventEmitter();

// Add an event handler
emitter.on('Hello',message=>{
    console.log(`Event Handled: ${message}`)
});

// Emit the event after 3 sec delay
setTimeout(()=>{
    emitter.emit('Hello','This is a message from Event');
},300);
