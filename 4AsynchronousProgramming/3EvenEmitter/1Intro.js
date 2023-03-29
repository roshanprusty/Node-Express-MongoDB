// https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2

// // EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS.

// // In EventEmitters, we publish and listen to the events by name

// // on(eventName, …)
// // emit(eventName, …)

// import { EventEmitter } from 'events';
// const eventEmitter = new EventEmitter();

// // listen to the event
// eventEmitter.on('myEvent', () => {
//     console.log('Data Received');
// });

// // publish an event
// eventEmitter.emit('myEvent');

//************************************************************** */
// import { EventEmitter } from 'events';
// const eventEmitter = new EventEmitter();

// eventEmitter.on('myEvent', () => {
//     console.log('Listener 1');
// });

// eventEmitter.emit('myEvent'); //We get only Listener 1 as output in the console, as the Listener 2 was registered after emitting the event.

// eventEmitter.on("myEvent", () => {
//     console.log("Listener 2");
// });
// eventEmitter.emit('myEvent'); //here we 2 Listener 1 & 2

//************************************************************** */
// Maintaining a Single Event-Emitter Instance Applicationwide
// A node application is generally 100s of files. This gets challenging to maintain by a single copy of the EventEmitter instance throughout the application.

// There is a simple strategy to create and maintain a singleton copy for an EventEmitter instance.

// When creating the EventEmitter instance, we can simply store it as an application-level setting using app.set(<key>, <value>).

import { EventEmitter } from "events";
import express from 'express';

const eventEmitter = new EventEmitter();

const app = express();
app.set('eventEmitter', eventEmitter);

// access it from any module of the application
console.log(app.get('eventEmitter'));