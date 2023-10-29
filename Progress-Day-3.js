const EventEmitter = require('events'); // import events module

const CustomEvent = new EventEmitter; // Creating new class of events class

// event class has 2 main properties they are on and emit

// on used to listen to event
CustomEvent.on('response', () => {
    console.log('Data Recived : SUCCESSFUL');
});

CustomEvent.on('response', (param) => {
    let objectKeyToArray = Object.keys(param);

    !param ? console.log('Data Recived : 1') : objectKeyToArray.map((i)=>{console.log(`${i} : ${param[i]}`)});
});

// emit used to display the event
CustomEvent.emit('response', { Name: 'Joyal George K J', Age: 21, Gender: 'male' });

// http extends events therefore we can use events property in http